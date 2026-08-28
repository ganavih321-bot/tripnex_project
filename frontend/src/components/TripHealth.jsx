import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, AlertOctagon, CheckCircle2, Wand2, RefreshCw } from 'lucide-react';

export default function TripHealth({ risks, onFixRisk }) {
  const [fixedRisks, setFixedRisks] = useState({});

  const handleFix = (riskId, actionType) => {
    setFixedRisks(prev => ({ ...prev, [riskId]: true }));
    if (onFixRisk) {
      onFixRisk(riskId, actionType);
    }
  };

  if (!risks || risks.length === 0) return null;

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.4rem', borderRadius: '8px' }}>
            <ShieldCheck size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Trip Health & Risk Detector</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proactive conflict detection</p>
          </div>
        </div>
        <span className="badge badge-green">AI Active</span>
      </div>

      {/* Risk Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {risks.map((risk) => {
          const isFixed = fixedRisks[risk.id];
          const severity = isFixed ? 'green' : risk.severity;

          return (
            <div
              key={risk.id}
              style={{
                padding: '0.9rem 1.1rem',
                borderRadius: 'var(--radius-md)',
                background: severity === 'green' ? 'var(--success-bg)' : severity === 'yellow' ? 'var(--warning-bg)' : 'var(--danger-bg)',
                border: `1px solid ${severity === 'green' ? '#a7f3d0' : severity === 'yellow' ? '#fde68a' : '#fecaca'}`,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.15rem' }}>
                  {severity === 'green' ? (
                    <CheckCircle2 size={16} color="var(--success)" />
                  ) : severity === 'yellow' ? (
                    <AlertTriangle size={16} color="var(--warning)" />
                  ) : (
                    <AlertOctagon size={16} color="var(--danger)" />
                  )}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--primary-navy)' }}>
                      {risk.title}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: severity === 'green' ? '#059669' : severity === 'yellow' ? '#b45309' : '#dc2626'
                    }}>
                      — {isFixed ? 'Resolved & Optimized' : risk.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {isFixed 
                      ? (risk.id === 'r4' ? 'Concierge bag hold confirmed until 3:30 PM departure.' : 'Schedule buffer automatically expanded by 45 minutes.') 
                      : risk.message}
                  </p>
                </div>
              </div>

              {/* Fix Button if applicable */}
              {!isFixed && (risk.severity === 'yellow' || risk.severity === 'red') && (
                <button
                  type="button"
                  onClick={() => handleFix(risk.id, risk.actionType)}
                  className="btn btn-sm"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: 'var(--primary-navy)',
                    fontSize: '0.75rem',
                    padding: '0.35rem 0.65rem',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <Wand2 size={12} color="var(--electric-blue)" />
                  Fix automatically
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
