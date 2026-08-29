import React, { useState } from 'react';
import { Sparkles, X, TrendingDown, Clock, Users, Flame, Coffee, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function OptimizeModal({ isOpen, onClose, trip, onApplyOptimization }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const [selectedOption, setSelectedOption] = useState('budget_decrease');
  const [newBudget, setNewBudget] = useState(trip?.budget ? Math.round(trip.budget * 0.75) : 15000);
  const [newPeople, setNewPeople] = useState(Math.max(1, (trip?.people || 5) - 1));

  const options = [
    {
      id: 'budget_decrease',
      icon: TrendingDown,
      color: 'var(--success)',
      bg: 'var(--success-bg)',
      label: t('opt_opt_budget_dec', 'Budget decreased'),
      desc: t('opt_opt_budget_dec_desc', 'Smart substitutions for transit and stays to save cost without losing fun.')
    },
    {
      id: 'running_late',
      icon: Clock,
      color: 'var(--warning)',
      bg: 'var(--warning-bg)',
      label: t('opt_opt_running_late', "We're running late"),
      desc: t('opt_opt_running_late_desc', 'Compress timeline, remove redundant transit buffer, and re-order spots.')
    },
    {
      id: 'member_drop',
      icon: Users,
      color: 'var(--electric-blue)',
      bg: 'var(--electric-blue-light)',
      label: t('opt_opt_member_drop', 'Someone dropped out'),
      desc: t('opt_opt_member_drop_desc', 'Recalculate room configuration, vehicle split, and fair share balances.')
    },
    {
      id: 'more_activities',
      icon: Flame,
      color: '#ea580c',
      bg: '#ffedd5',
      label: t('opt_opt_more_acts', 'We want more activities'),
      desc: t('opt_opt_more_acts_desc', 'Fill idle gaps with high-adrenaline group experiences.')
    },
    {
      id: 'relaxed_trip',
      icon: Coffee,
      color: 'var(--purple)',
      bg: 'var(--purple-bg)',
      label: t('opt_opt_relaxed', 'We want a relaxed trip'),
      desc: t('opt_opt_relaxed_desc', 'Slow down the pace, extend cafe breaks, and eliminate early morning calls.')
    }
  ];

  const getOptimizationPreview = () => {
    switch (selectedOption) {
      case 'budget_decrease':
        return {
          title: "Budget Optimization Plan",
          beforeBudget: trip.budget || 20000,
          afterBudget: newBudget,
          savings: (trip.budget || 20000) - newBudget,
          changes: [
            { before: "Private autos & cabs (₹1,200)", after: "Shared scooters & express bus (₹400)", delta: "Save ₹800" },
            { before: "3 paid beach clubs (₹1,500)", after: "2 paid + 1 iconic free sunset walk (₹600)", delta: "Save ₹900" },
            { before: "Premium boutique stay (₹8,000)", after: "TRIPNEX Heritage group suite (₹6,200)", delta: "Save ₹1,800" }
          ],
          summary: `Total Group Savings of ₹${((trip.budget || 20000) - newBudget).toLocaleString('en-IN')}`
        };
      case 'running_late':
        return {
          title: "Timeline Compression Plan",
          beforeBudget: trip.budget || 20000,
          afterBudget: trip.budget || 20000,
          savings: 0,
          changes: [
            { before: "10:45 AM Auto check-in", after: "Direct transit to lunch venue", delta: "+45m saved" },
            { before: "Day 2 Paradise speed boat at 3:30 PM", after: "Shifted to Day 3 Morning", delta: "No conflict" },
            { before: "2h museum queue", after: "Fast-track digital passes auto-booked", delta: "+1h saved" }
          ],
          summary: "Recovered 2h 15m of lost group time"
        };
      case 'member_drop':
        return {
          title: `Group Rebalance (${trip.people} → ${newPeople} travelers)`,
          beforeBudget: trip.budget || 20000,
          afterBudget: Math.round((trip.budget / trip.people) * newPeople),
          savings: Math.round((trip.budget / trip.people)),
          changes: [
            { before: `${trip.people} travelers (₹${trip.per_person_budget}/head)`, after: `${newPeople} travelers (₹${trip.per_person_budget}/head)`, delta: "Equal share maintained" },
            { before: "2 Triple Rooms reserved", after: "1 Quad Deluxe Suite reallocated", delta: "Stay optimized" },
            { before: "3 Scooter rentals", after: "2 Scooter rentals", delta: "Zero waste" }
          ],
          summary: `Clean rebalance for ${newPeople} travelers`
        };
      case 'more_activities':
        return {
          title: "High-Energy Thrill Pack",
          beforeBudget: trip.budget || 20000,
          afterBudget: Math.round(trip.budget * 1.15),
          savings: -Math.round(trip.budget * 0.15),
          changes: [
            { before: "Free beach stroll", after: "Tandem Kayaking & Scuba Trial", delta: "+₹450/head" },
            { before: "Early hotel checkout", after: "Auroville Forest ATV Trail", delta: "+₹300/head" }
          ],
          summary: "+2 New Adventure Activities Added"
        };
      case 'relaxed_trip':
        return {
          title: "Leisure & Chill Flow",
          beforeBudget: trip.budget || 20000,
          afterBudget: trip.budget || 20000,
          savings: 0,
          changes: [
            { before: "7:00 AM Early wake up", after: "9:30 AM French cafe brunch", delta: "More sleep" },
            { before: "8 packed stops in 3 days", after: "4 deep experiential highlights", delta: "Zero rush" }
          ],
          summary: "Pacing score boosted by 40%"
        };
      default:
        return null;
    }
  };

  const preview = getOptimizationPreview();

  const handleApply = () => {
    if (onApplyOptimization) {
      onApplyOptimization({
        type: selectedOption,
        newBudget: selectedOption === 'budget_decrease' ? newBudget : preview.afterBudget,
        newPeople: selectedOption === 'member_drop' ? newPeople : trip.people,
        preview
      });
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px', padding: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--electric-blue) 0%, var(--sky-blue) 100%)', color: '#fff', padding: '0.5rem', borderRadius: '10px' }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem' }}>{t('opt_title', '✨ Optimize My Trip')}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t('opt_subtitle', 'Killer Feature — Adaptive Real-Time Re-planning')}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* Question */}
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.85rem' }}>{t('opt_question', "What's changed?")}</h3>

        {/* Options Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const Icon = opt.icon;

            return (
              <div
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                style={{
                  padding: '0.9rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '2px solid var(--electric-blue)' : '1px solid var(--border-color)',
                  background: isSelected ? 'var(--electric-blue-light)' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem'
                }}
              >
                <div style={{ background: opt.bg, color: opt.color, padding: '0.4rem', borderRadius: '8px', flexShrink: 0 }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: isSelected ? 'var(--electric-blue)' : 'var(--primary-navy)', marginBottom: '0.2rem' }}>
                    {opt.label}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                    {opt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Inputs if Budget Decreased or Member Drop */}
        {selectedOption === 'budget_decrease' && (
          <div style={{ background: 'var(--bg-light)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              Adjust New Total Budget (₹):
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input
                type="range"
                min="5000"
                max={trip.budget || 20000}
                step="500"
                value={newBudget}
                onChange={(e) => setNewBudget(Number(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--electric-blue)' }}>
                ₹{newBudget.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        )}

        {selectedOption === 'member_drop' && (
          <div style={{ background: 'var(--bg-light)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              New Traveler Count:
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[2, 3, 4, 6].map(p => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setNewPeople(p)}
                  className={`btn btn-sm ${newPeople === p ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {p} {t('dash_travelers_count', 'Travelers')}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Live Optimization Delta Preview */}
        {preview && (
          <div style={{
            background: 'var(--bg-light)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '1.25rem',
            marginBottom: '1.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--electric-blue)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {t('opt_preview_title', 'Optimization Preview')}
              </span>
              <span className="badge badge-green">
                {preview.summary}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {preview.changes.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.825rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: 1, flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                      {c.before}
                    </span>
                    <ArrowRight size={14} color="var(--electric-blue)" />
                    <span style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>
                      {c.after}
                    </span>
                  </div>

                  <span style={{ fontWeight: 700, color: 'var(--success)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                    {c.delta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          <button type="button" onClick={onClose} className="btn btn-secondary">
            {t('opt_btn_cancel', 'Cancel')}
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.6rem', boxShadow: '0 4px 16px rgba(22, 119, 255, 0.4)' }}
          >
            <Sparkles size={16} />
            {t('opt_btn_apply', 'Apply Optimization')}
          </button>
        </div>
      </div>
    </div>
  );
}
