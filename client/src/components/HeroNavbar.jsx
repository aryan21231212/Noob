import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { logo, menu, thirdweb } from "../assets";
import { navlinks } from "../constants";
import Connectbutton from "./Connectbutton";
import brandLogo from "../assets/heartChainlogo.png";

const HeroNavbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { address, connectWallet, disconnectWallet } = useStateContext();

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

  return (
  <header className="flex justify-between items-center py-5 px-6 md:px-12 border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-20 bg-black/70 rounded-3xl">
      <div className="flex items-center gap-3">
        <Link to="/">
        <img src={brandLogo} alt="HeartChain Logo" className="h-14 w-auto" />
        </Link>
        
      </div>
      {/* Desktop Navigation: Only Dashboard and Create Campaign */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/campaigns" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">
          Campaign
        </Link>
        <Link to="/create-campaign" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">
          Create Campaign
        </Link>
      </nav>
      {/* Action buttons */}
  <div className="flex items-center space-x-4">
        {address ? (
          <CustomButton
            btnType="button"
            title={address ? "Disconnect" : "Connect"}
            styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
            handleClick={() => {
              if (address) handleLogout();
              else handleConnect();
            }}
          />
        ) : (
          <Connectbutton />
        )}

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        <img src={menu} alt="menu" className="w-[34px] h-[34px] object-contain cursor-pointer" onClick={() => setToggleDrawer((prev) => !prev)} />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li key={link.name} className={`flex p-4 ${isActive === link.name && "bg-[#3a3a43]"}`} onClick={() => {
                setIsActive(link.name);
                setToggleDrawer(false);
                navigate(link.link);
              }}>
                <img src={link.imgUrl} alt={link.name} className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? "grayscale-0" : "grayscale"}`} />
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"}`}>{link.name}</p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) handleLogout();
                else handleConnect();
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};


export default HeroNavbar;
