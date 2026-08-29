import React, { useState } from 'react';
import { 
  Sparkles, Search, Compass, Calendar, Users, Wallet, 
  MapPin, ShieldAlert, Camera, ArrowRight, Brain, PlusCircle, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { getDestinationPhoto } from '../data/destinationImages';
import { FEATURED_DESTINATIONS } from '../components/DestinationCarousel';
import { useLanguage } from '../context/LanguageContext';

export default function Dashboard({ 
  currentTrip, 
  savedTrips = [], 
  onSelectTrip, 
  onStartPlan, 
  onOpenSafety, 
  onOpenMemories, 
  onOpenExplore 
}) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter trips based on search query
  const displayTrips = FEATURED_DESTINATIONS.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeTrip = currentTrip || savedTrips[0];
  const destName = activeTrip?.destination || 'Pondicherry';
  const heroPhoto = getDestinationPhoto(destName, 'hero');

  const budgetNum = Number(activeTrip?.budget || 20000);
  const spentNum = Number(activeTrip?.spent || 15700);
  const spentPct = Math.min(100, Math.round((spentNum / budgetNum) * 100));

  return (
    <div style={{ padding: '2.5rem 0 6rem 0' }} className="animate-fade-in">
      <div className="container">
        {/* Top Command Center Hero */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-navy-dark) 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 2.25rem',
          color: '#ffffff',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)'
        }}>
          {/* Subtle Glows */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="badge badge-sky" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#7dd3fc' }}>
                <Sparkles size={12} /> TRIPNEX COMMAND CENTER
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', color: '#ffffff', lineHeight: 1.15, marginBottom: '0.4rem' }}>
              GOOD MORNING 👋
            </h1>

            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Where are we going next? Plan, track, split, and adapt in real time.
            </p>

            {/* Destination Search Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '0.5rem 1rem',
              maxWidth: '540px'
            }}>
              <Search size={18} color="#94a3b8" style={{ marginRight: '0.75rem' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations (Bali, Paris, Tokyo, Goa, Manali...)"
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  width: '100%'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* SECTION: YOUR NEXT ADVENTURE (Hero Spotlight Card) */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="badge badge-navy">YOUR ACTIVE ADVENTURE</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {activeTrip?.formatted_dates || '12 → 15 September'}
            </span>
          </div>

          <div
            className="card card-hover travel-img-wrapper"
            style={{
              height: '340px',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-lg)'
            }}
            onClick={() => onSelectTrip && onSelectTrip(activeTrip)}
          >
            <img
              src={heroPhoto}
              alt={destName}
              className="travel-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="cinematic-gradient-overlay" style={{
              background: 'linear-gradient(180deg, rgba(7, 26, 61, 0.15) 0%, rgba(7, 26, 61, 0.9) 100%)'
            }} />

            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
              <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.92)', color: 'var(--primary-navy)', fontWeight: 800 }}>
                ● Active Trip Ready
              </span>
              <span style={{ background: 'rgba(7, 26, 61, 0.75)', color: '#38bdf8', padding: '0.3rem 0.75rem', borderRadius: '99px', fontSize: '0.78rem', fontWeight: 700 }}>
                {activeTrip?.days?.length || 3} DAYS • {activeTrip?.people || 5} FRIENDS
              </span>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '1.75rem',
              left: '2rem',
              right: '2rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                  {activeTrip?.starting_location || 'Origin'} ➔ {destName}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', margin: '0.2rem 0' }}>
                  {destName}
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '0.925rem', maxWidth: '520px' }}>
                  Estimated Group Budget: <strong>₹{budgetNum.toLocaleString('en-IN')}</strong> (₹{Math.round(budgetNum / (activeTrip?.people || 1)).toLocaleString('en-IN')}/person)
                </p>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.6rem', fontSize: '1rem', boxShadow: '0 4px 20px rgba(22, 119, 255, 0.5)' }}
              >
                <span>VIEW TRIP BLUEPRINT</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* TWO COLUMN SECTION: Quick Actions + Live Budget & Intelligence */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }}>
          {/* Quick Actions Panel */}
          <div className="card" style={{ padding: '1.75rem', background: 'var(--card-bg)', borderRadius: 'var(--radius-xl)' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="var(--electric-blue)" /> QUICK ACTIONS
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={onStartPlan}
                className="card card-hover"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  background: 'var(--electric-blue-light)',
                  color: 'var(--electric-blue)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <PlusCircle size={20} style={{ marginBottom: '0.35rem' }} />
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>+ Plan a Trip</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Generate new itinerary</div>
              </button>

              <button
                type="button"
                onClick={onOpenExplore}
                className="card card-hover"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-light)',
                  color: 'var(--primary-navy)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Compass size={20} style={{ marginBottom: '0.35rem', color: '#0284c7' }} />
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Explore Places</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Curated destinations</div>
              </button>

              <button
                type="button"
                onClick={onOpenMemories}
                className="card card-hover"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-light)',
                  color: 'var(--primary-navy)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Camera size={20} style={{ marginBottom: '0.35rem', color: '#8b5cf6' }} />
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>📸 Memories</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Photo journal & gallery</div>
              </button>

              <button
                type="button"
                onClick={onOpenSafety}
                className="card card-hover"
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  background: '#fef2f2',
                  color: '#dc2626',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <ShieldAlert size={20} style={{ marginBottom: '0.35rem' }} />
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>🚨 Safety Mode</div>
                <div style={{ fontSize: '0.75rem', color: '#991b1b' }}>SOS & Emergency hotlines</div>
              </button>
            </div>
          </div>

          {/* Live Budget & AI Intelligence Widget */}
          <div className="card" style={{ padding: '1.75rem', background: 'var(--card-bg)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Wallet size={18} color="var(--electric-blue)" /> YOUR ACTIVE BUDGET
              </h3>
              <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                ● {spentPct}% Utilized
              </span>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                  ₹{spentNum.toLocaleString('en-IN')}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Budget: ₹{budgetNum.toLocaleString('en-IN')}
                </span>
              </div>

              <div style={{ width: '100%', height: '10px', background: 'var(--border-subtle)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{
                  width: `${spentPct}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #10b981 0%, var(--electric-blue) 100%)',
                  borderRadius: '99px'
                }} />
              </div>
            </div>

            {/* AI Insight Pill */}
            <div style={{
              background: 'var(--bg-light)',
              padding: '0.9rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <Brain size={18} color="var(--electric-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--electric-blue)', textTransform: 'uppercase' }}>
                  💡 TRIPNEX Intelligence
                </span>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-main)', marginTop: '0.15rem' }}>
                  Sequential route grouping saved ₹2,400 in inter-city transfers for your group.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: YOUR TRIPS (Visual Cards Grid) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <span className="badge badge-navy" style={{ marginBottom: '0.3rem' }}>
                DISCOVER & EXPLORE
              </span>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--primary-navy)' }}>
                Your Travel Blueprint Portfolio
              </h2>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Showing {displayTrips.length} Destinations
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.5rem'
          }}>
            {displayTrips.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectTrip && onSelectTrip({ destination: dest.name, budget: parseInt(dest.estBudget.replace(/[^0-9]/g, '')) || 28000, people: 5 })}
                className="card card-hover"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="travel-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className="cinematic-gradient-overlay" />
                  <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', right: '0.85rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--primary-navy)' }}>
                      {dest.tag}
                    </span>
                    <span style={{ background: 'rgba(7, 26, 61, 0.75)', color: '#38bdf8', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: '99px' }}>
                      {dest.duration.split('/')[0]}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', right: '1rem', color: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, textTransform: 'uppercase', margin: 0, color: '#ffffff' }}>
                      {dest.name}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{dest.country}</span>
                  </div>
                </div>

                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.85rem', lineHeight: 1.4 }}>
                    {dest.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', display: 'block' }}>ESTIMATED</span>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                        {dest.estBudget}
                      </span>
                    </div>

                    <button type="button" className="btn btn-secondary btn-sm" style={{ padding: '0.4rem 0.85rem' }}>
                      <span>View Trip →</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
