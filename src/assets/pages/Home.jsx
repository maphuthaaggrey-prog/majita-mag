import Hero from '../../components/Hero';
import LatestTopics from '../../components/LatestTopics';
import majitamag from '../icons/majitamag,jpg'
import MusicNews from "../../components/MusicNews";
import EventsComponent from "../../components/EventsComponent";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Majita Mag</title>
        <meta property="og:description" content="The ultimate showcase for forward-thinking creatives! Each issue is packed with inspiring stories, stunning visuals, and expert insights from the most talented minds in the industry." />
        <meta property="og:image" content={majitamag} />
      </Helmet>
      <div className="wrap">
        <div className="home-container">
          <Hero />
          <LatestTopics />
        </div>
        <MusicNews />
        <EventsComponent />
      </div>
    </HelmetProvider>
  );
};

export default Home;
