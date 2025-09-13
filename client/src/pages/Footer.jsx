import brandLogo from "../assets/heartChainlogo.png";

const Footer = () => {
  

  return (
    <footer 
      
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#13131a' }}
    >
      <div className="relative z-10 px-6 md:px-12 py-20">
        <div className="container mx-auto max-w-7xl">
          
          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Brand and CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={brandLogo} 
                  alt="HeartChain Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to transform your <span className="text-[#ff66c4]">fundraising?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-md">
                Join the Web3 revolution in nonprofit fundraising. Transparent, efficient, and trusted by organizations worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                  START YOUR CAMPAIGN
                </button>
                <button className="border border-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:border-gray-500 transition-colors duration-300">
                  SCHEDULE DEMO
                </button>
              </div>
            </div>

            {/* Right: Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Platform */}
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Campaign Management</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Smart Contracts</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Analytics</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Donor Portal</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Community</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 HeartChain. All rights reserved. Empowering nonprofits through blockchain.
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.887 2.748a.36.36 0 01.083.343c-.091.378-.293 1.19-.334 1.358-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Security</a>
            </div>
          </div>

          {/* Bottom glow effect similar to hero */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#ff66c4]/5 blur-3xl rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;