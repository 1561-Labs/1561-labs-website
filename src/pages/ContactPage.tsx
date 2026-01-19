import { useState, useEffect } from 'react';
import ContactDesktopWithNav from '../components/ContactDesktopWithNav';

export default function ContactPage() {
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

  // Use desktop version for both until mobile version is available
  return <ContactDesktopWithNav />;
}
