import React, { useState } from 'react';
import { Calendar, Users, Wallet, Sparkles, Share2, Edit3, Check, MapPin, Download } from 'lucide-react';

export default function TripHeader({ trip, onEditTrip, onOpenOptimize }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareText = `Check out our group trip to ${trip.destination} on TRIPNEX! Total: ₹${trip.budget?.toLocaleString('en-IN')} (₹${trip.per_person_budget?.toLocaleString('en-IN')}/person)`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="card" style={{
      background: 'linear-gradient(135deg, var(--primary-navy) 0%, #0d2a63 100%)',
      color: '#ffffff',
      padding: '2rem 2.25rem',
      marginBottom: '2rem',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Accent Graphics */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-40px',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Top Badges & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span className="badge badge-sky" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#7dd3fc', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              <MapPin size={12} />
              {trip.starting_location || 'Origin'} → {trip.destination}
            </span>
            <span className="badge badge-green" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              AI Verified Route
            </span>
            <span className="badge badge-blue" style={{ background: 'rgba(22, 119, 255, 0.25)', color: '#93c5fd', border: '1px solid rgba(22, 119, 255, 0.3)' }}>
              {trip.travel_style || 'Balanced'} Mode
            </span>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button 
              type="button"
              onClick={onEditTrip}
              className="btn btn-sm"
              style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            >
              <Edit3 size={15} />
              Edit Trip
            </button>

            <button 
              type="button"
              onClick={onOpenOptimize}
              className="btn btn-sm btn-primary"
              style={{ background: 'var(--electric-blue)', boxShadow: '0 0 15px rgba(22, 119, 255, 0.5)' }}
            >
              <Sparkles size={15} />
              ✨ Optimize Trip
            </button>

            <button 
              type="button"
              onClick={handleShare}
              className="btn btn-sm"
              style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            >
              {copied ? <Check size={15} color="#10B981" /> : <Share2 size={15} />}
              {copied ? 'Copied Link!' : 'Share'}
            </button>
          </div>
        </div>

        {/* Title & Key Stats */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#ffffff', marginBottom: '0.35rem' }}>
              {trip.destination}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: '#cbd5e1', fontSize: '0.95rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={16} color="var(--sky-blue)" />
                <span>{trip.formatted_dates || `${trip.start_date} — ${trip.end_date}`}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={16} color="var(--sky-blue)" />
                <span>{trip.people} travelers</span>
              </div>
            </div>
          </div>

          {/* Budget Quick Box */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '0.9rem 1.4rem',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8', display: 'block' }}>
                Total Budget
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                ₹{Number(trip.budget || 0).toLocaleString('en-IN')}
              </span>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8', display: 'block' }}>
                Per Person
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--sky-blue)' }}>
                ₹{Number(trip.per_person_budget || 0).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
