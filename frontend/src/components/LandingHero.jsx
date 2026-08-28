import React from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Users, Wallet, RefreshCw, MapPin, Calendar, Check, ChevronRight } from 'lucide-react';

export default function LandingHero({ onStartPlan, onOpenHowItWorks, onLoadPreset }) {
  const presets = [
    {
      destination: "Pondicherry",
      starting_location: "Chennai",
      duration: "3 Days / 2 Nights",
      dates: "Sept 12 — 14, 2026",
      travelers: 5,
      budget: 20000,
      perPerson: "₹4,000",
      tag: "Judge Favorite",
      emoji: "🏖️",
      highlights: "Rock Beach • French Quarter • Auroville • Paradise Speedboat"
    },
    {
      destination: "Goa",
      starting_location: "Bangalore",
      duration: "3 Days / 2 Nights",
      dates: "Oct 2 — 4, 2026",
      travelers: 4,
      budget: 28000,
      perPerson: "₹7,000",
      tag: "Trending",
      emoji: "🌴",
      highlights: "Anjuna Cliffs • Aguada Fort • Water Sports • Latin Quarter"
    },
    {
      destination: "Manali",
      starting_location: "Delhi",
      duration: "4 Days / 3 Nights",
      dates: "Nov 14 — 17, 2026",
      travelers: 4,
      budget: 32000,
      perPerson: "₹8,000",
      tag: "Mountain Trek",
      emoji: "🏔️",
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
            <span>AI-POWERED GROUP TRAVEL COPILOT</span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            color: 'var(--primary-navy)'
          }}>
            Your next journey,<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--electric-blue) 0%, var(--sky-blue) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              planned intelligently.
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
            Plan routes, stays, activities and group spending in one place. Auto-arranges day-wise itineraries with instant per-person cost split and adaptive real-time optimization.
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
              ✨ Plan My Trip
            </button>

            <button 
              type="button"
              onClick={onOpenHowItWorks}
              className="btn btn-secondary btn-lg"
              style={{ fontSize: '1.05rem', padding: '0.95rem 1.8rem' }}
            >
              See how it works
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
              <h3 style={{ fontSize: '1.15rem' }}>1. PLAN</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Smart route planning, synchronized transport, verified student stays, and curated day-wise activities.
            </p>
          </div>

          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--sky-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--sky-blue-light)', color: '#0284c7', padding: '0.6rem', borderRadius: '10px' }}>
                <Compass size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>2. TRAVEL</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Real-time group timeline, transit departure schedules, check-in alerts, and navigation links.
            </p>
          </div>

          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--success)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '0.6rem', borderRadius: '10px' }}>
                <Wallet size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>3. SPEND</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Automated per-person splits, live remaining budget gauges, and 1-click settlement recommendations.
            </p>
          </div>

          <div className="card card-hover" style={{ padding: '1.5rem', borderTop: '4px solid var(--purple)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ background: 'var(--purple-bg)', color: 'var(--purple)', padding: '0.6rem', borderRadius: '10px' }}>
                <RefreshCw size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>4. ADAPT</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Live AI optimization when budget changes, trains get delayed, or group size changes midway.
            </p>
          </div>
        </div>

        {/* 1-Click Demo Presets Section */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.35rem' }}>Instant Demo Presets</span>
              <h2 style={{ fontSize: '1.65rem' }}>Explore Popular Student Getaways</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Click any card to inspect a generated itinerary immediately.
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
                style={{ padding: '1.65rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => onLoadPreset(p.destination)}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{p.emoji}</span>
                    <span className="badge badge-blue">{p.tag}</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>
                    {p.destination}
                  </h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>From {p.starting_location}</span>
                    <span>•</span>
                    <span>{p.duration}</span>
                  </div>

                  <div style={{ background: 'var(--bg-light)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Total Group Budget:</span>
                      <span style={{ fontWeight: 700 }}>₹{p.budget.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Per Person ({p.travelers} pax):</span>
                      <span style={{ fontWeight: 700, color: 'var(--electric-blue)' }}>{p.perPerson}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    <strong>Highlights:</strong> {p.highlights}
                  </p>
                </div>

                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>Launch Itinerary</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
