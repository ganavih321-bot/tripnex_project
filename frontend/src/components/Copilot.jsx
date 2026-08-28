import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, Send, Bot, User, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Copilot({ trip, onTriggerOptimization }) {
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
    { label: "✨ Optimize my budget", action: "optimize_budget" },
    { label: "⏰ We're running late", action: "running_late" },
    { label: "🎉 Make this trip more fun", action: "more_fun" },
    { label: "🚌 Find cheaper transport", action: "cheap_transit" },
    { label: "🍛 Add more food spots", action: "food_spots" },
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // Add User message
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMessage('');

    // Generate intelligent contextual response
    setTimeout(() => {
      let botReply = '';
      const lower = query.toLowerCase();

      if (lower.includes('budget') || lower.includes('cost') || lower.includes('cheap')) {
        botReply = `💡 Based on your current ₹${trip.budget?.toLocaleString('en-IN')} total, switching from private autos to shared scooters on Day 2 will save ₹600 for the group. Tap "✨ Optimize Trip" above to apply this automatically!`;
      } else if (lower.includes('late') || lower.includes('time') || lower.includes('delay')) {
        botReply = `⏱️ No worries! I can shift your afternoon Paradise Beach slot to Day 3 morning and extend your French Quarter cafe break by 45 mins. Would you like me to adjust the timeline?`;
      } else if (lower.includes('fun') || lower.includes('party') || lower.includes('night')) {
        botReply = `🎉 Added 2 high-rated student hangout spots: Promenade Live Acoustic sessions and Sunset Beach Volleyball at Serenity Beach!`;
      } else if (lower.includes('food') || lower.includes('eat') || lower.includes('cafe')) {
        botReply = `🍛 Top student recommendations in ${trip.destination}: Baker Street (Almond Croissants), Surguru (Unlimited Veg Thali ₹180), and Coromandel Cafe!`;
      } else {
        botReply = `✨ Got it! I've analyzed your ${trip.people}-traveler itinerary for ${trip.destination}. Your schedule and per-person spending (₹${trip.per_person_budget?.toLocaleString('en-IN')}) are on track.`;
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
        <span>✨ Trip Copilot</span>
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
                <h4 style={{ fontSize: '1rem', color: '#ffffff' }}>TRIPNEX Copilot</h4>
                <span style={{ fontSize: '0.7rem', color: 'var(--sky-blue)' }}>● AI Group Assistant Active</span>
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
              placeholder="Ask anything about this trip..."
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
