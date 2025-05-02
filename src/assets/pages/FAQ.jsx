import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
const FAQ = () => {
    return (  
<>
        <Helmet>
            <title>Frequently Asked Questions</title> 
        </Helmet>

     
        <div className="majita-mag">
        <h5 style={{fontSize: '26px'}}>Frequently Asked Questions (FAQ)</h5>
        <p>Welcome to the Majita Mag FAQ! Below are answers to some common questions about who we are, what we do, and how you can be involved.</p>
        <h5>How can I get featured?</h5>
        <p>If you're a creative with a story to share—or know someone who deserves to be featured—reach out to us via our Contact page or email us directly at
        <a href="mailto:majitamag@gmail.com">majitamag@gmail.com</a>. We'd love to hear from you!</p>
        <br/>
        <h5>How do I subscribe to updates?</h5>
        <p>You can subscribe by entering your email in the subscription section on our homepage. We’ll keep you in the loop with the latest features, events, and community updates—no spam, we promise.</p>
       <br/>
        <h5>Do you own the content shared on Majita Mag?</h5>
        <p>No—we don’t claim ownership of the content we feature. All rights remain with the original creators. We only publish material with permission and use it solely to uplift and share their stories with our audience.</p>
        <br />
        <h5>What happens to the info I share with you?</h5>
        <p>We take your privacy seriously. Whether you’re subscribing or contacting us, your information is safe with us and will never be sold or shared. For more, check our <Link to="/privacy-and-community-policies">Privacy & Community Policies.</Link></p>
        <br />
        <h5>Can I collaborate with Majita Mag?</h5>
        <p>Absolutely. We’re always open to meaningful collaborations—whether you're a writer, creative, brand, or mental health advocate. Just send us a message via the Contact page or email
        <a href="mailto:majitamag@gmail.com">majitamag@gmail.com</a>.</p>
    
    
    </div>
    </>    
    
 );
}
 
export default FAQ;