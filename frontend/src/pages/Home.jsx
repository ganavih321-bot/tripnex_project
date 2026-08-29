import React from 'react';
import LandingHero from '../components/LandingHero';
import DestinationCarousel from '../components/DestinationCarousel';
import TripArchitect from '../components/TripArchitect';
import TripIntelligence from '../components/TripIntelligence';
import BudgetHeatmap from '../components/BudgetHeatmap';
import InteractiveMap from '../components/InteractiveMap';
import TripMemory from '../components/TripMemory';
import ScrollReveal from '../components/ScrollReveal';
import { 
  Users, Shield, Zap, Sparkles, MapPin, CheckCircle2, 
  ArrowRight, Compass, ShieldAlert, Camera, Wallet, Clock, Heart 
} from 'lucide-react';
import { defaultTripData } from '../data/demoTrip';
import { useLanguage } from '../context/LanguageContext';

export default function Home({ onStartPlan, onOpenHowItWorks, onLoadPreset, onOpenSafety }) {
  const { t } = useLanguage();

  return (
    <div className="home-long-scroll-container">
      {/* SECTION 1: HERO SECTION */}
      <LandingHero
        onStartPlan={onStartPlan}
        onOpenHowItWorks={onOpenHowItWorks}
        onLoadPreset={onLoadPreset}
      />

      <div className="container">
        {/* SECTION 2: EXPLORE THE WORLD (Horizontal Destination Gallery) */}
        <ScrollReveal delay={0.1}>
          <DestinationCarousel onSelectDestination={onLoadPreset} />
        </ScrollReveal>

        {/* SECTION 3: AI TRIP ARCHITECT (From Rough Idea to Flawless Plan) */}
        <ScrollReveal delay={0.15}>
          <TripArchitect onPlanClick={onStartPlan} />
        </ScrollReveal>

        {/* SECTION 4 & 5: SMART ITINERARY & TRIPNEX INTELLIGENCE PREVIEWS */}
        <ScrollReveal delay={0.2}>
          <div style={{ margin: '3rem 0' }}>
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
              <span className="badge badge-sky" style={{ marginBottom: '0.4rem' }}>
                <Sparkles size={12} /> INTELLIGENT EXECUTION
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)', color: 'var(--primary-navy)' }}>
                The AI Travel Command Center
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Live adaptive intelligence, dynamic route optimization, and transparent group budget heatmaps.
              </p>
            </div>

            {/* Live Intelligence Panel */}
            <TripIntelligence
              trip={defaultTripData}
              onTriggerOptimization={onStartPlan}
            />
          </div>
        </ScrollReveal>

        {/* SECTION 6: BUDGET HEATMAP & FINANCIAL TRANSPARENCY */}
        <ScrollReveal delay={0.15}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
            margin: '3.5rem 0'
          }}>
            <BudgetHeatmap
              budget={20000}
              spent={15700}
              remaining={4300}
              categories={defaultTripData.budget_categories}
              peopleCount={5}
            />

            {/* SECTION 7: INTERACTIVE MAP PREVIEW */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <span className="badge badge-navy" style={{ marginBottom: '0.3rem' }}>
                  GPS ROUTE ENGINE
                </span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                  Interactive Waypoints & Route Synchronization
                </h3>
              </div>

              <InteractiveMap
                destination="Pondicherry"
                startingLocation="Chennai"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 8: SAFETY MODE SPOTLIGHT */}
        <ScrollReveal delay={0.2}>
          <div style={{
            background: 'linear-gradient(135deg, #fef2f2 0%, var(--card-bg) 100%)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            margin: '3.5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ maxWidth: '540px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#dc2626',
                background: '#fee2e2',
                padding: '0.25rem 0.65rem',
                borderRadius: '99px',
                marginBottom: '0.6rem'
              }}>
                <ShieldAlert size={14} /> TRIPNEX SAFETY SYSTEM
              </span>

              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#991b1b', marginBottom: '0.5rem' }}>
                Travel with 100% Peace of Mind
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.5 }}>
                24/7 Verified Emergency Hospitals, Local Police Station contacts, instant SOS beacon with live GPS dispatch, and emergency contact alerts for every destination.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenSafety}
              className="btn btn-primary"
              style={{
                background: '#dc2626',
                borderColor: '#dc2626',
                padding: '0.85rem 1.75rem',
                fontSize: '1rem',
                boxShadow: '0 4px 18px rgba(220, 38, 38, 0.35)'
              }}
            >
              <ShieldAlert size={18} />
              <span>Launch Safety Command</span>
            </button>
          </div>
        </ScrollReveal>

        {/* SECTION 9: TRIP MEMORY & TRAVEL JOURNAL */}
        <ScrollReveal delay={0.15}>
          <div style={{ margin: '3.5rem 0' }}>
            <TripMemory trip={defaultTripData} />
          </div>
        </ScrollReveal>
      </div>

      {/* SECTION 10: FINAL CINEMATIC CTA */}
      <section style={{ padding: '6rem 0 5rem 0', background: 'linear-gradient(180deg, transparent 0%, var(--bg-light) 100%)' }}>
        <div className="container">
          <ScrollReveal delay={0.1}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-dark) 100%)',
              borderRadius: 'var(--radius-xl)',
              padding: '4rem 2.5rem',
              textAlign: 'center',
              color: '#ffffff',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background Accent */}
              <div style={{
                position: 'absolute',
                top: '-60px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '400px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <span className="badge badge-sky" style={{ marginBottom: '0.85rem', background: 'rgba(56, 189, 248, 0.2)', color: '#7dd3fc' }}>
                <Sparkles size={13} /> READY FOR TAKEOFF
              </span>

              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '0.75rem', fontWeight: 800 }}>
                WHERE WILL YOU GO NEXT?
              </h2>

              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto 2.25rem auto' }}>
                Join student groups traveling smarter. Auto-arrange dates, verified stays, activities, and debt-free equal splits in 30 seconds.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onStartPlan}
                  className="btn btn-primary btn-lg"
                  style={{
                    fontSize: '1.1rem',
                    padding: '1rem 2.5rem',
                    boxShadow: '0 0 25px rgba(22, 119, 255, 0.5)'
                  }}
                >
                  <Sparkles size={20} />
                  <span>PLAN MY NEXT TRIP ✈️</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
