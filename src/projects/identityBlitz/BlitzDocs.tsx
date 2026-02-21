import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Variants } from "framer-motion";
import { useState } from "react";

// Define proper types
interface DocItem {
  label: string;
  href: string;
  isKnowledgeBase?: boolean; // Make it optional
}

interface DocSection {
  title: string;
  items: DocItem[];
}

// Documentation sections data with proper typing
const DOC_SECTIONS: DocSection[] = [
  {
    title: "Specification",
    items: [
      { label: "Blitz Identity Provider Product overview and functional specification", href: "#" }
    ]
  },
  {
    title: "Update",
    items: [
      { label: "The step-by-step instructions on how to update Blitz Identity Provider", href: "#" }
    ]
  },
  {
    title: "Administration",
    items: [
      { label: "Blitz Identity Provider system requirements, deployment and configuration in different environments", href: "#" }
    ]
  },
  {
    title: "Integration",
    items: [
      { label: "Technical information on how to connect applications to Blitz Identity Provider", href: "#" }
    ]
  },
  {
    title: "Modules",
    items: [
      { label: "Information on the Blitz Keeper and Blitz Panel add-ons", href: "#" }
    ]
  },
  {
    title: "Клиентам",
    items: [
      { 
        label: "База знаний. Примеры подключения приложений, инструкции от инженеров и др.", 
        href: "#",
        isKnowledgeBase: true // Now TypeScript knows this is valid
      }
    ]
  }
];

export default function BlitzDocs() {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

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
      <div className="max-w-5xl mx-auto px-6">
        {/* Back button and language toggle */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
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

          {/* Language toggle */}
          <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                language === 'en' 
                  ? 'bg-cyan-400 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                language === 'ru' 
                  ? 'bg-cyan-400 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Русский
            </button>
          </div>
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
            className="bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 py-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Blitz Identity Provider
            </h1>
            <p className="text-cyan-50 text-lg max-w-2xl">
              Authentication server protecting user accounts with out-of-the-box, flexible, 
              customizable and best practice account protection features.
            </p>
          </motion.div>

          {/* Documentation sections */}
          <div className="p-8">
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8 text-lg"
            >
              The documentation consists of several sections, also accessible from the main menu:
            </motion.p>

            <div className="space-y-8">
              {DOC_SECTIONS.map((section) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className="border-l-4 border-cyan-400 pl-4"
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        {item.isKnowledgeBase ? (
                          <div className="space-y-2">
                            <a
                              href={item.href}
                              className="text-gray-600 hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                              <span className="font-medium">{item.label}</span>
                            </a>
                            <p className="text-sm text-gray-500 mt-2 pl-4 border-l-2 border-gray-200 italic">
                              Несмотря на то, что в базе знаний много открытой информации, 
                              некоторые сведения доступны только зарегистрированным клиентам. 
                              Для получения полного доступа обращайтесь по адресу{' '}
                              <a 
                                href="mailto:support@idblitz.ru"
                                className="text-cyan-600 hover:text-cyan-700 font-medium not-italic hover:underline"
                              >
                                support@idblitz.ru
                              </a>
                            </p>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="text-gray-600 hover:text-cyan-600 transition-colors inline-flex items-center gap-2 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                            <span className="font-medium">{item.label}</span>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Next section navigation */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between"
            >
              <span className="text-gray-400">← Previous</span>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold group"
              >
                <span>Next</span>
                <span className="text-gray-900 font-normal mx-2">→</span>
                <span className="text-gray-700 group-hover:text-cyan-600 transition-colors">
                  Blitz Identity Provider functional specification
                </span>
              </a>
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