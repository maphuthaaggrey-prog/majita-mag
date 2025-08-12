import { majitas } from '../assets/data/majitas'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const MajitaMonday = () => {
    const [sortedMajitas, setSortedMajitas] = useState([]);
    useEffect(() => {


        const sorted = [...majitas]
        .filter(update => update.type === 'Majita Monday')
        .sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedMajitas(sorted);
    }, []);

    return ( 
        <>
        <Helmet>
         <title>Majita Monday</title> 
        </Helmet>

        <div id="creative-details">
        <div className="highlighted-creatives">
            <p className="heading" style={{marginTop: '5em'}}>Majita Monday</p>
            <p className="home-text">Every Monday, we feature male creatives across fashion, music, art, and more, sharing their stories, struggles, wins, and mental wellness journeys. It’s about giving Majita their flowers while they can still smell them.</p>
            
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
            {sortedMajitas.map((majita) => (
                <Link to={`/majitamonday/${majita.slug}`} key={majita.id}>
                                <img
                                    src={majita.image}
                                    loading="lazy"
                                    alt={majita.name}
                                    id="image"
                                    />
                            
                                <p className="majita-type">{majita.name}</p>
                                <p className="majita-date">
                                    {majita.date} • {majita.type}
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
 
export default MajitaMonday;