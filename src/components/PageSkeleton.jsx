import React from 'react';
import { motion } from 'framer-motion';

const Bone = ({ className = '' }) => <div className={`skeleton-bone ${className}`} />;

export default function PageSkeleton() {
  return (
    <motion.div
      className="page-skeleton"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      role="status"
      aria-label="Cargando portafolio"
    >
      <div className="skeleton-navbar">
        <div className="skeleton-nav-inner">
          <Bone className="skeleton-logo" />
          <div className="skeleton-brand">
            <Bone className="skeleton-line skeleton-line-brand" />
            <Bone className="skeleton-line skeleton-line-caption" />
          </div>
          <div className="skeleton-nav-links">
            {[1, 2, 3, 4, 5, 6].map((item) => <Bone key={item} className="skeleton-nav-pill" />)}
          </div>
          <Bone className="skeleton-download" />
        </div>
      </div>

      <div className="skeleton-main">
        <div className="skeleton-hero">
          <div className="skeleton-copy">
            <Bone className="skeleton-line skeleton-eyebrow" />
            <Bone className="skeleton-line skeleton-title skeleton-title-short" />
            <Bone className="skeleton-line skeleton-title" />
            <Bone className="skeleton-line skeleton-text" />
            <Bone className="skeleton-line skeleton-text" />
            <Bone className="skeleton-line skeleton-text skeleton-text-short" />
            <div className="skeleton-actions">
              <Bone className="skeleton-action" />
              <Bone className="skeleton-action skeleton-action-secondary" />
            </div>
          </div>

          <div className="skeleton-profile-card">
            <div className="skeleton-profile-top">
              <div className="skeleton-dots">
                <Bone className="skeleton-dot" />
                <Bone className="skeleton-dot" />
                <Bone className="skeleton-dot" />
              </div>
              <Bone className="skeleton-line skeleton-profile-label" />
            </div>
            <div className="skeleton-profile-person">
              <Bone className="skeleton-avatar" />
              <div className="skeleton-profile-name">
                <Bone className="skeleton-line skeleton-line-brand" />
                <Bone className="skeleton-line skeleton-line-caption" />
              </div>
            </div>
            {[1, 2, 3].map((item) => <Bone key={item} className="skeleton-profile-row" />)}
          </div>
        </div>

        <div className="skeleton-metrics">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="skeleton-metric-card">
              <Bone className="skeleton-line skeleton-metric-value" />
              <Bone className="skeleton-line skeleton-metric-label" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">Cargando contenido…</span>
    </motion.div>
  );
}
