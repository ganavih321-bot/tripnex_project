import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Users, Wallet, Compass, Heart, AlertCircle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TripPlanner({ onGenerate, onBack }) {
  const [destination, setDestination] = useState('Pondicherry');
  const [startingLocation, setStartingLocation] = useState('Chennai');
  const [startDate, setStartDate] = useState('2026-09-12');
  const [endDate, setEndDate] = useState('2026-09-14');
  const [people, setPeople] = useState(5);
  const [budget, setBudget] = useState(20000);
  const [travelStyle, setTravelStyle] = useState('Balanced');
  const [interests, setInterests] = useState(['Beaches', 'Food', 'Culture', 'Photography']);
  const [errors, setErrors] = useState({});

  const availableInterests = [
    { id: 'Beaches', emoji: '🏖️' },
    { id: 'Food', emoji: '🍛' },
    { id: 'Adventure', emoji: '🧗' },
    { id: 'Culture', emoji: '🏛️' },
    { id: 'Shopping', emoji: '🛍️' },
    { id: 'Nightlife', emoji: '🎉' },
    { id: 'Photography', emoji: '📸' },
  ];

  const travelStyles = [
    { id: 'Budget', label: 'Budget', desc: 'Hostels, public transit & street food', icon: '🎒' },
    { id: 'Balanced', label: 'Balanced', desc: 'Private homestays, mixed transit & cafes', icon: '⚖️' },
    { id: 'Comfort', label: 'Comfort', desc: 'Resorts/villas, cabs & premium dining', icon: '✨' },
  ];

  const quickPicks = [
    { dest: 'Pondicherry', orig: 'Chennai', days: 3, ppl: 5, bud: 20000 },
    { dest: 'Goa', orig: 'Bangalore', days: 3, ppl: 4, bud: 28000 },
    { dest: 'Manali', orig: 'Delhi', days: 4, ppl: 4, bud: 32000 },
    { dest: 'Gokarna', orig: 'Bangalore', days: 3, ppl: 5, bud: 18000 },
    { dest: 'Coorg', orig: 'Mysore', days: 2, ppl: 4, bud: 15000 },
    { dest: 'Ooty', orig: 'Coimbatore', days: 3, ppl: 4, bud: 16000 },
  ];

  const toggleInterest = (interestId) => {
    if (interests.includes(interestId)) {
      setInterests(interests.filter(i => i !== interestId));
    } else {
      setInterests([...interests, interestId]);
    }
  };

  const handleQuickPick = (pick) => {
    setDestination(pick.dest);
    setStartingLocation(pick.orig);
    setPeople(pick.ppl);
    setBudget(pick.bud);
    setStartDate('2026-09-12');
    // Calculate end date based on days
    const start = new Date('2026-09-12');
    start.setDate(start.getDate() + pick.days - 1);
    setEndDate(start.toISOString().split('T')[0]);
  };

  const validate = () => {
    const errs = {};
    if (!destination.trim()) {
      errs.destination = 'Please provide a destination';
    }
    if (!startingLocation.trim()) {
      errs.startingLocation = 'Please provide your starting location';
    }
    if (!startDate) {
      errs.startDate = 'Start date is required';
    }
    if (!endDate) {
      errs.endDate = 'End date is required';
    }
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      errs.endDate = 'End date must be on or after start date';
    }
    if (!people || Number(people) < 1) {
      errs.people = 'Travelers count must be at least 1';
    }
    if (!budget || Number(budget) < 500) {
      errs.budget = 'Budget must be at least ₹500';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onGenerate({
      destination: destination.trim(),
      starting_location: startingLocation.trim(),
      start_date: startDate,
      end_date: endDate,
      people: Number(people),
      budget: Number(budget),
      travel_style: travelStyle,
      interests: interests.length > 0 ? interests : ['Beaches', 'Food']
    });
  };

  const perHeadEstimate = people && budget ? Math.round(Number(budget) / Number(people)) : 0;

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-sm">
        {/* Back navigation */}
        <button 
          type="button" 
          onClick={onBack} 
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} />
          Back to Explore
        </button>

        {/* Form Container Card */}
        <div className="card" style={{ padding: '2.25rem', boxShadow: 'var(--shadow-lg)' }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.4rem', borderRadius: '8px' }}>
                <Sparkles size={20} />
              </div>
              <span className="badge badge-blue">Interactive Trip Planner</span>
            </div>
            <h1 style={{ fontSize: '2.1rem', marginBottom: '0.4rem' }}>Where are you going?</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Enter your group requirements and let TRIPNEX auto-arrange transit, stays, day-wise timeline, and per-person cost splits.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.6rem' }}>
              Quick 1-Click Itinerary Templates:
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {quickPicks.map((pick, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickPick(pick)}
                  className={`btn btn-sm ${destination.toLowerCase() === pick.dest.toLowerCase() ? 'btn-navy' : 'btn-secondary'}`}
                  style={{ borderRadius: '99px', fontSize: '0.8rem' }}
                >
                  <span>{pick.dest}</span>
                  <span style={{ opacity: 0.75 }}>({pick.days}D / {pick.orig})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit}>
            {/* Row 1: Destination & Starting Location */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <MapPin size={16} color="var(--electric-blue)" />
                  Destination
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Pondicherry, Goa, Manali..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${errors.destination ? 'var(--danger)' : 'var(--border-color)'}`,
                    fontSize: '1rem',
                    outline: 'none',
                    background: '#fff'
                  }}
                />
                {errors.destination && (
                  <span style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.destination}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Compass size={16} color="var(--sky-blue)" />
                  Starting Location
                </label>
                <input
                  type="text"
                  value={startingLocation}
                  onChange={(e) => setStartingLocation(e.target.value)}
                  placeholder="e.g. Chennai, Bangalore, Delhi..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${errors.startingLocation ? 'var(--danger)' : 'var(--border-color)'}`,
                    fontSize: '1rem',
                    outline: 'none',
                    background: '#fff'
                  }}
                />
                {errors.startingLocation && (
                  <span style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.startingLocation}
                  </span>
                )}
              </div>
            </div>

            {/* Row 2: Dates */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Calendar size={16} color="var(--primary-navy)" />
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${errors.startDate ? 'var(--danger)' : 'var(--border-color)'}`,
                    fontSize: '0.95rem',
                    outline: 'none',
                    background: '#fff'
                  }}
                />
                {errors.startDate && (
                  <span style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.startDate}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Calendar size={16} color="var(--primary-navy)" />
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${errors.endDate ? 'var(--danger)' : 'var(--border-color)'}`,
                    fontSize: '0.95rem',
                    outline: 'none',
                    background: '#fff'
                  }}
                />
                {errors.endDate && (
                  <span style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.endDate}
                  </span>
                )}
              </div>
            </div>

            {/* Row 3: Travelers & Total Budget */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Users size={16} color="var(--electric-blue)" />
                  Number of Travelers
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${errors.people ? 'var(--danger)' : 'var(--border-color)'}`,
                      fontSize: '1rem',
                      outline: 'none',
                      background: '#fff'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {[2, 4, 5, 8].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPeople(p)}
                        className={`btn btn-sm ${Number(people) === p ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ padding: '0.45rem 0.65rem' }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                {errors.people && (
                  <span style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.people}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Wallet size={16} color="var(--success)" />
                  Total Trip Budget (₹)
                </label>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. 20000"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${errors.budget ? 'var(--danger)' : 'var(--border-color)'}`,
                    fontSize: '1rem',
                    outline: 'none',
                    background: '#fff',
                    fontWeight: 700
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  <span>Est. Split:</span>
                  <span style={{ fontWeight: 700, color: 'var(--electric-blue)' }}>
                    ₹{perHeadEstimate.toLocaleString('en-IN')}/person
                  </span>
                </div>
                {errors.budget && (
                  <span style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <AlertCircle size={12} /> {errors.budget}
                  </span>
                )}
              </div>
            </div>

            {/* Travel Style */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem', display: 'block' }}>
                Travel Style Preference:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
                {travelStyles.map((style) => (
                  <div
                    key={style.id}
                    onClick={() => setTravelStyle(style.id)}
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: travelStyle === style.id ? '2px solid var(--electric-blue)' : '1px solid var(--border-color)',
                      background: travelStyle === style.id ? 'var(--electric-blue-light)' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{style.icon}</div>
                    <h4 style={{ fontSize: '0.95rem', color: travelStyle === style.id ? 'var(--electric-blue)' : 'var(--primary-navy)' }}>
                      {style.label}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{style.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Interests */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem', display: 'block' }}>
                Group Interests (Select all that apply):
              </label>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {availableInterests.map((interest) => {
                  const isSelected = interests.includes(interest.id);
                  return (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => toggleInterest(interest.id)}
                      style={{
                        padding: '0.55rem 1rem',
                        borderRadius: '99px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        border: isSelected ? '1.5px solid var(--electric-blue)' : '1px solid var(--border-color)',
                        background: isSelected ? 'var(--electric-blue)' : '#ffffff',
                        color: isSelected ? '#ffffff' : 'var(--text-main)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <span>{interest.emoji}</span>
                      <span>{interest.id}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Large Generate CTA */}
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', fontSize: '1.15rem', padding: '1.1rem', boxShadow: '0 8px 24px rgba(22, 119, 255, 0.4)' }}
            >
              <Sparkles size={22} />
              ✨ Generate My Trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
