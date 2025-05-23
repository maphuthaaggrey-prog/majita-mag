import { majitas } from '../assets/data/majitas';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams

const LatestEvents = () => {
    const [allUpdates, setAllUpdates] = useState([]);
    const { slug } = useParams(); // Get the active slug from the URL

    useEffect(() => {
        const mergeAndSortUpdates = () => {

            const combinedUpdates = [...majitas]
                .filter(update => update.type !== 'Majita Monday' && update.type !== 'Music' && update.type !== "Women Crush Wednesday")
                .sort((a, b) => new Date(b.date) - new Date(a.date)); 
    
            setAllUpdates(combinedUpdates);
        };
    
        mergeAndSortUpdates();
    }, []);
    

    // Filter out the active item (based on the slug from useParams)
    const filteredMusic = allUpdates.filter((item) => item.slug !== slug);

    return (
        <div>
            <p className="header big-latest" style={{ marginTop: '2em', fontSize: '20px', marginBottom: "1em" }}>
                Latest on Events
            </p>
            {filteredMusic.map((item) => (
                <Link
                    key={item.id} // Add a unique key
                    to={`/events/${item.slug}`
                    }
                    aria-label={`Read more about ${item.title}`} // Improve accessibility
                >
                    <div className="latest-topic" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="latest-on">
                            <img
                                src={item.image}
                                loading="lazy"
                                alt={item.title}
                                className="latest-image"
                            />
                        </div>
                        <div className="latest-info">
                            <p style={{ marginTop: '-5px' }} className="majita-type">{item.type}</p>
                            <p className="majita-date">
                                {item.date} • Majita Mag
                            </p>
                            <h2 className="latest-title">{item.title}</h2>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LatestEvents;