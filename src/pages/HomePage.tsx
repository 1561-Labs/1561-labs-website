import { useState, useEffect } from 'react';
import HomeDesktopWithNav from '../components/HomeDesktopWithNav';
import HomeMobileWithNav from '../components/HomeMobileWithNav';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <HomeMobileWithNav /> : <HomeDesktopWithNav />;
}
