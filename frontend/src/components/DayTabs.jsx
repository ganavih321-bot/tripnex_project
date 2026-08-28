import React from 'react';
import { Calendar, Sun, MapPin } from 'lucide-react';

export default function DayTabs({ days, activeDay, onSelectDay }) {
  if (!days || days.length === 0) return null;

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {/* Tabs Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {days.map((d) => {
          const isActive = activeDay === d.day;
          return (
            <button
              key={d.day}
              type="button"
              onClick={() => onSelectDay(d.day)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.4rem',
                borderRadius: 'var(--radius-md)',
                background: isActive ? 'var(--primary-navy)' : '#ffffff',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                border: isActive ? '1px solid var(--primary-navy)' : '1px solid var(--border-color)',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap'
              }}
            >
              <Calendar size={16} color={isActive ? 'var(--sky-blue)' : 'var(--text-light)'} />
              <span>DAY {d.day}</span>
              {d.timeline && (
                <span style={{
                  fontSize: '0.75rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '99px',
                  background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'var(--bg-light)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)'
                }}>
                  {d.timeline.length} stops
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Day Summary Banner */}
      {days.find(d => d.day === activeDay) && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem 1.25rem',
          background: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--electric-blue)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              DAY {activeDay} FOCUS
            </span>
            <h3 style={{ fontSize: '1.15rem', marginTop: '0.1rem' }}>
              {days.find(d => d.day === activeDay)?.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
              {days.find(d => d.day === activeDay)?.summary}
            </p>
          </div>
          <span className="badge badge-sky">
            <Sun size={12} />
            Sunny • 28°C
          </span>
        </div>
      )}
    </div>
  );
}
