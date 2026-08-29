import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sunset, Waves, Trees, Settings, ChevronDown, Check } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeThemeObj = themes.find(t => t.id === theme) || themes[0];

  const getIcon = (id) => {
    switch (id) {
      case 'light': return <Sun size={15} />;
      case 'dark': return <Moon size={15} />;
      case 'sunset': return <Sunset size={15} />;
      case 'ocean': return <Waves size={15} />;
      case 'nature': return <Trees size={15} />;
      case 'auto': return <Settings size={15} />;
      default: return <Sun size={15} />;
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="theme-switcher-wrapper" ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-ghost btn-sm"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.45rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-color)',
          background: 'var(--card-bg)',
          color: 'var(--text-main)',
          fontSize: '0.825rem',
          fontWeight: 600
        }}
        title="Switch Visual Atmosphere / Theme"
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {getIcon(activeThemeObj.id)}
        </span>
        <span style={{ textTransform: 'capitalize' }}>{activeThemeObj.name}</span>
        <ChevronDown size={13} style={{ opacity: 0.7, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          right: 0,
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-xl)',
          padding: '0.4rem',
          minWidth: '170px',
          zIndex: 500,
          backdropFilter: 'blur(16px)',
          animation: 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <div style={{ padding: '0.35rem 0.65rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', fontWeight: 700 }}>
            Atmosphere
          </div>
          {themes.map((tItem) => {
            const isSelected = theme === tItem.id;
            return (
              <button
                key={tItem.id}
                type="button"
                onClick={() => {
                  setTheme(tItem.id);
                  setIsOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.6rem',
                  padding: '0.5rem 0.75rem',
                  border: 'none',
                  background: isSelected ? 'var(--electric-blue-light)' : 'transparent',
                  color: isSelected ? 'var(--electric-blue)' : 'var(--text-main)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: isSelected ? 700 : 500,
                  textAlign: 'left',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{tItem.icon}</span>
                  <span>{tItem.name}</span>
                </div>
                {isSelected && <Check size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
