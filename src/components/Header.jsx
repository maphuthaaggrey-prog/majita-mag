import logo from '../assets/icons/Majita Mag Horizontal Logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

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
                    <Link to="https://www.majitamag.co.za/">
                          <img src={logo} className="logo" alt="Logo"/>
                    </Link>
                </div>
                <nav >
                    <ul className={menuOpen ? "nav ul open" : ""}>
                        <li>
                            <button className="close-btn menu-close" onClick={toggleMenu}>
                            <svg fill="#FFFFFF" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
                                    </svg>
                            </button>
                        </li>
                        <li onClick={toggleMenu}><NavLink to="/majitamonday">Majita Monday</NavLink></li>
                        <li onClick={toggleMenu}><NavLink to="/womencrushwednesday" aria-label='Women Crush Wednesday' >Women Crush Wednesday</NavLink></li>
                        <li onClick={toggleMenu}><NavLink to="/updates">Updates</NavLink></li>
                       <li onClick={toggleMenu}><NavLink to="/about">About</NavLink></li>
                       <li onClick={handleClick} className="contactButton">Contact</li> 
                    </ul>
                </nav>
                <div>
                    <button className="menu-icon" onClick={toggleMenu}>
                    <svg fill="#d1d0d0" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                         width="25px" height="25px" viewBox="0 0 24.75 24.75" xml:space="preserve"
                              >
                            <g>
                              <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
                                c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
                                c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
                            </g>
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
