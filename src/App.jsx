import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MetricHighlights from './components/MetricHighlights';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {

  // Force Dark Mode on html element permanently
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  // Download CV function
  const handleDownloadCV = () => {
    // Fire confetti effect
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    const link = document.createElement('a');
    link.href = '/Leonardo_Secotaro_CV_Unificado.pdf';
    link.download = 'Leonardo_Secotaro_CV_Unificado.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 dark">
      
      {/* Dynamic Header Navbar */}
      <Navbar
        onDownloadCV={handleDownloadCV}
      />

      {/* Main Single Page Content with Generous Section Spacing */}
      <main className="flex flex-col gap-24 sm:gap-36 md:gap-48 pb-20">
        <HeroSection onDownloadCV={handleDownloadCV} />
        <MetricHighlights />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <InteractiveTerminal onDownloadCV={handleDownloadCV} />
        <ContactSection onDownloadCV={handleDownloadCV} />
      </main>

      {/* Apple Minimalist Footer */}
      <Footer />
    </div>
  );
}
