import React from 'react';
import { Calendar, MapPin, User, Eye, Sparkles } from 'lucide-react';

export default function PhotoTimeline({ photos = [], onSelectPhoto }) {
  // Group photos by day
  const groupedByDay = photos.reduce((acc, p) => {
    const day = p.day || 1;
    if (!acc[day]) acc[day] = [];
    acc[day].push(p);
    return acc;
  }, {});

  const dayKeys = Object.keys(groupedByDay).sort((a, b) => Number(a) - Number(b));

  if (photos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-color)' }}>
        <p style={{ color: 'var(--text-muted)' }}>No travel memories added yet. Click "Upload Memory Photo" to begin your journal!</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {dayKeys.map((dayNum) => {
        const dayPhotos = groupedByDay[dayNum];
        return (
          <div key={dayNum}>
            {/* Day Header Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="badge badge-navy" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
                DAY {dayNum} MEMORIES
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {dayPhotos.length} {dayPhotos.length === 1 ? 'Photo' : 'Photos'}
              </span>
            </div>

            {/* Photo Masonry Grid */}
            <div className="photo-masonry-grid">
              {dayPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="photo-card"
                  onClick={() => onSelectPhoto && onSelectPhoto(photo)}
                >
                  <img
                    src={photo.url}
                    alt={photo.title || 'Trip memory'}
                    className="travel-img"
                    loading="lazy"
                  />
                  <div className="photo-card-info">
                    <span style={{ fontSize: '0.72rem', color: '#7dd3fc', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={11} /> {photo.location}
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: '0.2rem 0' }}>
                      {photo.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      "{photo.caption}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <User size={12} /> {photo.author || 'Traveler'}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#38bdf8' }}>
                        <Eye size={12} /> View Full
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
