import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Download, Mail, ShieldCheck, 
  Database, Code2, Terminal, ExternalLink, FileText, CheckCircle2 
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function HeroSection({ onDownloadCV }) {
  // Mouse position state for 3D card tilt effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="hero-section relative w-full min-h-screen scroll-mt-36 pb-32 sm:pb-44 flex flex-col justify-start items-center overflow-hidden bg-grid-pattern"
    >
      {/* Radial Ambient Glow Orbs */}
      <div className="glow-orb top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20" />
      <div className="glow-orb top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/15" />
      <div className="glow-orb top-1/2 right-1/4 w-[450px] h-[450px] bg-cyan-600/15" />

      <div className="section-container relative z-10 space-y-20 sm:space-y-24">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-pill border border-blue-500/40 text-xs sm:text-sm font-semibold text-blue-200 shadow-2xl backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>{personalDetails.statusBadge}</span>
          </div>
        </motion.div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.18] mb-8">
              Leonardo <br />
              <span className="text-blue-gradient">Secotaro Ianardi</span>
            </h1>

            <p className="text-lg sm:text-2xl font-semibold text-slate-200 max-w-2xl mb-8 leading-relaxed">
              Ingeniero en Sistemas de Información especializado en desarrollo{' '}
              <span className="text-blue-400 font-bold">Full Stack</span>,{' '}
              <span className="text-indigo-400 font-bold">Ingeniería de Datos & RAG</span> e{' '}
              <span className="text-cyan-400 font-bold">Infraestructura SOC</span>.
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-12 leading-relaxed font-normal">
              Especialista en construir soluciones integrales con Python, Ruby on Rails y React.js,
              diseñando desde pipelines ETL automatizados con Airflow hasta modelos de lenguaje acoplados a grafos (Neo4j).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full mb-12 lg:mb-16">
              <a href="#proyectos" className="apple-btn-primary group text-sm sm:text-base py-3.5 px-6 font-semibold">
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#contacto" className="apple-btn-secondary text-sm sm:text-base py-3.5 px-6 font-semibold">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>Contactar Directo</span>
              </a>

              <button onClick={onDownloadCV} className="apple-btn-secondary text-sm sm:text-base py-3.5 px-6 font-semibold">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                <span>Descargar CV</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Card (Apple Pro Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="hero-profile-column lg:col-span-6 w-full flex justify-center"
          >
            <div className="hero-profile-card w-full max-w-xl apple-card glass-panel border border-white/20 relative group shadow-2xl overflow-hidden">
              
              {/* Inner Safe Container */}
              <div className="hero-profile-content">

                {/* Top Card Bar */}
                <div className="hero-profile-topbar flex items-center justify-between border-b border-white/10 gap-3">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300 font-semibold shrink-0">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>UTN ISI · Mendoza</span>
                  </div>
                </div>

                {/* Profile Card Header */}
                <div className="hero-profile-header flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shadow-xl shadow-blue-500/30 shrink-0">
                    LS
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                      Leonardo Secotaro
                    </h3>
                    <p className="text-xs text-blue-400 font-mono truncate mt-0.5">
                      @leonardo-secotaro-ianardi
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills inside 3D Card */}
                <div className="hero-profile-stack">
                  <div className="hero-profile-row rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-slate-300 font-medium text-xs sm:text-sm flex items-center gap-2 shrink-0">
                      <Code2 className="w-4 h-4 text-blue-400" /> Full Stack
                    </span>
                    <span className="text-blue-300 font-mono text-[11px] sm:text-xs font-semibold sm:text-right">
                      React · Rails · Python
                    </span>
                  </div>

                  <div className="hero-profile-row rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-slate-300 font-medium text-xs sm:text-sm flex items-center gap-2 shrink-0">
                      <Database className="w-4 h-4 text-indigo-400" /> Data & AI
                    </span>
                    <span className="text-indigo-300 font-mono text-[11px] sm:text-xs font-semibold sm:text-right">
                      Airflow · Neo4j · RAG
                    </span>
                  </div>

                  <div className="hero-profile-row rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-slate-300 font-medium text-xs sm:text-sm flex items-center gap-2 shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Security & Infra
                    </span>
                    <span className="text-emerald-300 font-mono text-[11px] sm:text-xs font-semibold sm:text-right">
                      SOC N1 · Wireshark · Linux
                    </span>
                  </div>
                </div>

                {/* Verified Status Footer */}
                <div className="hero-profile-footer border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-2">
                  <span className="flex items-center gap-2 text-emerald-400 font-semibold shrink-0">
                    <CheckCircle2 className="w-4 h-4" /> Título UTN ISI
                  </span>
                  <span className="font-mono text-slate-400 text-xs shrink-0">
                    Guaymallén, AR
                  </span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Independent Clean Divider Line with Generous Top and Bottom Margins */}
        <div className="w-full border-t border-white/15 my-20 sm:my-28" />

        {/* Ticker / Metrics Cards Grid */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            <div className="p-7 sm:p-9 rounded-2xl glass-panel border border-white/15 text-center flex flex-col justify-center items-center hover:border-blue-500/40 transition-all duration-300 min-h-[150px] shadow-xl">
              <span className="block text-3xl sm:text-4xl font-extrabold text-blue-400 font-heading tracking-tight mb-2.5">2021—2026</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 leading-normal block max-w-[200px]">UTN ISI Carrera Finalizada</span>
            </div>

            <div className="p-7 sm:p-9 rounded-2xl glass-panel border border-white/15 text-center flex flex-col justify-center items-center hover:border-indigo-500/40 transition-all duration-300 min-h-[150px] shadow-xl">
              <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-400 font-heading tracking-tight mb-2.5">+10,000</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 leading-normal block max-w-[200px]">Registros ETL Airflow</span>
            </div>

            <div className="p-7 sm:p-9 rounded-2xl glass-panel border border-white/15 text-center flex flex-col justify-center items-center hover:border-cyan-500/40 transition-all duration-300 min-h-[150px] shadow-xl">
              <span className="block text-3xl sm:text-4xl font-extrabold text-cyan-400 font-heading tracking-tight mb-2.5">RAG & Neo4j</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 leading-normal block max-w-[200px]">Modelos Grafos & LLM</span>
            </div>

            <div className="p-7 sm:p-9 rounded-2xl glass-panel border border-white/15 text-center flex flex-col justify-center items-center hover:border-emerald-500/40 transition-all duration-300 min-h-[150px] shadow-xl">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading tracking-tight mb-2.5">SOC N1</span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 leading-normal block max-w-[200px]">TryHackMe Cybersecurity</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
