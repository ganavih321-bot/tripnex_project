import React from 'react';
import { 
  Clock, MapPin, Bus, Car, Building2, Utensils, 
  Compass, ShoppingBag, Footprints, Info, Sparkles, Bike, CheckCircle2, Circle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Timeline({ timelineItems, peopleCount = 5, visitedStops = {}, onToggleVisited, activeDay = 1 }) {
  const { t } = useLanguage();

  if (!timelineItems || timelineItems.length === 0) {
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        No timeline events scheduled for this day.
      </div>
    );
  }

  // Calculate day completion stats
  const totalItems = timelineItems.length;
  const visitedCount = timelineItems.filter(item => visitedStops[item.id || item.title]).length;
  const progressPercent = Math.round((visitedCount / totalItems) * 100);

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
    <div style={{ position: 'relative' }}>
      {/* Live In-Trip Visited Tracker Progress Bar */}
      <div style={{
        background: '#ffffff',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        padding: '0.9rem 1.25rem',
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        boxShadow: 'var(--shadow-xs)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <CheckCircle2 size={16} color="var(--success)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
              {t('visited_progress_title', "Today's Journey Progress")} (DAY {activeDay})
            </span>
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: visitedCount === totalItems ? 'var(--success)' : 'var(--electric-blue)' }}>
            {visitedCount} / {totalItems} {t('dash_stops', 'stops')} ({progressPercent}%)
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ width: '100%', height: '6px', background: 'var(--bg-light)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: visitedCount === totalItems ? 'var(--success)' : 'linear-gradient(90deg, var(--electric-blue) 0%, var(--sky-blue) 100%)',
            transition: 'width 0.3s ease',
            borderRadius: '99px'
          }}></div>
        </div>

        {visitedCount === totalItems && (
          <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 700, marginTop: '0.1rem' }}>
            {t('visited_progress_done', 'All scheduled stops completed today! 🎉')}
          </span>
        )}
      </div>

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
            const stopKey = item.id || item.title;
            const isVisited = !!(visitedStops && visitedStops[stopKey]);

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
                  background: isVisited ? 'var(--success-bg)' : '#ffffff',
                  border: isVisited ? '2px solid var(--success)' : '2px solid var(--electric-blue)',
                  color: isVisited ? 'var(--success)' : 'var(--electric-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  zIndex: 2,
                  transition: 'all var(--transition-fast)'
                }}>
                  {isVisited ? <CheckCircle2 size={20} /> : getTypeIcon(item.type, item.transport_mode)}
                </div>

                {/* Event Card */}
                <div 
                  className="card card-hover" 
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderLeft: isVisited ? '4px solid var(--success)' : isHotel ? '4px solid var(--purple)' : isTransport ? '4px solid var(--sky-blue)' : '1px solid var(--border-color)',
                    background: isVisited ? '#fcfdfd' : '#ffffff',
                    opacity: isVisited ? 0.88 : 1,
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {/* Top Row: Time, Type Badge, Visited Checkbox & Cost */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                        <Clock size={15} color={isVisited ? 'var(--success)' : 'var(--electric-blue)'} />
                        <span style={{ textDecoration: isVisited ? 'line-through' : 'none' }}>{item.time}</span>
                      </div>

                      <span className={`badge ${isVisited ? 'badge-green' : badgeClass}`}>
                        {isVisited ? t('visited_badge', 'Visited ✓') : (item.transport_mode || item.type)}
                      </span>

                      {item.duration && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-light)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                          ⏱️ {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Right side: Checkmark Action + Cost Box */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      {/* Interactive Tick mark button */}
                      {onToggleVisited && (
                        <button
                          type="button"
                          onClick={() => onToggleVisited(stopKey)}
                          title={isVisited ? "Mark as unvisited" : "Mark as visited"}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '99px',
                            background: isVisited ? 'var(--success-bg)' : 'var(--bg-light)',
                            border: isVisited ? '1px solid #a7f3d0' : '1px solid var(--border-color)',
                            color: isVisited ? '#059669' : 'var(--text-muted)',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          {isVisited ? <CheckCircle2 size={14} color="var(--success)" /> : <Circle size={14} />}
                          <span>{isVisited ? t('visited_unmark_btn', 'Visited') : t('visited_mark_btn', 'Check-in')}</span>
                        </button>
                      )}

                      {/* Cost Box */}
                      <div style={{ textAlign: 'right' }}>
                        {item.cost === 0 ? (
                          <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                            {t('dash_free_entry', 'Free Entry')}
                          </span>
                        ) : item.cost_type === 'total' ? (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                              ₹{Number(item.cost).toLocaleString('en-IN')}
                            </span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                              {t('dash_total_group', 'Total Group')} (₹{Math.round(item.cost / peopleCount)}/{t('dash_per_person', 'person')})
                            </span>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--electric-blue)' }}>
                              ₹{Number(item.cost).toLocaleString('en-IN')}
                            </span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                              {t('dash_per_person_tag', 'per person')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Main Activity Title */}
                  <h4 style={{ 
                    fontSize: '1.15rem', 
                    color: isVisited ? '#475569' : 'var(--primary-navy)', 
                    marginBottom: '0.35rem',
                    textDecoration: isVisited ? 'line-through' : 'none'
                  }}>
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
    </div>
  );
}

