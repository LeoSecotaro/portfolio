import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PageSkeleton from './components/PageSkeleton';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const { language } = useLanguage();

  useEffect(() => {
    let loadingTimer;
    const finishLoading = () => {
      loadingTimer = window.setTimeout(() => setIsLoading(false), 650);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      window.clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const isLight = theme === 'light';

    root.classList.toggle('dark', !isLight);
    root.classList.toggle('light', isLight);
    root.dataset.theme = theme;
    body.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.setProperty('--bg-main', isLight ? '#ccc5b7' : '#0a0a0a');
    root.style.setProperty('--bg-surface', isLight ? '#ffffff' : '#171717');
    root.style.setProperty('--bg-surface-elevated', isLight ? '#ffffff' : '#171717');
    root.style.setProperty('--text-main', isLight ? '#2d2a26' : '#fafafa');
    root.style.setProperty('--text-muted', isLight ? '#5f5a52' : '#a3a3a3');
    root.style.setProperty('--text-subtle', isLight ? '#736d63' : '#a3a3a3');
    root.style.setProperty('--accent-blue', isLight ? '#6f5d44' : '#6366f1');
    root.style.setProperty('--accent-blue-hover', isLight ? '#6f5d44' : '#818cf8');
    root.style.setProperty('--glass-bg', isLight ? 'rgba(255, 255, 255, 0.86)' : 'rgba(23, 23, 23, 0.86)');
    root.style.setProperty('--glass-border', isLight ? 'rgba(111, 93, 68, 0.24)' : 'rgba(250, 250, 250, 0.12)');
    root.style.setProperty('--border-subtle', isLight ? 'rgba(111, 93, 68, 0.22)' : 'rgba(250, 250, 250, 0.1)');
    root.style.setProperty('--border-strong', isLight ? 'rgba(111, 93, 68, 0.68)' : 'rgba(99, 102, 241, 0.55)');
    root.style.setProperty('--card-hover-glow', isLight ? 'rgba(111, 93, 68, 0.2)' : 'rgba(99, 102, 241, 0.18)');
    root.style.backgroundColor = isLight ? '#ccc5b7' : '#0a0a0a';
    root.style.color = isLight ? '#2d2a26' : '#fafafa';
    body.style.backgroundColor = isLight ? '#ccc5b7' : '#0a0a0a';
    body.style.color = isLight ? '#2d2a26' : '#fafafa';

    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  // Always open the portfolio from its hero section rather than restoring a prior scroll position.
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#hero`);

    const scrollToHero = () => {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      document.getElementById('hero')?.scrollIntoView({ block: 'start' });
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };

    const frameId = window.requestAnimationFrame(scrollToHero);
    const timeoutId = window.setTimeout(scrollToHero, 100);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  // Download CV function
  const handleDownloadCV = () => {
    const cvFile = language === 'en'
      ? 'Leonardo_Secotaro_CV_EN.pdf'
      : 'Leonardo_Secotaro_CV_ES.pdf';
    const link = document.createElement('a');
    link.href = `/${cvFile}`;
    link.download = cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`portfolio-app min-h-screen ${theme === 'dark' ? 'dark bg-black text-slate-100' : 'light light-theme-root'}`}
      data-theme={theme}
      style={{
        backgroundColor: theme === 'light' ? '#ccc5b7' : '#0a0a0a',
        color: theme === 'light' ? '#2d2a26' : '#fafafa'
      }}
    >
      <AnimatePresence>
        {isLoading && <PageSkeleton />}
      </AnimatePresence>
      
      {/* Dynamic Header Navbar */}
      <Navbar
        onDownloadCV={handleDownloadCV}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Single Page Content with Generous Section Spacing */}
      <main className="flex flex-col gap-12 sm:gap-16 md:gap-20 pb-16">
        <HeroSection onDownloadCV={handleDownloadCV} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection onDownloadCV={handleDownloadCV} />
        <InteractiveTerminal onDownloadCV={handleDownloadCV} />
      </main>

      {/* Apple Minimalist Footer */}
      <Footer />
    </div>
  );
}
