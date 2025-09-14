import FeaturesSection from "./FeatureSection";
import { useVanta } from "../VantaBackground";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import HeroNavbar from "../components/HeroNavbar";

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createThirdwebClient } from "thirdweb";

import { useStateContext } from '../context';
import { CustomButton } from '../components';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import Connectbutton from '../components/Connectbutton';

const client = createThirdwebClient({ clientId : "07baf930ed674143787a0996a7bd15d7"});

const HeroSection = () => {
  // Use the Vanta hook for the hero section
  const vantaRef = useVanta({
    backgroundColor: 0x13131a,
    color: 0x98465f,
    spacing: 2.5,
    chaos: 0.25,
    mouseControls: true,
    touchControls: true,
  });

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { disconnectWallet } = useStateContext();

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Using context
  const { address, connectWallet, campaigns, setFilteredCampaigns } = useStateContext();

  const handleConnect = async () => {
    try {
      await connectWallet("injected");
      console.log("Wallet connected:", address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleLogout = () => {
    disconnectWallet();
    window.location.reload(); // Reset UI and address
  };

  // Live Search Handler
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredCampaigns(campaigns); // reset if empty
      return;
    }
    const filtered = campaigns.filter((c) =>
      c.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCampaigns(filtered);
    navigate("/"); // redirect to dashboard
  };

  return (
    <>
      {/* Hero section with Vanta background */}
      <div
        ref={vantaRef}
        className="relative w-full overflow-hidden min-h-screen flex items-center"
        style={{ backgroundColor: '#13131a' }}
      >
        {/* Content Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Hero Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] py-16 sm:py-20 lg:py-24">
              
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] text-white mb-6">
                  You're going to need a{' '}
                  <br className="hidden sm:block" />
                  <span className="text-[#ea638c] block sm:inline">bigger</span> goal.
                </h1>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Fundraising and nonprofit done the WEB3 way
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <Link
                    to="/create-campaign"
                    className="group w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea638c]/40 text-center"
                  >
                    <span className="group-hover:text-[#ea638c] transition-colors duration-200">
                      REGISTER YOUR CAMPAIGN
                    </span>
                  </Link>
                  
                  <Link
                    to="/how-it-works"
                    className="group w-full sm:w-auto border border-gray-600 hover:border-gray-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10 text-center"
                  >
                    <span className="group-hover:text-gray-200 transition-colors duration-200">
                      HOW IT WORKS
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </div>

      {/* Sections below hero */}
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HeroSection;