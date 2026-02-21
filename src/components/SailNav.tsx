// src/projects/sailPoint/components/SailNav.tsx
import { useState, useEffect } from 'react';
import { Moon, Sun, Search, Globe, ChevronsRight, Play } from 'lucide-react'; // npm i lucide-react if not

export default function SailNav() {
  const [isDark, setIsDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const handleMouseEnter = (menu: string) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 text-white shadow-md transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      {/* Top banner */}
       <div className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-indigo-600 text-center py-2 text-sm font-medium">
            <a href="#" className="hover:underline">
            NEW 2025 Gartner® Market Guide for Identity Governance and Administration. Get the report →
            </a>
        </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-blue-400">▲</span>SailPoint
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* Platform */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('platform')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              Platform <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'platform' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white text-gray-800 rounded-lg shadow-xl p-6 grid grid-cols-4 gap-6 border border-gray-200">
                <div className="col-span-1 p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">SailPoint Platform</h4>
                  <p className="text-xs">Unified. Intelligent. Powerful.</p>
                  <a href="#" className="mt-4 block bg-blue-600 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-blue-700">
                    Learn more →
                  </a>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Identity Security Cloud</h4>
                  <p className="text-xs">An intelligent & unified solution</p>
                  <ul className="mt-4 space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Advanced capabilities</a></li>
                    <li><a href="#" className="hover:text-blue-600">Non-Employee Risk Management</a></li>
                    <li><a href="#" className="hover:text-blue-600">Machine Identity Security</a></li>
                    <li><a href="#" className="hover:text-blue-600">Agent Identity Security</a></li>
                    <li><a href="#" className="hover:text-blue-600">Data Access Security</a></li>
                    <li><a href="#" className="hover:text-blue-600">Cloud Infrastructure Entitlement Management</a></li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Integrations</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Connectors & integrations overview</a></li>
                    <li><a href="#" className="hover:text-blue-600">AI-powered application onboarding</a></li>
                    <li><a href="#" className="hover:text-blue-600">Accelerated application management</a></li>
                    <li><a href="#" className="hover:text-blue-600">Find integrations</a></li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Software solutions</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">IdentityIQ</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Solutions */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              Solutions <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] max-w-[90vw] bg-white text-gray-800 rounded-lg shadow-xl p-6 grid grid-cols-3 gap-6 border border-gray-200">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">By use case</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Defend identity threats</a></li>
                    <li><a href="#" className="hover:text-blue-600">Operationalize zero trust</a></li>
                    <li><a href="#" className="hover:text-blue-600">Modernize identity</a></li>
                    <li><a href="#" className="hover:text-blue-600">Simplify compliance</a></li>
                    <li><a href="#" className="hover:text-blue-600">Automate identity workflows</a></li>
                    <li><a href="#" className="hover:text-blue-600">Secure non-human identities</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">By industry</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Financial Services</a></li>
                    <li><a href="#" className="hover:text-blue-600">Healthcare</a></li>
                    <li><a href="#" className="hover:text-blue-600">Manufacturing</a></li>
                    <li><a href="#" className="hover:text-blue-600">Government</a></li>
                    <li><a href="#" className="hover:text-blue-600">Oil and Gas</a></li>
                    <li><a href="#" className="hover:text-blue-600">Utilities</a></li>
                    <li><a href="#" className="hover:text-blue-600">Education</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">By role</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">CISO</a></li>
                    <li><a href="#" className="hover:text-blue-600">CIO</a></li>
                    <li><a href="#" className="hover:text-blue-600">Identity leader</a></li>
                    <li><a href="#" className="hover:text-blue-600">Security leader</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              Services <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'services' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] max-w-[90vw] bg-white text-gray-800 rounded-lg shadow-xl p-6 grid grid-cols-3 gap-6 border border-gray-200">
                <div className="col-span-1 p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg">
                  <img src="/images/services-podcast-placeholder.jpg" alt="Play podcast" className="w-full h-32 object-cover rounded-md mb-2" />
                  <h4 className="font-bold text-gray-900 mb-2">Services & support</h4>
                  <p className="text-xs">Driving success with SailPoint Success Acceleration Service Packages</p>
                  <a href="#" className="mt-2 block bg-blue-600 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-blue-700">
                    Play podcast
                  </a>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Customer success</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Customer success overview</a></li>
                    <li><a href="#" className="hover:text-blue-600">Success acceleration services</a></li>
                    <li><a href="#" className="hover:text-blue-600">Professional services</a></li>
                    <li><a href="#" className="hover:text-blue-600">Training & certification</a></li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Support</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Support portal →</a></li>
                    <li><a href="#" className="hover:text-blue-600">Community →</a></li>
                    <li><a href="#" className="hover:text-blue-600">Documentation →</a></li>
                    <li><a href="#" className="hover:text-blue-600">Developer forum →</a></li>
                    <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              Resources <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white text-gray-800 rounded-lg shadow-xl p-6 grid grid-cols-4 gap-6 border border-gray-200">
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Resource library</h4>
                  <p className="text-xs">Insights to accelerate your identity security program</p>
                  <a href="#" className="mt-2 block text-blue-600 hover:underline text-xs">→</a>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Blog</h4>
                  <p className="text-xs">Read & follow the latest in enterprise security news</p>
                  <a href="#" className="mt-2 block text-blue-600 hover:underline text-xs">→</a>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Partners</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Partner overview</a></li>
                    <li><a href="#" className="hover:text-blue-600">Technology alliance partners</a></li>
                    <li><a href="#" className="hover:text-blue-600">Become a partner</a></li>
                    <li><a href="#" className="hover:text-blue-600">Find a partner</a></li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Learn</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Customer stories</a></li>
                    <li><a href="#" className="hover:text-blue-600">Podcasts</a></li>
                    <li><a href="#" className="hover:text-blue-600">Analyst reports</a></li>
                    <li><a href="#" className="hover:text-blue-600">White papers</a></li>
                    <li><a href="#" className="hover:text-blue-600">Glossary</a></li>
                  </ul>
                </div>
                {/* Tools, Events columns */}
              </div>
            )}
          </div>

          {/* Company */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              Company <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'company' && (
              <div className="absolute top-full right-0 mt-2 w-[700px] max-w-[90vw] bg-white text-gray-800 rounded-lg shadow-xl p-6 grid grid-cols-3 gap-6 border border-gray-200">
                <div className="col-span-1">
                  <div className="relative rounded-md overflow-hidden mb-2">
                    <img src="/images/company-video-placeholder.jpg" alt="Why us video" className="w-full h-32 object-cover" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="h-8 w-8 text-white" />
                    </button>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Why us</h4>
                  <p className="text-xs">Secure every identity with confidence—across people, machines, and AI—using adaptive identity built to scale with your enterprise.</p>
                  <a href="#" className="mt-2 block bg-blue-600 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-blue-700">
                    Watch video
                  </a>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Company</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">About us</a></li>
                    <li><a href="#" className="hover:text-blue-600">Why us</a></li>
                    <li><a href="#" className="hover:text-blue-600">Leadership</a></li>
                    <li><a href="#" className="hover:text-blue-600">Trust center</a></li>
                    <li><a href="#" className="hover:text-blue-600">Investor relations →</a></li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Careers</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Join the crew →</a></li>
                    <li><a href="#" className="hover:text-blue-600">Why work at SailPoint</a></li>
                    <li><a href="#" className="hover:text-blue-600">Sail-U to all</a></li>
                    <li><a href="#" className="hover:text-blue-600">Welcoming to all</a></li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4 className="font-bold text-gray-900 mb-2">Press</h4>
                  <ul className="space-y-2 text-xs">
                    <li><a href="#" className="hover:text-blue-600">Press releases</a></li>
                    <li><a href="#" className="hover:text-blue-600">News center</a></li>
                    <li><a href="#" className="hover:text-blue-600">Accolades</a></li>
                    <li><a href="#" className="hover:text-blue-600">SailPoint gives back</a></li>
                    <li><a href="#" className="hover:text-blue-600">Environmental, social, & governance →</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side actions - Added */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="hover:text-blue-300 transition-colors">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="hover:text-blue-300 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-blue-300 transition-colors">
            <Globe className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden flex flex-col gap-1.5 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-950 p-6 space-y-6 text-sm font-medium">
          {/* Mobile versions of menu items with accordion-style dropdowns */}
          <div>
            <button className="w-full flex items-center justify-between hover:text-blue-300">
              Platform <ChevronsRight className="h-4 w-4" />
            </button>
            {/* Mobile dropdown content */}
          </div>
          {/* Repeat for other menus */}
        </div>
      )}
    </nav>
  );
}