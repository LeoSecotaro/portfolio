import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ChevronRight, Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const navItems = [
  { id: 'home', href: '#hero' },
  { id: 'profile', href: '#perfil' },
  { id: 'experience', href: '#experiencia' },
  { id: 'projects', href: '#proyectos' },
  { id: 'skills', href: '#habilidades' },
  { id: 'education', href: '#educacion' },
  { id: 'contact', href: '#contacto' },
  { id: 'terminal', href: '#terminal' },
];

export default function Navbar({ onDownloadCV }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 sm:py-6 transition-all duration-300 bg-black/80 backdrop-blur-2xl border-b border-white/15">
      <div className="section-container flex items-center justify-between gap-4">
        
        {/* Apple Minimalist Logo - Enlarged */}
        <a 
          href="#hero" 
          className="flex items-center gap-3.5 group cursor-pointer text-decoration-none shrink-0"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 p-[1.5px] shadow-xl shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
              <span className="font-extrabold text-base tracking-tighter text-white">LS</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
              Leonardo Secotaro
            </span>
            <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase font-mono whitespace-nowrap">
              Ingeniero ISI
            </span>
          </div>
        </a>

        {/* Desktop Dynamic Island Nav - Ultra Wide Selector & Active Pill */}
        <nav className="navbar-selector hidden lg:flex items-center rounded-full glass-pill shadow-2xl border border-white/25 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-selector-pill relative text-sm font-extrabold rounded-full transition-all duration-300 whitespace-nowrap shrink-0 flex items-center justify-center ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 border border-blue-300/60 rounded-full shadow-2xl shadow-blue-500/60"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 px-2 tracking-wide">{t(`nav.${item.id}`)}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Download CV & Mobile Menu) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLanguage}
            className="language-toggle inline-flex items-center justify-center gap-1.5 rounded-full glass-pill border border-white/20 text-xs font-bold text-slate-200 hover:text-white hover:border-blue-400/60 transition-colors"
            aria-label={t('nav.language')}
            title={t('nav.language')}
          >
            <Languages className="w-4 h-4 text-blue-400" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Download CV CTA - Enlarged */}
          <button
            onClick={onDownloadCV}
            className="navbar-cv hidden sm:inline-flex apple-btn-primary text-sm font-bold shadow-xl shadow-blue-600/35 whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>{t('nav.download')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-full glass-pill text-slate-300 hover:text-white"
            aria-label={t('nav.menu')}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 p-5 rounded-2xl glass-panel border border-white/15 shadow-2xl flex flex-col gap-2 bg-black/90 backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 text-base font-medium text-slate-100 transition-colors"
              >
                <span>{t(`nav.${item.id}`)}</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadCV();
              }}
              className="mt-3 w-full apple-btn-primary py-3.5 text-base font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>{t('nav.download')}</span>
            </button>
            <button
              onClick={toggleLanguage}
              className="mt-2 w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-slate-200 flex items-center justify-center gap-2"
            >
              <Languages className="w-4 h-4 text-blue-400" />
              {language === 'es' ? 'English' : 'Español'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
