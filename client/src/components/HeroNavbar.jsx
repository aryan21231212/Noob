import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, menu, thirdweb } from "../assets";
import { navlinks } from "../constants";
import Connectbutton from "./Connectbutton";
import brandLogo from "../assets/heartChainlogo.png";

// Custom Icons for mobile menu
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HeroNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { address, connectWallet, disconnectWallet } = useStateContext();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setToggleDrawer(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (toggleDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggleDrawer]);

  const handleConnect = async () => {
    try {
      await connectWallet("injected");
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleLogout = () => {
    disconnectWallet();
    window.location.reload();
  };

  const navItems = [
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Create Campaign', path: '/create-campaign' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about' },
  ];

  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Check if we're on the home/hero page to adjust navbar styling
  const isHeroPage = location.pathname === '/';

  return (
    <>
      <header className="py-4 px-4 md:px-12 border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-20 bg-black/70 rounded-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center h-14 sm:h-16 gap-4">

            {/* Logo (fixed size to avoid layout shift) */}
            <div className="flex items-center flex-none">
              <Link to="/" className="flex items-center group">
                <img 
                  src={brandLogo} 
                  alt="HeartChain Logo" 
                  className="h-9 sm:h-11 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg" 
                />
              </Link>
            </div>

            {/* Centered Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 xl:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    isActiveLink(item.path)
                      ? 'bg-gradient-to-r from-[#ea638c] to-[#ff66c4] text-white shadow-lg shadow-[#ea638c]/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions (fixed width to the right) */}
            <div className="hidden lg:flex items-center space-x-4 flex-none">
              {/* Wallet Connection */}
              {address ? (
                <div className="flex items-center space-x-3">
                  <div className="hidden xl:block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <span className="text-xs text-green-400 font-medium">
                      {`${address.slice(0, 6)}...${address.slice(-4)}`}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:bg-red-500/30 hover:border-red-500/50 hover:scale-105"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <Connectbutton />
                </div>
              )}

              {/* Profile Link */}
              <Link
                to="/profile"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 backdrop-blur-sm"
              >
                <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
              </Link>

              {/* Mobile Menu Button (hidden on lg, but keep for small screens) */}
            </div>

            {/* Mobile Menu Button (visible on small screens) */}
            <button
              onClick={() => setToggleDrawer(!toggleDrawer)}
              className="lg:hidden w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
              aria-label="Toggle mobile menu"
            >
              {toggleDrawer ? (
                <CloseIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              ) : (
                <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        toggleDrawer ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setToggleDrawer(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-10 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
          toggleDrawer ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img src={brandLogo} alt="HeartChain" className="h-10 w-auto" />
            <button
              onClick={() => setToggleDrawer(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2 px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setToggleDrawer(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                  isActiveLink(item.path)
                    ? 'bg-gradient-to-r from-[#ea638c] to-[#ff66c4] text-white shadow-lg shadow-[#ea638c]/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent border-t border-white/10">
            <div className="space-y-4">
              {/* Wallet Connection */}
              <div className="w-full">
                {address ? (
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-2xl font-medium transition-all duration-300 hover:bg-red-500/30"
                  >
                    Disconnect Wallet
                  </button>
                ) : (
                  <div className="w-full">
                    <Connectbutton />
                  </div>
                )}
              </div>

              {/* Profile Link */}
              <Link
                to="/profile"
                onClick={() => setToggleDrawer(false)}
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-2xl font-medium text-center block transition-all duration-300 hover:bg-white/20"
              >
                View Profile
              </Link>
            </div>

            {/* Wallet Address Display */}
            {address && (
              <div className="mt-4 p-3 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs text-gray-400 mb-1">Connected Wallet</p>
                <p className="text-sm text-white font-mono break-all">
                  {`${address.slice(0, 6)}...${address.slice(-4)}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroNavbar;
