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

  // Force Dark Mode on html element permanently
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

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
      ? 'Leonardo_Secotaro_CV_English.pdf'
      : 'Leonardo_Secotaro_CV.pdf';
    const link = document.createElement('a');
    link.href = `/${cvFile}`;
    link.download = cvFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 dark">
      <AnimatePresence>
        {isLoading && <PageSkeleton />}
      </AnimatePresence>
      
      {/* Dynamic Header Navbar */}
      <Navbar
        onDownloadCV={handleDownloadCV}
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
