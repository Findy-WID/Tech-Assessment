// src/projects/sailPoint/SailHome.tsx
import { Play } from 'lucide-react';
import SailNav from '../../components/SailNav';
import SailFooter from '../../components/SailFooter';
import AgentIdentitySection from '../../components/InnovationSection';
import AccoladesSection from '../../components/AcoladesSection';

export default function SailHome() {
  return (
    <div>
      <SailNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-950 to-blue-700 text-white min-h-screen flex flex-col justify-center items-center pt-20 mt-5">
        <div className="text-center space-y-6 max-w-5xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-0">
            The new era of adaptive identity
          </h1>
          <p className="text-xl md:text-xl text-gray-300 mb-10">
            Identity-first security for humans, machines, and AI.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.sailpoint.com/demo" className="px-8 py-3 bg-pink-600 rounded-full font-medium hover:bg-pink-500 transition-colors">
              Book a demo
            </a>
            <a href="https://www.sailpoint.com/demo/interactive" className="px-8 py-3 border border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors">
              Take a product tour
            </a>
          </div>
        </div>

        {/* Video placeholder with play button */}
        <div className="relative w-full max-w-4xl mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/sailhero.jpg"
            alt="Adaptive identity video placeholder"
            className="w-full h-auto object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <Play className="h-20 w-20 text-white" />
          </button>
        </div>
      </section>

      {/*One Platform Section */}
      <section className="relative bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Headline & CTA */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
              One platform to secure every identity
            </h2>
            <p className="text-xl md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
              Unify identity, data, and security intelligence in real time with the SailPoint platform. Continuously assess risk, context, and behavior across all identities-human and non-human-to dynamically adjust access, automate decisions, and enforce least privilege as business and threats evolve.
            </p>
            <a
              href="https://www.sailpoint.com/products/platform"
              className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-medium px-10 py-4 rounded-full text-lg transition-colors shadow-lg shadow-pink-500/30"
            >
              Explore the SailPoint Platform
            </a>
          </div>

          {/* Tabs (Overview highlighted) */}
          <div className="py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
              
              {/* Tabs - Now constrained to match content width */}
              <div className="flex justify-center mb-12"> 
                <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-full p-1.5 border border-white/10 overflow-x-auto no-scrollbar">
                  <button className="whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md">
                    Overview
                  </button>
                  {["Atlas", "Control plane", "Real-time plane", "Security plane", "Customer success", "Agentic user experience", "Ecosystem"].map((tab) => (
                    <button key={tab} className="whitespace-nowrap px-6 py-3 rounded-full text-gray-300 hover:text-white transition-colors">
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                    Adaptive identity security, <br />
                    <span className="text-blue-500">powered in real time</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Unify identity, data, and security intelligence in real time with the SailPoint platform. 
                    Continuously assess risk, context, and behavior across all identities—human and non-human—to 
                    dynamically adjust access, automate decisions, and enforce least privilege.
                  </p>
                </div>

                {/* Image - Increased size using w-full and scale */}
                <div className="flex justify-center md:justify-end">
                  <img 
                    src="/layeredcubes.png" 
                    alt="3D Illustration" 
                    className="w-full max-w-[600px] h-auto transform scale-110 md:scale-125 object-contain" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AgentIdentitySection />
      <AccoladesSection />

      <SailFooter />
    </div>
  );
}