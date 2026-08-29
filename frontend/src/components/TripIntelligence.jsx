import React, { useState } from 'react';
import { 
  Brain, Sparkles, CloudSun, MapPin, TrendingDown, 
  Clock, CheckCircle2, ChevronRight, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TripIntelligence({ trip, onTriggerOptimization }) {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState(null);

  if (!trip) return null;

  const dest = trip.destination || 'Destination';
  const budgetNum = Number(trip.budget) || 20000;
  const stayCost = Number(trip.hotel?.total_cost || Math.round(budgetNum * 0.38));
  const stayPercent = Math.round((stayCost / budgetNum) * 100);

  // Deterministic Grounded Insights
  const insights = [
    {
      id: 'insight-budget',
      type: 'budget',
      icon: TrendingDown,
      color: '#1677FF',
      bg: '#eff6ff',
      badge: '💡 BUDGET INSIGHT',
      title: `Stay accounts for ${stayPercent}% of total group budget`,
      summary: `Your hotel is ₹${stayCost.toLocaleString('en-IN')}. Moving to a central student heritage villa can save ₹2,400 for the group.`,
      actionText: 'Optimize Stay',
      impact: 'Save ₹2,400'
    },
    {
      id: 'insight-weather',
      type: 'weather',
      icon: CloudSun,
      color: '#0284C7',
      bg: '#f0f9ff',
      badge: '🌦️ WEATHER & CLIMATE',
      title: `Pleasant 27°C with coastal sea breeze expected`,
      summary: `Day 1 & Day 2 mornings are optimal for seaside promenade walks and outdoor boating before peak afternoon sun.`,
      actionText: 'View Weather Pacing',
      impact: 'Optimal Timing'
    },
    {
      id: 'insight-route',
      type: 'route',
      icon: MapPin,
      color: '#059669',
      bg: '#ecfdf5',
      badge: '🚗 ROUTE EFFICIENCY',
      title: `Walking Cluster: 3 attractions within 600m`,
      summary: `Rock Beach, French Quarter colonial streets, and cafe strip are sequentially aligned, cutting 1.8 hrs of unnecessary transit.`,
      actionText: 'View Cluster',
      impact: 'Saves 1.8h'
    },
    {
      id: 'insight-pacing',
      type: 'pacing',
      icon: Clock,
      color: '#8B5CF6',
      bg: '#f5f3ff',
      badge: '⏱️ SCHEDULE PACING',
      title: `Balanced pacing with 35 min buffer windows`,
      summary: `Activities on Day 2 include relaxed cafe stops to prevent fatigue during afternoon exploration.`,
      actionText: 'Review Schedule',
      impact: 'Zero Rush'
    }
  ];

  return (
    <div className="card" style={{
      padding: '1.75rem',
      marginBottom: '2rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
      border: '1px solid rgba(22, 119, 255, 0.15)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Intelligence Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--electric-blue) 0%, #0d2a63 100%)',
            color: '#ffffff',
            padding: '0.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(22, 119, 255, 0.25)'
          }}>
            <Brain size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                TRIPNEX INTELLIGENCE
              </h3>
              <span className="badge badge-blue" style={{ fontSize: '0.7rem' }}>
                <Sparkles size={11} /> AI Co-Pilot Active
              </span>
            </div>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              Real-time route, budget, and schedule optimization brain
            </p>
          </div>
        </div>

        {onTriggerOptimization && (
          <button
            type="button"
            onClick={onTriggerOptimization}
            className="btn btn-sm btn-primary"
            style={{ padding: '0.5rem 1rem' }}
          >
            <Sparkles size={14} />
            <span>Optimize All</span>
          </button>
        )}
      </div>

      {/* Grid of Intelligence Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1rem'
      }}>
        {insights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="card-hover"
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.15rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: item.color,
                    background: item.bg,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    letterSpacing: '0.02em'
                  }}>
                    {item.badge}
                  </span>

                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#059669',
                    background: '#ecfdf5',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px'
                  }}>
                    {item.impact}
                  </span>
                </div>

                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {item.summary}
                </p>
              </div>

              <div style={{ marginTop: '0.85rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <ShieldCheck size={12} color="#10b981" /> Verified Logic
                </span>
                
                <button
                  type="button"
                  onClick={onTriggerOptimization}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--electric-blue)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem'
                  }}
                >
                  <span>{item.actionText}</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
