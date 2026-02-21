import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Variants } from "framer-motion";

export default function BlitzDemo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/project-1" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-500 transition-colors group"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 py-6"
          >
            <h1 className="text-3xl font-bold text-white">Identity Blitz</h1>
            <p className="text-cyan-50 mt-1">Online Demo Access</p>
          </motion.div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* User Applications Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full"></span>
                User Applications
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span className="font-mono bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                    Test account: <span className="text-cyan-600 font-semibold">iivanov / K2JX8z6L</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                  {["SAML Test App", "OIDC Test App", "User Profile"].map((app) => (
                    <motion.button
                      key={app}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group"
                    >
                      <span className="font-medium text-gray-700 group-hover:text-cyan-600">{app}</span>
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Admin Application Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full"></span>
                Admin Application
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="font-mono bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                    Test account: <span className="text-cyan-600 font-semibold">admin / 1B2673b417</span>
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all group mt-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="3" y1="15" x2="21" y2="15"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-cyan-600">Admin Console</span>
                  </div>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Info note */}
            <motion.div 
              variants={itemVariants}
              className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600 shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="12" x2="12" y2="16"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <p className="text-sm text-amber-800">
                These are demo credentials for testing purposes. Feel free to explore all features with these test accounts.
              </p>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-100 px-8 py-4 bg-gray-50/50 text-center text-sm text-gray-500"
          >
            © 2025 OOO «REAK SOFT»
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}