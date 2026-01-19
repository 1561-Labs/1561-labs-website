import { useState, useEffect } from 'react';
import MediaLabsDesktopWithNav from '../components/MediaLabsDesktopWithNav';
import MediaLabsMobileWithNav from '../components/MediaLabsMobileWithNav';

export default function MediaLabsPage() {
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

  return isMobile ? <MediaLabsMobileWithNav /> : <MediaLabsDesktopWithNav />;
}