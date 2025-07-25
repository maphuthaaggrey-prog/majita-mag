import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [sortedMajitas, setSortedMajitas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const sorted = [...majitas]
          .filter(update => update.type === 'Majita Monday' || update.type === 'Women Crush Wednesday')
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedMajitas(sorted);
        setIsLoading(false); 
      }, []);
      

    useEffect(() => {
        if (sortedMajitas.length > 0) {
            const img = new Image();
            img.src = sortedMajitas[0].image;
            img.onload = () => setIsLoading(false);
            img.onerror = () => setIsLoading(false); 
        }
    }, [sortedMajitas]); 

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center', margin: '24em auto' }}>
                <img src="https://i.imgur.com/llF5iyg.gif" alt="Loading" style={{ width: '33px', height: '33px' }} />
            </div>
        );
    }

    return (
        <div className="hero-section">
            <div className="majitas-grid">
                {sortedMajitas.slice(0, 1).map((majita) => (
                    <Link
                        key={majita.slug}
                        to={
                            majita.type === "Majita Monday"
                                ? `/majitamonday/${majita.slug}`
                                : majita.type === "Women Crush Wednesday"
                                ? `/womencrushwednesday/${majita.slug}`
                                : "/"
                        }
                        className="majita-link"
                    >
                        <div className="image-container">
                            <img
                                src={majita.image}
                                loading="lazy"
                                alt={majita.name || "Majita Monday image"}
                                className="majita-image"
                            />
                        </div>
                        <div className="majita-info">
                            <p className="majita-date">{majita.date} • Majita Mag</p>
                            <p className="majita-name">{majita.name || "Majita"}</p>
                            <div className="desc">
                                {Array.isArray(majita.content) ? (
                                    majita.content.map((contentItem, index) => {
                                        if (typeof contentItem === 'string') {
                                            return <p key={index}>{contentItem}</p>;
                                        } else if (contentItem.image) {
                                            return (
                                                <img
                                                    key={index}
                                                    src={contentItem.image}
                                                    alt="Visual content"
                                                    className="content-image"
                                                    loading="lazy"
                                                     decoding="async"
                                                    style={{ borderRadius: '2px', height: 'auto', marginTop: '20px' }}
                                                />
                                            );
                                        }
                                        return null;
                                    })
                                ) : (
                                    <p aria-label={majita.content || "No content available"}>
                                        {majita.content || "No content available"}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hero;
