import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, Loader2, Compass } from 'lucide-react';

export default function GeneratingScreen({ destination, onComplete }) {
  const steps = [
    "Understanding your group & travel style",
    "Optimizing budget allocation & buffers",
    "Planning transit routes & local hops",
    "Finding top-rated verified activities & stays",
    "Building your day-wise group itinerary"
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Step interval timing (approx 350ms per step = ~1.8s total)
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsReady(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return prev;
        }
      });
    }, 380);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="card" style={{
        maxWidth: '520px',
        width: '100%',
        padding: '2.5rem',
        textAlign: 'center',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid rgba(22, 119, 255, 0.2)'
      }}>
        {/* Animated Icon */}
        <div style={{
          width: '72px',
          height: '72px',
          margin: '0 auto 1.5rem auto',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--electric-blue) 0%, var(--sky-blue) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 0 25px rgba(22, 119, 255, 0.4)'
        }}>
          {isReady ? (
            <Sparkles size={36} className="animate-fade-in" />
          ) : (
            <Compass size={36} className="animate-spin-slow" />
          )}
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>
          {isReady ? "Your trip is ready ✨" : "Planning your journey..."}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          {isReady 
            ? `Finalizing details for ${destination || 'your destination'}` 
            : `TRIPNEX engine is crafting the optimal student itinerary`}
        </p>

        {/* Steps Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', textAlign: 'left', background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStepIndex || isReady;
            const isCurrent = idx === currentStepIndex && !isReady;

            return (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: isCompleted ? 'var(--text-main)' : isCurrent ? 'var(--electric-blue)' : 'var(--text-light)',
                  fontWeight: isCurrent ? 700 : isCompleted ? 600 : 400,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {isCompleted ? (
                  <CheckCircle2 size={18} color="var(--success)" />
                ) : isCurrent ? (
                  <Loader2 size={18} className="animate-spin-slow" color="var(--electric-blue)" />
                ) : (
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid var(--border-color)' }}></div>
                )}
                <span>{step}</span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div style={{ width: '100%', height: '6px', background: 'var(--border-color)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--electric-blue) 0%, var(--sky-blue) 100%)',
            width: isReady ? '100%' : `${((currentStepIndex + 1) / steps.length) * 100}%`,
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>
    </div>
  );
}
