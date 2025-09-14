import React from 'react';
import { Link } from 'react-router-dom';

// Simple, clear icons for each step
const WalletIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16,8 20,8 20,16 16,16" />
  </svg>
);

const PlusIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const SearchIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HeartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const EyeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Wallet',
      description: 'Start by connecting your crypto wallet to Heart Chain. We support all major wallets and make it super easy to get started.',
      icon: WalletIcon,
      action: 'Connect Wallet',
      actionLink: '/', // Link to home page where they can connect
      color: 'from-blue-500 to-cyan-400'
    },
    {
      number: '02',
      title: 'Create or Find Campaigns',
      description: 'Either start your own charity campaign to raise funds for your cause, or browse existing campaigns to support.',
      icon: PlusIcon,
      action: 'Start Campaign',
      actionLink: '/create-campaign',
      secondaryAction: 'Browse Campaigns',
      secondaryLink: '/campaigns',
      color: 'from-green-500 to-emerald-400'
    },
    {
      number: '03',
      title: 'Make Your Donation',
      description: 'Found a cause you care about? Donate directly with just a few clicks. Every transaction is secure and transparent.',
      icon: HeartIcon,
      action: 'View Campaigns',
      actionLink: '/campaigns',
      color: 'from-[#ea638c] to-[#ff66c4]'
    },
    {
      number: '04',
      title: 'Track Your Impact',
      description: 'Watch your donations create real change. Every transaction is recorded on the blockchain for complete transparency.',
      icon: EyeIcon,
      action: 'See Impact',
      actionLink: '/profile',
      color: 'from-purple-500 to-indigo-400'
    }
  ];

  const benefits = [
    {
      title: 'No Hidden Fees',
      description: '100% of your donation goes directly to the cause',
      icon: CheckIcon
    },
    {
      title: 'Complete Transparency',
      description: 'Track every dollar on the blockchain',
      icon: EyeIcon
    },
    {
      title: 'Global Reach',
      description: 'Support causes anywhere in the world instantly',
      icon: SearchIcon
    }
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden min-h-screen">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#ff66c4]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#ea638c]/6 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <section className="py-24 sm:py-32 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-[#ea638c] uppercase tracking-wider mb-6">How It Works</p>
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter mb-8">
            Simple Steps to
            <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Change Lives
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Getting started with Heart Chain is incredibly simple. Follow these easy steps to begin 
            making a difference or raising funds for your cause.
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create-campaign"
              className="inline-block bg-gradient-to-r from-[#ea638c] to-[#ff66c4] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea638c]/40"
            >
              Start a Campaign
            </Link>
            <Link
              to="/campaigns"
              className="inline-block bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:bg-white/20"
            >
              Donate to Causes
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-lg transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ea638c]/20">
                  
                  {/* Step Number */}
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${step.color} rounded-2xl w-16 h-16 flex items-center justify-center mr-4`}>
                      <step.icon className="text-white h-8 w-8" />
                    </div>
                    <span className="text-6xl font-bold text-gray-800">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={step.actionLink}
                      className={`inline-block bg-gradient-to-r ${step.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-center`}
                    >
                      {step.action}
                    </Link>
                    {step.secondaryAction && (
                      <Link
                        to={step.secondaryLink}
                        className="inline-block bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white/20 text-center"
                      >
                        {step.secondaryAction}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Why Choose Heart Chain?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We've built the platform with your needs in mind, making charity simple, transparent, and impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg text-center transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-[#ea638c] to-[#ff66c4] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Common Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-3">Do I need cryptocurrency to use Heart Chain?</h3>
              <p className="text-gray-400">Yes, Heart Chain operates on blockchain technology, so you'll need a crypto wallet with some ETH to make donations or create campaigns. Don't worry - we'll guide you through the setup process!</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-3">Are there any fees for donations?</h3>
              <p className="text-gray-400">Heart Chain doesn't charge any platform fees! You'll only pay the small blockchain transaction fee (gas fee), which typically costs just a few dollars and ensures your transaction is secure.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white mb-3">How can I verify my donations are being used correctly?</h3>
              <p className="text-gray-400">Every transaction on Heart Chain is recorded on the blockchain, making it completely transparent. You can track your donations and see exactly how funds are being used in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#ea638c]/20 to-[#ff66c4]/20 border border-[#ea638c]/30 rounded-3xl p-12 sm:p-16 backdrop-blur-lg text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of people already using Heart Chain to create positive change in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/create-campaign"
                className="inline-block bg-gradient-to-r from-[#ea638c] to-[#ff66c4] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea638c]/40"
              >
                Create Your Campaign
              </Link>
              <Link
                to="/campaigns"
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/40"
              >
                Explore Campaigns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;