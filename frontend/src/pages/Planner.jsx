import React from 'react';
import TripPlanner from '../components/TripPlanner';

export default function Planner({ onGenerate, onBack }) {
  return (
    <div className="animate-fade-in">
      <TripPlanner onGenerate={onGenerate} onBack={onBack} />
    </div>
  );
}
