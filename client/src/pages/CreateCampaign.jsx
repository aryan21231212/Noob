import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useAddress } from '@thirdweb-dev/react';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

// Custom Icons matching the homepage style
const HeartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const SparklesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0L9.937 15.5Z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const address = useAddress();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address) {
      alert('Please connect your wallet before creating a campaign');
      return;
    }

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#ff66c4]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#ea638c]/8 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-lg">
            <Loader />
            <p className="text-white text-center mt-4 font-medium">Creating your campaign...</p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#ea638c] to-[#ff66c4] p-4 rounded-2xl">
              <HeartIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <p className="font-semibold text-[#ea638c] uppercase tracking-wider mb-4">Start Something Beautiful</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-6">
            Create Your
            <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Charity Campaign
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Transform lives through the power of transparent, blockchain-based fundraising. Every donation matters.
          </p>
        </div>

        {/* Wallet Connection Warning */}
        {!address && (
          <div className="mb-8 bg-red-500/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-lg">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-red-500/20 p-2 rounded-lg">
                <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-red-400 font-medium">Please connect your wallet to create a campaign</p>
            </div>
          </div>
        )}

        {/* Main Form Container */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal & Campaign Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => handleFormFieldChange('name', e)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea638c] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white mb-2">Campaign Title *</label>
                <input
                  type="text"
                  placeholder="Help Build a Better Tomorrow"
                  value={form.title}
                  onChange={(e) => handleFormFieldChange('title', e)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea638c] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Story Section */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white mb-2">Your Story *</label>
              <textarea
                placeholder="Share your vision and why this campaign matters..."
                value={form.description}
                onChange={(e) => handleFormFieldChange('description', e)}
                rows={6}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea638c] focus:border-transparent transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-[#ea638c]/20 to-[#ff66c4]/20 border border-[#ea638c]/30 rounded-2xl p-6 backdrop-blur-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-[#ea638c] to-[#ff66c4] p-3 rounded-xl">
                  <SparklesIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">100% Transparent</h3>
                  <p className="text-gray-300">Every donation goes directly to your cause. No hidden fees, complete transparency.</p>
                </div>
              </div>
            </div>

            {/* Goal & Deadline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white mb-2">Funding Goal *</label>
                <input
                  type="text"
                  placeholder="ETH 0.50"
                  value={form.target}
                  onChange={(e) => handleFormFieldChange('target', e)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea638c] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white mb-2">End Date *</label>
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) => handleFormFieldChange('deadline', e)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea638c] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Campaign Image */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white mb-2">Campaign Image *</label>
              <input
                type="url"
                placeholder="https://your-inspiring-image.com"
                value={form.image}
                onChange={(e) => handleFormFieldChange('image', e)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ea638c] focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={!address || isLoading}
                className={`
                  inline-block px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out transform
                  ${!address || isLoading 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#ea638c] to-[#ff66c4] text-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea638c]/40'
                  }
                `}
              >
                {isLoading ? 'Creating Campaign...' : 'Launch Your Campaign'}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Encouragement */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Join thousands of changemakers using Heart Chain to create positive impact
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreateCampaign