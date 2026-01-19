import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import DesignLabsDesktop from '../imports/1561DesignLabsDesktop';
import NavigationBar from './NavigationBar';
import { createNavigationHandler } from '../utils/navigationHelper';

export default function DesignLabsDesktopWithNav() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = createNavigationHandler(navigate, location.pathname);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, location.pathname]);

  return (
    <>
      <NavigationBar />
      <DesignLabsDesktop />
    </>
  );
}