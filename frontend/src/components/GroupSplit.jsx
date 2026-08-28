import React, { useState } from 'react';
import { Users, ArrowRightLeft, CheckCircle2, DollarSign, Wallet, ShieldCheck } from 'lucide-react';

export default function GroupSplit({ travelers, settlements, totalSpent = 15700, peopleCount = 5 }) {
  const [completedSettlements, setCompletedSettlements] = useState({});

  const fairShare = Math.round(totalSpent / (travelers?.length || peopleCount || 1));

  const toggleSettled = (index) => {
    setCompletedSettlements(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--purple-bg)', color: 'var(--purple)', padding: '0.4rem', borderRadius: '8px' }}>
            <Users size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Group Expense Engine</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Equal split: ₹{fairShare.toLocaleString('en-IN')}/person</p>
          </div>
        </div>
        <span className="badge badge-purple">{travelers?.length || 5} Travelers</span>
      </div>

      {/* Member Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
        {(travelers || []).map((t) => {
          const paid = Number(t.paid || 0);
          const diff = paid - fairShare; // positive = receives, negative = owes
          const isSettled = Math.abs(diff) < 20;

          return (
            <div
              key={t.id || t.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                background: 'var(--bg-light)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{t.avatar || '👤'}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--primary-navy)' }}>{t.name}</span>
                    {t.role && (
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', background: '#fff', padding: '0.1rem 0.35rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                        {t.role}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Paid: ₹{paid.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                {isSettled ? (
                  <span className="badge badge-green" style={{ fontSize: '0.725rem' }}>
                    Settled
                  </span>
                ) : diff > 0 ? (
                  <span className="badge badge-blue" style={{ fontSize: '0.725rem' }}>
                    Receives ₹{Math.round(diff).toLocaleString('en-IN')}
                  </span>
                ) : (
                  <span className="badge badge-amber" style={{ fontSize: '0.725rem' }}>
                    Owes ₹{Math.round(Math.abs(diff)).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Suggested Settlements Section */}
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
          <ArrowRightLeft size={15} color="var(--electric-blue)" />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
            1-Click Settlement Suggestions
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {(settlements || []).map((s, idx) => {
            const isDone = completedSettlements[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleSettled(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: isDone ? '1px solid #a7f3d0' : '1px solid var(--border-color)',
                  background: isDone ? 'var(--success-bg)' : '#ffffff',
                  cursor: 'pointer',
                  fontSize: '0.825rem',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color={isDone ? 'var(--success)' : '#94a3b8'} />
                  <div>
                    <span style={{ fontWeight: 600, textDecoration: isDone ? 'line-through' : 'none', color: isDone ? '#059669' : 'var(--text-main)' }}>
                      <strong>{s.from}</strong> should send <strong>₹{s.amount}</strong> to <strong>{s.to}</strong>
                    </span>
                    {s.note && (
                      <span style={{ display: 'block', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                        {s.note}
                      </span>
                    )}
                  </div>
                </div>

                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: isDone ? '#059669' : 'var(--electric-blue)' }}>
                  {isDone ? 'Settled ✓' : 'Tap to Settle'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
