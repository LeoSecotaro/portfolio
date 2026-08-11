import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, Sparkles, Globe } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function ContactSection({ onDownloadCV }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    // Fire festive confetti explosion!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contacto" className="w-full scroll-mt-36 py-36 sm:py-48 relative overflow-hidden flex flex-col items-center">
      
      {/* Glow orb */}
      <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="section-heading flex flex-col max-w-3xl mx-auto mb-24 sm:mb-28">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            Iniciemos una Conversación
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4 text-center">
            Contacto & Oportunidades
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed text-center max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o buscas sumar un Ingeniero Full Stack / Data a tu equipo?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Direct Contact Info Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-7">
            
            {/* LinkedIn Card */}
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card card-padding glass-panel border border-white/15 flex items-center gap-5 hover:border-blue-500/50 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                <LinkedinIcon className="w-7 h-7" />
              </div>
              <div className="px-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">Perfil de LinkedIn</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  leonardo-secotaro-ianardi
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${personalDetails.email}`}
              className="apple-card card-padding glass-panel border border-white/15 flex items-center gap-5 hover:border-blue-500/50 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div className="px-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">Correo Electrónico</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {personalDetails.email}
                </span>
              </div>
            </a>

            {/* Phone / WhatsApp Card */}
            <a
              href={`https://wa.me/${personalDetails.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card card-padding glass-panel border border-white/15 flex items-center gap-5 hover:border-emerald-500/50 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div className="px-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">Teléfono / WhatsApp</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {personalDetails.phone}
                </span>
              </div>
            </a>

            {/* Download CV Banner Card */}
            <div className="apple-card card-padding glass-panel border border-blue-500/40 bg-blue-600/10 flex items-center justify-between gap-4">
              <div className="px-1">
                <h4 className="font-bold text-white text-base mb-1">Curriculum Vitae Unificado</h4>
                <p className="text-xs sm:text-sm text-slate-300">Descarga la versión PDF lista para imprimir.</p>
              </div>
              <button
                onClick={onDownloadCV}
                className="apple-btn-primary py-3 px-5 text-xs sm:text-sm flex items-center gap-2 shrink-0 font-semibold mr-1"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>PDF</span>
              </button>
            </div>

          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/15">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-base text-slate-200 max-w-md mx-auto">
                  Gracias por comunicarte con Leonardo. Responderé a tu correo a la brevedad posible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                    Asunto
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Consulta laboral / Proyecto web / Propuesta"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider mb-2 font-semibold">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full apple-btn-primary py-4 text-base font-semibold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
