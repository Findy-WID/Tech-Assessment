import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NavigationOverlay() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="flex items-center gap-2 p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all"
        >
          <Home size={16} /> Dashboard
        </Link>
        <div className="h-4 w-px bg-white/20 mx-1" />
        <span className="px-3 text-white/50 text-xs font-mono uppercase tracking-widest">
          Live Demo
        </span>
      </div>
    </div>
  );
}