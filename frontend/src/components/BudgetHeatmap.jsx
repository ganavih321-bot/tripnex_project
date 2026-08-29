import React from 'react';
import { Wallet, TrendingUp, AlertTriangle, CheckCircle, PieChart, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BudgetHeatmap({ budget = 20000, spent = 15700, remaining = 4300, categories = {}, peopleCount = 5 }) {
  const { t } = useLanguage();

  const totalBudget = Number(budget) || 20000;
  const currentSpent = Number(spent) || 0;
  const currentRemaining = Math.max(0, totalBudget - currentSpent);
  const spentPercent = Math.min(100, Math.round((currentSpent / totalBudget) * 100));

  // Determine health status
  let status = {
    label: 'SAFE',
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    icon: CheckCircle,
    msg: 'Expenses are well within group allocation.'
  };

  if (spentPercent > 95) {
    status = {
      label: 'OVER BUDGET',
      color: '#dc2626',
      bg: '#fef2f2',
      border: '#fecaca',
      icon: AlertTriangle,
      msg: 'Budget exhausted! Trigger optimization to reduce costs.'
    };
  } else if (spentPercent > 80) {
    status = {
      label: 'GETTING EXPENSIVE',
      color: '#d97706',
      bg: '#fffbeb',
      border: '#fde68a',
      icon: AlertTriangle,
      msg: 'Approaching maximum safety threshold.'
    };
  }

  const StatusIcon = status.icon;

  // Breakdown categories
  const catItems = [
    { key: 'stay', label: 'Accommodation', color: '#1677FF', defaultSpent: Math.round(totalBudget * 0.38) },
    { key: 'transport', label: 'Transport & Transit', color: '#0284C7', defaultSpent: Math.round(totalBudget * 0.22) },
    { key: 'food', label: 'Food & Dining', color: '#F59E0B', defaultSpent: Math.round(totalBudget * 0.18) },
    { key: 'activities', label: 'Activities & Fun', color: '#8B5CF6', defaultSpent: Math.round(totalBudget * 0.14) },
    { key: 'emergency', label: 'Safety Buffer', color: '#10B981', defaultSpent: Math.round(totalBudget * 0.08) }
  ];

  return (
    <div className="card" style={{
      padding: '1.75rem',
      marginBottom: '1.5rem',
      background: '#ffffff',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-xl)'
    }}>
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.45rem', borderRadius: '10px' }}>
            <Wallet size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)' }}>
              YOUR TRIP BUDGET HEATMAP
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              Dynamic financial health & category allocation
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '99px',
          fontSize: '0.8rem',
          fontWeight: 800,
          background: status.bg,
          color: status.color,
          border: `1px solid ${status.border}`
        }}>
          <StatusIcon size={14} />
          <span>{status.label}</span>
        </span>
      </div>

      {/* Main Budget Progress Gauge */}
      <div style={{
        background: 'var(--bg-light)',
        padding: '1.25rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem' }}>
          <div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
              ₹{currentSpent.toLocaleString('en-IN')}
            </span>
            <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginLeft: '0.35rem' }}>
              / ₹{totalBudget.toLocaleString('en-IN')}
            </span>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: status.color }}>
              {spentPercent}%
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
              UTILIZED
            </span>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div style={{
          width: '100%',
          height: '12px',
          background: '#e2e8f0',
          borderRadius: '99px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${spentPercent}%`,
            height: '100%',
            background: spentPercent > 95
              ? 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)'
              : spentPercent > 80
              ? 'linear-gradient(90deg, #1677ff 0%, #f59e0b 100%)'
              : 'linear-gradient(90deg, #10b981 0%, #1677ff 100%)',
            borderRadius: '99px',
            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.6rem', fontSize: '0.785rem', color: 'var(--text-muted)' }}>
          <span>Buffer Remaining: <strong style={{ color: '#059669' }}>₹{currentRemaining.toLocaleString('en-IN')}</strong></span>
          <span>Per Student Share: <strong>₹{Math.round(totalBudget / (peopleCount || 1)).toLocaleString('en-IN')}</strong></span>
        </div>
      </div>

      {/* Visual Spending Breakdown Bars */}
      <h4 style={{ fontSize: '0.925rem', color: 'var(--primary-navy)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        Live Category Breakdown
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {catItems.map((cat) => {
          const catData = categories[cat.key];
          const catSpent = Number(catData?.spent || cat.defaultSpent);
          const catAllocated = Number(catData?.allocated || cat.defaultSpent);
          const catPercent = Math.min(100, Math.round((catSpent / totalBudget) * 100));

          return (
            <div key={cat.key}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>
                  {cat.label}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>
                  <strong>₹{catSpent.toLocaleString('en-IN')}</strong> ({catPercent}%)
                </span>
              </div>

              <div style={{
                width: '100%',
                height: '8px',
                background: '#f1f5f9',
                borderRadius: '99px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${catPercent}%`,
                  height: '100%',
                  background: cat.color,
                  borderRadius: '99px',
                  transition: 'width 0.6s ease'
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
