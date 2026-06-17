import { useParams, Link } from 'react-router-dom';
import { majitas } from '../assets/data/majitas';
import LatestEvents from '../components/LatestEvents';
import React, { useState } from 'react';
import Share from '../components/Share';
import facebook from '../assets/icons/Facebook_white.svg';
import instagram from '../assets/icons/Instagram_white.svg';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.majitamag.co.za';

const Events = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (image) => setSelectedImage(image);
    const handleClose = () => setSelectedImage(null);

    const { slug } = useParams();
    const update = majitas.find((item) => item.slug === slug);

    if (!update) return <div>Update not found</div>;

    const description = Array.isArray(update.content) ? update.content.map(c => typeof c === 'string' ? c : '').join(' ') : update.content;
    const truncatedDescription = description.length > 160 ? `${description.substring(0, 160)}...` : description;

    const fullImageUrl = update.image.startsWith('http')
        ? update.image
        : `${SITE_URL}/assets/updates/${update.image.replace(/^\//, '')}`;

    const canonicalUrl = typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}`
        : `${SITE_URL}/${update.slug}`;

    const imageContents = update.content.filter(item => typeof item === 'object' && item.image);
    const previewImages = imageContents.slice(0, 3);

    return (
        <>
            <Helmet>
                <title>{update.title} | Majita Mag</title>
                <meta name="description" content={truncatedDescription} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={canonicalUrl} />

                <meta property="og:title" content={`${update.title} | Majita Mag`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={fullImageUrl} />
                <meta property="og:image:alt" content={update.title} />
                <meta property="og:description" content={truncatedDescription} />
                <meta property="og:site_name" content="Majita Mag" />
                <meta property="og:locale" content="en_ZA" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={update.title} />
                <meta name="twitter:description" content={truncatedDescription} />
                <meta name="twitter:image" content={fullImageUrl} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": update.title,
                        "image": [fullImageUrl],
                        "datePublished": update.date,
                        "author": { "@type": "Organization", "name": "Majita Mag" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Majita Mag",
                            "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo (1).png` }
                        },
                        "mainEntityOfPage": canonicalUrl
                    })}
                </script>
            </Helmet>

            <div className="hero-section">
                <div className="majitas-grid">
                    <div className="updates-container">
                        <img className="updates-image" src={update.image} alt={update.title} />
                    </div>
                    <div className="desktop-display">
                        <div className="majita-info events-info">
                            <p className="updates-date">{update.date} • Majita Mag</p>
                            <h1 className="updates-name">{update.title}</h1>
                            <p className="majita-type">{update.type}</p>
                            <div id="updates-content">
                                {Array.isArray(update.content) && update.content.map((contentItem, index) => {
                                    if (typeof contentItem === 'string') {
                                        if (contentItem.startsWith("https://open.spotify.com")) {
                                            return (
                                                <iframe
                                                    key={index}
                                                    src={contentItem.replace('/album/', '/embed/album/')}
                                                    frameBorder="0"
                                                    allow="encrypted-media"
                                                    allowTransparency="true"
                                                    title={`Spotify embed ${index}`}
                                                    style={{ marginTop: "2em" }}
                                                ></iframe>
                                            );
                                        } else if (contentItem.startsWith("http")) {
                                            return (
                                                <p id="updates-content" key={index}>
                                                    <a href={contentItem} target="_blank" rel="noopener noreferrer">{contentItem}</a>
                                                </p>
                                            );
                                        } else {
                                            return <p id="updates-content" key={index}>{contentItem}</p>;
                                        }
                                    } else if (contentItem.image && previewImages.includes(contentItem)) {
                                        return (
                                            <img
                                                key={index}
                                                className="media"
                                                src={contentItem.image}
                                                alt={`${update.title} - photo ${index + 1}`}
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
                                    <button className="see-more-button">Selected Highlights</button>
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