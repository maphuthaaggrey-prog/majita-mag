import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [sortedMajitas, setSortedMajitas] = useState([]);

    useEffect(() => {
        const sorted = [...majitas]
            .filter(update => update.type === 'Majita Monday' || update.type === 'Women Crush Wednesday')
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedMajitas(sorted);
    }, []);

    return (
        <div className="hero-section">
            <div className="majitas-grid">
                {sortedMajitas.length === 0 ? (
                    <div style={{textAlign: 'center', margin: '15em auto'}}>
                    <img src="https://i.imgur.com/llF5iyg.gif" alt="Loading" style={{width: '30px', height: '30px'}} />
                    </div>
                ) : (
                    sortedMajitas.slice(0, 1).map((majita) => (
                        <Link
                        to={
                            majita.type === "Majita Monday"
                                ? `/majitamonday/${majita.slug}`
                                : majita.type === "Women Crush Wednesday"
                                ? `/womencrushwednesday/${majita.slug}`
                                : "/"
                        } className="majita-link">
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
                                                        style={{ borderRadius: '2px', height: 'auto', marginTop: '20px' }}
                                                    />
                                                );
                                            }
                                            return null; // Handles unexpected content types
                                        })
                                    ) : (
                                        <p>{majita.content || "No content available"}</p>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Hero;
