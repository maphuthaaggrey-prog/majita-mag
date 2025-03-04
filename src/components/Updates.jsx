import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Updates = () => {
    const [allUpdates, setAllUpdates] = useState([]);

    useEffect(() => {
        const mergedUpdates = [...majitas]
            .filter(update => update.type !== 'Majita Monday') // Filter out "Majita Monday"
            .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
        setAllUpdates(mergedUpdates);
    }, []);

    return (
        <div className="wrap">
            <div className="music-grid">
                <div className="latest-grid-head" style={{ marginTop: '6em' }}>
                    <div><p className="header">Updates</p></div>
                    <p id="line"></p>
                </div>
                <div className="music-grid-items">
                    {allUpdates.map((music) => (
                        <Link
                            to={
                                music.type === "Music"
                                    ? `/music/${music.slug}`
                                    : music.type === "Event"
                                    ? `/events/${music.slug}`
                                    : "/" // Fallback path
                            }
                            key={music.id} // Add a unique key
                            className="majita-link"
                            aria-label={`Read more about ${music.title}`} // Improve accessibility
                        >
                            <img
                                src={music.image}
                                loading="lazy"
                                alt={music.title} // Use title for alt text
                                className="latest-image"
                            />
                            <div className="music-info">
                                <p className="majita-type">{music.type}</p>
                                <p className="majita-date">{music.date} • {music.author}</p>
                                <p className="latest-name">{music.title}</p>
                                <p className="content">
                                    {Array.isArray(music.content)
                                        ? music.content[0] // Display the first paragraph
                                        : music.content // Fallback if content is a string
                                    }...
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Updates;