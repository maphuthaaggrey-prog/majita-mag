import Hero from '../../components/Hero';
import LatestTopics from '../../components/LatestTopics';
import MusicNews from "../../components/MusicNews";
import EventsComponent from "../../components/EventsComponent";
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        // Update meta tags
        document.title = "Majita Mag";
        const metaDescription = document.createElement('meta');
        metaDescription.property = 'og:description';
        metaDescription.content = 'This is a dynamic description.';
        document.head.appendChild(metaDescription);
    
        const metaImage = document.createElement('meta');
        metaImage.setAttribute('property', 'og:image');
        metaImage.setAttribute('content', 'https://maphuthaaggrey-prog.github.io/majita-mag/assets/icons/majitamag.jpg');
        document.head.appendChild(metaImage);
    
        const metaURL = document.createElement('meta');
        metaURL.property = 'og:url';
        metaURL.content = 'https://maphuthaaggrey-prog.github.io/majita-mag/';
        document.head.appendChild(metaURL);
    
        // Cleanup function to remove meta tags when the component unmounts
        return () => {
          document.head.removeChild(metaDescription);
          document.head.removeChild(metaImage);
          document.head.removeChild(metaURL);
        };
      }, []);
  return (
<>


      <div className="wrap">
        <div className="home-container">
          <Hero />
          <LatestTopics />
        </div>
        <MusicNews />
        <EventsComponent />
      </div>
      </>
  );
};

export default Home;
