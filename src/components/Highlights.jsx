import { useParams, useNavigate } from 'react-router-dom';
import { majitas } from '../assets/data/majitas';
import React from 'react';
import Share from '../components/Share';
import { Helmet } from 'react-helmet-async';

const Highlights = () => {
  const { slug, index } = useParams();
  const navigate = useNavigate();

  const update = majitas.find((update) => update.slug === slug);
  const selectedImageIndex = index !== undefined ? parseInt(index) : null;

  if (!update) {
    return <div>Update not found</div>;
  }

  const imageItems = update.content.filter(item => typeof item === 'object' && item.image);

  const handleImageClick = (index) => {
    navigate(`/highlights/${slug}/image/${index}`);
  };

  const handleClose = () => {
    navigate(`/highlights/${slug}`);
  };

  const handlePrev = () => {
    const prevIndex = selectedImageIndex === 0 ? imageItems.length - 1 : selectedImageIndex - 1;
    navigate(`/highlights/${slug}/image/${prevIndex}`);
  };

  const handleNext = () => {
    const nextIndex = selectedImageIndex === imageItems.length - 1 ? 0 : selectedImageIndex + 1;
    navigate(`/highlights/${slug}/image/${nextIndex}`);
  };

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
        <div className="highlights-grid">
          <p className="header" style={{ marginBottom: '10px', width: '90%' }}>{update.title}</p>
          <div id="highlights-content">
            {imageItems.map((item, idx) => (
              <img
                className='highlight-picture'
                key={idx}
                src={item.image}
                alt={`highlight-${idx}`}
                onClick={() => handleImageClick(idx)}
              />
            ))}
          </div>
          <div>
            <Share />
          </div>
        </div>

        {selectedImageIndex !== null && !isNaN(selectedImageIndex) && (
          <div className="modal" onClick={handleClose}>
            <span className="arrow left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>&#10094;</span>

            <img
              src={imageItems[selectedImageIndex].image}
              alt="Full Size Poster"
              className="modal-image"
            />

            <a
              href={imageItems[selectedImageIndex].image}
              download
              className="download-button"
              onClick={(e) => e.stopPropagation()}
            >
              <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.293,13.707a1,1,0,1,1,1.414-1.414L11,14.586V3a1,1,0,0,1,2,0V14.586l2.293-2.293a1,1,0,0,1,1.414,1.414l-4,4a1,1,0,0,1-.325.216.986.986,0,0,1-.764,0,1,1,0,0,1-.325-.216ZM22,12a1,1,0,0,0-1,1v7H3V13a1,1,0,0,0-2,0v8a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V13A1,1,0,0,0,22,12Z" />
              </svg>
            </a>

            <span className="arrow right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>&#10095;</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Highlights;
