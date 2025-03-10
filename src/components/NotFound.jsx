import { Link } from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div id="creative-details" style={{ marginTop: '2em' }}>
            <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/">Go back to the homepage</Link>
            </div>
      </div>


     );
}
 
export default NotFound;