import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventsComponent = () => {
    const [sortedEventUpdates, setSortedEventUpdates] = useState([]);

    useEffect(() => {
        const sortedEvent = majitas
            .filter(update => update.type === 'Event')
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedEventUpdates(sortedEvent);
    }, []);

    return (
        <div className="music-grid">
            <div className="latest-grid-head">
                <div><p className="header">Events</p></div>
                <p id="line"></p>
            </div>
            <div className="music-grid-items">
                {sortedEventUpdates.map((event) => (
                    <Link to={`/events/${event.slug}`} key={event.id} className="majita-link">
                        <img
                            src={event.image}
                            loading="lazy"
                            alt={event.title || "Event image"}
                            className="latest-image"
                        />
                        <div className="music-info">
                            <p className="majita-type">{event.type}</p>
                            <p className="majita-date">{event.date} • {event.author}</p>
                            <p className="latest-name">{event.title}</p>
                            <div className="content">
                            {Array.isArray(event.content)
                                        ? event.content[0] // Display the first paragraph
                                        : event.content // Fallback if content is a string
                                    }...
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventsComponent;
