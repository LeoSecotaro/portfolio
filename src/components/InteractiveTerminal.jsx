import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Sparkles, CornerDownLeft, Trash2, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

const initialOutput = [
  { type: 'system', text: ' Leonardo Secotaro Pro Terminal (v2.6.0-ISI)' },
  { type: 'system', text: 'Escribe "help" o selecciona una de las sugerencias rápidas para consultar datos.' }
];

export default function InteractiveTerminal({ onDownloadCV }) {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(initialOutput);
  const terminalOutputRef = useRef(null);

  useEffect(() => {
    const terminalOutput = terminalOutputRef.current;
    if (terminalOutput) {
      terminalOutput.scrollTo({ top: terminalOutput.scrollHeight, behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Comandos Disponibles:
  - info     : Muestra datos personales y título profesional.
  - skills   : Lista el stack tecnológico principal.
  - projects : Muestra los 4 proyectos destacados (HomeFixing, RAG, ETL, SOC).
  - cv       : Descarga directamente el curriculum en PDF.
  - contact  : Muestra la información de contacto directo.
  - clear    : Limpia la pantalla del terminal.`
        });
        break;

      case 'info':
        newHistory.push({
          type: 'output',
          text: `Nombre     : ${personalDetails.name}
Título     : ${personalDetails.title}
Ubicación  : ${personalDetails.location}
LinkedIn   : ${personalDetails.linkedin}
Email      : ${personalDetails.email}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Full Stack]  : Python, Ruby on Rails, React.js, JavaScript, HTML5/CSS3, REST APIs
[Data & AI]   : Apache Airflow, ETL Pipelines, LangChain, Neo4j, Scikit-Learn
[Bases Datos] : SQL, MySQL, Neo4j Graph DB
[Seguridad]   : Wireshark, Nmap, Snort, Ettercap, Linux (Ubuntu)`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. HomeFixing (Rails + React + MySQL) — Red social de servicios del hogar.
2. Sistema RAG (Python + LangChain + Neo4j) — IA generativa sobre planes de estudio.
3. ETL Pipeline (Apache Airflow + TMDB API) — Ingesta masiva de +10,000 registros.
4. SOC & Redes (Wireshark + Nmap + Linux) — Monitoreo de tráfico y hardening.`
        });
        break;

      case 'cv':
        onDownloadCV();
        newHistory.push({
          type: 'output',
          text: '✓ Iniciando descarga del currículum de Leonardo Secotaro en formato PDF...'
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email    : ${personalDetails.email}
Teléfono : ${personalDetails.phone}
LinkedIn : ${personalDetails.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Comando no reconocido: "${cmdStr}". Escribe "help" para ver la lista de comandos disponibles.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="terminal-section w-full scroll-mt-36 pt-44 pb-36 sm:pt-56 sm:pb-48 relative bg-black/50 border-t border-white/10 flex flex-col items-center">
      <div className="section-container terminal-content">
        
        {/* Section Header */}
        <div className="section-heading flex flex-col max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-3 text-center">
            {t('section.terminalTitle')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 text-center max-w-xl mx-auto">
            {t('section.terminalDescription')}
          </p>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {['help', 'info', 'skills', 'projects', 'cv', 'contact', 'clear'].map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="terminal-command rounded-full bg-white/5 border border-white/15 font-mono text-slate-200 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer font-semibold"
            >
              $ {chip}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="terminal-window p-5 sm:p-7 shadow-2xl relative border border-white/20">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-slate-300 font-medium">bash — leonardo@utn-isi:~</span>
            <button
              onClick={() => setHistory([])}
              className="text-slate-400 hover:text-white transition-colors p-1"
              title="Clear terminal"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Console Stream */}
          <div ref={terminalOutputRef} className="h-72 sm:h-80 overflow-y-auto font-mono text-xs sm:text-base space-y-2.5 pr-2">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <div className="text-slate-400 font-semibold">{item.text}</div>
                )}
                {item.type === 'input' && (
                  <div className="text-blue-400 font-bold">{item.text}</div>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-mono font-normal">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
          </div>

          {/* Form Input Line */}
          <form onSubmit={handleSubmit} className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
            <span className="text-blue-400 font-mono font-bold text-sm sm:text-base">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe 'help' o un comando..."
              className="flex-1 bg-transparent border-none outline-none text-xs sm:text-base text-white font-mono placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-blue-600/40 hover:bg-blue-600 text-white transition-colors cursor-pointer"
            >
              <CornerDownLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
