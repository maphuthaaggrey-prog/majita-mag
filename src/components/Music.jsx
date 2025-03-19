import { useParams } from 'react-router-dom';
import { majitas } from '../assets/data/majitas';
import LatestMusic from '../components/LatestMusic';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Share from '../components/Share';
import facebook from '../assets/icons/Facebook_white.svg';
import instagram from '../assets/icons/Instagram_white.svg';

const Music = () => {
    const { slug } = useParams();
    const update = majitas.find((update) => update.slug === slug);

    if (!update) {
        return <div>Update not found</div>;
    }

    const description = Array.isArray(update.content) ? update.content.join(' ') : update.content;
    const truncatedDescription = description.length > 160 ? `${description.substring(0, 160)}...` : description;
    const fullImageUrl = update.image.startsWith('http') ? update.image : `https://www.majitamag.co.za/assets/updates${update.image}`;

    return (
        <>
            <Helmet>
                <title>{update.title} | Majita Mag</title>
                <meta name="description" content={truncatedDescription} />
                <meta property="og:title" content={update.title} />
                <meta property="og:type" content={update.type} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={fullImageUrl} />
                <meta property="og:description" content={truncatedDescription} />
            </Helmet>
            <div className="hero-section">
                <div className="majitas-grid">
                    <div className="updates-container">
                        <img className="updates-image" src={update.image} alt={update.title} />
                    </div>
                    <div className="desktop-display">
                        <div className="majita-info">
                            <p className="updates-date">{update.date} • Majita Mag</p>
                            <p className="updates-name">{update.title}</p>
                            <h1 className="majita-type">{update.type}</h1>
                            <div id="updates-content">
                                {Array.isArray(update.content) ? (
                                    update.content.map((contentItem, index) => (
                                        typeof contentItem === "string" ? (
                                            // Check if the content is a Spotify link and embed it
                                            contentItem.startsWith("https://open.spotify.com") ? (
                                                <iframe
                                                    style={{ marginTop: "2em" }}
                                                    key={index}
                                                    src={contentItem.replace('/album/', '/embed/album/')}
                                                    frameBorder="0"
                                                    allow="encrypted-media"
                                                    allowTransparency="true"
                                                    title={`Spotify embed ${index}`}
                                                ></iframe>
                                            ) : contentItem.startsWith("https://www.youtube.com") || contentItem.startsWith("https://youtu.be") ? (
                                                // Check if the content is a YouTube link and embed it
                                                <iframe
                                                    style={{ marginTop: "2em" }}
                                                    key={index}
                                                    className='youtubeiframe'
                                                    src={`https://www.youtube.com/embed/${contentItem.split('v=')[1]?.split('&')[0] || contentItem.split('youtu.be/')[1]}`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title={`YouTube embed ${index}`}
                                                ></iframe>
                                            ) : (
                                                <p id="updates-content" key={index}>{contentItem}</p>
                                            )
                                        ) : contentItem.image ? (
                                            <img
                                                className='media'
                                                key={index}
                                                src={contentItem.image}
                                                alt="visual"
                                                style={{ borderRadius: '2px', height: 'auto', marginTop: '20px' }}
                                            />
                                        ) : null
                                    ))
                                ) : (
                                    <p id="updates-content">{update.content}</p>
                                )}
                            </div>
                            <p id="updates-content">Stay up-to-date with the latest music news, updates, and behind-the-scene insights by following us on social media:</p>
                            <div className="footer-icons" style={{ display: 'unset' }}>
                                <a href="https://www.facebook.com/profile.php?id=61572469034879" target='_blank' rel="noopener noreferrer">
                                    <img src={facebook} alt="Facebook" style={{ opacity: '20%', marginRight: '1em' }} />
                                </a>
                                <a href="https://www.instagram.com/majitamag/" target='_blank' rel="noopener noreferrer">
                                    <img src={instagram} alt="Instagram" style={{ opacity: '20%' }} />
                                </a>
                            </div>
                            <Share />
                        </div>

                        <div>
                            <LatestMusic />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;
