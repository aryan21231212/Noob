import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);
    await donate(state.pId, amount); 
    navigate('/')
    setIsLoading(false);
  }

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }

  // Helper function to get verification badge
  const getVerificationBadge = (status) => {
    const badges = {
      'Verified': { color: 'bg-green-500', text: '✓ Verified', textColor: 'text-white' },
      'Pending': { color: 'bg-yellow-500', text: '⏳ Pending', textColor: 'text-white' },
      'Rejected': { color: 'bg-red-500', text: '✗ Rejected', textColor: 'text-white' }
    };
    return badges[status] || badges['Pending'];
  }

  const verificationBadge = getVerificationBadge(state.verificationStatus);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 overflow-x-hidden">
      {isLoading && <Loader />}

      {/* Top Section */}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-6">
        {/* Campaign Image + Progress Bar */}
        <div className="flex-1 flex-col">
          <img 
            src={state.image || 'https://via.placeholder.com/600x300?text=Campaign+Image'} 
            alt="campaign" 
            className="w-full max-h-[410px] object-cover rounded-xl"
          />
          
          {/* Enhanced Progress Bar with INR values */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-[#808191] mb-2">
              <span>Raised: {formatCurrency(state.amountRaised || state.amountCollected || 0)}</span>
              <span>Goal: {formatCurrency(state.fundingGoal || state.target || 0)}</span>
            </div>
            <div className="relative w-full h-[5px] bg-[#3a3a43] rounded">
              <div 
                className="absolute h-full rounded transition-all duration-300" 
                style={{ 
                  width: `${calculateBarPercentage(
                    state.fundingGoal || state.target, 
                    state.amountRaised || state.amountCollected
                  )}%`, 
                  maxWidth: '100%',
                  backgroundColor: '#94cf35'
                }}
              />
            </div>
          </div>
        </div>

        {/* Count Boxes */}
        <div className="flex md:w-[180px] w-full flex-wrap justify-between gap-4">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox 
            title={`Raised of ${formatCurrency(state.fundingGoal || state.target || 0)}`} 
            value={formatCurrency(state.amountRaised || state.amountCollected || 0)} 
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      {/* Campaign Title and Basic Info */}
      <div className="mt-8">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="font-epilogue font-bold text-2xl text-white">{state.title || state.name}</h1>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${verificationBadge.color} ${verificationBadge.textColor}`}>
            {verificationBadge.text}
          </span>
        </div>
        
        {/* Category and Location */}
        <div className="flex items-center gap-4 mt-3 flex-wrap">
          {state.category && (
            <span className="px-3 py-1 bg-[#1c1c24] border border-[#3a3a43] rounded-full text-xs text-[#808191]">
              📂 {state.category}
            </span>
          )}
          {(state.city || state.state) && (
            <span className="px-3 py-1 bg-[#1c1c24] border border-[#3a3a43] rounded-full text-xs text-[#808191]">
              📍 {state.city}{state.city && state.state && ', '}{state.state}
            </span>
          )}
          {state.organizationType && (
            <span className="px-3 py-1 bg-[#1c1c24] border border-[#3a3a43] rounded-full text-xs text-[#808191]">
              🏢 {state.organizationType}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex lg:flex-row flex-col gap-8">
        {/* Left Content */}
        <div className="flex-[2] flex flex-col gap-10">
          {/* Creator/Organization */}
          <div>
            <h4 className="font-epilogue font-semibold text-lg text-white uppercase">Organization</h4>

            <div className="mt-5 flex flex-row items-center flex-wrap gap-4">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="organization" className="w-[60%] h-[60%] object-contain"/>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-epilogue font-semibold text-sm text-white break-words">
                  {state.name || 'Organization Name'}
                </h4>
                <p className="mt-1 font-epilogue font-normal text-xs text-[#808191]">
                  {state.email}
                </p>
                {state.registrationNumber && (
                  <p className="mt-1 font-epilogue font-normal text-xs text-[#808191]">
                    Reg: {state.registrationNumber}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Story/Description */}
          <div>
            <h4 className="font-epilogue font-semibold text-lg text-white uppercase">Campaign Story</h4>
            <div className="mt-5">
              <p className="font-epilogue font-normal text-base text-[#808191] leading-6 text-justify break-words">
                {state.description}
              </p>
            </div>
          </div>

          {/* Additional Information */}
          {(state.reason || state.domain || state.bestProject) && (
            <div>
              <h4 className="font-epilogue font-semibold text-lg text-white uppercase">Additional Information</h4>
              <div className="mt-5 space-y-4">
                {state.reason && (
                  <div className="p-4 bg-[#1c1c24] rounded-lg border border-[#3a3a43]">
                    <h5 className="font-epilogue font-semibold text-sm text-white mb-2">Why This Campaign?</h5>
                    <p className="font-epilogue font-normal text-sm text-[#808191] leading-5">
                      {state.reason}
                    </p>
                  </div>
                )}
                
                {state.bestProject && (
                  <div className="p-4 bg-[#1c1c24] rounded-lg border border-[#3a3a43]">
                    <h5 className="font-epilogue font-semibold text-sm text-white mb-2">Past Achievements</h5>
                    <p className="font-epilogue font-normal text-sm text-[#808191] leading-5">
                      {state.bestProject}
                    </p>
                  </div>
                )}
                
                {state.domain && (
                  <div className="p-4 bg-[#1c1c24] rounded-lg border border-[#3a3a43]">
                    <h5 className="font-epilogue font-semibold text-sm text-white mb-2">Focus Area</h5>
                    <p className="font-epilogue font-normal text-sm text-[#808191] leading-5">
                      {state.domain}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Information */}
          {(state.phone || state.email || state.website) && (
            <div>
              <h4 className="font-epilogue font-semibold text-lg text-white uppercase">Contact Information</h4>
              <div className="mt-5 p-4 bg-[#1c1c24] rounded-lg border border-[#3a3a43]">
                {state.phone && (
                  <p className="font-epilogue font-normal text-sm text-[#808191] mb-2">
                    📞 {state.phone}
                  </p>
                )}
                {state.email && (
                  <p className="font-epilogue font-normal text-sm text-[#808191] mb-2">
                    ✉️ {state.email}
                  </p>
                )}
                {state.website && (
                  <a 
                    href={state.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-epilogue font-normal text-sm text-[#8c6dfd] hover:underline"
                  >
                    🌐 Visit Website
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Donators */}
          <div>
            <h4 className="font-epilogue font-semibold text-lg text-white uppercase">Supporters</h4>
            <div className="mt-5 flex flex-col gap-4">
              {donators.length > 0 ? donators.map((item, index) => (
                <div 
                  key={`${item.donator}-${index}`} 
                  className="flex justify-between items-center gap-4 flex-wrap p-3 bg-[#1c1c24] rounded-lg"
                >
                  <p className="font-epilogue font-normal text-base text-[#b2b3bd] leading-6 break-all">
                    {index + 1}. {item.donator}
                  </p>
                  <p className="font-epilogue font-normal text-base text-white leading-6 break-words font-semibold">
                    {item.donation}
                  </p>
                </div>
              )) : (
                <p className="font-epilogue font-normal text-base text-[#808191] leading-6 text-justify">
                  No supporters yet. Be the first one to support this cause!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Fund Section */}
        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-lg text-white uppercase">Support This Campaign</h4>   

          <div className="mt-5 flex flex-col p-4 bg-[#1c1c24] rounded-lg border border-[#3a3a43]">
            <p className="font-epilogue font-medium text-xl text-center text-[#808191]">
              Make a difference today
            </p>
            
            {/* Funding Progress Visual */}
            <div className="mt-4 p-3 bg-[#13131a] rounded-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">
                  {Math.round(calculateBarPercentage(
                    state.fundingGoal || state.target, 
                    state.amountRaised || state.amountCollected
                  ))}%
                </p>
                <p className="text-sm text-[#808191]">of goal reached</p>
              </div>
            </div>

            <div className="mt-6">
              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-3 sm:px-4 px-3 outline-none border border-[#3a3a43] bg-transparent font-epilogue text-white text-lg placeholder:text-[#4b5264] rounded-lg focus:border-[#94cf35] transition-colors"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-5 p-4 bg-[#13131a] rounded-lg">
                <h4 className="font-epilogue font-semibold text-sm text-white">Support because you believe in change.</h4>
                <p className="mt-2 font-epilogue font-normal text-sm text-[#808191]">
                  Your contribution will directly impact lives and create meaningful change in the community.
                </p>
                {state.priority && (
                  <p className="mt-2 font-epilogue font-normal text-xs text-[#94cf35]">
                    Priority Level: {state.priority}/10
                  </p>
                )}
              </div>

              <CustomButton 
                btnType="button"
                title="Support Campaign"
                styles="w-full"
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails