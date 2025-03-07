import Hero from '../../components/Hero';
import LatestTopics from '../../components/LatestTopics';
import MusicNews from "../../components/MusicNews";
import EventsComponent from "../../components/EventsComponent";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
<>
      <Helmet>
        <title>Majita Mag</title>
        <meta property="og:description" content="Your backstage pass to what’s happening around you! Get the latest on local news, upcoming events, and the hottest music spots, plus exclusive features on the artists shaping our scene." />
        <meta property="og:image" content="https://maphuthaaggrey-prog.github.io/majita-mag/assets/icons/majitamag.jpg" />
      </Helmet>
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
