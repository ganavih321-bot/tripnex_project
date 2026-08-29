import React, { useState } from 'react';
import { 
  X, MessageSquare, ThumbsUp, Plus, Sparkles, User, Tag, 
  MapPin, CheckCircle2, Clock, Utensils, Compass, ShieldAlert, Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GroupDiscussion({ isOpen, onClose, destination, suggestions, onAddSuggestion, onUpvoteSuggestion, onAddToTimeline }) {
  const { t } = useLanguage();
  const [newText, setNewText] = useState('');
  const [authorName, setAuthorName] = useState('You');
  const [category, setCategory] = useState('Food & Cafes');
  const [dayTarget, setDayTarget] = useState(2);

  if (!isOpen) return null;

  const categories = [
    { label: 'Food & Cafes', icon: Utensils, color: 'var(--amber)' },
    { label: 'Hidden Gem', icon: Compass, color: 'var(--electric-blue)' },
    { label: 'Budget Hack', icon: Sparkles, color: 'var(--success)' },
    { label: 'Safety / Tip', icon: ShieldAlert, color: 'var(--purple)' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newText.trim()) return;

    onAddSuggestion({
      id: `sug_${Date.now()}`,
      author: authorName.trim() || 'You',
      avatar: '🎓',
      text: newText.trim(),
      category: category,
      targetDay: Number(dayTarget),
      votes: 1,
      hasVoted: true,
      addedToItinerary: false,
      timestamp: 'Just now'
    });

    setNewText('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          maxWidth: '680px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--purple-bg)', color: 'var(--purple)', padding: '0.5rem', borderRadius: '10px' }}>
              <MessageSquare size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem' }}>{t('discuss_title', 'Group Suggestions & Tips')}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {t('discuss_subtitle', 'Propose spots, vote with friends, and inject into itinerary')}
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} style={{ background: 'var(--bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder={t('discuss_add_placeholder', 'Suggest a cafe, shortcut, or hidden gem...')}
              required
              style={{
                flex: 1,
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.875rem'
              }}
            />
            <button type="submit" className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
              <Plus size={15} />
              {t('discuss_add_btn', 'Add Suggestion')}
            </button>
          </div>

          {/* Form Meta Row: Category & Target Day */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Tag size={13} color="var(--text-muted)" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ padding: '0.3rem 0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.8rem' }}
              >
                {categories.map(c => <option key={c.label} value={c.label}>{c.label}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={13} color="var(--text-muted)" />
              <span>Target:</span>
              <select
                value={dayTarget}
                onChange={(e) => setDayTarget(Number(e.target.value))}
                style={{ padding: '0.3rem 0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.8rem' }}
              >
                <option value={1}>Day 1</option>
                <option value={2}>Day 2</option>
                <option value={3}>Day 3</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <User size={13} color="var(--text-muted)" />
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Your name"
                style={{ width: '90px', padding: '0.25rem 0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.8rem' }}
              />
            </div>
          </div>
        </form>

        {/* Suggestions List */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingRight: '0.25rem' }}>
          {(!suggestions || suggestions.length === 0) ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
              <p>No suggestions added yet. Be the first to suggest a spot!</p>
            </div>
          ) : (
            suggestions.map((sug) => {
              const isAdded = sug.addedToItinerary;
              return (
                <div
                  key={sug.id}
                  className="card"
                  style={{
                    padding: '1rem 1.25rem',
                    background: isAdded ? 'var(--success-bg)' : '#ffffff',
                    border: isAdded ? '1px solid #a7f3d0' : '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{sug.avatar || '👤'}</span>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>{sug.author}</span>
                          <span className="badge badge-sky" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>
                            {sug.category}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            for DAY {sug.targetDay}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>
                      {sug.timestamp}
                    </span>
                  </div>

                  {/* Suggestion Text */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                    {sug.text}
                  </p>

                  {/* Action Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem', marginTop: '0.2rem' }}>
                    {/* Upvote Button */}
                    <button
                      type="button"
                      onClick={() => onUpvoteSuggestion(sug.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: sug.hasVoted ? 'var(--electric-blue-light)' : 'transparent',
                        color: sug.hasVoted ? 'var(--electric-blue)' : 'var(--text-muted)',
                        border: '1px solid var(--border-color)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '99px',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '0.78rem'
                      }}
                    >
                      <ThumbsUp size={13} />
                      <span>{sug.votes || 1} {t('discuss_upvote', 'Votes')}</span>
                    </button>

                    {/* Add to Timeline CTA */}
                    {isAdded ? (
                      <span className="badge badge-green" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                        <CheckCircle2 size={13} />
                        {t('discuss_added_badge', 'Added to Itinerary ✓')}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onAddToTimeline(sug)}
                        className="btn btn-sm btn-primary"
                        style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                      >
                        <Sparkles size={13} />
                        {t('discuss_accept_btn', '✨ Add to Timeline')}
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
            {t('opt_btn_cancel', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
}
