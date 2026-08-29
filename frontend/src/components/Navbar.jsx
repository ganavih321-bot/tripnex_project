import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Compass, History, HelpCircle, PlusCircle, 
  Camera, LayoutDashboard, Menu, X, ShieldAlert 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  onOpenHowItWorks, 
  onOpenSavedTrips, 
  onOpenMemories,
  isBackendOnline, 
  savedTripsCount 
}) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: isScrolled ? 'var(--card-glass)' : 'var(--card-bg)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      padding: isScrolled ? '0.65rem 0' : '0.95rem 0',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <div 
          onClick={() => setCurrentView('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-navy) 0%, var(--electric-blue) 100%)',
            color: '#fff',
            width: isScrolled ? '34px' : '38px',
            height: isScrolled ? '34px' : '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(22, 119, 255, 0.3)',
            transition: 'all 0.2s ease'
          }}>
            <Compass size={isScrolled ? 18 : 22} className="animate-spin-slow" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: isScrolled ? '1.25rem' : '1.35rem', 
                letterSpacing: '-0.03em', 
                color: 'var(--primary-navy)',
                transition: 'font-size 0.2s ease'
              }}>
                TRIPNEX
              </span>
              <span className="badge badge-blue" style={{ fontSize: '0.65rem', padding: '0.12rem 0.45rem' }}>
                {t('tagline_copilot', 'AI Copilot')}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }} className="hide-mobile">
          <button 
            type="button"
            onClick={() => setCurrentView('home')}
            className={`btn btn-ghost ${currentView === 'home' ? 'text-primary' : ''}`}
            style={{ 
              color: currentView === 'home' ? 'var(--electric-blue)' : 'var(--text-muted)',
              fontWeight: currentView === 'home' ? 800 : 500,
              fontSize: '0.9rem'
            }}
          >
            {t('nav_explore', 'Explore')}
          </button>

          <button 
            type="button"
            onClick={() => setCurrentView('dashboard')}
            className={`btn btn-ghost ${currentView === 'dashboard' ? 'text-primary' : ''}`}
            style={{ 
              color: currentView === 'dashboard' ? 'var(--electric-blue)' : 'var(--text-muted)',
              fontWeight: currentView === 'dashboard' ? 800 : 500,
              fontSize: '0.9rem'
            }}
          >
            <LayoutDashboard size={15} />
            <span>Dashboard</span>
          </button>
          
          <button 
            type="button"
            onClick={onOpenSavedTrips}
            className="btn btn-ghost"
            style={{ color: 'var(--text-muted)', fontWeight: 500, position: 'relative', fontSize: '0.9rem' }}
          >
            <History size={15} />
            <span>{t('nav_my_trips', 'My Trips')}</span>
            {savedTripsCount > 0 && (
              <span style={{
                background: 'var(--electric-blue)',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '0.1rem 0.4rem',
                borderRadius: '99px',
                marginLeft: '0.2rem'
              }}>
                {savedTripsCount}
              </span>
            )}
          </button>

          <button 
            type="button"
            onClick={onOpenMemories}
            className="btn btn-ghost"
            style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}
          >
            <Camera size={15} />
            <span>Memories</span>
          </button>
        </nav>

        {/* Right Actions: Theme + Language + Plan Trip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Theme Selector Dropdown */}
          <ThemeSwitcher />

          {/* Language Selector Dropdown */}
          <LanguageSelector />

          {/* Plan Trip CTA Button */}
          <button 
            type="button"
            onClick={() => setCurrentView('planner')}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.875rem' }}
          >
            <Sparkles size={15} />
            <span>{t('nav_plan_btn', 'Plan Trip')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-icon show-mobile"
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--card-bg)',
          borderTop: '1px solid var(--border-color)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem'
        }}>
          <button
            type="button"
            onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start' }}
          >
            {t('nav_explore', 'Explore')}
          </button>
          <button
            type="button"
            onClick={() => { setCurrentView('dashboard'); setMobileMenuOpen(false); }}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start' }}
          >
            <LayoutDashboard size={16} /> Dashboard
          </button>
          <button
            type="button"
            onClick={() => { onOpenSavedTrips(); setMobileMenuOpen(false); }}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start' }}
          >
            <History size={16} /> {t('nav_my_trips', 'My Trips')} ({savedTripsCount})
          </button>
          <button
            type="button"
            onClick={() => { onOpenMemories(); setMobileMenuOpen(false); }}
            className="btn btn-ghost"
            style={{ justifyContent: 'flex-start' }}
          >
            <Camera size={16} /> Memories
          </button>
        </div>
      )}
    </header>
  );
}
