import React, { useState } from 'react';
import { 
  X, Share2, Mail, Copy, Check, MessageCircle, QrCode, 
  Send, Users, Sparkles, Calendar, Wallet, CheckCircle2, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ShareTripModal({ isOpen, onClose, trip }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('link'); // 'link' | 'email'
  const [copied, setCopied] = useState(false);
  const [emailList, setEmailList] = useState('rahul@college.edu, ananya@gmail.com');
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen || !trip) return null;

  const shareUrl = window.location.href;
  const shareMessage = `🎒 Hey! Check out our group trip plan to ${trip.destination} on TRIPNEX!\n📅 Dates: ${trip.start_date} to ${trip.end_date}\n👥 Group: ${trip.people} travelers\n💰 Budget: ₹${trip.budget?.toLocaleString('en-IN')} (₹${trip.per_person_budget?.toLocaleString('en-IN')}/person)\n\n👉 Open itinerary: ${shareUrl}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(shareMessage);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!emailList.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 4500);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px', padding: '2rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.5rem', borderRadius: '10px' }}>
              <Share2 size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.35rem' }}>{t('share_modal_title', 'Share Trip & Invite Friends')}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{trip.destination} • {trip.people} {t('dash_travelers_count', 'travelers')}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: 'var(--bg-light)', padding: '0.35rem', borderRadius: 'var(--radius-md)' }}>
          <button
            type="button"
            onClick={() => setActiveTab('link')}
            style={{
              flex: 1,
              padding: '0.65rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'link' ? '#ffffff' : 'transparent',
              color: activeTab === 'link' ? 'var(--primary-navy)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: activeTab === 'link' ? 'var(--shadow-sm)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Share2 size={16} color="var(--electric-blue)" />
            <span>{t('share_tab_link', 'Link & WhatsApp')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('email')}
            style={{
              flex: 1,
              padding: '0.65rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'email' ? '#ffffff' : 'transparent',
              color: activeTab === 'email' ? 'var(--primary-navy)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: activeTab === 'email' ? 'var(--shadow-sm)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Mail size={16} color="var(--purple)" />
            <span>{t('share_tab_email', 'Email Itinerary')}</span>
          </button>
        </div>

        {/* Tab 1: Share Link & WhatsApp */}
        {activeTab === 'link' && (
          <div>
            {/* Quick WhatsApp CTA */}
            <button
              type="button"
              onClick={handleWhatsApp}
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: 'var(--radius-md)',
                background: '#25D366',
                color: '#ffffff',
                border: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                transition: 'all var(--transition-fast)'
              }}
              className="card-hover"
            >
              <MessageCircle size={20} />
              <span>{t('share_whatsapp_btn', 'Share on WhatsApp Group')}</span>
            </button>

            {/* Copy Link Input Box */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                Trip Web Link:
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  style={{
                    flex: 1,
                    padding: '0.7rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-light)',
                    fontSize: '0.85rem',
                    color: 'var(--primary-navy)'
                  }}
                />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-primary"
                  style={{ flexShrink: 0 }}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? t('share_copied_btn', 'Copied! ✓') : t('share_copy_btn', 'Copy Link')}
                </button>
              </div>
            </div>

            {/* QR Code Section */}
            <div style={{
              background: 'var(--bg-light)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <QrCode size={56} color="var(--primary-navy)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginBottom: '0.2rem' }}>
                  {t('share_qr_title', 'Scan with Mobile')}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  Have your friends scan this QR code with their phones to instantly open this exact synchronized itinerary.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Email Itinerary */}
        {activeTab === 'email' && (
          <form onSubmit={handleSendEmail}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-navy)', display: 'block', marginBottom: '0.4rem' }}>
                {t('email_input_label', 'Send itinerary to emails (comma-separated):')}
              </label>
              <input
                type="text"
                value={emailList}
                onChange={(e) => setEmailList(e.target.value)}
                placeholder={t('email_placeholder', 'e.g. rahul@college.edu, ananya@gmail.com')}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            {/* Email Preview Card */}
            <div style={{
              background: 'var(--bg-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              padding: '1.2rem',
              marginBottom: '1.25rem',
              fontSize: '0.85rem'
            }}>
              <div style={{ fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>
                📧 {t('email_preview_subject', 'Subject: TRIPNEX Group Plan to')} {trip.destination} ({trip.formatted_dates || `${trip.start_date} - ${trip.end_date}`})
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                Hi team! Here is our confirmed day-wise itinerary for {trip.destination}. Total: ₹{trip.budget?.toLocaleString('en-IN')} (₹{trip.per_person_budget?.toLocaleString('en-IN')} per person).
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <li>Transit: Synchronized group bus/train & local rental transit</li>
                <li>Stay: {trip.stay?.name || 'TRIPNEX Verified Stay'} (Check-in: 11:00 AM)</li>
                <li>Live Budget & Equal Split calculation included</li>
              </ul>
            </div>

            {/* Email Success Feedback */}
            {emailSent && (
              <div style={{
                background: 'var(--success-bg)',
                border: '1px solid #a7f3d0',
                color: 'var(--success)',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                marginBottom: '1.25rem'
              }}>
                <CheckCircle2 size={18} />
                <span>{t('email_sent_msg', 'Itinerary sent to group members! 🚀')}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem'
              }}
            >
              <Send size={16} />
              <span>{isSending ? 'Sending...' : t('email_send_btn', 'Send Itinerary Email')}</span>
            </button>
          </form>
        )}

        {/* Modal Close */}
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <button type="button" onClick={onClose} className="btn btn-secondary">
            {t('opt_btn_cancel', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
}
