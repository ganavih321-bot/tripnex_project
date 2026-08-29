import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, CheckCircle2, ShieldCheck, RefreshCw, Layers, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TripArchitect({ onPlanClick }) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(2); // 1, 2, 3

  const steps = [
    {
      step: 1,
      tag: 'INPUT',
      title: 'Your Group Raw Idea',
      badge: 'Step 1: The Request',
      content: [
        '📍 Destination: Bali, Indonesia',
        '👥 Group: 5 College Friends',
        '💰 Total Budget: ₹30,000 max',
        '🏄 Vibe: Surf, Sunsets, Cafes'
      ],
      desc: 'Raw student inputs without tedious spreadsheets or chaotic group chat arguments.'
    },
    {
      step: 2,
      tag: 'AI ENGINE',
      title: 'TRIPNEX AI Architecture',
      badge: 'Step 2: Intelligent Synthesis',
      content: [
        '⚡ Sequential route cluster matching',
        '🏨 Student verified villa with late checkout',
        '🚌 Inter-city transport & coastal scooty split',
        '📊 Real-time dynamic budget guardrails'
      ],
      desc: 'Our deterministic algorithms organize activities, reduce travel overhead, and balance costs.'
    },
    {
      step: 3,
      tag: 'OUTPUT',
      title: 'Your Perfect Execution Plan',
      badge: 'Step 3: Day-Wise Reality',
      content: [
        '✨ 12 Curated stops with timing buffers',
        '💳 Exact equal split: ₹5,700 / person',
        '🛡️ 24/7 SOS & Emergency hospital routing',
        '📸 Auto-generated trip memory timeline'
      ],
      desc: 'Demo-ready, synchronized travel blueprint accessible in 6 languages across all devices.'
    }
  ];

  return (
    <section style={{ padding: '3.5rem 0', margin: '2rem 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
        <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>
          <Sparkles size={12} /> THE AI ARCHITECT
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', color: 'var(--primary-navy)' }}>
          From Rough Idea to Flawless Journey
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          See how TRIPNEX synthesizes chaotic group travel variables into a structured, debt-free adventure in seconds.
        </p>
      </div>

      {/* 3 Step Interactive Workflow Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        alignItems: 'stretch'
      }}>
        {steps.map((s, idx) => {
          const isActive = activeStep === s.step;
          return (
            <div
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className="card card-hover"
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-xl)',
                background: isActive ? 'var(--card-bg)' : 'var(--bg-light)',
                border: isActive ? '2px solid var(--electric-blue)' : '1px solid var(--border-color)',
                boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: isActive ? 'var(--electric-blue)' : 'var(--text-muted)',
                    background: isActive ? 'var(--electric-blue-light)' : 'rgba(0,0,0,0.04)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '99px'
                  }}>
                    {s.badge}
                  </span>

                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-light)' }}>
                    0{s.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>

                {/* Content Box */}
                <div style={{
                  background: isActive ? 'var(--bg-light)' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1rem',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {s.content.map((item, cIdx) => (
                    <div key={cIdx} style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} color="var(--electric-blue)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {s.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                  Click to inspect
                </span>
                <span style={{ color: isActive ? 'var(--electric-blue)' : 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.8rem', fontWeight: 700 }}>
                  Stage {s.step} <ArrowRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
