import React, { useState, useEffect } from 'react';
import { 
  Camera, ImagePlus, Sparkles, X, ChevronLeft, ChevronRight, 
  MapPin, Calendar, User, Heart, Share2, Download, Bookmark
} from 'lucide-react';
import PhotoTimeline from './PhotoTimeline';
import { getDestinationMemories, getDestinationPhoto } from '../data/destinationImages';
import { useLanguage } from '../context/LanguageContext';

export default function TripMemory({ trip }) {
  const { t } = useLanguage();
  const dest = trip?.destination || 'Pondicherry';

  // Initialize memories from localStorage or curated presets
  const storageKey = `tripnex_memories_${dest.toLowerCase().replace(/\s+/g, '_')}`;
  const [photos, setPhotos] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch {}
    return getDestinationMemories(dest);
  });

  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // New photo form state
  const [newTitle, setNewTitle] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newDay, setNewDay] = useState(1);
  const [newAuthor, setNewAuthor] = useState('You');
  const [newImageUrl, setNewImageUrl] = useState('');

  // Persist photos to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(photos));
    } catch {}
  }, [photos, storageKey]);

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const sampleImages = [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
    ];

    const fallbackUrl = sampleImages[photos.length % sampleImages.length];

    const newPhotoObj = {
      id: `mem-${Date.now()}`,
      day: Number(newDay) || 1,
      title: newTitle.trim(),
      caption: newCaption.trim() || 'A magical moment captured on our group journey.',
      location: newLocation.trim() || `${dest} Landmark`,
      author: newAuthor.trim() || 'You',
      url: newImageUrl.trim() || fallbackUrl
    };

    setPhotos(prev => [newPhotoObj, ...prev]);
    setIsUploadOpen(false);
    setNewTitle('');
    setNewCaption('');
    setNewLocation('');
    setNewImageUrl('');
  };

  const handleNextPhoto = () => {
    if (!activeLightboxPhoto) return;
    const currentIndex = photos.findIndex(p => p.id === activeLightboxPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setActiveLightboxPhoto(photos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activeLightboxPhoto) return;
    const currentIndex = photos.findIndex(p => p.id === activeLightboxPhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setActiveLightboxPhoto(photos[prevIndex]);
  };

  const coverPhoto = getDestinationPhoto(dest, 'cover');

  return (
    <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
      {/* Cinematic Memory Hero Card */}
      <div 
        className="travel-img-wrapper" 
        style={{
          height: '280px',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '2rem',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
      >
        <img
          src={coverPhoto}
          alt={`${dest} Memories`}
          className="travel-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <div className="cinematic-gradient-overlay" style={{
          background: 'linear-gradient(180deg, rgba(7, 26, 61, 0.3) 0%, rgba(7, 26, 61, 0.92) 100%)'
        }} />

        {/* Content */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          right: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem',
          color: '#ffffff'
        }}>
          <div>
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '0.3rem'
            }}>
              <Camera size={14} /> TRIP MEMORY & TRAVEL JOURNAL
            </span>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '0.35rem'
            }}>
              {dest.toUpperCase()} '26
            </h2>

            <p style={{ color: '#e2e8f0', fontSize: '0.95rem', fontStyle: 'italic' }}>
              "{photos.length} captured moments with {trip?.people || 5} friends. Some journeys deserve to be remembered forever."
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsUploadOpen(true)}
            className="btn btn-primary"
            style={{
              padding: '0.75rem 1.35rem',
              boxShadow: '0 4px 20px rgba(22, 119, 255, 0.5)'
            }}
          >
            <ImagePlus size={18} />
            <span>Upload Memory Photo</span>
          </button>
        </div>
      </div>

      {/* Photo Timeline Grid */}
      <PhotoTimeline
        photos={photos}
        onSelectPhoto={setActiveLightboxPhoto}
      />

      {/* Upload Memory Photo Modal */}
      {isUploadOpen && (
        <div className="modal-overlay" onClick={() => setIsUploadOpen(false)}>
          <div 
            className="modal-card" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '520px', padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Camera size={22} color="var(--electric-blue)" />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>Add Trip Memory</h3>
              </div>
              <button type="button" onClick={() => setIsUploadOpen(false)} className="btn btn-ghost btn-icon">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddPhoto} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>
                  Memory Title *
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Sunset Coffee at Rock Beach"
                  required
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>
                    Day Number
                  </label>
                  <select
                    value={newDay}
                    onChange={(e) => setNewDay(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: '#ffffff'
                    }}
                  >
                    <option value={1}>Day 1</option>
                    <option value={2}>Day 2</option>
                    <option value={3}>Day 3</option>
                    <option value={4}>Day 4</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>
                    Photographer
                  </label>
                  <input
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Ananya"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>
                  Location / Spot
                </label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="e.g. Promenade Rock Beach"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>
                  Photo Caption
                </label>
                <textarea
                  value={newCaption}
                  onChange={(e) => setNewCaption(e.target.value)}
                  placeholder="Share a story or highlight from this moment..."
                  rows={2}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--primary-navy)' }}>
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Leave empty for auto-generated high-res travel photo"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Save Memory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fullscreen Photo Lightbox Modal */}
      {activeLightboxPhoto && (
        <div 
          className="modal-overlay" 
          style={{ background: 'rgba(7, 26, 61, 0.95)', zIndex: 1200, padding: '1rem' }}
          onClick={() => setActiveLightboxPhoto(null)}
        >
          <div 
            style={{ position: 'relative', maxWidth: '880px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setActiveLightboxPhoto(null)}
              className="btn btn-ghost btn-icon"
              style={{ position: 'absolute', top: '-40px', right: 0, color: '#ffffff' }}
            >
              <X size={24} />
            </button>

            {/* Main Lightbox Image with Nav Arrows */}
            <div style={{ position: 'relative', width: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', maxHeight: '72vh', background: '#000' }}>
              <img
                src={activeLightboxPhoto.url}
                alt={activeLightboxPhoto.title}
                style={{ width: '100%', height: 'auto', maxHeight: '72vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}
              />

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="btn btn-ghost btn-icon"
                style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff' }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={handleNextPhoto}
                className="btn btn-ghost btn-icon"
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff' }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Photo Metadata Card */}
            <div style={{
              width: '100%',
              background: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                  <span className="badge badge-navy">DAY {activeLightboxPhoto.day}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} color="var(--electric-blue)" /> {activeLightboxPhoto.location}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-navy)', margin: '0.2rem 0' }}>
                  {activeLightboxPhoto.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  "{activeLightboxPhoto.caption}"
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Captured By</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                  📸 {activeLightboxPhoto.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
