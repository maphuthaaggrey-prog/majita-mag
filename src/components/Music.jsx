import { useParams } from 'react-router-dom';
import { majitas } from '../assets/data/majitas';
import LatestMusic from '../components/LatestMusic';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Share from '../components/Share';

const Music = () => {
    const { slug } = useParams();
    const update = majitas.find((update) => update.slug === slug);

    if (!update) {
        return <div>Update not found</div>;
    }

    return (
        <>

        <Helmet>
            <title>{update.title} | Majita Mag</title>
            <meta property="og:title" content={update.title} />
            <meta property="og:type" content={update.type} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={update.image} />
            <meta property="og:description" content={update.content} />
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
                                                <iframe style={{ marginTop: "2em" }}
                                                    key={index}
                                                    src={contentItem.replace('/album/', '/embed/album/')}
                                                    frameBorder="0"
                                                    allow="encrypted-media"
                                                    allowTransparency="true"
                                                    title={`Spotify embed ${index}`}
                                                ></iframe>
                                            ) : (
                                                <p id="updates-content" key={index}>{contentItem}</p>
                                            )
                                        ) : contentItem.image ? (
                                          
                                                <img className='media'
                                                    key={index}
                                                    src={contentItem.image}
                                                    alt="visual"
                                                    style={{borderRadius: '2px', height: 'auto', marginTop: '20px' }}
                                                />
                                        
                                        ) : null
                                    ))
                                ) : (
                                    <p id="updates-content">{update.content}</p>
                                )}
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
