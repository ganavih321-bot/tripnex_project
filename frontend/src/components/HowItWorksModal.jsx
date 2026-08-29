import React from 'react';
import { X, Sparkles, MapPin, Compass, Wallet, RefreshCw, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorksModal({ isOpen, onClose, onStartPlan }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const steps = [
    {
      step: "01",
      icon: MapPin,
      color: "var(--electric-blue)",
      bg: "var(--electric-blue-light)",
      title: "Input Destinations, Group & Budget",
      desc: "Specify your destination, origin, dates, number of travelers, and total spending limit. Add style preferences (Budget, Balanced, Comfort) and specific group interests like beaches, heritage, or nightlife."
    },
    {
      step: "02",
      icon: Compass,
      color: "var(--sky-blue)",
      bg: "var(--sky-blue-light)",
      title: "AI Co-pilot Generates Day-Wise Itinerary",
      desc: "TRIPNEX auto-arranges transport hops (inter-city bus/trains and local autos/scooters), verified student stays, and time-spaced activities so you never rush between locations."
    },
    {
      step: "03",
      icon: Wallet,
      color: "var(--success)",
      bg: "var(--success-bg)",
      title: "Live Group Expense & Split Engine",
      desc: "Tracks who paid for what in real-time, calculates exact fair shares, and outputs simple settlement transactions (e.g. 'Rahul should receive ₹380 from Ananya') to prevent awkward math at the end."
    },
    {
      step: "04",
      icon: RefreshCw,
      color: "var(--purple)",
      bg: "var(--purple-bg)",
      title: "Adaptive Re-Optimization (Killer Feature)",
      desc: "Train delayed? Budget slashed? Someone couldn't make it? Tap '✨ Optimize Trip' to instantly recalculate stays, substitute costly activities with free gems, and regenerate the plan without starting over."
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px', padding: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.5rem', borderRadius: '10px' }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.4rem' }}>{t('nav_how_it_works', 'How TRIPNEX Works')}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>The 4-stage intelligent student travel loop</p>
            </div>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="btn btn-ghost btn-icon"
            style={{ color: 'var(--text-muted)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: s.bg,
                  color: s.color,
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: 700,
                  fontSize: '1rem'
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)' }}>STEP {s.step}</span>
                    <h3 style={{ fontSize: '1.05rem' }}>{s.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <button type="button" onClick={onClose} className="btn btn-secondary">
            {t('opt_btn_cancel', 'Close')}
          </button>
          <button 
            type="button" 
            onClick={() => {
              onClose();
              onStartPlan();
            }} 
            className="btn btn-primary"
          >
            <Sparkles size={16} />
            {t('hero_cta_primary', 'Try Planner Now')}
          </button>
        </div>
      </div>
    </div>
  );
}
