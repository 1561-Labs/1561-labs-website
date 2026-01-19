import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GrowthLogMobile from '../imports/GrowthLogMobile';
import NavigationBar from './NavigationBar';
import { createNavigationHandler } from '../utils/navigationHelper';

export default function GrowthLogMobileWithNav() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = createNavigationHandler(navigate, location.pathname);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, location.pathname]);

  return (<>
      <NavigationBar />
      <GrowthLogMobile />
    </>);
}
