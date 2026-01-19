import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomeDesktop from '../imports/HomeDesktop';
import NavigationBar from './NavigationBar';
import { Footer } from './Footer';
import { createNavigationHandler } from '../utils/navigationHelper';

export default function HomeDesktopWithNav() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = createNavigationHandler(navigate, location.pathname);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, location.pathname]);

  return (
    <div className="relative w-full">
      <NavigationBar />
      <HomeDesktop />
      <Footer />
    </div>
  );
}