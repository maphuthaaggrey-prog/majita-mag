import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MusicNews = () => {
    const [sortedMusicUpdates, setSortedMusicUpdates] = useState([]);

    useEffect(() => {
        const sortedMusic = majitas
            .filter(update => update.type === 'Music')
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedMusicUpdates(sortedMusic);
    }, []);

    return (
        <div className="music-grid">
            <div className="latest-grid-head">
                <div><p className="header">Music</p></div>
                <p id="line"></p>
            </div>
            <div className="music-grid-items">
                {sortedMusicUpdates.length === 0 ? (
                    <p style={{display: 'none'}}>No music updates found.</p>
                ) : (
                    sortedMusicUpdates.map((music) => (
                        <Link to={`/music/${music.slug}`} key={music.id} className="majita-link">
                            <img
                                src={music.image}
                                loading="lazy"
                                alt={music.title || 'Music image'}
                                className="music-image"
                            />
                            <div className="music-info">
                                <p className="majita-type">{music.type || 'Music'}</p>
                                <p className="majita-date">{music.date} • {music.author || 'Unknown Author'}</p>
                                <p className="latest-name">{music.title || 'Untitled'}</p>
                                <div className="content">
                                {Array.isArray(music.content)
                                        ? music.content[0] // Display the first paragraph
                                        : music.content // Fallback if content is a string
                                    }...
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default MusicNews;
