import React from 'react';
import LandingHero from '../components/LandingHero';
import { Users, Shield, Zap, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home({ onStartPlan, onOpenHowItWorks, onLoadPreset }) {
  return (
    <div>
      {/* Hero Section */}
      <LandingHero
        onStartPlan={onStartPlan}
        onOpenHowItWorks={onOpenHowItWorks}
        onLoadPreset={onLoadPreset}
      />

      {/* Value Proposition Grid */}
      <section style={{ padding: '4rem 0', background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>
              Built for Group Travel
            </span>
            <h2 style={{ fontSize: '2.1rem', marginBottom: '0.5rem' }}>
              Why Student Groups Choose TRIPNEX
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Zero awkward money conversations. Zero chaotic WhatsApp plans. 100% intelligent group coordination.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}>
            <div className="card" style={{ padding: '1.75rem', background: 'var(--bg-light)', border: 'none' }}>
              <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Zap size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Instant Day-by-Day Logistics</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                From Koyambedu bus stands to French quarter homestays, all inter-city and local transit legs are pre-calculated with exact student tariffs.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem', background: 'var(--bg-light)', border: 'none' }}>
              <div style={{ background: 'var(--success-bg)', color: 'var(--success)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Shield size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Fair Share Expense Engine</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Everyone pays different items during a trip. TRIPNEX aggregates balances in real-time and outputs minimal, debt-free settlement recommendations.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem', background: 'var(--bg-light)', border: 'none' }}>
              <div style={{ background: 'var(--purple-bg)', color: 'var(--purple)', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Adaptive Mid-Trip AI</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Budget slashed midway or running 1 hour behind? One tap triggers instant re-balancing without wrecking the rest of your vacation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-navy) 0%, #0c2d6e 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            color: '#ffffff',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#ffffff', marginBottom: '0.75rem' }}>
              Ready to plan your next epic group trip?
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              No spreadsheets, no math headaches. Auto-arrange dates, stays, budget splits, and activities in under 30 seconds.
            </p>
            <button
              type="button"
              onClick={onStartPlan}
              className="btn btn-primary btn-lg"
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', boxShadow: '0 0 25px rgba(22, 119, 255, 0.5)' }}
            >
              <Sparkles size={20} />
              ✨ Plan My Trip Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
