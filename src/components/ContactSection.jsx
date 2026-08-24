import React from 'react';
import { Mail, Phone, Download } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection({ onDownloadCV }) {
  const { t } = useLanguage();
  return (
    <section id="contacto" className="w-full scroll-mt-36 py-36 sm:py-48 relative overflow-visible flex flex-col items-center">
      <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15" />

      <div className="section-container relative z-10">
        <div className="section-heading flex flex-col max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            {t('section.contactEyebrow')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-4 text-center">
            {t('section.contactTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed text-center max-w-2xl mx-auto">
            {t('section.contactDescription')}
          </p>
        </div>

        <div className="contact-details max-w-3xl w-full">
          <div className="space-y-5 sm:space-y-6">
            <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="apple-card card-padding glass-panel border border-white/15 flex items-center gap-5 hover:border-blue-500/50 group w-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                <LinkedinIcon className="w-7 h-7" />
              </div>
              <div className="px-1 min-w-0">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">{t('common.linkedin')}</span>
                <span className="text-base font-bold text-white group-hover:text-blue-300 transition-colors break-words">leonardo-secotaro-ianardi</span>
              </div>
            </a>

            <a href={`mailto:${personalDetails.email}`} className="apple-card card-padding glass-panel border border-white/15 flex items-center gap-5 hover:border-indigo-500/50 group w-full">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div className="px-1 min-w-0">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">{t('common.email')}</span>
                <span className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors break-words">{personalDetails.email}</span>
              </div>
            </a>

            <a href={`https://wa.me/${personalDetails.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="apple-card card-padding glass-panel border border-white/15 flex items-center gap-5 hover:border-emerald-500/50 group w-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div className="px-1 min-w-0">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold mb-1">{t('common.phone')}</span>
                <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">{personalDetails.phone}</span>
              </div>
            </a>
          </div>

          <div className="apple-card card-padding glass-panel border border-blue-500/40 bg-blue-600/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-6">
            <div className="px-1">
              <h4 className="font-bold text-white text-lg mb-1">{t('common.cvTitle')}</h4>
            </div>
            <button onClick={onDownloadCV} className="apple-btn-primary py-3 px-6 text-sm flex items-center gap-2 shrink-0 font-semibold">
              <Download className="w-5 h-5" />
              <span>{t('common.downloadPdf')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
