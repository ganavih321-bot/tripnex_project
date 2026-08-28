import React, { useState } from 'react';
import TripHeader from '../components/TripHeader';
import DayTabs from '../components/DayTabs';
import Timeline from '../components/Timeline';
import TransportCard from '../components/TransportCard';
import HotelCard from '../components/HotelCard';
import ActivityCard from '../components/ActivityCard';
import BudgetPanel from '../components/BudgetPanel';
import GroupSplit from '../components/GroupSplit';
import TripHealth from '../components/TripHealth';
import InteractiveMap from '../components/InteractiveMap';
import Copilot from '../components/Copilot';
import OptimizeModal from '../components/OptimizeModal';

export default function TripDashboard({ trip, onEditTrip, onUpdateTrip }) {
  const [activeDay, setActiveDay] = useState(1);
  const [isOptimizeOpen, setIsOptimizeOpen] = useState(false);
  const [activeTabSection, setActiveTabSection] = useState('all'); // 'all' | 'itinerary' | 'budget' | 'split'

  if (!trip) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2>No active trip found</h2>
        <button type="button" onClick={onEditTrip} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Create a Trip
        </button>
      </div>
    );
  }

  const activeDayObj = (trip.days || []).find(d => d.day === activeDay) || trip.days?.[0];

  // Handler for automatic fixes in Trip Health
  const handleFixRisk = (riskId, actionType) => {
    if (actionType === 'resolve_checkout') {
      // Add concierge luggage hold info to Day 3
      const updatedDays = (trip.days || []).map(d => {
        if (d.day === trip.days.length) {
          const newTimeline = [...(d.timeline || [])];
          newTimeline.splice(2, 0, {
            id: `d${d.day}-concierge`,
            time: '10:15 AM',
            title: 'Concierge Safe Luggage Hold Confirmed',
            type: 'hotel',
            duration: '15 min',
            cost: 0,
            location: trip.hotel?.name || 'Hotel Front Desk',
            notes: 'Bags securely stored with token until afternoon bus departure.'
          });
          return { ...d, timeline: newTimeline };
        }
        return d;
      });

      onUpdateTrip({
        ...trip,
        days: updatedDays,
        risks: (trip.risks || []).map(r => r.id === riskId ? { ...r, severity: 'green', status: 'Resolved & Confirmed' } : r)
      });
    } else if (actionType === 'reschedule_d2') {
      onUpdateTrip({
        ...trip,
        risks: (trip.risks || []).map(r => r.id === riskId ? { ...r, severity: 'green', status: 'Optimized buffer added' } : r)
      });
    }
  };

  // Handler for Killer Feature "Apply Optimization"
  const handleApplyOptimization = ({ type, newBudget, newPeople, preview }) => {
    let updatedTrip = { ...trip };

    if (type === 'budget_decrease') {
      const budgetNum = Number(newBudget);
      const spentNum = Math.round(budgetNum * 0.82);
      updatedTrip = {
        ...updatedTrip,
        budget: budgetNum,
        spent: spentNum,
        remaining: budgetNum - spentNum,
        per_person_budget: Math.round(budgetNum / (trip.people || 1)),
        travel_style: 'Budget & Optimized'
      };
    } else if (type === 'member_drop') {
      const peopleNum = Number(newPeople);
      const fairShare = Math.round(trip.budget / (trip.people || 5));
      const newTotal = fairShare * peopleNum;
      updatedTrip = {
        ...updatedTrip,
        people: peopleNum,
        budget: newTotal,
        spent: Math.round(newTotal * 0.85),
        remaining: Math.round(newTotal * 0.15),
        travelers: (trip.travelers || []).slice(0, peopleNum)
      };
    } else if (type === 'more_activities') {
      const newBudgetNum = Math.round(trip.budget * 1.15);
      updatedTrip = {
        ...updatedTrip,
        budget: newBudgetNum,
        spent: Math.round(newBudgetNum * 0.9),
        remaining: Math.round(newBudgetNum * 0.1),
        per_person_budget: Math.round(newBudgetNum / trip.people),
        travel_style: 'High Adventure'
      };
    }

    if (onUpdateTrip) {
      onUpdateTrip(updatedTrip);
    }
  };

  return (
    <div style={{ padding: '2rem 0 6rem 0' }} className="animate-fade-in">
      <div className="container">
        {/* Hero Banner with destination, dates, travelers, budgets and actions */}
        <TripHeader
          trip={trip}
          onEditTrip={onEditTrip}
          onOpenOptimize={() => setIsOptimizeOpen(true)}
        />

        {/* Responsive Two-Column Dashboard Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* LEFT COLUMN: Day-by-day Itinerary & Timelines */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.45rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📅 Day-by-Day Itinerary</span>
              </h2>
              <span className="badge badge-blue">
                {trip.days?.length || 3} Days Total
              </span>
            </div>

            {/* Day Selector Tabs */}
            <DayTabs
              days={trip.days || []}
              activeDay={activeDay}
              onSelectDay={setActiveDay}
            />

            {/* Vertical Timeline */}
            <Timeline
              timelineItems={activeDayObj?.timeline || []}
              peopleCount={trip.people || 5}
            />
          </div>

          {/* RIGHT COLUMN: Interactive Summary, Map, Stay, Transit, Live Budget & Split */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {/* Interactive GPS Route Waypoints Map */}
            <InteractiveMap
              destination={trip.destination}
              startingLocation={trip.starting_location}
            />

            {/* Live Budget Gauge */}
            <BudgetPanel
              budget={trip.budget}
              spent={trip.spent}
              remaining={trip.remaining}
              perPersonBudget={trip.per_person_budget}
              categories={trip.budget_categories}
              peopleCount={trip.people}
            />

            {/* Group Split & Settlement Engine */}
            <GroupSplit
              travelers={trip.travelers}
              settlements={trip.settlements}
              totalSpent={trip.spent}
              peopleCount={trip.people}
            />

            {/* Transportation Details */}
            <TransportCard
              transportList={trip.transport}
              peopleCount={trip.people}
            />

            {/* Hotel Stay */}
            <HotelCard
              hotel={trip.hotel}
              peopleCount={trip.people}
            />

            {/* Recommended Activities */}
            <ActivityCard
              activities={trip.activities}
            />

            {/* Trip Health & Risk Detector */}
            <TripHealth
              risks={trip.risks}
              onFixRisk={handleFixRisk}
            />
          </div>
        </div>
      </div>

      {/* Floating AI Trip Copilot */}
      <Copilot
        trip={trip}
        onTriggerOptimization={() => setIsOptimizeOpen(true)}
      />

      {/* Killer Feature Modal: Optimize My Trip */}
      <OptimizeModal
        isOpen={isOptimizeOpen}
        onClose={() => setIsOptimizeOpen(false)}
        trip={trip}
        onApplyOptimization={handleApplyOptimization}
      />
    </div>
  );
}
