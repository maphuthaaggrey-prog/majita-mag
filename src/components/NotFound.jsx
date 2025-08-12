import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
        <div id="creative-details" style={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
            <h1 style={{fontSize: '87px'}}>404</h1>
            <h1 style={{fontSize: '30px'}}>Page Not Found</h1>
            <p style={{fontSize: '15px', marginBottom: '2em'}}>The page you're looking for doesn't exist.</p>
            <Link to="https://www.majitamag.co.za/"style={{fontWeight: '700', color: 'black', textDecoration: 'none', backgroundColor: 'white', padding: '1em 2em', borderRadius: '100px'}}>Go back to the homepage</Link>
            </div>
      </div>
      
</>

     );
}
 
export default NotFound;