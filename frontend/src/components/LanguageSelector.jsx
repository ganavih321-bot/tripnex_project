import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, languages, currentLangObj } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Selector Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-secondary btn-sm"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.4rem 0.75rem',
          fontSize: '0.825rem',
          fontWeight: 600,
          borderRadius: 'var(--radius-md)',
          background: '#ffffff',
          borderColor: isOpen ? 'var(--electric-blue)' : 'var(--border-color)',
          color: 'var(--primary-navy)'
        }}
        aria-label="Select language"
      >
        <span style={{ fontSize: '1rem' }}>{currentLangObj.flag}</span>
        <span style={{ fontWeight: 700 }}>{currentLangObj.native}</span>
        <ChevronDown size={14} style={{ color: 'var(--text-muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            width: '190px',
            background: '#ffffff',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
            zIndex: 1100,
            padding: '0.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
            animation: 'fadeIn 0.15s ease forwards'
          }}
        >
          <div style={{ padding: '0.35rem 0.5rem 0.25rem 0.5rem', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Choose Language
          </div>

          {languages.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isSelected ? 'var(--electric-blue-light)' : 'transparent',
                  color: isSelected ? 'var(--electric-blue)' : 'var(--text-main)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  textAlign: 'left',
                  width: '100%',
                  fontWeight: isSelected ? 700 : 500,
                  transition: 'background 0.15s ease'
                }}
                className={!isSelected ? 'hover:bg-slate-50' : ''}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.05rem' }}>{lang.flag}</span>
                  <div>
                    <span style={{ display: 'block', lineHeight: 1.2 }}>{lang.native}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>{lang.label}</span>
                  </div>
                </div>

                {isSelected && (
                  <Check size={14} color="var(--electric-blue)" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
