import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GrowthLogPage from './pages/GrowthLogPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import DesignLabsPage from './pages/DesignLabsPage';
import MediaLabsPage from './pages/MediaLabsPage';
import OurLabsPage from './pages/OurLabsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/growth-log" element={<GrowthLogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/design-labs" element={<DesignLabsPage />} />
        <Route path="/media-labs" element={<MediaLabsPage />} />
        <Route path="/our-labs" element={<OurLabsPage />} />
      </Routes>
    </BrowserRouter>
  );
}