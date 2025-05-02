import { Helmet } from "react-helmet";
const Policies = () => {
    return (  
<>
        <Helmet>
            <title>Privacy & Community Policies</title> 
        </Helmet>

     
        <div className="majita-mag">
        <h5 style={{fontSize: '26px'}}>Privacy & Community Policies</h5>
        <p style={{fontWeight: '600'}}>Effective Date: May 2, 2025</p>
        <p>At Majita Mag, we value transparency, inclusivity, and respect. These policies explain how we protect your information and ensure a safe and welcoming space for all.</p>
        <h5>1. Privacy Policy</h5>
        <p>We collect the following data:</p>
            <ul>
                <li>Subscription: Email addresses from users who subscribe to our updates.</li>
                <li>Contact Form: Name, email, phone number, and message from users who contact us.</li>
            </ul>
    
        <p>We use collected data for:</p>
            <ul>
                <li>Sending updates: To send newsletters, promotions, or important notifications.</li>
                <li>Responding to inquiries: To respond to user messages and provide support.</li>
            </ul>
        
        <br/>
        <h5>2. Data Security</h5>
        <p>We take steps to protect your information, but please remember that no online platform is completely secure. By using our site, you accept that some risk is inherent in data sharing over the internet.</p>
       <br/>
        <h5>3. Community Guidelines</h5>
        <p>Majita Mag is built on creativity, storytelling, and respect. By using our platform, you agree to respect the voices and stories shared and use the Contact form responsibly and not for spam.</p>
        <br />
        <h5>4. Contact</h5>
        <p>If you have any questions about this policy or want to make a privacy-related request, please reach out to us via the Contact page or email us at
        <a href="mailto:majitamag@gmail.com" target="_blank">majitamag@gmail.com</a></p>
    </div>
    </>    
    
 );
}
 
export default Policies;