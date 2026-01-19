import { Link } from 'react-router-dom';
import logoWhite from '../assets/1561-labs-logo-white.png';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <img 
              src={logoWhite} 
              alt="1561 Labs" 
              className="h-[40px] w-auto"
              style={{ height: '40px', width: 'auto' }}
            />
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white hover:opacity-70 transition-opacity text-base">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/our-labs" className="text-white hover:opacity-70 transition-opacity text-base">
                  Our labs
                </Link>
              </li>
              <li>
                <Link to="/design-labs" className="text-white hover:opacity-70 transition-opacity text-base">
                  Design Labs
                </Link>
              </li>
              <li>
                <Link to="/media-labs" className="text-white hover:opacity-70 transition-opacity text-base">
                  Media Labs
                </Link>
              </li>
              <li>
                <Link to="/growth-log" className="text-white hover:opacity-70 transition-opacity text-base">
                  Growth log
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white hover:opacity-70 transition-opacity text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:opacity-70 transition-opacity text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg">Socials</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity text-base">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity text-base">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity text-base">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
