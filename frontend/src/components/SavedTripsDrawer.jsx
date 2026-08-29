import React from 'react';
import { X, Calendar, Users, Wallet, ChevronRight, Compass, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SavedTripsDrawer({ isOpen, onClose, savedTrips, onSelectTrip, onClearTrips, currentTripId }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          height: '100vh',
          maxHeight: '100vh',
          maxWidth: '440px',
          borderRadius: '0',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem',
          margin: 0
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Compass size={20} color="var(--electric-blue)" />
            <h2 style={{ fontSize: '1.3rem' }}>{t('drawer_title', 'My Saved Trips')}</h2>
          </div>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* Trips List */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.25rem' }}>
          {(!savedTrips || savedTrips.length === 0) ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{t('drawer_empty', 'No saved trips yet.')}</p>
              <p style={{ fontSize: '0.85rem' }}>{t('drawer_empty_sub', 'Create a new trip or choose a preset to see it listed here.')}</p>
            </div>
          ) : (
            savedTrips.map((trip) => {
              const isSelected = currentTripId === trip.id;
              const perHead = Math.round(trip.budget / (trip.people || 1));
              return (
                <div
                  key={trip.id}
                  onClick={() => {
                    onSelectTrip(trip);
                    onClose();
                  }}
                  className="card card-hover"
                  style={{
                    padding: '1.25rem',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--electric-blue)' : '1px solid var(--border-color)',
                    background: isSelected ? 'var(--electric-blue-light)' : '#ffffff'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.15rem', color: isSelected ? 'var(--electric-blue)' : 'var(--primary-navy)' }}>
                      {trip.destination}
                    </h3>
                    {isSelected && (
                      <span className="badge badge-blue">{t('drawer_active', 'Active')}</span>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} />
                      <span>{trip.start_date} — {trip.end_date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Users size={14} />
                      <span>{trip.people} {t('dash_travelers_count', 'Travelers')}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Wallet size={14} />
                      <span>{t('dash_total_budget', 'Total')}: ₹{Number(trip.budget).toLocaleString('en-IN')} (₹{perHead.toLocaleString('en-IN')}/{t('dash_per_person', 'person')})</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '0.85rem', display: 'flex', justifyContent: 'flex-end', color: 'var(--electric-blue)', fontSize: '0.825rem', fontWeight: 600, alignItems: 'center', gap: '0.2rem' }}>
                    <span>{t('drawer_open_btn', 'Open Dashboard')}</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {savedTrips && savedTrips.length > 0 && (
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              type="button" 
              onClick={onClearTrips}
              className="btn btn-ghost btn-sm"
              style={{ color: 'var(--danger)' }}
            >
              <Trash2 size={14} />
              {t('drawer_clear', 'Clear History')}
            </button>
            <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
              {t('drawer_close', 'Close')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
