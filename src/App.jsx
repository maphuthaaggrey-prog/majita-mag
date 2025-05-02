import Header from "./components/Header";
import Home from "./assets/pages/Home";
import Footer from "./components/Footer";
import MajitaMonday from "./components/MajitaMonday";
import About from "./assets/pages/About";
import Terms from './assets/pages/Terms'
import WomenCrushWednesday from "./components/WomenCrushWednesday";
import Updates from "./components/Updates";
import Read from "./components/Read";
import ReadWCW from "./components/ReadWCW";
import Music from "./components/Music";
import Events from './components/Events'
import Search from "./components/Search";
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "./components/NotFound";
import Highlights from "./components/Highlights";
import Policies from "./assets/pages/Policies";
import FAQ from "./assets/pages/FAQ";

function AppContent() {
  const location = useLocation();

  const pathsWithoutFooter = ["/Search"];

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/majitamonday" element={<MajitaMonday />} />
        <Route path="/about" element={<About />} />
        <Route path="/womencrushwednesday" element={<WomenCrushWednesday />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/highlights/:slug/:id" element={<Highlights />} />
        <Route path="/majitamonday/:slug" element={<Read />} />
        <Route path="/music/:slug" element={<Music />} />
        <Route path="/events/:slug" element={<Events />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-and-community-policies" element={<Policies />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/womencrushwednesday/:slug" element={<ReadWCW />} />
      </Routes>

      {!pathsWithoutFooter.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
  <HelmetProvider>
        <Router>
          <AppContent />
        </Router>

</HelmetProvider>
  );
}

export default App;
