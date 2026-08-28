import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Planner from './pages/Planner';
import TripDashboard from './pages/TripDashboard';
import GeneratingScreen from './components/GeneratingScreen';
import HowItWorksModal from './components/HowItWorksModal';
import SavedTripsDrawer from './components/SavedTripsDrawer';

import { defaultTripData } from './data/demoTrip';
import { enrichTripData } from './data/tripEnricher';
import { checkBackendHealth, createTrip, generateItinerary, getTrips } from './api/trips';
import { Compass, Sparkles, Heart } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'planner' | 'generating' | 'dashboard'
  const [currentTrip, setCurrentTrip] = useState(defaultTripData);
  const [savedTrips, setSavedTrips] = useState([defaultTripData]);
  const [isBackendOnline, setIsBackendOnline] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);
  
  // Modals & Drawers
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isSavedTripsOpen, setIsSavedTripsOpen] = useState(false);

  // Check backend health and fetch existing trips on mount
  useEffect(() => {
    async function initBackend() {
      const health = await checkBackendHealth();
      setIsBackendOnline(health.isOnline);

      if (health.isOnline) {
        const remoteTrips = await getTrips();
        if (Array.isArray(remoteTrips) && remoteTrips.length > 0) {
          const enrichedRemote = remoteTrips.map(rt => enrichTripData(rt, rt));
          setSavedTrips(prev => {
            const combined = [...enrichedRemote, ...prev.filter(p => !enrichedRemote.some(e => e.id === p.id))];
            return combined;
          });
        }
      }
    }
    initBackend();
  }, []);

  // Handle Preset Click from Landing Page
  const handleLoadPreset = (destinationName) => {
    let presetForm = {
      destination: destinationName,
      starting_location: destinationName === 'Pondicherry' ? 'Chennai' : destinationName === 'Goa' ? 'Bangalore' : 'Delhi',
      start_date: '2026-09-12',
      end_date: destinationName === 'Manali' ? '2026-09-15' : '2026-09-14',
      people: destinationName === 'Pondicherry' ? 5 : 4,
      budget: destinationName === 'Pondicherry' ? 20000 : destinationName === 'Goa' ? 28000 : 32000,
      travel_style: 'Balanced',
      interests: ['Beaches', 'Food', 'Culture', 'Photography']
    };

    setPendingFormData(presetForm);
    setCurrentView('generating');
  };

  // Handle Trip Generator Submission
  const handleFormSubmit = async (formData) => {
    setPendingFormData(formData);
    setCurrentView('generating');

    // Run backend creation concurrently
    try {
      const backendTrip = await createTrip(formData);
      if (backendTrip && backendTrip.id) {
        await generateItinerary(backendTrip.id);
      }
    } catch (err) {
      console.warn('[TRIPNEX] Backend flow completed with local fallback.', err);
    }
  };

  // Called when GeneratingScreen animation completes (after ~1.8s)
  const handleGeneratingComplete = () => {
    if (pendingFormData) {
      const enriched = enrichTripData(pendingFormData, {
        id: Date.now(),
        ...pendingFormData
      });
      setCurrentTrip(enriched);
      setSavedTrips(prev => [enriched, ...prev.filter(t => t.id !== enriched.id)]);
    }
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSavedTrip = (trip) => {
    setCurrentTrip(trip);
    setCurrentView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearSavedTrips = () => {
    setSavedTrips([defaultTripData]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Sticky Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
        onOpenSavedTrips={() => setIsSavedTripsOpen(true)}
        isBackendOnline={isBackendOnline}
        savedTripsCount={savedTrips.length}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {currentView === 'home' && (
          <Home
            onStartPlan={() => {
              setCurrentView('planner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
            onLoadPreset={handleLoadPreset}
          />
        )}

        {currentView === 'planner' && (
          <Planner
            onGenerate={handleFormSubmit}
            onBack={() => setCurrentView('home')}
          />
        )}

        {currentView === 'generating' && (
          <GeneratingScreen
            destination={pendingFormData?.destination || 'your destination'}
            onComplete={handleGeneratingComplete}
          />
        )}

        {currentView === 'dashboard' && (
          <TripDashboard
            trip={currentTrip}
            onEditTrip={() => setCurrentView('planner')}
            onUpdateTrip={(updated) => {
              setCurrentTrip(updated);
              setSavedTrips(prev => prev.map(t => t.id === updated.id ? updated : t));
            }}
          />
        )}
      </main>

      {/* Modals & Drawers */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onStartPlan={() => {
          setCurrentView('planner');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <SavedTripsDrawer
        isOpen={isSavedTripsOpen}
        onClose={() => setIsSavedTripsOpen(false)}
        savedTrips={savedTrips}
        currentTripId={currentTrip?.id}
        onSelectTrip={handleSelectSavedTrip}
        onClearTrips={handleClearSavedTrips}
      />

      {/* Modern Footer */}
      <footer style={{
        background: 'var(--primary-navy)',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '3rem 0 2rem 0',
        marginTop: 'auto'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ background: 'var(--electric-blue)', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                TRIPNEX
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                PLAN → TRAVEL → SPEND → ADAPT
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <button type="button" onClick={() => setCurrentView('home')} className="btn btn-ghost btn-sm" style={{ color: '#cbd5e1' }}>
                Explore
              </button>
              <button type="button" onClick={() => setIsHowItWorksOpen(true)} className="btn btn-ghost btn-sm" style={{ color: '#cbd5e1' }}>
                How It Works
              </button>
              <button type="button" onClick={() => setCurrentView('planner')} className="btn btn-ghost btn-sm" style={{ color: '#cbd5e1' }}>
                New Plan
              </button>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            <span>© 2026 TRIPNEX. Built with ❤️ for Student Group Travel Hackathon.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              FastAPI + React + Vite + Intelligent Copilot Engine
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
