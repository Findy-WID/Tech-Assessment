// src/projects/sailPoint/components/SailFooter.tsx
export default function SailFooter() {
  return (
    <footer className="bg-gradient-to-t from-black via-indigo-950 to-purple-950 text-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top accent cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Platform</h3>
            <p className="text-sm">Unified, intelligent identity security for humans, machines, and AI.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Identity Security Cloud</h3>
            <p className="text-sm">An intelligent & unified solution for enterprise identity.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Get Started</h3>
            <p className="text-sm mb-4">Book a demo or contact us today.</p>
            <div className="flex gap-4">
              <button className="bg-pink-600 px-6 py-2 rounded-full text-white font-medium hover:bg-pink-500">
                Get a demo
              </button>
              <button className="border border-white/40 px-6 py-2 rounded-full hover:bg-white/10">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* Main links grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* PRODUCTS, SERVICES, RESOURCES, COMPANY — same content as before */}
          {/* Use ul/li structure like previous footer */}
        </div>

        {/* Bottom copyright + legal */}
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>© 2026 SailPoint Technologies, Inc. All Rights Reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white">Terms of use</a>
            {/* ... all other legal links */}
          </div>
          <div className="mt-6 flex justify-center gap-6 text-2xl">
            {/* Social icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}