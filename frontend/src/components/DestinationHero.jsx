import React from 'react';
import { MapPin, Sun, Compass, Award, Sparkles, Navigation } from 'lucide-react';
import { getDestinationPhoto } from '../data/destinationImages';
import { useLanguage } from '../context/LanguageContext';

export default function DestinationHero({ trip }) {
  const { t } = useLanguage();
  if (!trip) return null;

  const destPhoto = getDestinationPhoto(trip.destination, 'hero');
  const perPerson = Math.round(trip.budget / (trip.people || 1));

  return (
    <div 
      className="travel-img-wrapper" 
      style={{
        position: 'relative',
        height: '320px',
        borderRadius: 'var(--radius-xl)',
        marginBottom: '2rem',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(7, 26, 61, 0.08)'
      }}
    >
      {/* Background Image */}
      <img
        src={destPhoto}
        alt={trip.destination}
        className="travel-img"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Cinematic Gradient Overlay */}
      <div className="cinematic-gradient-overlay" style={{
        background: 'linear-gradient(180deg, rgba(7, 26, 61, 0.25) 0%, rgba(7, 26, 61, 0.88) 100%)'
      }} />

      {/* Top Badges */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.75rem', right: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          padding: '0.4rem 0.85rem',
          borderRadius: '99px',
          fontSize: '0.8rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <Sparkles size={14} color="#7dd3fc" />
          <span>Curated AI Destination</span>
        </span>

        <span style={{
          background: 'rgba(7, 26, 61, 0.65)',
          backdropFilter: 'blur(10px)',
          color: '#93c5fd',
          padding: '0.4rem 0.85rem',
          borderRadius: '99px',
          fontSize: '0.8rem',
          fontWeight: 600,
          border: '1px solid rgba(147, 197, 253, 0.3)'
        }}>
          {trip.travel_style || 'Balanced Student Travel'}
        </span>
      </div>

      {/* Bottom Content Info */}
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
        gap: '1.25rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: '#93c5fd', fontSize: '0.875rem', fontWeight: 600 }}>
            <MapPin size={15} />
            <span>{trip.starting_location || 'Origin'} ➔ {trip.destination}</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: '#ffffff',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '0.4rem'
          }}>
            {trip.destination.toUpperCase()}
          </h2>

          <p style={{ color: '#cbd5e1', fontSize: '0.925rem', maxWidth: '520px' }}>
            {trip.destination.toLowerCase().includes('pondicherry')
              ? 'French colonial heritage, azure seaside promenade, vibrant bohemian art cafes & tranquil Auroville.'
              : trip.destination.toLowerCase().includes('goa')
              ? 'Pristine coastal beaches, historical Portuguese forts, vibrant flea markets & sunset shacks.'
              : 'Handcrafted student itinerary optimized for maximum experiences with fair-share group budgeting.'}
          </p>
        </div>

        {/* Quick Highlights Pill */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Group Size</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{trip.people} Travelers</span>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.5rem' }}>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Per Person</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8' }}>₹{perPerson.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
