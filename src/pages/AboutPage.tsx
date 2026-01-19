import { useState, useEffect } from 'react';
import AboutDesktopWithNav from '../components/AboutDesktopWithNav';
import AboutMobileWithNav from '../components/AboutMobileWithNav';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <AboutMobileWithNav /> : <AboutDesktopWithNav />;
}
