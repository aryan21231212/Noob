import React from "react";
import brandLogo from "../assets/heartChainlogo.png";
import FeaturesSection from "./FeatureSection";
import { useVanta } from "../VantaBackground";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const HeroSection = () => {
  // Use the Vanta hook for the hero section
  const vantaRef = useVanta({
    backgroundColor: 0x13131a,
    color: 0x98465f, 
    spacing: 2,
    chaos: 1,
    mouseControls: true,
    touchControls: true,
  });

  return (
    <>
      {/* Header stays normal */}
      <header className="flex justify-between items-center py-5 px-6 md:px-12 border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-20 bg-black/70">
        <div className="flex items-center gap-3">
          <img 
            src={brandLogo} 
            alt="HeartChain Logo" 
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Platform</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Why HeartChain</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Resources</a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hidden sm:block">
            Log In
          </a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors duration-300">
            BOOK A DEMO
          </button>
        </div>
      </header>

      {/* Hero section with Vanta background */}
      <div 
        ref={vantaRef} 
        className="relative w-full overflow-hidden min-h-screen"
        style={{ backgroundColor: '#13131a' }}
      >
        <main className="flex-grow flex items-center px-6 md:px-12 relative z-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-20 md:py-28">
            
            {/* Text content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-white">
                You're going to need a <br /> <span className="text-[#ea638c]">bigger</span> goal.
              </h1>
              <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-lg mx-auto lg:mx-0">
                Fundraising and nonprofit done the WEB3 way
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold w-full sm:w-auto hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                  REGISTER YOUR CAMPAIGN
                </button>
                <button className="border border-gray-700 text-white px-8 py-3 rounded-full font-semibold w-full sm:w-auto hover:bg-gray-900 hover:border-gray-500 transition-colors duration-300">
                  TOUR THE PLATFORM
                </button>
              </div>
            </div>

            {/* Image with glow */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
              <div className="absolute inset-0 bg-[#ff66c4]/10 blur-3xl rounded-full"></div>
              
            </div>
          </div>
        </main>
      </div>

      {/* Regular section after hero remains normal */}
      <FeaturesSection />
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default HeroSection;