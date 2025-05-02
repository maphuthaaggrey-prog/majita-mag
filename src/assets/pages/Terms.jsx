import { Helmet } from "react-helmet";
const Terms = () => {
    return (  
<>
        <Helmet>
            <title>Terms and Conditions</title> 
        </Helmet>

     
        <div className="majita-mag">
        <h5 style={{fontSize: '26px'}}>Terms and Conditions</h5>
        <p style={{fontWeight: '600'}}>Effective Date: May 2, 2025</p>
        <p>Welcome to Majita Mag. By accessing or using our website and content, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>
        <h5>1. Use of Content</h5>
        <p>Majita Mag features content—such as music recordings, videos, images, and written stories —that is created and owned by individual artists, contributors, or third parties. Majita Mag does not claim ownership of this content. If any content is published in error or without proper permission, please contact us and we will review and address the matter promptly.</p>
        <p>All rights remain with the original creators, and any reuse of the content beyond Majita Mag’s platforms should be directed to the respective owner.</p>
        <br/>
        <h5>2. Interviews and Submissions</h5>
        <p>By submitting content or agreeing to be featured (e.g. in Majita Monday or Women Crush Wednesday), the contributor grants Majita Mag non-exclusive rights to use, publish, and distribute the submitted material across our digital platforms for editorial, promotional, and archival purposes.</p>
       <br/>
        <h5>4. Third-Party Links</h5>
        <p>Our site may contain links to external websites. We are not responsible for the content or practices of those third-party sites.</p>
        <br />
        <h5>5. Changes to Terms</h5>
        <p>Majita Mag reserves the right to update or modify these Terms at any time. Continued use of the site after changes have been made constitutes your acceptance of those changes.</p>

    </div>
    </>    
    
 );
}
 
export default Terms;