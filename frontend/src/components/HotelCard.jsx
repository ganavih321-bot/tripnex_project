import React from 'react';
import { Building2, Star, MapPin, Calendar, Check, Wifi, ShieldCheck } from 'lucide-react';

export default function HotelCard({ hotel, peopleCount = 5 }) {
  if (!hotel) return null;

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderTop: '4px solid var(--purple)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--purple-bg)', color: 'var(--purple)', padding: '0.4rem', borderRadius: '8px' }}>
            <Building2 size={18} />
          </div>
          <div>
            <span className="badge badge-purple" style={{ fontSize: '0.68rem', marginBottom: '0.2rem' }}>
              🏨 TRIPNEX Verified Stay
            </span>
            <h3 style={{ fontSize: '1.15rem' }}>{hotel.name}</h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'var(--warning-bg)', color: '#b45309', padding: '0.25rem 0.6rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700 }}>
          <Star size={13} fill="#f59e0b" color="#f59e0b" />
          <span>{hotel.rating}</span>
          <span style={{ opacity: 0.7 }}>({hotel.reviews_count || 120})</span>
        </div>
      </div>

      {/* Location */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
        <MapPin size={14} color="var(--purple)" />
        <span>{hotel.location}</span>
      </div>

      {/* Check-in / Check-out Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', background: 'var(--bg-light)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>
            Check-in
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
            {hotel.check_in}
          </span>
        </div>
        <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '0.75rem' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>
            Check-out
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
            {hotel.check_out}
          </span>
        </div>
      </div>

      {/* Price Summary */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.85rem' }}>
        <div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Room Setup:</span>
          <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{hotel.room_config || 'Group Deluxe Suite'}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--purple)' }}>
            ₹{hotel.total_cost?.toLocaleString('en-IN')} total
          </span>
          <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            (₹{Math.round(hotel.total_cost / peopleCount)}/person for {hotel.nights || 2} nights)
          </span>
        </div>
      </div>

      {/* Amenities Chips */}
      {hotel.amenities && (
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {hotel.amenities.map((amenity, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.725rem',
                background: '#f8fafc',
                color: 'var(--text-muted)',
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <Check size={11} color="var(--success)" />
              {amenity}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
