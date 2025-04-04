import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Updates = () => {
    const [allUpdates, setAllUpdates] = useState([]);
    const [filterType, setFilterType] = useState('all');

    useEffect(() => {
        const mergedUpdates = [...majitas]
            .filter(update => update.type !== 'Majita Monday' && update.type !== 'Women Crush Wednesday')
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setAllUpdates(mergedUpdates);
    }, []);

    const getFilteredUpdates = () => {
        if (filterType === 'all') return allUpdates;
        return allUpdates.filter(update => update.type.toLowerCase() === filterType);
    };

    const filteredUpdates = getFilteredUpdates();

    return (
        <>
        <Helmet>
            <title>Updates</title> 
        </Helmet>

        <div className="wrap">
            <div className="music-grid">
                <div className="latest-grid-head" style={{ marginTop: '3em' }}>
                    <div><p className="header">Updates</p></div>
                    <p id="line"></p>
                </div>
                <div className="filter-buttons">
                        <button
                            onClick={() => setFilterType('all')}
                            style={{ fontWeight: filterType === 'all' ? 'bold' : 'normal' }}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilterType('music')}
                            style={{ fontWeight: filterType === 'music' ? 'bold' : 'normal' }}
                        >
                            Music
                        </button>
                        <button
                            onClick={() => setFilterType('event')}
                            style={{ fontWeight: filterType === 'event' ? 'bold' : 'normal' }}
                        >
                            Events
                        </button>
                        </div>


                <div className="music-grid-items">
                    {filteredUpdates.map((music) => (
                        <Link
                            to={
                                music.type === "Music"
                                    ? `/music/${music.slug}`
                                    : music.type === "Event"
                                    ? `/events/${music.slug}`
                                    : "/"
                            }
                            key={music.id}
                            className="majita-link"
                            aria-label={`Read more about ${music.title}`}
                        >
                            <img
                                src={music.image}
                                loading="lazy"
                                alt={music.title}
                                className="latest-image"
                            />
                            <div className="music-info">
                                <p className="majita-type">{music.type}</p>
                                <p className="majita-date">{music.date} • {music.author}</p>
                                <p className="latest-name">{music.title}</p>
                                <p className="content">
                                    {Array.isArray(music.content)
                                        ? music.content[0]
                                        : music.content
                                    }...
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Updates;
