import logo from '../assets/icons/Majita Mag Logo-02 1.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [contactOpen, setContactOpen] = useState(false);
    const toggleContact = () => {
        setContactOpen(!contactOpen);
    };

    const handleClick = () => {
        toggleMenu();
        toggleContact();
      };

      const [loading, setLoading] = useState(false); 
      const [sendMsg, setSendMsg] = useState(""); 
      const [errors, setErrors] = useState({});
    
      const contactScriptURL =
        "https://script.google.com/macros/s/AKfycbyHV3iuavH_973cdPGhSGFnbypzEmJcLVYKbc8fbzClOZiX4eRHQxUxD_mKtRfXLBwFtA/exec"; // Replace with your deployed web app URL
    
      const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.target);
        const firstName = formData.get("first-name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");
    
        // Validation
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = "Name is required!";
        if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
          newErrors.email = "Valid email is required!";
        if (!phone.match(/^[0-9]{10}$/))
          newErrors.phone = "A valid 10-digit phone number is required.";
        if (!message.trim()) newErrors.message = "Message is required.";
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors); 
          return; 
        }
    
        setLoading(true);
        setErrors({}); 
    
        try {
          const response = await fetch(contactScriptURL, {
            method: "POST",
            body: new URLSearchParams(formData), 
          });
    
          if (response.ok) {
            setSendMsg("Thank You For Contacting Us!"); 
            e.target.reset();
          } else {
            throw new Error("Network response was not ok.");
          }
        } catch (error) {
          console.error("Error!", error.message);
          setSendMsg("Thank You For Contacting Us!"); 
          e.target.reset();
        } finally {
          setLoading(false); 
          setTimeout(() => setSendMsg(""), 5000);
        }
      };

    return (
        <>
            <div className="navbar">
                <div>
                    <a href="https://www.majitamag.co.za/"><img src={logo} className="logo" alt="Logo" /></a>
                </div>
                <nav >
                    <ul className={menuOpen ? "nav ul open" : ""}>
                        <li>
                            <button className="close-btn menu-close" onClick={toggleMenu}>
                                <svg width="24px" height="24px" viewBox="-0.5 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g strokeWidth="0"/>
                                    <g strokeLinecap="round" strokeLinejoin="round"/>
                                    <g> 
                                        <path d="M3 21.32L21 3.32001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" /> 
                                        <path d="M3 3.32001L21 21.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" /> 
                                    </g>
                                </svg>
                            </button>
                        </li>
                        <li onClick={toggleMenu}><Link to="/majitamonday">Majita Monday</Link></li>
                        <li onClick={toggleMenu}><Link to="/womencrushwednesday" aria-label='Women Crush Wednesday' >WCW</Link></li>
                        <li onClick={toggleMenu}><Link to="/updates">Updates</Link></li>
                        <li onClick={toggleMenu}><Link to="/about">About</Link></li>
                        <li onClick={handleClick} className="contactButton">Contact</li>
                    </ul>
                </nav>
                <div>
                    <button className="menu-icon" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>



            <div  id="footer-cont" className={contactOpen ? ".footer-cont open-cont" : "footer-cont"}>
                    <form className="footer"
                        onSubmit={handleSubmit}
                        action={contactScriptURL}
                        name="message-to-google-sheet"
                        method="POST">
                    <p className="send-message">Get in touch with us</p>
                    <fieldset>
              <label htmlFor="first-name">
                Enter Your Name:
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Enter name"
                />
                {errors.firstName && (
                  <p className="error-message">{errors.firstName}</p>
                )}
              </label>

              <label htmlFor="email">
                Enter Your Email:
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </label>


              <label htmlFor="phone">
                Enter Phone Number:
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0765216787"
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </label>

     
              <label htmlFor="message">
                Message:
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="10"
                  placeholder="Your Enquiry"
                />
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </label>
            </fieldset>

        
            <input
              type="submit"
              value={loading ? "Submitting..." : "Submit"}
              name="send-message"
              className="submit-btn"
              disabled={loading}
            />
             {sendMsg && <p className="send-msg">{sendMsg}</p>}        
                    <p style={{color: 'rgb(24, 117, 24)', marginTop: '10px', fontWeight: '600'}}id="sendmsg"></p>
                    <h5 className="cancelBtn" onClick={toggleContact}>Cancel</h5>        
                    </form> 
                     
            </div>
        </>
    );
};

export default Header;
