import { defaultTripData } from './demoTrip';

/**
 * Format date string into human readable 'Sept 12 — Sept 14, 2026'
 */
export function formatTripDates(startDateStr, endDateStr) {
  if (!startDateStr || !endDateStr) return "3 Days Journey";
  try {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);
    const options = { month: 'short', day: 'numeric' };
    const startFormatted = start.toLocaleDateString('en-US', options);
    const endFormatted = end.toLocaleDateString('en-US', options);
    const year = end.getFullYear() || 2026;
    return `${startFormatted} — ${endFormatted}, ${year}`;
  } catch {
    return `${startDateStr} to ${endDateStr}`;
  }
}

/**
 * Compute days difference between two dates
 */
export function getDaysCount(startDateStr, endDateStr) {
  try {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(diffDays, 7));
  } catch {
    return 3;
  }
}

/**
 * Destination-specific presets & landmarks
 */
const DESTINATION_PROFILES = {
  pondicherry: {
    origin: "Chennai",
    hotel: "TRIPNEX Heritage Stay",
    hotelLoc: "White Town, Pondicherry",
    transitMode: "Express Coastal Bus",
    transitFare: 180,
    transitTime: "3h 20m",
    localTransit: "Auto Rickshaw & Scooters",
    activities: [
      { title: "Rock Beach Promenade", duration: "2h 30m", cost: "Free", distance: "0.4 km", tag: "Must Visit", category: "Beaches", description: "Iconic stone seafront, French colonial villas & sea breeze." },
      { title: "Auroville & Matrimandir", duration: "3h", cost: "Free", distance: "12 km", tag: "Culture & Peace", category: "Culture", description: "Global intentional community and iconic golden dome." },
      { title: "Paradise Beach Speedboat", duration: "2h", cost: "₹220/person", distance: "8 km", tag: "Water Adventure", category: "Adventure", description: "Backwater ferry ride to pristine island sands." },
      { title: "White Town French Walk", duration: "1h 30m", cost: "Free", distance: "0.2 km", tag: "Photography", category: "Photography", description: "Mustard yellow colonial mansions & boutique art cafes." }
    ],
    foodSpots: ["Baker Street", "Café des Arts", "Coromandel Café", "Hotel Surguru"]
  },
  goa: {
    origin: "Bangalore",
    hotel: "TRIPNEX Beachside Backpacker Villa",
    hotelLoc: "Anjuna, North Goa",
    transitMode: "Overnight Sleeper Bus",
    transitFare: 750,
    transitTime: "11h",
    localTransit: "Rented Scooters",
    activities: [
      { title: "Anjuna & Vagator Sunset Cliff", duration: "3h", cost: "Free", distance: "1.2 km", tag: "Sunset Vibe", category: "Beaches", description: "Dramatic red stone cliffs overlooking Arabian sea." },
      { title: "Aguada Fort & Lighthouse", duration: "2h", cost: "₹50/person", distance: "14 km", tag: "Heritage", category: "Culture", description: "17th-century Portuguese fortress with panoramic ocean views." },
      { title: "Calangute Watersports", duration: "2h 30m", cost: "₹650/person", distance: "6 km", tag: "Adrenaline", category: "Adventure", description: "Parasailing, banana ride & jet ski thrill pack." },
      { title: "Fontainhas Latin Quarter", duration: "2h", cost: "Free", distance: "18 km", tag: "Photography", category: "Culture", description: "Colorful Portuguese streets in Panaji with historic bakeries." }
    ],
    foodSpots: ["Curlies Beach Shack", "Gunpowder Assagao", "Burger Factory", "Vinayak Family Restaurant"]
  },
  manali: {
    origin: "Delhi",
    hotel: "TRIPNEX Mountain View Homestay",
    hotelLoc: "Old Manali, Himachal",
    transitMode: "Volvo AC Sleeper Bus",
    transitFare: 950,
    transitTime: "12h 30m",
    localTransit: "Shared Cabs & Trekking",
    activities: [
      { title: "Solang Valley Snow Adventure", duration: "4h", cost: "₹500/person", distance: "13 km", tag: "Snow & Thrill", category: "Adventure", description: "Cable car ride, quad biking and paragliding valley." },
      { title: "Old Manali Cafe Trail & Jogini Falls", duration: "3h", cost: "Free", distance: "2.5 km", tag: "Scenic Trek", category: "Nature", description: "Pine forest hike to majestic cascading waterfall." },
      { title: "Hadimba Temple & Cedar Woods", duration: "1h 30m", cost: "Free", distance: "1.8 km", tag: "Heritage", category: "Culture", description: "Ancient wooden pagoda temple in dense deodar forest." },
      { title: "Mall Road Stroll & Trout Fish", duration: "2h", cost: "Free", distance: "0.5 km", tag: "Shopping", category: "Food", description: "Himachali woolens, wooden crafts and hot momos." }
    ],
    foodSpots: ["Cafe 1947", "Drifters' Cafe", "Lazy Dog Lounge", "Chopsticks Restaurant"]
  },
  gokarna: {
    origin: "Bangalore",
    hotel: "TRIPNEX Kudle Cliff Cottages",
    hotelLoc: "Kudle Beach, Gokarna",
    transitMode: "KSRTC Airavat Express",
    transitFare: 620,
    transitTime: "9h 30m",
    localTransit: "Auto Rickshaws & Beach Treks",
    activities: [
      { title: "Five Beach Trek", duration: "4h", cost: "Free", distance: "On-site", tag: "Iconic Trek", category: "Adventure", description: "Hike across Belekan, Half Moon, Paradise, Om, and Kudle beaches." },
      { title: "Om Beach Sunset & Boating", duration: "2h 30m", cost: "₹200/person", distance: "3 km", tag: "Sunset & Waves", category: "Beaches", description: "Dolphin spotting boat ride shaped like sacred Om symbol." },
      { title: "Mahabaleshwar Temple", duration: "1h", cost: "Free", distance: "1.5 km", tag: "Heritage", category: "Culture", description: "4th-century Dravidian granite temple near main beach." }
    ],
    foodSpots: ["Namaste Cafe", "Mantra Cafe", "Chez Christophe", "Ganga Cafe"]
  }
};

/**
 * Intelligent enrichment function that merges user form, FastAPI backend response,
 * and smart calculations into a rich dashboard payload.
 */
export function enrichTripData(formInput, backendResponse) {
  const destName = (formInput?.destination || backendResponse?.destination || "Pondicherry").trim();
  const destKey = destName.toLowerCase().replace(/[^a-z]/g, '');
  const profile = DESTINATION_PROFILES[destKey] || DESTINATION_PROFILES.pondicherry;

  const people = Math.max(1, Number(formInput?.people || backendResponse?.people || 5));
  const budget = Math.max(500, Number(formInput?.budget || backendResponse?.budget || 20000));
  const startingLocation = formInput?.starting_location || profile.origin || "Origin City";
  const startDate = formInput?.start_date || backendResponse?.start_date || "2026-09-12";
  const endDate = formInput?.end_date || backendResponse?.end_date || "2026-09-14";
  const formattedDates = formatTripDates(startDate, endDate);
  const travelStyle = formInput?.travel_style || "Balanced";
  const interests = formInput?.interests && formInput.interests.length > 0 ? formInput.interests : ["Beaches", "Food", "Culture", "Photography"];

  const daysCount = getDaysCount(startDate, endDate);
  const perPersonBudget = Math.round(budget / people);

  // Budget allocations based on travel style
  let stayPct = 0.38;
  let transportPct = 0.22;
  let foodPct = 0.20;
  let actPct = 0.12;
  let bufferPct = 0.08;

  if (travelStyle === "Budget") {
    stayPct = 0.32;
    transportPct = 0.20;
    foodPct = 0.22;
    actPct = 0.10;
    bufferPct = 0.16;
  } else if (travelStyle === "Comfort") {
    stayPct = 0.45;
    transportPct = 0.24;
    foodPct = 0.18;
    actPct = 0.08;
    bufferPct = 0.05;
  }

  const stayAllocated = Math.round(budget * stayPct);
  const transportAllocated = Math.round(budget * transportPct);
  const foodAllocated = Math.round(budget * foodPct);
  const actAllocated = Math.round(budget * actPct);
  const emergencyAllocated = Math.round(budget * bufferPct);

  const staySpent = Math.round(stayAllocated * 0.95);
  const transportSpent = Math.round(transportAllocated * 0.92);
  const foodSpent = Math.round(foodAllocated * 0.85);
  const actSpent = Math.round(actAllocated * 0.80);
  const totalSpent = staySpent + transportSpent + foodSpent + actSpent;
  const remaining = budget - totalSpent;

  // Student Group Travelers Archetypes
  const baseTravelers = [
    { name: "You", role: "Organizer", avatar: "👤", factor: 0.93 },
    { name: "Rahul", role: "Navigator", avatar: "🎒", factor: 1.05 },
    { name: "Ananya", role: "Photographer", avatar: "📸", factor: 0.88 },
    { name: "Priya", role: "Foodie", avatar: "🎵", factor: 0.97 },
    { name: "Arjun", role: "Treasurer", avatar: "⚡", factor: 1.01 },
    { name: "Kiran", role: "Explorer", avatar: "🧭", factor: 0.95 },
    { name: "Sneha", role: "Planner", avatar: "✨", factor: 1.02 },
  ];

  const selectedTravelers = baseTravelers.slice(0, Math.min(people, baseTravelers.length));
  // If more people, dynamically create extra friends
  while (selectedTravelers.length < people) {
    const idx = selectedTravelers.length + 1;
    selectedTravelers.push({
      name: `Traveler ${idx}`,
      role: "Member",
      avatar: "🌟",
      factor: 1.0
    });
  }

  const travelers = selectedTravelers.map((t, idx) => {
    const fairShare = Math.round(totalSpent / people);
    const paid = Math.round(fairShare * t.factor);
    return {
      id: idx + 1,
      name: t.name,
      avatar: t.avatar,
      role: t.role,
      paid,
      balance: paid - fairShare // positive means should receive, negative means owes
    };
  });

  // Calculate clean settlements
  const creditors = travelers.filter(t => t.balance > 0).sort((a, b) => b.balance - a.balance);
  const debtors = travelers.filter(t => t.balance < 0).sort((a, b) => a.balance - b.balance);
  const settlements = [];

  let cIdx = 0;
  let dIdx = 0;
  const cBal = creditors.map(c => ({ ...c }));
  const dBal = debtors.map(d => ({ ...d, balance: Math.abs(d.balance) }));

  while (cIdx < cBal.length && dIdx < dBal.length) {
    const amount = Math.min(cBal[cIdx].balance, dBal[dIdx].balance);
    if (amount > 10) {
      settlements.push({
        from: dBal[dIdx].name,
        to: cBal[cIdx].name,
        amount: Math.round(amount),
        note: `For Hotel & Shared Transit`
      });
    }
    cBal[cIdx].balance -= amount;
    dBal[dIdx].balance -= amount;
    if (cBal[cIdx].balance <= 5) cIdx++;
    if (dBal[dIdx].balance <= 5) dIdx++;
  }

  // Dynamic Days and Timelines
  const days = [];
  const nightsCount = Math.max(1, daysCount - 1);
  const pricePerNight = Math.round(staySpent / nightsCount);

  for (let i = 1; i <= daysCount; i++) {
    let dayTitle = `Day ${i} — Exploration`;
    let daySummary = `Explore key highlights, local cafes and scenic viewpoints in ${destName}.`;
    let timeline = [];

    if (i === 1) {
      dayTitle = "Day 1 — Arrival & Check-in";
      daySummary = `Journey from ${startingLocation}, settle into ${profile.hotel}, and enjoy evening sunset stroll.`;
      timeline = [
        {
          id: `d${i}-1`,
          time: "07:00 AM",
          title: `Assemble & Depart from ${startingLocation}`,
          type: "transport",
          transport_mode: profile.transitMode,
          duration: profile.transitTime,
          cost: profile.transitFare,
          cost_type: "per_person",
          location: startingLocation,
          notes: "Board on time with luggage and student IDs."
        },
        {
          id: `d${i}-2`,
          time: "11:00 AM",
          title: `Transit to Stay via ${profile.localTransit}`,
          type: "transport",
          transport_mode: "Local Transit",
          duration: "20 min",
          cost: 60,
          cost_type: "per_person",
          location: `${destName} Terminal`,
          notes: "Direct transfer to accommodation."
        },
        {
          id: `d${i}-3`,
          time: "11:30 AM",
          title: `Check-in at ${profile.hotel}`,
          type: "hotel",
          duration: "45 min",
          cost: staySpent,
          cost_type: "total",
          location: profile.hotelLoc,
          notes: "Freshen up, drop bags, and unpack."
        },
        {
          id: `d${i}-4`,
          time: "01:00 PM",
          title: `Welcome Group Lunch`,
          type: "food",
          duration: "1h",
          cost: 190,
          cost_type: "per_person",
          location: profile.foodSpots[0] || "Local Bistro",
          notes: "Regional delicacies and refreshing beverages."
        },
        {
          id: `d${i}-5`,
          time: "03:30 PM",
          title: profile.activities[0]?.title || `Explore ${destName} Center`,
          type: "sightseeing",
          duration: profile.activities[0]?.duration || "2h",
          cost: 0,
          location: destName,
          notes: profile.activities[0]?.description || "Scenic promenade walk and group photos."
        },
        {
          id: `d${i}-6`,
          time: "07:30 PM",
          title: `Evening Cafe & Dinner`,
          type: "food",
          duration: "2h",
          cost: 280,
          cost_type: "per_person",
          location: profile.foodSpots[1] || "Famous Diner",
          notes: "Live music, relaxing atmosphere and next-day planning."
        }
      ];
    } else if (i === daysCount) {
      dayTitle = `Day ${i} — Highlights & Farewell`;
      daySummary = `Morning photography, souvenir hunting, hotel checkout and return transit to ${startingLocation}.`;
      timeline = [
        {
          id: `d${i}-1`,
          time: "08:00 AM",
          title: "Sunrise Walk & Morning Coffee",
          type: "activity",
          duration: "1h 30m",
          cost: 120,
          cost_type: "per_person",
          location: profile.hotelLoc,
          notes: "Golden hour photo session."
        },
        {
          id: `d${i}-2`,
          time: "10:00 AM",
          title: `Hotel Checkout & Baggage Hold`,
          type: "hotel",
          duration: "30 min",
          cost: 0,
          location: profile.hotel,
          notes: "Settle room bills and store luggage safely at concierge."
        },
        {
          id: `d${i}-3`,
          time: "11:30 AM",
          title: profile.activities[3]?.title || `Souvenir Market & Craft Center`,
          type: "shopping",
          duration: "1h 30m",
          cost: 150,
          cost_type: "per_person",
          location: `${destName} Bazaar`,
          notes: "Collect keepsakes, handmade snacks, and postcards."
        },
        {
          id: `d${i}-4`,
          time: "01:30 PM",
          title: "Farewell Feast",
          type: "food",
          duration: "1h",
          cost: 220,
          cost_type: "per_person",
          location: profile.foodSpots[2] || "Grand Dining",
          notes: "Final group debrief and expense calculation."
        },
        {
          id: `d${i}-5`,
          time: "04:00 PM",
          title: `Return Transit to ${startingLocation}`,
          type: "transport",
          transport_mode: profile.transitMode,
          duration: profile.transitTime,
          cost: profile.transitFare,
          cost_type: "per_person",
          location: `${destName} Station`,
          notes: `Safe return trip to ${startingLocation}.`
        }
      ];
    } else {
      dayTitle = `Day ${i} — Peak Adventures & Culture`;
      daySummary = `Major sightseeing attractions, group activities and authentic regional dining.`;
      timeline = [
        {
          id: `d${i}-1`,
          time: "08:30 AM",
          title: "Group Breakfast",
          type: "food",
          duration: "45 min",
          cost: 140,
          cost_type: "per_person",
          location: profile.foodSpots[3] || "Breakfast Hub",
          notes: "Nutritious start for a full day of adventures."
        },
        {
          id: `d${i}-2`,
          time: "10:00 AM",
          title: profile.activities[1]?.title || `Visit ${destName} Wonder`,
          type: "sightseeing",
          duration: profile.activities[1]?.duration || "3h",
          cost: 0,
          location: destName,
          notes: profile.activities[1]?.description || "Iconic destination landmark."
        },
        {
          id: `d${i}-3`,
          time: "01:30 PM",
          title: "Midday Refreshment & Lunch",
          type: "food",
          duration: "1h",
          cost: 240,
          cost_type: "per_person",
          location: "Garden Restaurant",
          notes: "Rest and recharge."
        },
        {
          id: `d${i}-4`,
          time: "03:30 PM",
          title: profile.activities[2]?.title || "Outdoor Adventure Experience",
          type: "activity",
          duration: profile.activities[2]?.duration || "2h 30m",
          cost: 250,
          cost_type: "per_person",
          location: "Activity Spot",
          notes: profile.activities[2]?.description || "Group experience & thrills."
        },
        {
          id: `d${i}-5`,
          time: "08:00 PM",
          title: "Night Bonfire & Dinner Party",
          type: "food",
          duration: "2h",
          cost: 350,
          cost_type: "per_person",
          location: "Beach / Hillside Viewpoint",
          notes: "Story sharing, acoustic music and star gazing."
        }
      ];
    }

    days.push({
      day: i,
      title: dayTitle,
      date: `Day ${i}`,
      summary: daySummary,
      timeline
    });
  }

  return {
    id: backendResponse?.id || Date.now(),
    destination: destName,
    starting_location: startingLocation,
    start_date: startDate,
    end_date: endDate,
    formatted_dates: formattedDates,
    people,
    budget,
    spent: totalSpent,
    remaining,
    per_person_budget: perPersonBudget,
    travel_style: travelStyle,
    interests,
    travelers,
    settlements,
    budget_categories: {
      transport: { spent: transportSpent, allocated: transportAllocated, label: "Transport", icon: "Bus" },
      stay: { spent: staySpent, allocated: stayAllocated, label: "Stay & Lodging", icon: "Building2" },
      food: { spent: foodSpent, allocated: foodAllocated, label: "Food & Dining", icon: "Utensils" },
      activities: { spent: actSpent, allocated: actAllocated, label: "Activities & Fun", icon: "Compass" },
      emergency: { spent: 0, allocated: emergencyAllocated, label: "Safety Buffer", icon: "ShieldAlert" },
    },
    transport: [
      {
        id: "t1",
        route: `${startingLocation.toUpperCase()} → ${destName.toUpperCase()}`,
        mode: profile.transitMode,
        provider: "Student Express Transit",
        departure: "07:20 AM",
        arrival: "10:40 AM",
        duration: profile.transitTime,
        cost_per_person: profile.transitFare,
        total_cost: profile.transitFare * people,
        badge: "Optimal Route",
        icon: "Bus"
      },
      {
        id: "t2",
        route: `${destName} Terminal → Stay`,
        mode: "Local Transit",
        provider: profile.localTransit,
        departure: "11:00 AM",
        arrival: "11:20 AM",
        duration: "20 min",
        cost_per_person: 60,
        total_cost: 60 * people,
        badge: "Direct Transfer",
        icon: "Car"
      }
    ],
    hotel: {
      name: profile.hotel,
      type: "TRIPNEX Verified Stay",
      location: profile.hotelLoc,
      rating: 4.8,
      reviews_count: 240,
      check_in: `11:30 AM — ${startDate}`,
      check_out: `10:00 AM — ${endDate}`,
      price_per_night: pricePerNight,
      nights: nightsCount,
      total_cost: staySpent,
      per_person_share: Math.round(staySpent / people),
      amenities: ["Free High-speed WiFi", "Air Conditioning", "Baggage Storage", "Late Checkout available", "Near Transit Hub"],
      room_config: `${Math.ceil(people / 3)} Group Rooms / Dorm Suite`
    },
    activities: profile.activities,
    days,
    risks: [
      {
        id: "r1",
        severity: remaining > 1000 ? "green" : "yellow",
        title: "Budget Health",
        status: remaining > 1000 ? "On track" : "Close to limit",
        message: `₹${remaining.toLocaleString('en-IN')} emergency buffer remaining (${Math.round((remaining / budget) * 100)}% unspent).`,
        actionText: "Review Buffer",
        actionType: "buffer"
      },
      {
        id: "r2",
        severity: "green",
        title: "Hotel Stay",
        status: "Confirmed",
        message: `Check-in scheduled for 11:30 AM with luggage hold enabled.`,
        actionText: "View Stay",
        actionType: "hotel"
      },
      {
        id: "r3",
        severity: "yellow",
        title: "Schedule Pacing",
        status: "Tight schedule",
        message: "Afternoon outdoor activity could overlap with sunset travel.",
        actionText: "Fix automatically",
        actionType: "reschedule_d2"
      },
      {
        id: "r4",
        severity: "red",
        title: "Checkout Conflict",
        status: "Checkout conflict",
        message: "Hotel checkout is at 10:00 AM while return transit is late afternoon.",
        actionText: "Fix automatically",
        actionType: "resolve_checkout"
      }
    ]
  };
}
