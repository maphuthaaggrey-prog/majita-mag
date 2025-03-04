import { Link } from 'react-router-dom'
const NewsComponents = () => {
    return ( 
        <div className="music-grid">
        <div className="latest-grid-head">
            <div><p className ="header">News</p></div>
            
            <p id="line"></p>
        </div>
        

            <Link to="/"className="majita-link">
                <div className="latest-container">

                    <p className="latest-desc" style={{fontSize: '14px', color: 'grey', marginTop: '2em', marginBottom: '2em'}}>No Updates yet</p>
                </div>
            </Link>

    </div>
    
);
}
 
export default NewsComponents;