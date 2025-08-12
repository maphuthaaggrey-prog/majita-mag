import { majitas } from '../assets/data/majitas'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const WCW = () => {
    const [sortedWomen, setSortedWomen] = useState([]);
    useEffect(() => {


        const sorted = [...majitas]
        .filter(update => update.type === 'Women Crush Wednesday')
        .sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedWomen(sorted);
    }, []);

    return ( 
        <>
        <Helmet>
         <title>Women Crush Wednesday</title> 
        </Helmet>

        <div id="creative-details">
        <div className="highlighted-creatives">
            <p className="heading" style={{marginTop: '5em'}}>Women Crush Wednesday</p>
            <p className="home-text">A weekly series published every Wednesday, spotlighting women creatives who are making waves in their industries. WCW offers an empowering space for female voices to be heard, their stories honoured, and their contributions amplified.</p>
        <div className="search-bar">
            <Link to="/Search" className="search-anchor">
                <button id="search-input">Search... </button>
                <button onclick="searchCreative()"><svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.989 15.4905L19.5 19.0015" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg></button>
                    </Link>
        </div>
            
        </div>
        <div className="creative-box">  
        <div id="creatives">
            <div id="highlighted-image">
            {sortedWomen.map((crush) => (
                <Link to={`/womencrushwednesday/${crush.slug}`} key={crush.id}>
                                <img
                                    src={crush.image}
                                    loading="lazy"
                                    alt={crush.name}
                                    id="image"
                                    />
                            
                                <p className="majita-type">{crush.name}</p>
                                <p className="majita-date">
                                    {crush.date} • {crush.type}
                                </p>
                            </Link>
                ))}


            </div>
        </div>
    </div> 
    </div> 
    </>
    
);
}
 
export default WCW;