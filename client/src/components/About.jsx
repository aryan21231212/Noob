import React from 'react';

// Custom Icons for the About section
const ShieldIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LinkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const HeartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ZapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const UsersIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const About = () => {
  const coreValues = [
    {
      title: 'Transparency',
      description: 'Every transaction is recorded on the blockchain, ensuring complete visibility and accountability.',
      Icon: ShieldIcon,
    },
    {
      title: 'Connection',
      description: 'Direct donor-to-cause relationships without intermediaries taking cuts or controlling funds.',
      Icon: LinkIcon,
    },
    {
      title: 'Impact',
      description: 'Real-time tracking of how donations create tangible change in communities worldwide.',
      Icon: HeartIcon,
    }
  ];

  const features = [
    {
      title: 'Global Reach',
      description: 'Connect with causes and donors from anywhere in the world, breaking down geographical barriers.',
      Icon: GlobeIcon,
      stat: '50+ Countries'
    },
    {
      title: 'Lightning Fast',
      description: 'Powered by blockchain technology for instant, secure transactions with minimal fees.',
      Icon: ZapIcon,
      stat: 'Sub-second Transfers'
    },
    {
      title: 'Growing Community',
      description: 'Join thousands of changemakers, donors, and organizations creating positive impact.',
      Icon: UsersIcon,
      stat: '10,000+ Users'
    }
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-[#ff66c4]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[40rem] h-[40rem] bg-[#ea638c]/6 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[#ff66c4]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <section className="py-24 sm:py-32 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-[#ea638c] to-[#ff66c4] p-6 rounded-3xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <HeartIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <p className="font-semibold text-[#ea638c] uppercase tracking-wider mb-6">About Heart Chain</p>
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tighter mb-8">
            Revolutionizing
            <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              Charitable Giving
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Heart Chain is the world's first fully transparent, blockchain-powered charitable platform. 
            We're eliminating the barriers between generous hearts and meaningful causes, creating a future 
            where every donation creates maximum impact.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 sm:p-16 backdrop-blur-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">Our Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ea638c] to-[#ff66c4] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that charity should be as simple as sending money to a friend, as transparent 
                  as looking through glass, and as powerful as connecting hearts across the globe.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Traditional charitable giving is broken. Donors don't know where their money goes, 
                  organizations lose funds to administrative overhead, and the people who need help most 
                  often receive the least.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Heart Chain changes everything. By leveraging blockchain technology, we've created a 
                  platform where every donation is tracked, every impact is measured, and every heart 
                  is connected directly to the change it creates.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#ea638c]/20 to-[#ff66c4]/20 border border-[#ea638c]/30 rounded-2xl p-8 backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">The Heart Chain Promise</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#ea638c] rounded-full p-1 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">100% of donations reach their intended recipients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#ea638c] rounded-full p-1 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Complete transparency in fund usage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#ea638c] rounded-full p-1 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Direct donor-to-recipient connections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-[#ea638c] rounded-full p-1 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time impact tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-semibold text-[#ea638c] uppercase tracking-wider mb-4">Our Core Values</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Built on Trust</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg group transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#ea638c]/30"
              >
                <div className="bg-gradient-to-r from-[#ea638c] to-[#ff66c4] rounded-2xl w-16 h-16 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all duration-300 ease-in-out mb-6">
                  <value.Icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-semibold text-[#ea638c] uppercase tracking-wider mb-4">Platform Features</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Why Choose 
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Heart Chain?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg group transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ea638c]/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white/10 rounded-xl w-14 h-14 flex items-center justify-center border border-white/10 group-hover:bg-[#ea638c] group-hover:border-[#ff66c4] transition-all duration-300 ease-in-out">
                    <feature.Icon className="text-white h-7 w-7 transition-all duration-300 ease-in-out transform group-hover:scale-110" />
                  </div>
                  <span className="text-[#ea638c] font-bold text-sm bg-[#ea638c]/20 px-3 py-1 rounded-full border border-[#ea638c]/30">
                    {feature.stat}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#ea638c]/20 to-[#ff66c4]/20 border border-[#ea638c]/30 rounded-3xl p-12 sm:p-16 backdrop-blur-lg text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-[#ea638c] to-[#ff66c4] p-4 rounded-2xl">
                <GlobeIcon className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We envision a world where generosity knows no boundaries, where trust is built into every 
              transaction, and where the desire to help others can instantly translate into meaningful change. 
              A world where technology serves humanity's greatest asset: our capacity to care for one another.
            </p>
            <div className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea638c]/40">
              Join the Movement
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;