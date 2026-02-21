import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlitzHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="font-sans antialiased">
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/project-1" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="text-gray-800 font-semibold text-lg tracking-tight">
              Identity Blitz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/project-1/projects" className="text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wide transition-colors">
              PROJECTS
            </Link>
            <Link to="/project-1/solutions" className="text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wide transition-colors">
              SOLUTIONS
            </Link>
            <Link to="/project-1/company" className="text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wide transition-colors">
              COMPANY
            </Link>
            <Link to="/project-1/contacts" className="text-sm font-medium text-gray-600 hover:text-gray-900 tracking-wide transition-colors">
              CONTACTS
            </Link>
            
            {/* Search button */}
            <button
              aria-label="Search"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
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
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            <Link to="/project-1/projects" className="text-sm font-medium text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link to="/project-1/solutions" className="text-sm font-medium text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              SOLUTIONS
            </Link>
            <Link to="/project-1/company" className="text-sm font-medium text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              COMPANY
            </Link>
            <Link to="/project-1/contacts" className="text-sm font-medium text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
              CONTACTS
            </Link>
          </div>
        )}
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen pt-16 bg-gradient-to-b from-[#dff4f8] via-[#e8f8fb] to-white flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-gray-600 font-medium mb-3 text-base">
                Authentication server for your organization
              </motion.p>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 uppercase tracking-tight">
                Blitz Identity
                <br />
                Provider
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-600 text-base leading-relaxed max-w-md mb-8">
                Use only one account to log in to all of the company's websites and
                mobile applications. Logging in requires authentication process – a
                check that the user is what he claims to be. Blitz Identity Provider
                makes this authentication process smoother and improves security.
              </motion.p>
              
              {/* Buttons - Each one individually coded for easy tweaking */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Link
                  to="/project-1/demo"
                  className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full uppercase text-sm tracking-widest transition-colors"
                >
                  Online-Demo
                </Link>

                <a
                  href="https://identityblitz.com/wp-content/uploads/2024/01/Blitz_Identity_Provider_Overview_2024_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-700 font-semibold uppercase text-sm tracking-widest underline underline-offset-4 transition-colors"
                >
                  Product Overview
                </a>

                <Link
                  to="/project-1/docs"
                  className="text-cyan-500 hover:text-cyan-700 font-semibold uppercase text-sm tracking-widest underline underline-offset-4 transition-colors"
                >
                  Documentation
                </Link>

                <a
                  href="https://identityblitz.com/products/blitz-identity-provider/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-700 font-semibold uppercase text-sm tracking-widest underline underline-offset-4 transition-colors"
                >
                  Download
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Login card graphic */}
            <div className="relative flex items-center justify-center">
              {/* Central login card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="relative w-72 h-52 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-3 border border-gray-100"
              >
                <div className="w-48 h-8 bg-gray-100 rounded-full flex items-center px-3 text-xs text-gray-400">
                  user@example.com
                </div>
                <div className="w-48 h-8 bg-gray-100 rounded-full flex items-center px-3 gap-1">
                  {[...Array(8)].map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
                  ))}
                </div>
                <button className="w-48 h-9 bg-cyan-400 rounded-full text-white font-bold text-sm uppercase tracking-widest">
                  LOG IN
                </button>
                
                {/* Play button overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute -right-6 -top-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-700 ml-1" />
                </motion.div>
              </motion.div>

              {/* Floating icons - Simplified but keeps the visual appeal */}
              <div className="absolute top-4 right-8 w-16 h-16 text-cyan-400 opacity-30">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="32" cy="32" r="28" />
                </svg>
              </div>
              <div className="absolute top-1/2 -right-4 w-12 h-12 text-cyan-400 opacity-30">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="20" y="4" width="24" height="36" rx="4" />
                </svg>
              </div>
              <div className="absolute bottom-4 right-4 w-14 h-14 text-cyan-400 opacity-30">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="24" height="24" rx="2" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURE CARDS ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow hover:-translate-y-1 duration-200">
                <div className="w-full h-28 bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">App launcher</p>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow hover:-translate-y-1 duration-200">
                <div className="w-full h-28 bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Secret codes</p>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow hover:-translate-y-1 duration-200">
                <div className="w-full h-28 bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Face or Touch ID</p>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow hover:-translate-y-1 duration-200">
                <div className="w-full h-28 bg-gray-50 rounded-xl mb-4 flex items-center justify-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Sign in with</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BLITZ IDENTITY SECTION ===== */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <hr className="border-gray-200 mb-16" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-cyan-500 mb-1">Blitz Identity Provider</h2>
                <p className="text-gray-700 text-lg mb-6">— on-premise IAM, CIAM, SSO, and MFA solution</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The product reinforces a company's internal IT infrastructure by
                enhancing user account security. It supports modern authentication
                protocols, including OpenID Connect, OAuth 2, SAML, WS-Federation,
                and RADIUS, and is compatible with popular operating systems and
                databases.
              </p>
            </div>

            {/* Protocol badges */}
            <div className="flex flex-wrap gap-3 mb-3">
              {["OIDC", "OAuth 2", "SAML", "WS-Fed", "RADIUS", "REST API", "LDAP"].map((label, idx) => (
                <div key={label} className="flex items-center gap-2 border border-cyan-300 rounded-xl px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-cyan-50 transition-colors cursor-pointer">
                  <span className="text-cyan-400 text-base font-mono w-5 text-center">
                    {["⟳", "A", "△", "⬡", "◎", "{}", "⋈"][idx]}
                  </span>
                  {label}
                </div>
              ))}
            </div>

            {/* Service badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {["IAM", "CIAM", "MFA", "SSO"].map((label, idx) => (
                <div key={label} className="flex items-center gap-2 border border-cyan-300 rounded-xl px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-cyan-50 transition-colors cursor-pointer">
                  <span className="text-cyan-400">{["🔑", "👤", "📱", "👥"][idx]}</span>
                  {label}
                </div>
              ))}
            </div>

            {/* App mockup */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-end justify-center min-h-80">
              <div className="relative w-full max-w-2xl mx-auto mt-8">
                <div className="bg-gray-900 rounded-t-2xl pt-3 px-3">
                  <div className="flex gap-1.5 mb-2 px-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="bg-white rounded-t-lg overflow-hidden h-56 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-white text-xs font-bold">B</div>
                      <span className="text-xs font-semibold text-gray-700">Identity Blitz</span>
                      <div className="flex-1 h-6 bg-gray-100 rounded-full mx-4" />
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {["Gmail", "Mail", "Salesforce", "Bitrix-24", "Google", "Outlook", "Confluence", "Jira"].map((app) => (
                        <div key={app} className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg" />
                          <span className="text-[9px] text-gray-500">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 h-3 rounded-b-sm" />
                <div className="bg-gray-700 h-1.5 w-3/4 mx-auto rounded-b-xl" />
              </div>

              {/* Phone mockup */}
              <div className="absolute left-12 bottom-0 w-28 bg-gray-900 rounded-[1.5rem] p-1 shadow-2xl">
                <div className="bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-[1.2rem] overflow-hidden h-44 p-3">
                  <p className="text-white text-xs font-bold mb-1">Greetings, user!</p>
                  <div className="bg-white bg-opacity-20 rounded-lg p-1.5 text-[8px] text-white">
                    <p className="font-semibold">Identity Blitz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR ADVANTAGES ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-gray-500 text-sm font-medium mb-10">Our advantages</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Advantage 1 */}
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-2xl font-black text-gray-800 leading-none">01</span>
                  <span className="w-0.5 h-8 bg-cyan-400 rounded-full" />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug whitespace-pre-line">One product<br />for all tasks</p>
              </div>

              {/* Advantage 2 */}
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-2xl font-black text-gray-800 leading-none">02</span>
                  <span className="w-0.5 h-8 bg-cyan-400 rounded-full" />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug whitespace-pre-line">Reliable<br />and customizable</p>
              </div>

              {/* Advantage 3 */}
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-2xl font-black text-gray-800 leading-none">03</span>
                  <span className="w-0.5 h-8 bg-cyan-400 rounded-full" />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug whitespace-pre-line">Easy<br />to set up</p>
              </div>

              {/* Advantage 4 */}
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-2xl font-black text-gray-800 leading-none">04</span>
                  <span className="w-0.5 h-8 bg-cyan-400 rounded-full" />
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug whitespace-pre-line">Supports<br />modern standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECT PORTFOLIO ===== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-gray-500 text-sm font-medium mb-10">Project portfolio</p>
            <div className="min-h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl text-gray-300 text-sm">
              Project cards go here
            </div>
            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 border border-gray-300 rounded-full text-sm text-gray-500 hover:bg-gray-50 uppercase tracking-widest font-medium transition-colors">
                All Projects
              </button>
            </div>
          </div>
        </section>

        {/* ===== QUESTIONS SECTION ===== */}
        <section className="py-20 bg-gradient-to-b from-[#dff4f8] to-[#e8f9fb]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Questions?</h2>
              <p className="text-gray-500">Contact us for more information about product and demo.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/project-1/contact"
                className="w-full md:w-64 text-center px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full uppercase text-sm tracking-widest transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/project-1/docs"
                className="w-full md:w-64 text-center px-8 py-4 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-semibold rounded-full uppercase text-sm tracking-widest transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer id="contacts" className="bg-[#2d2f31] text-gray-400 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-600">
            {/* Contacts */}
            <div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacts</p>
              <p className="text-gray-300 text-sm mb-1">+7 (499) 322-14-04</p>
              <p className="text-gray-500 text-xs mb-1">Pyatnitskaya st., 73, Moscow, 115054, Russian Federation</p>
              <p className="text-gray-400 text-sm mb-5">info@idblitz.com</p>
              <div className="flex gap-3">
                {/* YouTube */}
                <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                  </svg>
                </a>
                {/* Telegram */}
                <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.9 8.2-2 9.4c-.1.6-.5.8-1 .5l-2.8-2-1.3 1.3c-.2.2-.3.3-.6.3l.2-2.9 5-4.5c.2-.2 0-.3-.3-.1L6.3 14.4 3.6 13.6c-.6-.2-.6-.6.1-.9l11.6-4.5c.5-.1 1 .1.6.9v-.9z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Products</p>
              <ul className="space-y-2">
                <li><Link to="/project-1/products/blitz" className="text-sm hover:text-white">Blitz Identity Provider</Link></li>
                <li><Link to="/project-1/products/smart-card" className="text-sm hover:text-white">Blitz Smart Card Plugin</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Solutions</p>
              <ul className="space-y-2">
                <li><Link to="/project-1/solutions/sso" className="text-sm hover:text-white">Single Sign-On</Link></li>
                <li><Link to="/project-1/solutions/mfa" className="text-sm hover:text-white">Multifactor</Link></li>
                <li><Link to="/project-1/solutions/passwordless" className="text-sm hover:text-white">Passwordless</Link></li>
                <li><Link to="/project-1/solutions/brokering" className="text-sm hover:text-white">Identity Brokering</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</p>
              <ul className="space-y-2">
                <li><Link to="/project-1/company/about" className="text-sm hover:text-white">About us</Link></li>
                <li><Link to="/project-1/company/clients" className="text-sm hover:text-white">Clients</Link></li>
                <li><Link to="/project-1/company/projects" className="text-sm hover:text-white">Projects</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500">REAK SOFT, LLC © 2014 – 2026</p>
            <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 font-bold text-lg">
              B
            </div>
            <div className="flex items-center gap-4">
              <Link to="/project-1/privacy" className="text-gray-400 hover:text-white">Privacy Policy and Terms of Use</Link>
              <div className="flex gap-2 text-xs">
                <Link to="/project-1?lang=en" className="text-gray-400 hover:text-white">English</Link>
                <span className="text-gray-600">/</span>
                <Link to="/project-1?lang=ru" className="text-cyan-400 hover:text-cyan-300">Русский</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}