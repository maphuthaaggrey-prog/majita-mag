import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CopyIcon from '../assets/icons/icons8-copy-60.png'
import facebook from '../assets/icons/icons8-facebook-60.png';
import whatsapp from '../assets/icons/icons8-whatsapp-60.png';

const Share = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const location = useLocation();
  const currentURL = window.location.origin + location.pathname;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentURL)
      .then(() => {
        setCopySuccess('Link copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 3000);
      })
      .catch(err => {
        console.error('Failed to copy the link:', err); 
        setCopySuccess('Failed to copy the link.');
      });
  };

  const shareOnFacebook = () => {
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
    window.open(facebookURL, '_blank');
  };

  const shareOnWhatsApp = () => {
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentURL)}`;
    window.open(whatsappURL, '_blank');
  };


  return (
    <div style={{opacity: '40%'}}>
        <p style={{width: '80%', borderBottom: '1px solid white', marginTop: '3em'}}></p>
        <p style={{fontSize: '14px', fontWeight: '600', margin: '5px 0'}}>Share</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '1em'}}>
          <button onClick={copyToClipboard} style={{ display:'inline-block', backgroundColor: 'transparent', border: 'none', marginRight: '10px', cursor: 'pointer' }}>
            <img src={CopyIcon} style={{width: '30px'}} ></img>
          </button>

          {/* Social Share Buttons */}
          <div style={{display: 'flex', alignItems: 'center', gap: '1em'}}>
            <button onClick={shareOnFacebook} style={{ backgroundColor: 'transparent', border: 'none', marginRight: '10px', cursor: 'pointer'}}>
            <img src={facebook} style={{width: '30px'}}></img>
            </button>
            <button onClick={shareOnWhatsApp} style={{ backgroundColor: 'transparent', border: 'none', marginRight: '10px', cursor: 'pointer' }}>
            <img src={whatsapp} style={{width: '30px'}}></img>
            </button>
          </div>

          
        </div>
        {copySuccess && <p style={{marginBottom: '-2.4em', opacity: '100%', color: 'green', fontWeight: '800'}}>{copySuccess}</p>}
    </div>
  );
};

export default Share;
