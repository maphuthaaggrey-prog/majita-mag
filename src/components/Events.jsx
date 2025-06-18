import { useParams, Link } from 'react-router-dom';
import { majitas } from '../assets/data/majitas';
import LatestEvents from '../components/LatestEvents';
import React, { useState } from 'react';
import Share from '../components/Share';
import facebook from '../assets/icons/Facebook_white.svg';
import instagram from '../assets/icons/Instagram_white.svg';
import { Helmet } from 'react-helmet-async';

const Events = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (image) => setSelectedImage(image);
    const handleClose = () => setSelectedImage(null);

    const { slug } = useParams();
    const update = majitas.find((item) => item.slug === slug);

    if (!update) return <div>Update not found</div>;

    const description = Array.isArray(update.content) ? update.content.map(c => typeof c === 'string' ? c : '').join(' ') : update.content;
    const truncatedDescription = description.length > 160 ? `${description.substring(0, 160)}...` : description;
    const fullImageUrl = update.image.startsWith('http') ? update.image : `https://www.majitamag.co.za/assets/updates${update.image}`;

    // Extract first 5 images only
    const imageContents = update.content.filter(item => typeof item === 'object' && item.image);
    const previewImages = imageContents.slice(0, 3);

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
                        <div className="majita-info events-info">
                            <p className="updates-date">{update.date} • Majita Mag</p>
                            <p className="updates-name">{update.title}</p>
                            <h1 className="majita-type">{update.type}</h1>
                            <div id="updates-content">
                                {Array.isArray(update.content) && update.content.map((contentItem, index) => {
                                    if (typeof contentItem === 'string') {
                                        return contentItem.startsWith("https://open.spotify.com") ? (
                                            <iframe
                                                key={index}
                                                src={contentItem.replace('/album/', '/embed/album/')}
                                                frameBorder="0"
                                                allow="encrypted-media"
                                                allowTransparency="true"
                                                title={`Spotify embed ${index}`}
                                                style={{ marginTop: "2em" }}
                                            ></iframe>
                                        ) : (
                                            <p id="updates-content" key={index}>{contentItem}</p>
                                        );
                                    } else if (contentItem.image && previewImages.includes(contentItem)) {
                                        return (
                                            <img
                                                key={index}
                                                className="media"
                                                src={contentItem.image}
                                                alt="event"
                                                onClick={() => handleImageClick(contentItem.image)}
                                                style={{ borderRadius: '2px', height: 'auto' }}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </div>

                            {imageContents.length > 3 && (
                                <Link to={`/highlights/${update.slug}`}>
                                    <button className="see-more-button">View Highlights</button>
                                </Link>
                                )}

                            <p id="updates-content">Stay up-to-date with the latest event news by following us on social media:</p>
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
                        <LatestEvents />
                    </div>
                </div>

                {selectedImage && (
                    <div className="modal" onClick={handleClose}>
                        <img src={selectedImage} alt="Full Size" className="modal-image" />
                    </div>
                )}
            </div>
        </>
    );
};

export default Events;
