import React from 'react';
import { Sparkles, Compass, History, HelpCircle, PlusCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar({ currentView, setCurrentView, onOpenHowItWorks, onOpenSavedTrips, isBackendOnline, savedTripsCount }) {
  const { t } = useLanguage();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.85rem 0'
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
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(22, 119, 255, 0.3)'
          }}>
            <Compass size={22} className="animate-spin-slow" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '1.35rem', 
                letterSpacing: '-0.03em', 
                color: 'var(--primary-navy)' 
              }}>
                TRIPNEX
              </span>
              <span className="badge badge-blue" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
                {t('tagline_copilot', 'AI Copilot')}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button 
            type="button"
            onClick={() => setCurrentView('home')}
            className={`btn btn-ghost ${currentView === 'home' ? 'text-primary' : ''}`}
            style={{ 
              color: currentView === 'home' ? 'var(--electric-blue)' : 'var(--text-muted)',
              fontWeight: currentView === 'home' ? 700 : 500
            }}
          >
            {t('nav_explore', 'Explore')}
          </button>
          
          <button 
            type="button"
            onClick={onOpenHowItWorks}
            className="btn btn-ghost"
            style={{ color: 'var(--text-muted)', fontWeight: 500 }}
          >
            <HelpCircle size={16} />
            {t('nav_how_it_works', 'How it works')}
          </button>

          <button 
            type="button"
            onClick={onOpenSavedTrips}
            className="btn btn-ghost"
            style={{ color: 'var(--text-muted)', fontWeight: 500, position: 'relative' }}
          >
            <History size={16} />
            {t('nav_my_trips', 'My Trips')}
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
        </nav>

        {/* Right Actions & Live Status & Language */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language Selector Dropdown */}
          <LanguageSelector />

          {/* Backend Status Pill */}
          <div 
            title={isBackendOnline ? "FastAPI Backend connected at 127.0.0.1:8000" : "Running in Standalone Client Mode"}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.3rem 0.65rem',
              borderRadius: '99px',
              background: isBackendOnline ? 'var(--success-bg)' : 'var(--warning-bg)',
              color: isBackendOnline ? '#059669' : '#b45309',
              border: `1px solid ${isBackendOnline ? '#a7f3d0' : '#fde68a'}`
            }}
          >
            {isBackendOnline ? (
              <>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                {t('status_fastapi_live', 'FastAPI Live')}
              </>
            ) : (
              <>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                {t('status_demo_mode', 'Demo Mode')}
              </>
            )}
          </div>

          <button 
            type="button"
            onClick={() => setCurrentView('planner')}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.25rem' }}
          >
            <Sparkles size={16} />
            {t('nav_plan_btn', 'Plan My Trip')}
          </button>
        </div>
      </div>
    </header>
  );
}
