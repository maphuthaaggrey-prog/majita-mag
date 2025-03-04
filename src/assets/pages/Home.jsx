import Hero from '../../components/Hero'
import LatestTopics from '../../components/LatestTopics'
import MusicNews from "../../components/MusicNews";
import EventsComponent from "../../components/EventsComponent";
const Home = () => {
    return ( 
        <div className="wrap">
            <div className="home-container">
                <Hero />
                <LatestTopics />
            </div>
            <MusicNews />
            <EventsComponent />
        </div>
     );
}
export default Home;