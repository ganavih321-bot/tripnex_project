import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot, User, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Copilot({ trip, onTriggerOptimization }) {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hey! I'm your TRIPNEX Travel Copilot. I'm monitoring your ${trip.destination} group trip. How can I help today?`,
      timestamp: 'Just now'
    }
  ]);

  const quickPrompts = [
    { label: t('prompt_opt_budget', "✨ Optimize my budget"), action: "optimize_budget" },
    { label: t('prompt_running_late', "⏰ We're running late"), action: "running_late" },
    { label: t('prompt_more_fun', "🎉 Make this trip more fun"), action: "more_fun" },
    { label: t('prompt_cheap_transit', "🚌 Find cheaper transport"), action: "cheap_transit" },
    { label: t('prompt_food_spots', "🍛 Add more food spots"), action: "food_spots" },
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage('');

    setTimeout(() => {
      let botReply = '';
      const lower = query.toLowerCase();

      if (lower.includes('budget') || lower.includes('cost') || lower.includes('cheap') || lower.includes('बजट') || lower.includes('ಖರ್ಚು') || lower.includes('பட்ஜெட்')) {
        botReply = language === 'hi'
          ? `💡 आपके ₹${trip.budget?.toLocaleString('en-IN')} के बजट के आधार पर, डे 2 पर प्राइवेट ऑटो के बजाय शेअर्ड स्कूटर लेने से ₹600 की बचत होगी। इसे तुरंत लागू करने के लिए ऊपर "✨ ट्रिप अनुकूलित करें" पर टैप करें!`
          : language === 'ta'
          ? `💡 உங்கள் ₹${trip.budget?.toLocaleString('en-IN')} பட்ஜெட்டில், நாள் 2 இல் பகிரப்பட்ட ஸ்கூட்டர்களைப் பயன்படுத்துவது ₹600 சேமிக்கும். இதை செயல்படுத்த "✨ மேம்படுத்துக" கிளிக் செய்யவும்!`
          : language === 'kn'
          ? `💡 ನಿಮ್ಮ ₹${trip.budget?.toLocaleString('en-IN')} ಬಜೆಟ್‌ನಲ್ಲಿ, ದಿನ 2 ರಂದು ಸ್ಕೂಟರ್ ಬಾಡಿಗೆ ಪಡೆಯುವುದರಿಂದ ₹600 ಉಳಿತಾಯವಾಗುತ್ತದೆ. ಅನ್ವಯಿಸಲು "✨ ಉತ್ತಮಗೊಳಿಸಿ" ಟ್ಯಾಪ್ ಮಾಡಿ!`
          : language === 'te'
          ? `💡 మీ ₹${trip.budget?.toLocaleString('en-IN')} బడ్జెట్‌లో, డే 2 లో షేర్డ్ స్కూటర్లు ఉపయోగించడం ద్వారా ₹600 ఆదా అవుతుంది. దరఖాస్తు చేసుకోవడానికి "✨ ఆప్టిమైజ్ చేయండి" నొక్కండి!`
          : language === 'fr'
          ? `💡 En passant aux scooters partagés le jour 2, vous économiserez 600 ₹ sur votre budget de ${trip.budget?.toLocaleString('en-IN')} ₹. Cliquez sur "✨ Optimiser" pour l'appliquer !`
          : `💡 Based on your current ₹${trip.budget?.toLocaleString('en-IN')} total, switching from private autos to shared scooters on Day 2 will save ₹600 for the group. Tap "✨ Optimize Trip" above to apply this automatically!`;
      } else if (lower.includes('late') || lower.includes('time') || lower.includes('delay') || lower.includes('देर') || lower.includes('ತಡ') || lower.includes('தாமதம்')) {
        botReply = language === 'hi'
          ? `⏱️ कोई बात नहीं! मैं आपकी पैराडाइज बीच की यात्रा को डे 3 की सुबह शिफ्ट कर सकता हूँ ताकि कैफे का समय 45 मिनट बढ़ सके।`
          : language === 'fr'
          ? `⏱️ Aucun souci ! Je peux déplacer l'activité plage au lendemain matin pour éviter tout retard.`
          : `⏱️ No worries! I can shift your afternoon Paradise Beach slot to Day 3 morning and extend your French Quarter cafe break by 45 mins. Would you like me to adjust the timeline?`;
      } else {
        botReply = `✨ ${trip.destination} (${trip.people} travelers) — ₹${trip.per_person_budget?.toLocaleString('en-IN')}/${t('dash_per_person', 'person')} is fully on track!`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReply,
          timestamp: 'Just now'
        }
      ]);
    }, 450);
  };

  const handleQuickPromptClick = (p) => {
    if (p.action === 'optimize_budget' && onTriggerOptimization) {
      setIsOpen(false);
      onTriggerOptimization();
    } else {
      handleSend(p.label);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.85rem 1.4rem',
          borderRadius: '99px',
          background: 'linear-gradient(135deg, var(--electric-blue) 0%, #0052cc 100%)',
          color: '#ffffff',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 8px 30px rgba(22, 119, 255, 0.5)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '0.95rem',
          transition: 'all var(--transition-normal)'
        }}
        className="card-hover"
      >
        <Sparkles size={20} className="animate-spin-slow" />
        <span>{t('copilot_btn', '✨ Trip Copilot')}</span>
      </button>

      {/* Slide-out / Floating Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '24px',
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '520px',
            background: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 950,
            overflow: 'hidden',
            animation: 'fadeIn 0.2s ease forwards'
          }}
        >
          {/* Chat Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--electric-blue) 100%)',
            color: '#ffffff',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.2)', padding: '0.35rem', borderRadius: '8px' }}>
                <Bot size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#ffffff' }}>{t('copilot_title', 'TRIPNEX Copilot')}</h4>
                <span style={{ fontSize: '0.7rem', color: 'var(--sky-blue)' }}>{t('copilot_active', '● AI Group Assistant Active')}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-icon btn-sm"
              style={{ color: '#ffffff' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Action Chips */}
          <div style={{
            padding: '0.75rem',
            background: 'var(--bg-light)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            gap: '0.4rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickPromptClick(p)}
                style={{
                  fontSize: '0.725rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '99px',
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  color: 'var(--primary-navy)',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((m) => {
              const isBot = m.sender === 'bot';
              return (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    alignSelf: isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    flexDirection: 'column',
                    alignItems: isBot ? 'flex-start' : 'flex-end'
                  }}
                >
                  <div
                    style={{
                      padding: '0.75rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      background: isBot ? 'var(--bg-light)' : 'var(--electric-blue)',
                      color: isBot ? 'var(--text-main)' : '#ffffff',
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                      border: isBot ? '1px solid var(--border-color)' : 'none',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    {m.text}
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-light)', marginTop: '0.2rem', padding: '0 0.3rem' }}>
                    {m.timestamp}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '0.5rem',
              background: '#ffffff'
            }}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t('copilot_placeholder', 'Ask anything about this trip...')}
              style={{
                flex: 1,
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="btn btn-primary btn-sm btn-icon"
              style={{ flexShrink: 0 }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
