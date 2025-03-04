import logo from '../assets/icons/Majita Mag Logo-02 1.svg';
import facebook from '../assets/icons/Facebook_white.svg';
import instagram from '../assets/icons/Instagram_white.svg';
import { useState } from 'react';

const Footer = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxqaNpKRORm4Tk7CRHZmfmCaTvFrWhxKw9_uXnBCrCtusFhY0M074a0CmirZ8B_ROk5/exec';

    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(e.target) 
        })
        .then(response => {
            setLoading(false);
            if (response.ok) {
                setMsg('Thank You For Subscribing!');
            } else {
                setMsg('Something went wrong. Please try again!');
            }
            setTimeout(() => setMsg(''), 5000);
            setEmail(''); 
        })
        .catch(error => {
            console.error('Error!', error.message);
            setLoading(false);
            setMsg('Thank You For Subscribing!');
            setTimeout(() => setMsg(''), 5000);
            setEmail('');
        });
    };

    return (
        <>
            <footer>
                <div className="footer-div">
                    <div className="footer-left">
                        <img src={logo} className="footerlogo" alt="Majita Mag Logo" />
                    </div>
                    <div className="vertic-line"></div>
                    <div className="footer-right">
                        <form className="footer" name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <label htmlFor="email">Get latest news and updates</label>
                            <input 
                                type="email" 
                                name="Emails" 
                                placeholder="Enter your email" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="submit" style={{cursor: 'pointer'}} disabled={loading} />
                            <p style={{color: 'rgb(24, 117, 24)', marginTop: '10px', fontWeight: '600'}}>{msg}</p>

                            {loading && (
                                <div style={{textAlign: 'center', marginTop: '-1em', marginBottom: '-2em'}}>
                                    <img src="https://i.imgur.com/llF5iyg.gif" alt="Loading" style={{width: '25px', height: '25px'}} />
                                </div>
                            )}

                        <p className='connect' style={{position: 'static',fontWeight: '600', fontSize: '15px', marginTop: '2em', color:'grey'}}>FOLLOW US</p>
                        <div className="footer-icons" >
                           <a href="https://www.facebook.com/profile.php?id=61572469034879" target='_blank' rel="noopener noreferrer" ><img src={facebook} alt="Facebook" style={{opacity: '18%'}} /></a>
                           <a href="https://www.instagram.com/majitamag/"target='_blank' rel="noopener noreferrer"  ><img src={instagram} alt="Instagram" style={{opacity: '18%'}}  /></a>
                        </div>

                        </form>  


                    </div>
                </div>
            </footer>
                         <div className="footer-bottom" style={{backgroundColor: '#050505', paddingTop: '4em' , paddingBottom:'10px', textAlign: 'center'}}>
                            <p style={{color: 'grey',textAlign: 'center'}}>&copy; 2025 Majita Mag. All rights reserved.</p>
                        </div>
        </>
    );
};

export default Footer;
