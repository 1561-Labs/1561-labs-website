import { useState, useEffect } from 'react';
import CareersDesktopWithNav from '../components/CareersDesktopWithNav';
import CareersMobileWithNav from '../components/CareersMobileWithNav';

export default function CareersPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
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

  // Return mobile or desktop version based on viewport width
  return isMobile ? <CareersMobileWithNav /> : <CareersDesktopWithNav />;
}