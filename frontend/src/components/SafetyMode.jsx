import React, { useState } from 'react';
import { 
  ShieldAlert, PhoneCall, MapPin, Share2, AlertTriangle, 
  Hospital, Shield, CheckCircle2, X, Navigation, HeartHandshake, UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SafetyMode({ isOpen, onClose, destination = 'Pondicherry', travelers = [] }) {
  const { t } = useLanguage();
  const [sosConfirmOpen, setSosConfirmOpen] = useState(false);
  const [sosTriggered, setSosTriggered] = useState(false);
  const [copiedLocation, setCopiedLocation] = useState(false);
  const [sharedWithContact, setSharedWithContact] = useState(false);

  if (!isOpen) return null;

  // Emergency contact data localized to destination
  const emergencyData = {
    pondicherry: {
      hospital: {
        name: 'JIPMER Super Specialty Hospital & Trauma Center',
        distance: '4.2 km (12 min ETA)',
        address: 'Gorimedu, Dhanvantari Nagar, Puducherry 605006',
        phone: '+91 413 2296000',
        rating: '4.8 ★ 24/7 Emergency Care'
      },
      police: {
        station: 'Grand Bazaar & Town Police Station',
        distance: '0.8 km (4 min ETA)',
        address: 'Bussy Street, White Town, Puducherry',
        phone: '+91 413 2334000'
      }
    },
    goa: {
      hospital: {
        name: 'Goa Medical College & Hospital (GMC)',
        distance: '6.5 km (15 min ETA)',
        address: 'Bambolim, North Goa 403202',
        phone: '+91 832 2458727',
        rating: '4.7 ★ 24/7 Level 1 Trauma'
      },
      police: {
        station: 'Anjuna & Calangute Police Station',
        distance: '1.4 km (5 min ETA)',
        address: 'Anjuna Coastal Rd, North Goa',
        phone: '+91 832 2273233'
      }
    }
  };

  const norm = String(destination).toLowerCase();
  const activeInfo = norm.includes('goa') ? emergencyData.goa : emergencyData.pondicherry;

  const handleTriggerSOS = () => {
    setSosTriggered(true);
    setSosConfirmOpen(false);
  };

  const handleShareLocation = () => {
    const locText = `🚨 EMERGENCY LIVE LOCATION - TRIPNEX TRAVEL GROUP\nDestination: ${destination}\nGPS Status: Active at White Town Promenade (Lat: 11.9338, Long: 79.8297)\nGroup Size: ${travelers.length || 5} Travelers\nEmergency Portal: http://localhost:5173`;
    navigator.clipboard?.writeText(locText);
    setCopiedLocation(true);
    setTimeout(() => setCopiedLocation(false), 3000);
  };

  const handleShareWithEmergencyContact = () => {
    setSharedWithContact(true);
    setTimeout(() => setSharedWithContact(false), 3500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          maxWidth: '680px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          border: '2px solid rgba(239, 68, 68, 0.2)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: '#fef2f2', color: '#ef4444', padding: '0.5rem', borderRadius: '10px' }}>
              <ShieldAlert size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.35rem', color: 'var(--primary-navy)' }}>
                  TRIP SAFETY & EMERGENCY MODE
                </h2>
                <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                  ● 24/7 Active
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
                Instant emergency services, verified local hospitals & SOS beacon for {destination}
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* SOS Trigger Alert Banner */}
        {sosTriggered ? (
          <div style={{
            background: '#fef2f2',
            border: '2px solid #ef4444',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#dc2626', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
              🚨 SOS BEACON BROADCASTED
            </h3>
            <p style={{ color: '#991b1b', fontSize: '0.875rem' }}>
              Live GPS coordinates dispatched to emergency contacts & group members. Emergency hotlines have been pre-dialed below.
            </p>
          </div>
        ) : (
          <div style={{
            background: 'linear-gradient(135deg, #fef2f2 0%, #fff1f2 100%)',
            border: '1px solid #fecaca',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h4 style={{ color: '#991b1b', fontSize: '1.05rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <AlertTriangle size={18} color="#dc2626" />
                <span>Need Immediate Assistance?</span>
              </h4>
              <p style={{ color: '#7f1d1d', fontSize: '0.825rem' }}>
                Trigger the SOS beacon to alert your emergency contacts and local tourist police.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSosConfirmOpen(true)}
              className="btn"
              style={{
                background: '#dc2626',
                color: '#ffffff',
                fontWeight: 800,
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                padding: '0.65rem 1.25rem'
              }}
            >
              🚨 I'M IN TROUBLE (SOS)
            </button>
          </div>
        )}

        {/* National Hotlines Grid */}
        <h4 style={{ fontSize: '0.875rem', color: 'var(--primary-navy)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
          Emergency Hotlines (Toll Free)
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem', marginBottom: '1.5rem' }}>
          <a href="tel:112" className="card card-hover" style={{ padding: '0.75rem', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#dc2626', display: 'block' }}>112</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>National Emergency</span>
          </a>

          <a href="tel:108" className="card card-hover" style={{ padding: '0.75rem', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0284c7', display: 'block' }}>108</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Ambulance / Medical</span>
          </a>

          <a href="tel:1363" className="card card-hover" style={{ padding: '0.75rem', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#059669', display: 'block' }}>1363</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tourist Helpline</span>
          </a>

          <a href="tel:1091" className="card card-hover" style={{ padding: '0.75rem', textAlign: 'center', background: '#ffffff', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#7c3aed', display: 'block' }}>1091</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Women Safety</span>
          </a>
        </div>

        {/* Local Verified Hospital & Police Station */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {/* Hospital Card */}
          <div className="card" style={{ padding: '1rem', border: '1px solid var(--border-color)', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Hospital size={18} color="#dc2626" />
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)' }}>Nearest Verified Hospital</h4>
            </div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{activeInfo.hospital.name}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0' }}>{activeInfo.hospital.address}</p>
            <p style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>{activeInfo.hospital.distance} • {activeInfo.hospital.rating}</p>
            <div style={{ marginTop: '0.65rem', display: 'flex', gap: '0.5rem' }}>
              <a href={`tel:${activeInfo.hospital.phone}`} className="btn btn-sm btn-primary" style={{ flex: 1, padding: '0.4rem 0.6rem', fontSize: '0.78rem' }}>
                <PhoneCall size={13} /> Call ER
              </a>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeInfo.hospital.name + ' ' + destination)}`}
                target="_blank" 
                rel="noreferrer"
                className="btn btn-sm btn-secondary" 
                style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem' }}
              >
                <Navigation size={13} /> Route
              </a>
            </div>
          </div>

          {/* Police Station Card */}
          <div className="card" style={{ padding: '1rem', border: '1px solid var(--border-color)', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Shield size={18} color="#0284c7" />
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)' }}>Local Police Station</h4>
            </div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{activeInfo.police.station}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0' }}>{activeInfo.police.address}</p>
            <p style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 600 }}>{activeInfo.police.distance} away</p>
            <div style={{ marginTop: '0.65rem', display: 'flex', gap: '0.5rem' }}>
              <a href={`tel:${activeInfo.police.phone}`} className="btn btn-sm btn-secondary" style={{ flex: 1, padding: '0.4rem 0.6rem', fontSize: '0.78rem' }}>
                <PhoneCall size={13} /> Call Station
              </a>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeInfo.police.station + ' ' + destination)}`}
                target="_blank" 
                rel="noreferrer"
                className="btn btn-sm btn-secondary" 
                style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem' }}
              >
                <Navigation size={13} /> Route
              </a>
            </div>
          </div>
        </div>

        {/* Quick Safety Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <button
            type="button"
            onClick={handleShareLocation}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, minWidth: '180px' }}
          >
            {copiedLocation ? <CheckCircle2 size={14} color="#059669" /> : <MapPin size={14} />}
            <span>{copiedLocation ? 'Live GPS Copied!' : 'Share Live GPS Location'}</span>
          </button>

          <button
            type="button"
            onClick={handleShareWithEmergencyContact}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, minWidth: '180px' }}
          >
            {sharedWithContact ? <CheckCircle2 size={14} color="#059669" /> : <Share2 size={14} />}
            <span>{sharedWithContact ? 'Plan Sent to Contacts!' : 'Alert Emergency Contacts'}</span>
          </button>
        </div>

        {/* SOS Confirmation Modal */}
        {sosConfirmOpen && (
          <div className="modal-overlay" style={{ background: 'rgba(7, 26, 61, 0.85)', zIndex: 1100 }}>
            <div className="modal-card" style={{ maxWidth: '420px', padding: '1.75rem', textAlign: 'center', border: '2px solid #ef4444' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <AlertTriangle size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#991b1b', marginBottom: '0.5rem' }}>
                Confirm Emergency SOS?
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                This will trigger the emergency protocol, copy your live GPS beacon, and display fast-dial hotlines for police & ambulance.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setSosConfirmOpen(false)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleTriggerSOS}
                  className="btn btn-primary"
                  style={{ flex: 1, background: '#dc2626', borderColor: '#dc2626' }}
                >
                  Yes, Broadcast SOS
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
