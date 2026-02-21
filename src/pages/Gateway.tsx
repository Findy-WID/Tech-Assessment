import { Link } from 'react-router-dom';
import { Layout, Monitor, ArrowRight, Code2, Rocket } from 'lucide-react';

const ProjectCard = ({ title, description, path, icon: Icon, color }: any) => (
  <Link 
    to={path} 
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
  >
    <div className={`mb-4 inline-flex rounded-lg p-3 ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed mb-6">
      {description}
    </p>
    <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:translate-x-2 transition-transform">
      View Live Demo <ArrowRight size={16} className="ml-2" />
    </div>
  </Link>
);

export default function Gateway() {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center p-6 selection:bg-blue-500/30">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 h-[500px] w-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium mb-4">
            <Rocket size={12} /> Technical Assessment.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            UI Reproduction <span className="text-blue-500">Showcase</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A demonstration of rapid frontend development, component architecture, 
            and pixel-perfect recreation.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Identity Blitz"
            description="Recreation of the first target site. Focused on complex layouts and custom interactions."
            path="/project-1"
            icon={Monitor}
            color="bg-blue-600 shadow-lg shadow-blue-500/40"
          />
          <ProjectCard 
            title="SailPoint"
            description="A deep dive into high-fidelity UI components, typography, and responsive grid systems."
            path="/project-2"
            icon={Layout}
            color="bg-purple-600 shadow-lg shadow-purple-500/40"
          />
        </div>

        <footer className="mt-16 text-center text-slate-500 text-sm flex items-center justify-center gap-4">
          <span className="flex items-center gap-1">Stacks used<Code2 size={14} />:</span>
          <span>React 19</span>
          <span>•</span>
          <span>Tailwind v4</span>
          <span>•</span>
          <span>Vite 7</span>
        </footer>
      </div>
    </div>
  );
}