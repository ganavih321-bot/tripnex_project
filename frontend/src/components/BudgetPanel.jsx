import React from 'react';
import { Wallet, TrendingUp, Bus, Building2, Utensils, Compass, ShieldAlert, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BudgetPanel({ budget, spent, remaining, perPersonBudget, categories, peopleCount = 5 }) {
  const { t } = useLanguage();
  const total = Number(budget) || 20000;
  const totalSpent = Number(spent) || 15700;
  const unspent = Number(remaining) >= 0 ? Number(remaining) : (total - totalSpent);
  const spentPercentage = Math.min(100, Math.round((totalSpent / total) * 100));

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'transport': return <Bus size={15} />;
      case 'stay': return <Building2 size={15} />;
      case 'food': return <Utensils size={15} />;
      case 'activities': return <Compass size={15} />;
      case 'emergency': return <ShieldAlert size={15} />;
      default: return <Wallet size={15} />;
    }
  };

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--success-bg)', color: 'var(--success)', padding: '0.4rem', borderRadius: '8px' }}>
            <Wallet size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>{t('panel_budget_title', 'Live Budget Engine')}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('panel_budget_sub', 'Real-time expense tracking')}</p>
          </div>
        </div>
        <span className="badge badge-green">
          ₹{Math.round(total / peopleCount).toLocaleString('en-IN')}/{t('dash_per_person', 'person')}
        </span>
      </div>

      {/* Main Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        background: 'var(--bg-light)',
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        marginBottom: '1.25rem',
        textAlign: 'center'
      }}>
        <div>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
            {t('dash_total_budget', 'Total Budget')}
          </span>
          <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            ₹{total.toLocaleString('en-IN')}
          </p>
        </div>

        <div style={{ borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
            {t('panel_budget_allocated', 'Allocated')}
          </span>
          <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--electric-blue)' }}>
            ₹{totalSpent.toLocaleString('en-IN')}
          </p>
        </div>

        <div>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
            {t('panel_budget_remaining', 'Remaining')}
          </span>
          <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--success)' }}>
            ₹{unspent.toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      {/* Total Progress Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>{t('panel_budget_utilized', 'Budget Utilized')}</span>
          <span style={{ fontWeight: 700, color: spentPercentage > 90 ? 'var(--danger)' : 'var(--primary-navy)' }}>
            {spentPercentage}%
          </span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'var(--border-color)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${spentPercentage}%`,
            background: spentPercentage > 90 ? 'var(--danger)' : 'linear-gradient(90deg, var(--electric-blue) 0%, var(--sky-blue) 100%)',
            transition: 'width 0.4s ease'
          }}></div>
        </div>
      </div>

      {/* Category Wise Breakdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
          {t('panel_budget_cat_alloc', 'Category Allocations')}
        </span>

        {Object.entries(categories || {}).map(([key, cat]) => {
          const catSpent = cat.spent || 0;
          const catAlloc = cat.allocated || 1;
          const pct = Math.min(100, Math.round((catSpent / catAlloc) * 100));

          return (
            <div key={key} style={{ fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-navy)', fontWeight: 600 }}>
                  <span style={{ color: 'var(--electric-blue)' }}>{getCategoryIcon(key)}</span>
                  <span>{cat.label || key}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700 }}>₹{catSpent.toLocaleString('en-IN')}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>/ ₹{catAlloc.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div style={{ width: '100%', height: '5px', background: 'var(--border-color)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${pct}%`,
                  background: key === 'emergency' ? 'var(--purple)' : key === 'stay' ? '#8b5cf6' : 'var(--electric-blue)',
                  borderRadius: '99px'
                }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
