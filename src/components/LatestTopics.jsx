import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestTopics = () => {
    const [allUpdates, setAllUpdates] = useState([]);

    useEffect(() => {
        const mergeAndSortUpdates = () => {
            const combinedUpdates = [...majitas]
                .filter(update => update.type === 'Music' || update.type === 'Majita Monday' || update.type === 'Event')
                .sort((a, b) => new Date(b.date) - new Date(a.date));
            setAllUpdates(combinedUpdates);
        };

        mergeAndSortUpdates();
    }, []);

    return (
        <div className="latest-grid">
            <div className="latest-grid-head big-head">
                <p className="header">Latest Issues</p>
                <p id="line"></p>
            </div>
            {allUpdates.slice(0, 3).map((item) => (
                <Link
                    to={
                        item.type === "Majita Monday"
                            ? `/majitamonday/${item.slug}`
                            : item.type === "Music"
                            ? `/music/${item.slug}`
                            : item.type === "Event"
                            ? `/events/${item.slug}`
                            : "/"
                    }
                    key={item.id}
                    className="majita-link"
                >
                    <div className="latest-container">
                        <img
                            src={item.image}
                            loading="lazy"
                            alt={item.title}
                            className="latest-image"
                        />
                    </div>
                    <div className="latest-info">
                        <p className="majita-type">{item.type}</p>
                        <p className="majita-date">
                            {item.date} • Majita Mag
                        </p>
                        <h2 className="latest-name">{item.title}</h2>
                        <div className="latest-desc">
                            {Array.isArray(item.content) && item.content.length > 0 ? (
                                item.content.map((contentItem, index) =>
                                    typeof contentItem === 'string' ? (
                                        <p key={index}>{contentItem}</p>
                                    ) : contentItem.image ? (
                                        <img
                                            key={index}
                                            src={contentItem.image}
                                            alt={item.title}
                                            className="content-image"
                                        />
                                    ) : null
                                )
                            ) : (
                                <p>No content available</p>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LatestTopics;
