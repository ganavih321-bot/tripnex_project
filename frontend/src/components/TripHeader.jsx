import React, { useState } from 'react';
import { Calendar, Users, Wallet, Sparkles, Share2, Edit3, Check, MapPin, MessageSquare, Mail, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TripHeader({ 
  trip, 
  onEditTrip, 
  onOpenOptimize, 
  onOpenShare, 
  onOpenDiscussion, 
  onOpenMembers, 
  onOpenSafety, 
  onScrollToMemories, 
  suggestionsCount = 0 
}) {
  const { t } = useLanguage();

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
              {t('dash_verified_route', 'AI Verified Route')}
            </span>
            <span className="badge badge-blue" style={{ background: 'rgba(22, 119, 255, 0.25)', color: '#93c5fd', border: '1px solid rgba(22, 119, 255, 0.3)' }}>
              {trip.travel_style || 'Balanced'} Mode
            </span>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
            {/* Safety Mode Button */}
            <button 
              type="button"
              onClick={onOpenSafety}
              className="btn btn-sm"
              style={{ background: 'rgba(239, 68, 68, 0.22)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.4)' }}
            >
              <span>🛡️ Safety Mode</span>
            </button>

            {/* Travel Memories Quick Link */}
            <button 
              type="button"
              onClick={onScrollToMemories}
              className="btn btn-sm"
              style={{ background: 'rgba(56, 189, 248, 0.18)', color: '#bae6fd', border: '1px solid rgba(56, 189, 248, 0.35)' }}
            >
              <span>📸 Journal</span>
            </button>

            {/* View Members Button */}
            <button 
              type="button"
              onClick={onOpenMembers}
              className="btn btn-sm"
              style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.25)' }}
            >
              <Users size={14} />
              <span>👥 {trip.travelers?.length || trip.people}</span>
            </button>

            {/* Discussion / Suggestions Button */}
            <button 
              type="button"
              onClick={onOpenDiscussion}
              className="btn btn-sm"
              style={{ background: 'rgba(168, 85, 247, 0.22)', color: '#e9d5ff', border: '1px solid rgba(168, 85, 247, 0.35)' }}
            >
              <MessageSquare size={14} />
              <span>💬 Tips</span>
              {suggestionsCount > 0 && (
                <span style={{ background: '#a855f7', color: '#fff', fontSize: '0.68rem', padding: '0.05rem 0.35rem', borderRadius: '99px' }}>
                  {suggestionsCount}
                </span>
              )}
            </button>

            {/* Optimize Trip */}
            <button 
              type="button"
              onClick={onOpenOptimize}
              className="btn btn-sm btn-primary"
              style={{ background: 'var(--electric-blue)', boxShadow: '0 0 15px rgba(22, 119, 255, 0.5)' }}
            >
              <Sparkles size={14} />
              <span>{t('dash_optimize_trip', '✨ Optimize')}</span>
            </button>

            {/* Share Trip Hub */}
            <button 
              type="button"
              onClick={onOpenShare}
              className="btn btn-sm"
              style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.3)' }}
            >
              <Share2 size={14} />
              <span>{t('dash_share', 'Share')}</span>
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

              {/* Clickable Members badge */}
              <button
                type="button"
                onClick={onOpenMembers}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '99px',
                  color: '#e0f2fe',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
                className="card-hover"
                title={t('members_click_to_view', 'Click to view members')}
              >
                <Users size={16} color="var(--sky-blue)" />
                <span>{trip.travelers?.length || trip.people} {t('dash_travelers_count', 'travelers')}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--sky-blue)', marginLeft: '0.2rem' }}>• {t('members_click_to_view', 'View Names')}</span>
              </button>
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
                {t('dash_total_budget', 'Total Budget')}
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                ₹{Number(trip.budget || 0).toLocaleString('en-IN')}
              </span>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#94a3b8', display: 'block' }}>
                {t('dash_per_person', 'Per Person')}
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
