import React from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Users, Wallet, RefreshCw, MapPin, Calendar, Check, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import { getDestinationPhoto } from '../data/destinationImages';

export default function LandingHero({ onStartPlan, onOpenHowItWorks, onLoadPreset }) {
  const { t } = useLanguage();

  const presets = [
    {
      destination: "Pondicherry",
      starting_location: "Chennai",
      duration: "3 Days / 2 Nights",
      subtitle: "French Quarter • Rock Beach • Bohemian Cafes",
      travelers: 5,
      budget: 20000,
      perPerson: "₹4,000",
      tag: "Judge Favorite",
      image: getDestinationPhoto("pondicherry", "hero"),
      highlights: "Rock Beach • French Quarter • Auroville • Paradise Island"
    },
    {
      destination: "Goa",
      starting_location: "Bangalore",
      duration: "3 Days / 2 Nights",
      subtitle: "Island escapes • Beaches • Adventure",
      travelers: 4,
      budget: 28000,
      perPerson: "₹7,000",
      tag: "Trending",
      image: getDestinationPhoto("goa", "hero"),
      highlights: "Anjuna Cliffs • Aguada Fort • Water Sports • Latin Quarter"
    },
    {
      destination: "Manali",
      starting_location: "Delhi",
      duration: "4 Days / 3 Nights",
      subtitle: "Snow Peaks • Pine Trails • Mountain Cafes",
      travelers: 4,
      budget: 32000,
      perPerson: "₹8,000",
      tag: "Mountain Trek",
      image: getDestinationPhoto("manali", "hero"),
      highlights: "Solang Valley • Jogini Falls Trek • Old Manali Cafes • Snow Point"
    }
  ];

  return (
    <section style={{ padding: '3.5rem 0 5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Glows */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(22, 119, 255, 0.08) 50%, transparent 80%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          {/* Top Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '99px',
            background: 'var(--electric-blue-light)',
            color: 'var(--electric-blue)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            border: '1px solid rgba(22, 119, 255, 0.15)'
          }}>
            <Sparkles size={16} />
            <span>{t('hero_badge', 'AI-POWERED GROUP TRAVEL COPILOT')}</span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            color: 'var(--primary-navy)'
          }}>
            {t('hero_title_1', 'Your next journey,')}<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--electric-blue) 0%, var(--sky-blue) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {t('hero_title_2', 'planned intelligently.')}
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            maxWidth: '650px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {t('hero_subtitle', 'Plan routes, stays, activities and group spending in one place. Auto-arranges day-wise itineraries with instant per-person cost split and adaptive real-time optimization.')}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              type="button"
              onClick={onStartPlan}
              className="btn btn-primary btn-lg"
              style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}
            >
              <Sparkles size={20} />
              {t('hero_cta_plan', '✨ Plan My Trip')}
            </button>

            <button 
              type="button"
              onClick={onOpenHowItWorks}
              className="btn btn-secondary btn-lg"
              style={{ fontSize: '1.05rem', padding: '0.95rem 1.8rem' }}
            >
              {t('hero_cta_how', 'See how it works')}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Promise: PLAN → TRAVEL → SPEND → ADAPT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          margin: '3.5rem auto 4.5rem auto',
          maxWidth: '1100px'
        }}>
          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--electric-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.6rem', borderRadius: '10px' }}>
                <MapPin size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>{t('promise_plan_title', '1. PLAN')}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('promise_plan_desc', 'Smart route planning, synchronized transport, verified student stays, and curated day-wise activities.')}
            </p>
          </div>

          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--sky-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--sky-blue-light)', color: '#0284c7', padding: '0.6rem', borderRadius: '10px' }}>
                <Compass size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>{t('promise_travel_title', '2. TRAVEL')}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('promise_travel_desc', 'Real-time group timeline, transit departure schedules, check-in alerts, and navigation links.')}
            </p>
          </div>

          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--success)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '0.6rem', borderRadius: '10px' }}>
                <Wallet size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>{t('promise_spend_title', '3. SPEND')}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('promise_spend_desc', 'Automated per-person splits, live remaining budget gauges, and 1-click settlement recommendations.')}
            </p>
          </div>

          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--purple)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--purple-bg)', color: 'var(--purple)', padding: '0.6rem', borderRadius: '10px' }}>
                <RefreshCw size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>{t('promise_adapt_title', '4. ADAPT')}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('promise_adapt_desc', 'Live AI optimization when budget changes, trains get delayed, or group size changes midway.')}
            </p>
          </div>
        </div>

        {/* 1-Click Demo Presets Section */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.35rem' }}>
                {t('presets_badge', 'Instant Demo Presets')}
              </span>
              <h2 style={{ fontSize: '1.65rem' }}>
                {t('presets_title', 'Explore Popular Student Getaways')}
              </h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('presets_desc', 'Click any card to inspect a generated itinerary immediately.')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {presets.map((p, idx) => (
              <div 
                key={idx}
                className="card card-hover"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#ffffff',
                  border: '1px solid var(--border-color)'
                }}
                onClick={() => onLoadPreset(p.destination)}
              >
                {/* Visual Travel Photography Card Top */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={p.image}
                    alt={p.destination}
                    className="travel-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="cinematic-gradient-overlay" style={{
                    background: 'linear-gradient(180deg, rgba(7, 26, 61, 0.1) 0%, rgba(7, 26, 61, 0.88) 100%)'
                  }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)', color: 'var(--primary-navy)' }}>
                      {p.tag}
                    </span>
                    <span style={{ background: 'rgba(7, 26, 61, 0.75)', backdropFilter: 'blur(8px)', color: '#38bdf8', padding: '0.2rem 0.65rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {p.duration.split('/')[0]}
                    </span>
                  </div>

                  <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem', color: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                      {p.destination}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Body */}
                <div style={{ padding: '1.35rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ background: 'var(--bg-light)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t('preset_total_budget', 'Total Group Budget:')}</span>
                      <span style={{ fontWeight: 700, color: 'var(--primary-navy)' }}>₹{p.budget.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{t('preset_per_person', 'Per Person')} ({p.travelers} pax):</span>
                      <span style={{ fontWeight: 800, color: 'var(--electric-blue)' }}>{p.perPerson}</span>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Explore Itinerary →</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
