import React from 'react';
import { CheckCircle2, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LiveTripProgress({ 
  trip, 
  activeDay = 1, 
  visitedStops = {}, 
  onToggleVisited 
}) {
  const { t } = useLanguage();
  if (!trip) return null;

  const currentDayObj = (trip.days || []).find(d => d.day === activeDay) || trip.days?.[0];
  const timeline = currentDayObj?.timeline || [];

  // Compute stats
  const totalStops = timeline.length || 1;
  const visitedCount = timeline.filter(item => visitedStops[item.id]).length;
  const progressPercent = Math.min(100, Math.round((visitedCount / totalStops) * 100));

  // Determine current active stop (first unvisited stop)
  const currentStopIndex = timeline.findIndex(item => !visitedStops[item.id]);
  const activeStop = currentStopIndex !== -1 ? timeline[currentStopIndex] : timeline[timeline.length - 1];

  return (
    <div className="card" style={{
      padding: '1.25rem 1.5rem',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, var(--card-bg) 0%, var(--bg-light) 100%)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-blue" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
            LIVE IN-TRIP HUD
          </span>
          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            {trip.destination.toUpperCase()} — DAY {activeDay}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.825rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>
            <strong>{visitedCount}</strong> of <strong>{totalStops}</strong> stops completed
          </span>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 800,
            color: progressPercent === 100 ? '#059669' : 'var(--electric-blue)',
            background: progressPercent === 100 ? '#ecfdf5' : 'var(--electric-blue-light)',
            padding: '0.15rem 0.55rem',
            borderRadius: '99px'
          }}>
            {progressPercent}% Complete
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '8px',
        background: 'var(--border-subtle)',
        borderRadius: '99px',
        overflow: 'hidden',
        marginBottom: '1rem'
      }}>
        <div style={{
          width: `${progressPercent}%`,
          height: '100%',
          background: progressPercent === 100 
            ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)' 
            : 'linear-gradient(90deg, #38bdf8 0%, var(--electric-blue) 100%)',
          borderRadius: '99px',
          transition: 'width 0.5s ease'
        }} />
      </div>

      {/* Live Active Stop Stepper */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.25rem',
        scrollbarWidth: 'none'
      }}>
        {timeline.map((item, idx) => {
          const isVisited = !!visitedStops[item.id];
          const isCurrent = idx === currentStopIndex;

          return (
            <div
              key={item.id}
              onClick={() => onToggleVisited && onToggleVisited(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                background: isCurrent 
                  ? 'var(--electric-blue)' 
                  : isVisited 
                  ? 'var(--success-bg)' 
                  : 'var(--bg-light)',
                color: isCurrent 
                  ? '#ffffff' 
                  : isVisited 
                  ? '#059669' 
                  : 'var(--text-muted)',
                fontSize: '0.775rem',
                fontWeight: isCurrent || isVisited ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                border: isCurrent 
                  ? '1px solid var(--electric-blue)' 
                  : '1px solid var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
              title={isVisited ? 'Click to unmark' : 'Click to mark visited'}
            >
              <span>{isVisited ? '✓' : isCurrent ? '➔' : '○'}</span>
              <span>{item.time}</span>
              <span>•</span>
              <span style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.title.replace(/^\[.*?\]\s*/, '')}
              </span>
              {isCurrent && (
                <span style={{ fontSize: '0.65rem', background: 'rgba(255,255,255,0.25)', padding: '0.05rem 0.35rem', borderRadius: '4px' }}>
                  CURRENT
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
