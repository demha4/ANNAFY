import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const pageLinks = [
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/works' },
  { label: 'Resume', to: '/resume' },
  { label: 'Packages', to: '/packages' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (menuOpen) {
        setIsHidden(false);
      } else if (currentScrollY < 80) {
        setIsHidden(false);
      } else if (scrollingDown && currentScrollY > 120) {
        setIsHidden(true);
      } else if (!scrollingDown) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed top-6 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isHidden ? '-translate-y-24' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-bg/90 backdrop-blur-md border border-border rounded-2xl">
          <div className="flex items-center justify-between h-14 px-5 md:px-6">
            {/* Logo - left */}
            <button
              onClick={handleLogoClick}
              className="text-dark hover:text-accent transition-colors duration-200"
              aria-label="Annafy Logo"
            >
              <svg width="136" height="19" viewBox="0 0 136 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-auto">
                <path d="M5.967 15.741H15.606L16.983 18.9H21.573L13.203 0H8.37L0 18.9H4.59L5.967 15.741ZM13.878 11.691H7.722L10.8 4.591L13.878 11.691ZM28.134 3.429L41.418 18.9H43.767V0H41.418V15.5L28.134 0H25.785V18.9H28.134V3.429ZM52.407 3.429L65.695 18.9H68.044V0H65.695V15.5L52.407 0H50.058V18.9H52.407V3.429ZM75.06 18.9L77.085 14.607L88.506 14.58L90.506 18.9H93.015L84.159 0H81.432L72.549 18.9H75.06ZM87.453 12.366H78.138L82.809 2.4L87.453 12.366ZM99.873 10.557H111.348V8.343H99.873V2.214H112.695V0H97.524V18.9H99.873V10.557ZM124.686 18.9H127.035V11.232L135.675 0H132.867L125.874 8.964L118.854 0H116.019L124.686 11.232V18.9Z" fill="currentColor"/>
              </svg>
            </button>

            {/* Right side: Nav + Theme Toggle */}
            <div className="flex items-center gap-6 md:gap-8">
              <nav className="hidden md:flex items-center gap-6">
                {pageLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm transition-colors duration-200 link-underline ${
                      location.pathname === link.to || (link.to === '/works' && location.pathname.startsWith('/work'))
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-dark'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 -mr-2 text-dark"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-1.5">
                  <span
                    className={`block h-[1.5px] bg-dark transition-all duration-300 ${
                      menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-dark transition-all duration-300 ${
                      menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-6 left-0 right-0 z-40">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="bg-bg/95 backdrop-blur-md border border-border rounded-2xl mt-2">
              <nav className="px-5 py-5 flex flex-col gap-3">
                {pageLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-base transition-colors ${
                      location.pathname === link.to
                        ? 'text-accent font-medium'
                        : 'text-text-secondary hover:text-dark'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-border-light">
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
