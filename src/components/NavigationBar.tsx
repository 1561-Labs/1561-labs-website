import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/1561-labs-logo.png';

export default function NavigationBar() {
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
    }, 400); // Duration of closing animation
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Growth Log', path: '/growth-log' },
    { name: 'Our Labs', path: '/our-labs' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      {/* Sticky Header Bar (Before Clicking) */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
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

      {/* Two-Panel Menu Navigation (After Clicking) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 flex" 
          style={{ 
            zIndex: 999999,
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
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

          {/* Close button in top right corner */}
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

          {/* Left Panel - Green Background with Main Navigation */}
          <div 
            style={{ 
              width: '50%',
              height: '100vh',
              backgroundColor: '#A2FAA3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: '80px'
            }}
          >
            <nav 
              className="flex flex-col" 
              style={{ 
                minWidth: '200px',
                gap: 0,
                animation: isClosing ? 'slideOutLeft 0.4s ease-in' : 'slideInLeft 0.5s ease-out 0.1s both'
              }}
            >
              {navLinks.map((link, index) => (
                <div 
                  key={link.name} 
                  style={{ 
                    borderBottom: '2px solid #000000',
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    animation: isClosing 
                      ? `slideOutLeft 0.3s ease-in ${0.05 * (navLinks.length - index - 1)}s both`
                      : `slideInLeft 0.4s ease-out ${0.15 + index * 0.08}s both`
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={handleCloseMenu}
                    style={{
                      display: 'block',
                      padding: '12px 0',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#000000',
                      textDecoration: 'none',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.opacity = '0.7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Panel - Black Background with Our Labs */}
          <div 
            style={{ 
              width: '50%',
              height: '100vh',
              backgroundColor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: '80px'
            }}
          >
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
                  minWidth: '250px',
                  gap: 0,
                  marginBottom: '48px'
                }}
              >
                <div 
                  style={{ 
                    borderBottom: '1px solid #FFFFFF',
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    animation: isClosing ? 'slideOutLeft 0.3s ease-in 0s both' : 'slideInLeft 0.4s ease-out 0.2s both'
                  }}
                >
                  <Link
                    to="/design-labs"
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
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    1561 Design Labs
                  </Link>
                </div>
                <div 
                  style={{ 
                    borderBottom: '1px solid #FFFFFF',
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    animation: isClosing ? 'slideOutLeft 0.3s ease-in 0.05s both' : 'slideInLeft 0.4s ease-out 0.28s both'
                  }}
                >
                  <Link
                    to="/media-labs"
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
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    1561 Media Labs
                  </Link>
                </div>
                <div 
                  style={{ 
                    borderBottom: '1px solid #FFFFFF',
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    animation: isClosing ? 'slideOutLeft 0.3s ease-in 0.1s both' : 'slideInLeft 0.4s ease-out 0.36s both'
                  }}
                >
                  <a
                    href="https://mergeiq.io/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    MergeIQ
                  </a>
                </div>
                <div 
                  style={{ 
                    borderBottom: '1px solid #FFFFFF',
                    backgroundColor: 'transparent',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    animation: isClosing ? 'slideOutLeft 0.3s ease-in 0.15s both' : 'slideInLeft 0.4s ease-out 0.44s both'
                  }}
                >
                  <a
                    href="http://thepracticalworld.com/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    The Practical World
                  </a>
                </div>
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
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
