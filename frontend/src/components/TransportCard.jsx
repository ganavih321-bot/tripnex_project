import React from 'react';
import { Bus, Car, Bike, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function TransportCard({ transportList, peopleCount = 5 }) {
  if (!transportList || transportList.length === 0) return null;

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--sky-blue-light)', color: '#0284c7', padding: '0.4rem', borderRadius: '8px' }}>
            <Bus size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Transportation Plan</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Multi-leg coordinated transit</p>
          </div>
        </div>
        <span className="badge badge-sky">Group Sync</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {transportList.map((t, idx) => (
          <div
            key={t.id || idx}
            style={{
              padding: '1rem 1.15rem',
              background: 'var(--bg-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}
          >
            {/* Route & Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary-navy)', letterSpacing: '0.02em' }}>
                {t.route}
              </span>
              <span className="badge badge-blue" style={{ fontSize: '0.7rem' }}>
                {t.badge || t.mode}
              </span>
            </div>

            {/* Details Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  {t.mode === 'Bus' ? <Bus size={14} /> : t.mode === 'Auto' ? <Car size={14} /> : <Bike size={14} />}
                  {t.provider || t.mode}
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <Clock size={13} />
                  {t.duration}
                </span>
              </div>

              {/* Price */}
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontWeight: 700, color: 'var(--electric-blue)', fontSize: '0.95rem' }}>
                  ₹{t.cost_per_person}/person
                </span>
                {peopleCount > 1 && (
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    (₹{t.total_cost || t.cost_per_person * peopleCount} total)
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
