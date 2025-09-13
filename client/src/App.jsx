import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import HeroSection from './pages/HeroSection';

const App = () => {
  const location = useLocation();

  // Define routes that should NOT have Sidebar and Navbar
  const noLayoutRoutes = ['/home', '/login'];

  const isNoLayoutRoute = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      {!isNoLayoutRoute && (
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>
      )}

      <div className={`flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 ${isNoLayoutRoute ? 'w-full max-w-none' : ''}`}>
        {!isNoLayoutRoute && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;