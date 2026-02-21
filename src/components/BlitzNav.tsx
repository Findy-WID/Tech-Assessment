import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface BlitzNavProps {
  activePage?: "projects" | "solutions" | "company" | "contacts";
}

export default function BlitzNav({ activePage }: BlitzNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine active page from URL if not provided via props
  const getActiveFromPath = () => {
    const path = location.pathname;
    if (path.includes("/company")) return "company";
    if (path.includes("/projects")) return "projects";
    if (path.includes("/solutions")) return "solutions";
    if (path.includes("/contacts")) return "contacts";
    return undefined;
  };

  const active = activePage || getActiveFromPath();

  const navItems = [
    { label: "PROJECTS", path: "/project-1/projects", id: "projects" },
    { label: "SOLUTIONS", path: "/project-1/solutions", id: "solutions" },
    { label: "COMPANY", path: "/project-1/company", id: "company" },
    { label: "CONTACTS", path: "/project-1/contacts", id: "contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/project-1" className="flex items-center gap-2 shrink-0 group">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
          >
            B
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gray-800 font-semibold text-lg tracking-tight"
          >
            Identity Blitz
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                active === item.id ? "text-cyan-500" : "text-gray-600 hover:text-cyan-500"
              }`}
            >
              {item.label}
              {active === item.id ? (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                  layoutId="activeNav"
                />
              ) : (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              )}
            </Link>
          ))}
          
          {/* Search button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Search"
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-cyan-500 hover:border-cyan-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </motion.button>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu dropdown */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm font-medium ${
                active === item.id ? "text-cyan-500" : "text-gray-600 hover:text-cyan-500"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}