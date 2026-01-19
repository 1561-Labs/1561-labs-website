import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import logoImage from '../assets/1561-labs-logo.png';

export default function OurLabsNavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setIsClosing(false);
    }
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsAnimating(false);
      setIsClosing(false);
    }, 400);
  };

  const labLinks = [
    { name: '1561 Design Labs', path: '/design-labs' },
    { name: '1561 Media Labs', path: '/media-labs' },
    { name: 'MergeIQ', path: '#' },
    { name: 'The Practical World', path: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
    { icon: Youtube, name: 'YouTube', url: '#' },
  ];

  return (
    <>
      {/* Sticky Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-1.5 group">
          <img 
            src={logoImage} 
            alt="1561 Labs" 
            className="h-[32px] w-auto"
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Nav Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="hidden md:flex flex-col gap-1.5 p-2 group"
          aria-label="Open Menu"
        >
          <div className="w-8 h-px bg-black group-hover:w-10 transition-all duration-300" />
          <div className="w-8 h-px bg-black group-hover:w-10 transition-all duration-300" />
        </button>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2"
          aria-label="Open Menu"
        >
          <Menu size={28} strokeWidth={1.5} className="text-black" />
        </button>
      </header>

      {/* Our Labs Menu Navigation */}
      {isMenuOpen && (
        <div 
          className="fixed top-0 left-0 right-0 bottom-0" 
          style={{ 
            zIndex: 999999,
            backgroundColor: '#000000',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '80px',
            animation: isClosing ? 'fadeOut 0.4s ease-in-out' : 'fadeIn 0.4s ease-in-out',
            opacity: isClosing ? 0 : 1
          }}
        >
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes fadeOut {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
            @keyframes slideInLeft {
              from {
                transform: translateX(-50px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            @keyframes slideOutLeft {
              from {
                transform: translateX(0);
                opacity: 1;
              }
              to {
                transform: translateX(-50px);
                opacity: 0;
              }
            }
          `}</style>
          <button
            onClick={handleCloseMenu}
            style={{ 
              position: 'fixed',
              top: '32px',
              right: '32px',
              zIndex: 1000000,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '8px',
              animation: isClosing ? 'fadeOut 0.3s ease-in-out' : 'fadeIn 0.5s ease-in-out 0.2s both'
            }}
            aria-label="Close Menu"
          >
            <X size={32} color="#FFFFFF" strokeWidth={2} />
          </button>

          <div
            style={{
              animation: isClosing ? 'slideOutLeft 0.4s ease-in' : 'slideInLeft 0.5s ease-out 0.1s both'
            }}
          >
            {/* Our Labs Title */}
            <h2
              style={{
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#FFFFFF',
                marginBottom: '32px',
                textAlign: 'left',
                animation: isClosing ? 'slideOutLeft 0.3s ease-in 0s both' : 'slideInLeft 0.4s ease-out 0.15s both'
              }}
            >
              Our Labs
            </h2>

            {/* Labs Navigation Menu */}
            <nav 
              className="flex flex-col" 
              style={{ 
                zIndex: 999999,
                minWidth: '250px',
                gap: 0,
                marginBottom: '48px'
              }}
            >
              {labLinks.map((link, index) => (
                <div 
                  key={link.name} 
                  style={{ 
                    borderBottom: '1px solid #FFFFFF',
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    animation: isClosing 
                      ? `slideOutLeft 0.3s ease-in ${0.05 * (labLinks.length - index - 1)}s both`
                      : `slideInLeft 0.4s ease-out ${0.2 + index * 0.08}s both`
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={handleCloseMenu}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      fontSize: '18px',
                      fontWeight: 'normal',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Socials Section */}
            <div
              style={{
                animation: isClosing ? 'slideOutLeft 0.3s ease-in 0s both' : 'slideInLeft 0.4s ease-out 0.5s both'
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 'normal',
                  color: '#FFFFFF',
                  marginBottom: '16px',
                  textAlign: 'left'
                }}
              >
                Socials
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#FFFFFF',
                      transition: 'opacity 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
