import { useState } from 'react';

export default function OnePlatform() {
  // 1. Define the data for each tab
  const tabData = [
    {
      id: "Overview",
      title: <>Adaptive identity security, <br /><span className="text-blue-600">powered in real time</span></>,
      description: "Unify identity, data, and security intelligence in real time with PremiumID. Continuously assess risk, context, and behavior across all identities.",
      image: "/layeredcube1.png" // Your existing image
    },
    {
      id: "Atlas",
      title: <>Foundation of Identity, <br /><span className="text-blue-600">The Atlas Layer</span></>,
      description: "The Atlas provides the mapping for all human and non-human identities across your entire cloud ecosystem.",
      image: "https://placehold.co/600x400/010534/white?text=Atlas+Layer+Image"
    },
    {
      id: "Control plane",
      title: <>Centralized Management, <br /><span className="text-blue-600">Control Plane</span></>,
      description: "Automate policy enforcement and least privilege access through a centralized intelligence layer.",
      image: "https://placehold.co/600x400/010534/white?text=Control+Plane+Image"
    },
    {
      id: "Real-time plane",
      title: <>Instant Assessment, <br /><span className="text-blue-600">The Security Plane</span></>,
      description: "Analyze behavioral signals as they happen to block threats before they penetrate the perimeter.",
      image: "https://placehold.co/600x400/010534/white?text=Real-time+Plane+Image"
    },
    {
      id: "Security plane",
      title: <>Uncompromising Protection, <br /><span className="text-blue-600">Real-time Plane</span></>,
      description: "Detect identity-based threats in real-time. Our security plane acts as an automated firewall for your users, isolating suspicious behavior before it can impact your data.",
      image: "https://placehold.co/600x400/010534/white?text=Real-time+Plane+Image"
    },
    {
      id: "Customer success",
      title: <>Expert Guidance, <br /><span className="text-blue-600">Tailored to Your Growth</span></>,
      description: "Beyond technology, we provide a dedicated partnership. Our success team ensures PremiumID scales with your organization, optimizing your security posture every step of the way.",
      image: "https://placehold.co/600x400/010534/white?text=Real-time+Plane+Image"
    },
    {
      id: "Agentic UX",
      title: <>Intelligent Interaction, <br /><span className="text-blue-600">The Agentic UX</span></>,
      description: "Frictionless security that learns. Our AI-driven experience anticipates user needs and automates authentication prompts based on intent and risk level.",
      image: "https://placehold.co/600x400/010534/white?text=Real-time+Plane+Image"
    },
    {
      id: "Ecosystem",
      title: <>Limitless Connectivity, <br /><span className="text-blue-600">A Unified Ecosystem</span></>,
      description: "Connect everything. From legacy on-premise servers to the latest SaaS tools, our ecosystem creates a single fabric of identity across your entire technology stack.",
      image: "https://placehold.co/600x400/010534/white?text=Real-time+Plane+Image"
    },
    // Add more here as you get the content...
  ];

  // 2. Set the active state (default to first tab)
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section className="relative bg-gradient-to-br from-premium-accent to-[#f0eab8] text-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Headline & CTA */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            One platform to secure every identity
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
            Unify identity, data, and security intelligence in real time with PremiumID.
          </p>
          <a href="#" className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-medium px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-blue-500/20">
            Explore the PremiumID Platform
          </a>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1.5 border border-white/50 overflow-x-auto no-scrollbar max-w-full">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab.id === tab.id 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                  : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.id}
              </button>
            ))}
           
          </div>
        </div>

        {/* --- CONTENT AREA (Changes based on State) --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[450px]">
          
          {/* Left Side: Text Content */}
          <div key={activeTab.id} className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              {activeTab.title}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {activeTab.description}
            </p>
          </div>

          {/* Right Side: Image Content */}
          <div className="flex justify-center md:justify-end overflow-hidden">
            <img 
              key={activeTab.id} // Key here forces React to re-render the image for animations
              src={activeTab.image} 
              alt={activeTab.id} 
              className="w-full max-w-[550px] h-auto transform scale-110 md:scale-125 object-contain animate-in zoom-in-95 duration-500" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}