import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, Maximize2, Sparkles } from 'lucide-react';

export default function InteractiveMap({ destination = "Pondicherry", startingLocation = "Chennai" }) {
  const [activePin, setActivePin] = useState(1);

  const pins = [
    { id: 1, name: `${startingLocation} Terminal`, type: 'transit', time: '07:20 AM', x: '18%', y: '25%', label: 'Origin' },
    { id: 2, name: 'White Town Heritage Stay', type: 'hotel', time: '11:15 AM', x: '58%', y: '48%', label: 'Hotel' },
    { id: 3, name: 'Rock Beach Promenade', type: 'beach', time: '02:30 PM', x: '72%', y: '52%', label: 'Beach' },
    { id: 4, name: 'Auroville & Matrimandir', type: 'culture', time: 'Day 2', x: '45%', y: '18%', label: 'Auroville' },
    { id: 5, name: 'Paradise Beach Speedboat', type: 'activity', time: 'Day 2', x: '68%', y: '82%', label: 'Island' },
  ];

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.4rem', borderRadius: '8px' }}>
            <Navigation size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem' }}>Interactive Route Map</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GPS synchronized waypoint cluster</p>
          </div>
        </div>
        <span className="badge badge-sky">5 Waypoints</span>
      </div>

      {/* Map Canvas Simulation */}
      <div style={{
        position: 'relative',
        height: '240px',
        background: 'linear-gradient(145deg, #0b2046 0%, #071A3D 100%)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
      }}>
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.6
        }}></div>

        {/* Route Connecting Lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <path
            d="M 80 60 Q 200 90, 240 120 T 320 130 T 210 50 T 300 200"
            fill="none"
            stroke="rgba(56, 189, 248, 0.5)"
            strokeWidth="3"
            strokeDasharray="6,6"
          />
        </svg>

        {/* Waypoint Pins */}
        {pins.map((pin) => {
          const isSelected = activePin === pin.id;
          return (
            <div
              key={pin.id}
              onClick={() => setActivePin(pin.id)}
              style={{
                position: 'absolute',
                left: pin.x,
                top: pin.y,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                zIndex: isSelected ? 10 : 2,
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                background: isSelected ? 'var(--electric-blue)' : 'rgba(255, 255, 255, 0.9)',
                color: isSelected ? '#ffffff' : 'var(--primary-navy)',
                padding: '0.25rem 0.55rem',
                borderRadius: '99px',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                boxShadow: isSelected ? '0 0 15px rgba(22, 119, 255, 0.8)' : '0 2px 6px rgba(0,0,0,0.3)',
                border: isSelected ? '2px solid #ffffff' : '1px solid var(--border-color)',
                whiteSpace: 'nowrap'
              }}>
                <MapPin size={12} />
                <span>{pin.label}</span>
              </div>
            </div>
          );
        })}

        {/* Selected Pin Details Overlay */}
        {pins.find(p => p.id === activePin) && (
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            right: '10px',
            background: 'rgba(7, 26, 61, 0.85)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            padding: '0.65rem 0.9rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8rem'
          }}>
            <div>
              <span style={{ fontSize: '0.68rem', color: 'var(--sky-blue)', fontWeight: 700, textTransform: 'uppercase' }}>
                Waypoint {activePin}
              </span>
              <p style={{ fontWeight: 700 }}>{pins.find(p => p.id === activePin)?.name}</p>
            </div>
            <span style={{ opacity: 0.8 }}>
              {pins.find(p => p.id === activePin)?.time}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
