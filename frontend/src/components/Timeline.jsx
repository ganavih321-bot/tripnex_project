import React from 'react';
import { 
  Clock, MapPin, Bus, Car, Building2, Utensils, 
  Compass, ShoppingBag, Footprints, Info, Sparkles, Bike
} from 'lucide-react';

export default function Timeline({ timelineItems, peopleCount = 5 }) {
  if (!timelineItems || timelineItems.length === 0) {
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        No timeline events scheduled for this day.
      </div>
    );
  }

  const getTypeIcon = (type, mode) => {
    if (mode === 'Bus') return <Bus size={18} />;
    if (mode === 'Auto Rickshaw' || mode === 'Local Transit') return <Car size={18} />;
    if (mode === 'Rented Scooters' || mode === 'Scooter Rental') return <Bike size={18} />;
    
    switch (type) {
      case 'walk': return <Footprints size={18} />;
      case 'transport': return <Bus size={18} />;
      case 'hotel': return <Building2 size={18} />;
      case 'food': return <Utensils size={18} />;
      case 'sightseeing': return <Compass size={18} />;
      case 'activity': return <Sparkles size={18} />;
      case 'shopping': return <ShoppingBag size={18} />;
      default: return <Compass size={18} />;
    }
  };

  const getTypeBadgeClass = (type) => {
    switch (type) {
      case 'transport': return 'badge-sky';
      case 'hotel': return 'badge-purple';
      case 'food': return 'badge-amber';
      case 'sightseeing': return 'badge-blue';
      case 'activity': return 'badge-green';
      case 'shopping': return 'badge-navy';
      default: return 'badge-blue';
    }
  };

  return (
    <div style={{ position: 'relative', paddingLeft: '2.25rem' }}>
      {/* Vertical Spine Line */}
      <div style={{
        position: 'absolute',
        left: '17px',
        top: '20px',
        bottom: '30px',
        width: '2px',
        background: 'linear-gradient(180deg, var(--electric-blue) 0%, #cbd5e1 100%)',
        zIndex: 0
      }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {timelineItems.map((item, index) => {
          const isTransport = item.type === 'transport' || item.type === 'walk';
          const isHotel = item.type === 'hotel';
          const badgeClass = getTypeBadgeClass(item.type);

          return (
            <div key={item.id || index} style={{ position: 'relative', zIndex: 1 }}>
              {/* Timeline Dot / Icon */}
              <div style={{
                position: 'absolute',
                left: '-2.25rem',
                top: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '2px solid var(--electric-blue)',
                color: 'var(--electric-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                zIndex: 2
              }}>
                {getTypeIcon(item.type, item.transport_mode)}
              </div>

              {/* Event Card */}
              <div 
                className="card card-hover" 
                style={{
                  padding: '1.25rem 1.5rem',
                  borderLeft: isHotel ? '4px solid var(--purple)' : isTransport ? '4px solid var(--sky-blue)' : '1px solid var(--border-color)',
                  background: '#ffffff'
                }}
              >
                {/* Top Row: Time, Type Badge, Cost */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                      <Clock size={15} color="var(--electric-blue)" />
                      <span>{item.time}</span>
                    </div>

                    <span className={`badge ${badgeClass}`}>
                      {item.transport_mode || item.type}
                    </span>

                    {item.duration && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-light)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                        ⏱️ {item.duration}
                      </span>
                    )}
                  </div>

                  {/* Cost Box */}
                  <div style={{ textAlign: 'right' }}>
                    {item.cost === 0 ? (
                      <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>Free Entry</span>
                    ) : item.cost_type === 'total' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                          ₹{Number(item.cost).toLocaleString('en-IN')}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          Total Group (₹{Math.round(item.cost / peopleCount)}/person)
                        </span>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--electric-blue)' }}>
                          ₹{Number(item.cost).toLocaleString('en-IN')}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          per person
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Activity Title */}
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>

                {/* Location */}
                {item.location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <MapPin size={14} color="var(--sky-blue)" />
                    <span>{item.location}</span>
                  </div>
                )}

                {/* Notes & Student Tips */}
                {item.notes && (
                  <div style={{
                    marginTop: '0.65rem',
                    padding: '0.55rem 0.85rem',
                    background: 'var(--bg-light)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.825rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderLeft: '2px solid var(--electric-blue)'
                  }}>
                    <Info size={14} color="var(--electric-blue)" style={{ flexShrink: 0 }} />
                    <span>{item.notes}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
