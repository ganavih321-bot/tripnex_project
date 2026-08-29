import React, { useState } from 'react';
import TripHeader from '../components/TripHeader';
import DestinationHero from '../components/DestinationHero';
import TripIntelligence from '../components/TripIntelligence';
import DayTabs from '../components/DayTabs';
import Timeline from '../components/Timeline';
import TransportCard from '../components/TransportCard';
import HotelCard from '../components/HotelCard';
import ActivityCard from '../components/ActivityCard';
import BudgetHeatmap from '../components/BudgetHeatmap';
import BudgetPanel from '../components/BudgetPanel';
import GroupSplit from '../components/GroupSplit';
import TripHealth from '../components/TripHealth';
import InteractiveMap from '../components/InteractiveMap';
import Copilot from '../components/Copilot';
import OptimizeModal from '../components/OptimizeModal';
import ShareTripModal from '../components/ShareTripModal';
import GroupDiscussion from '../components/GroupDiscussion';
import GroupMembersModal from '../components/GroupMembersModal';
import SafetyMode from '../components/SafetyMode';
import TripMemory from '../components/TripMemory';
import { useLanguage } from '../context/LanguageContext';

export default function TripDashboard({ trip, onEditTrip, onUpdateTrip }) {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState(1);
  const [isOptimizeOpen, setIsOptimizeOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);

  // Visited places tracker (stops checkmarks)
  const [visitedStops, setVisitedStops] = useState({
    'd1-1': true, // Demo starting stop checked
    'd1-2': true
  });

  // Collaborative group suggestions board
  const [suggestions, setSuggestions] = useState([
    {
      id: 'sug-1',
      author: 'Ananya',
      avatar: '👩‍🎓',
      text: 'Bring your student college IDs! Auroville and Puducherry Museum give 50% discount on tickets.',
      category: 'Budget Hack',
      targetDay: 1,
      votes: 4,
      hasVoted: true,
      addedToItinerary: false,
      timestamp: '2 hours ago'
    },
    {
      id: 'sug-2',
      author: 'Rahul',
      avatar: '👨‍🎓',
      text: 'Must try Almond Croissants and Cold Brew at Baker Street on Day 2 morning!',
      category: 'Food & Cafes',
      targetDay: 2,
      votes: 3,
      hasVoted: false,
      addedToItinerary: false,
      timestamp: '1 hour ago'
    },
    {
      id: 'sug-3',
      author: 'Arjun',
      avatar: '🎒',
      text: 'Scooter rentals near the railway station cost ₹350/day compared to ₹500 near the beach.',
      category: 'Budget Hack',
      targetDay: 2,
      votes: 5,
      hasVoted: true,
      addedToItinerary: false,
      timestamp: '30 mins ago'
    }
  ]);

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

  // Toggle visited checkmark for a stop
  const handleToggleVisited = (stopId) => {
    setVisitedStops(prev => ({
      ...prev,
      [stopId]: !prev[stopId]
    }));
  };

  // Add a new suggestion from friends
  const handleAddSuggestion = (newSug) => {
    setSuggestions(prev => [newSug, ...prev]);
  };

  // Upvote suggestion
  const handleUpvoteSuggestion = (sugId) => {
    setSuggestions(prev => prev.map(s => {
      if (s.id === sugId) {
        const nextVoted = !s.hasVoted;
        return {
          ...s,
          hasVoted: nextVoted,
          votes: nextVoted ? (s.votes || 0) + 1 : Math.max(0, (s.votes || 1) - 1)
        };
      }
      return s;
    }));
  };

  // 1-Click Accept Suggestion and inject directly into timeline
  const handleAddToTimeline = (sug) => {
    const targetDayNumber = Number(sug.targetDay) || activeDay;
    const updatedDays = (trip.days || []).map(d => {
      if (d.day === targetDayNumber) {
        const newStop = {
          id: `sug-stop-${Date.now()}`,
          time: '3:30 PM',
          title: `[Friend Tip] ${sug.text.slice(0, 48)}...`,
          type: sug.category === 'Food & Cafes' ? 'food' : 'activity',
          duration: '45 min',
          cost: 0,
          location: `${trip.destination} (Suggested by ${sug.author})`,
          notes: sug.text
        };
        const currentTimeline = [...(d.timeline || [])];
        currentTimeline.splice(Math.max(0, currentTimeline.length - 1), 0, newStop);
        return { ...d, timeline: currentTimeline };
      }
      return d;
    });

    setSuggestions(prev => prev.map(s => s.id === sug.id ? { ...s, addedToItinerary: true } : s));

    if (onUpdateTrip) {
      onUpdateTrip({
        ...trip,
        days: updatedDays
      });
    }
  };

  // Update travelers roster list and adapt member count
  const handleUpdateTravelers = (newTravelers) => {
    const newCount = newTravelers.length;
    const currentBudget = Number(trip.budget || 20000);
    const updatedTrip = {
      ...trip,
      people: newCount,
      travelers: newTravelers,
      per_person_budget: Math.round(currentBudget / (newCount || 1))
    };

    if (onUpdateTrip) {
      onUpdateTrip(updatedTrip);
    }
  };

  const handleScrollToMemories = () => {
    const memEl = document.getElementById('trip-memory-section');
    if (memEl) {
      memEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler for automatic fixes in Trip Health
  const handleFixRisk = (riskId, actionType) => {
    if (actionType === 'resolve_checkout') {
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
        {/* 1. Hero Banner with destination, dates, travelers, budgets and actions */}
        <TripHeader
          trip={trip}
          onEditTrip={onEditTrip}
          onOpenOptimize={() => setIsOptimizeOpen(true)}
          onOpenShare={() => setIsShareOpen(true)}
          onOpenDiscussion={() => setIsDiscussionOpen(true)}
          onOpenMembers={() => setIsMembersOpen(true)}
          onOpenSafety={() => setIsSafetyOpen(true)}
          onScrollToMemories={handleScrollToMemories}
          suggestionsCount={suggestions.length}
        />

        {/* 2. Destination Visual Hero Card */}
        <DestinationHero trip={trip} />

        {/* 3. TRIPNEX Intelligence AI Insights Panel */}
        <TripIntelligence
          trip={trip}
          onTriggerOptimization={() => setIsOptimizeOpen(true)}
        />

        {/* 4. Responsive Two-Column Dashboard Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* LEFT COLUMN: Day-by-day Itinerary & Timelines */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.45rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{t('dash_day_by_day', '📅 Day-by-Day Itinerary')}</span>
              </h2>
              <span className="badge badge-blue">
                {trip.days?.length || 3} {t('dash_days_total', 'Days Total')}
              </span>
            </div>

            {/* Day Selector Tabs */}
            <DayTabs
              days={trip.days || []}
              activeDay={activeDay}
              onSelectDay={setActiveDay}
            />

            {/* Vertical Timeline with Visited Tracker */}
            <Timeline
              timelineItems={activeDayObj?.timeline || []}
              peopleCount={trip.people || 5}
              visitedStops={visitedStops}
              onToggleVisited={handleToggleVisited}
              activeDay={activeDay}
            />
          </div>

          {/* RIGHT COLUMN: Budget Heatmap, Split, Map, Stay, Transit, Risk Detector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {/* Live Budget Heatmap & Status Indicator */}
            <BudgetHeatmap
              budget={trip.budget}
              spent={trip.spent}
              remaining={trip.remaining}
              categories={trip.budget_categories || {}}
              peopleCount={trip.people}
            />

            {/* Group Split & Settlement Engine */}
            <GroupSplit
              travelers={trip.travelers || []}
              settlements={trip.settlements}
              totalSpent={trip.spent}
              peopleCount={trip.people}
              onOpenMembers={() => setIsMembersOpen(true)}
            />

            {/* Interactive GPS Route Waypoints Map */}
            <InteractiveMap
              destination={trip.destination}
              startingLocation={trip.starting_location}
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

        {/* 5. Trip Memory & Travel Journal Section */}
        <div id="trip-memory-section">
          <TripMemory trip={trip} />
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

      {/* Share Trip & Email Modal */}
      <ShareTripModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        trip={trip}
      />

      {/* Group Discussion & Suggestions Drawer / Modal */}
      <GroupDiscussion
        isOpen={isDiscussionOpen}
        onClose={() => setIsDiscussionOpen(false)}
        destination={trip.destination}
        suggestions={suggestions}
        onAddSuggestion={handleAddSuggestion}
        onUpvoteSuggestion={handleUpvoteSuggestion}
        onAddToTimeline={handleAddToTimeline}
      />

      {/* Group Members Roster Modal */}
      <GroupMembersModal
        isOpen={isMembersOpen}
        onClose={() => setIsMembersOpen(false)}
        travelers={trip.travelers || []}
        peopleCount={trip.people || 5}
        totalBudget={trip.budget || 20000}
        totalSpent={trip.spent || 15700}
        onUpdateTravelers={handleUpdateTravelers}
      />

      {/* Emergency & Safety Mode Modal */}
      <SafetyMode
        isOpen={isSafetyOpen}
        onClose={() => setIsSafetyOpen(false)}
        destination={trip.destination}
        travelers={trip.travelers || []}
      />
    </div>
  );
}

