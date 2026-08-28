import React from 'react';
import { Compass, Clock, MapPin, Sparkles, Tag, ChevronRight } from 'lucide-react';

export default function ActivityCard({ activities }) {
  if (!activities || activities.length === 0) return null;

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.4rem', borderRadius: '8px' }}>
            <Compass size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Top Curated Activities</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Student-approved gems</p>
          </div>
        </div>
        <span className="badge badge-blue">{activities.length} Spots</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {activities.map((act, idx) => (
          <div
            key={act.id || idx}
            className="card-hover"
            style={{
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span className="badge badge-navy" style={{ fontSize: '0.68rem' }}>
                  {act.category || 'Spot'}
                </span>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)' }}>{act.title}</h4>
              </div>
              <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                {act.cost}
              </span>
            </div>

            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              {act.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.4rem', marginTop: '0.2rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={12} /> {act.duration}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin size={12} /> {act.distance}
              </span>
              {act.tag && (
                <span style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>
                  ★ {act.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
