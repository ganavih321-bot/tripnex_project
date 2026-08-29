import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { getDestinationPhoto } from '../data/destinationImages';
import { useLanguage } from '../context/LanguageContext';

export const FEATURED_DESTINATIONS = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    image: getDestinationPhoto('bali', 'hero'),
    tag: 'Island Vibes',
    tagColor: '#0284c7',
    tagBg: '#e0f2fe',
    description: 'Emerald rice terraces, Uluwatu cliff temples & bohemian sunset beach clubs.',
    duration: '4 Days / 3 Nights',
    estBudget: '₹28,500',
    perPerson: '₹5,700',
    style: 'Adventure • Beaches • Wellness'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
    tag: 'Cyberpunk & Temples',
    tagColor: '#dc2626',
    tagBg: '#fee2e2',
    description: 'Neon Shibuya crossings, historic Senso-ji shrine & world-class street ramen.',
    duration: '5 Days / 4 Nights',
    estBudget: '₹62,000',
    perPerson: '₹12,400',
    style: 'Tech • Food • Culture'
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80',
    tag: 'Art & Cafes',
    tagColor: '#8b5cf6',
    tagBg: '#f5f3ff',
    description: 'Eiffel Tower picnics, Louvre masterpieces & charming Montmartre bistros.',
    duration: '4 Days / 3 Nights',
    estBudget: '₹55,000',
    perPerson: '₹11,000',
    style: 'Architecture • Romance • Food'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Interlaken',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    tag: 'Alpine Peaks',
    tagColor: '#059669',
    tagBg: '#ecfdf5',
    description: 'Crystal alpine lakes, Jungfraujoch glaciers & panoramic scenic train rides.',
    duration: '4 Days / 3 Nights',
    estBudget: '₹68,000',
    perPerson: '₹13,600',
    style: 'Mountains • Trekking • Scenic'
  },
  {
    id: 'iceland',
    name: 'Iceland',
    country: 'Reykjavik',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1000&q=80',
    tag: 'Northern Lights',
    tagColor: '#0284c7',
    tagBg: '#e0f2fe',
    description: 'Glacial lagoons, steaming geothermal hot springs & dancing Aurora skies.',
    duration: '4 Days / 3 Nights',
    estBudget: '₹58,000',
    perPerson: '₹11,600',
    style: 'Volcanoes • Aurora • Pure Nature'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    tag: 'Futuristic Oasis',
    tagColor: '#d97706',
    tagBg: '#fef3c7',
    description: 'Burj Khalifa skyline, desert dune safaris & futuristic marina dining.',
    duration: '3 Days / 2 Nights',
    estBudget: '₹42,000',
    perPerson: '₹8,400',
    style: 'Luxury • Safari • Skyline'
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    country: 'India',
    image: getDestinationPhoto('pondicherry', 'hero'),
    tag: 'French Colony',
    tagColor: '#1677ff',
    tagBg: '#e6f4ff',
    description: 'Mustard-yellow villas, Rock Beach promenade & artisan French bakeries.',
    duration: '3 Days / 2 Nights',
    estBudget: '₹20,000',
    perPerson: '₹4,000',
    style: 'Beaches • Heritage • Food'
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    image: getDestinationPhoto('goa', 'hero'),
    tag: 'Coastal Escape',
    tagColor: '#f59e0b',
    tagBg: '#fffbeb',
    description: 'Anjuna red cliffs, Portuguese Chapora fort & vibrant beachside music.',
    duration: '3 Days / 2 Nights',
    estBudget: '₹28,000',
    perPerson: '₹7,000',
    style: 'Beaches • Water Sports • Nightlife'
  },
  {
    id: 'manali',
    name: 'Manali',
    country: 'Himachal, India',
    image: getDestinationPhoto('manali', 'hero'),
    tag: 'Himalayan Trek',
    tagColor: '#10b981',
    tagBg: '#ecfdf5',
    description: 'Solang snow peaks, Old Manali cedar trails & apple orchard cafes.',
    duration: '4 Days / 3 Nights',
    estBudget: '₹32,000',
    perPerson: '₹8,000',
    style: 'Snow Peaks • Pine Trails • Cafes'
  }
];

export default function DestinationCarousel({ onSelectDestination }) {
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', margin: '2rem 0 3.5rem 0' }}>
      {/* Header with Navigation Controls */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="badge badge-navy" style={{ marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
            <Compass size={12} /> EXPLORE THE WORLD
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--primary-navy)' }}>
            Curated Global Getaways
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
            Handcrafted student and group itineraries with verified budgets and real travel photography.
          </p>
        </div>

        {/* Scroll Arrows */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => scroll('left')}
            className="btn btn-secondary btn-icon"
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="btn btn-secondary btn-icon"
            style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '1.25rem',
          paddingTop: '0.25rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className="hide-scrollbar"
      >
        {FEATURED_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination && onSelectDestination(dest.name)}
            className="card card-hover"
            style={{
              flex: '0 0 320px',
              scrollSnapAlign: 'start',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              position: 'relative'
            }}
          >
            {/* Image Header */}
            <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
              <img
                src={dest.image}
                alt={dest.name}
                className="travel-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="cinematic-gradient-overlay" />

              {/* Tag & Duration */}
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--primary-navy)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '99px'
                }}>
                  {dest.tag}
                </span>

                <span style={{
                  background: 'rgba(7, 26, 61, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#38bdf8',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '99px'
                }}>
                  {dest.duration.split('/')[0]}
                </span>
              </div>

              {/* Destination Title & Country */}
              <div style={{ position: 'absolute', bottom: '0.85rem', left: '1.25rem', right: '1.25rem', color: '#ffffff' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, textTransform: 'uppercase', margin: 0, color: '#ffffff' }}>
                  {dest.name}
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} color="#38bdf8" /> {dest.country}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '0.85rem' }}>
                  {dest.description}
                </p>

                <div style={{ fontSize: '0.75rem', color: 'var(--electric-blue)', fontWeight: 600, marginBottom: '1rem' }}>
                  {dest.style}
                </div>
              </div>

              {/* Budget Strip & Explore CTA */}
              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', display: 'block', textTransform: 'uppercase' }}>From</span>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                    {dest.perPerson}
                    <span style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)' }}> /person</span>
                  </span>
                </div>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--electric-blue)'
                }}>
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
