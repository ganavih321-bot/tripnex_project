export const defaultTripData = {
  id: 101,
  destination: "Pondicherry",
  starting_location: "Chennai",
  start_date: "2026-09-12",
  end_date: "2026-09-14",
  formatted_dates: "Sept 12 — Sept 14, 2026",
  people: 5,
  budget: 20000,
  spent: 15700,
  remaining: 4300,
  per_person_budget: 4000,
  travel_style: "Balanced",
  interests: ["Beaches", "Food", "Culture", "Photography"],
  
  travelers: [
    { id: 1, name: "You", paid: 3720, avatar: "👤", role: "Organizer" },
    { id: 2, name: "Rahul", paid: 4100, avatar: "🎒", role: "Navigator" },
    { id: 3, name: "Ananya", paid: 3450, avatar: "📸", role: "Photographer" },
    { id: 4, name: "Priya", paid: 3820, avatar: "🎵", role: "Foodie" },
    { id: 5, name: "Arjun", paid: 3910, avatar: "⚡", role: "Treasurer" },
  ],

  settlements: [
    { from: "Ananya", to: "Rahul", amount: 380, note: "For Hotel & Group Lunch" },
    { from: "You", to: "Rahul", amount: 170, note: "For Auto & Scooters" },
    { from: "Priya", to: "Arjun", amount: 180, note: "For Paradise Boat tickets" },
  ],

  budget_categories: {
    transport: { spent: 4200, allocated: 5000, label: "Transport", icon: "Bus" },
    stay: { spent: 7500, allocated: 8000, label: "Stay", icon: "Building2" },
    food: { spent: 2800, allocated: 4500, label: "Food & Drinks", icon: "Utensils" },
    activities: { spent: 1200, allocated: 2000, label: "Activities", icon: "Compass" },
    emergency: { spent: 0, allocated: 500, label: "Emergency Buffer", icon: "ShieldAlert" },
  },

  transport: [
    {
      id: "t1",
      route: "CHENNAI → PONDICHERRY",
      mode: "Bus",
      provider: "PRTC / TNSTC Express",
      departure: "07:20 AM",
      arrival: "10:40 AM",
      duration: "3h 20m",
      cost_per_person: 180,
      total_cost: 900,
      badge: "Fastest Budget",
      icon: "Bus"
    },
    {
      id: "t2",
      route: "Pondicherry Bus Stand → Hotel",
      mode: "Auto",
      provider: "2 Shared Autos",
      departure: "10:45 AM",
      arrival: "11:05 AM",
      duration: "20 min",
      cost_per_person: 60,
      total_cost: 300,
      badge: "Direct Transfer",
      icon: "Car"
    },
    {
      id: "t3",
      route: "Local Sightseeing & Auroville",
      mode: "Scooter Rental",
      provider: "2 Geared Scooters (2 days)",
      departure: "Day 2 Morning",
      arrival: "Day 3 Noon",
      duration: "2 Days",
      cost_per_person: 140,
      total_cost: 700,
      badge: "High Flexibility",
      icon: "Bike"
    }
  ],

  hotel: {
    name: "TRIPNEX Heritage Stay",
    type: "French Quarter Boutique Homestay",
    location: "White Town, Pondicherry (350m from Beach)",
    rating: 4.8,
    reviews_count: 320,
    check_in: "11:15 AM — Sept 12",
    check_out: "10:00 AM — Sept 14",
    price_per_night: 3750,
    nights: 2,
    total_cost: 7500,
    per_person_share: 1500,
    amenities: ["Free High-speed WiFi", "Air Conditioning", "Luggage Storage", "Breakfast Included", "Near Promenade"],
    room_config: "2 Deluxe AC Rooms (Triple + Twin)"
  },

  activities: [
    {
      id: "act1",
      title: "Rock Beach Promenade",
      time: "Day 1, 2:30 PM",
      duration: "2h 30m",
      cost: "Free",
      distance: "0.4 km from stay",
      tag: "Must Visit",
      category: "Beaches",
      description: "Iconic stone seafront, sea spray, French architecture, and Gandhi Statue."
    },
    {
      id: "act2",
      title: "Auroville & Matrimandir",
      time: "Day 2, 11:00 AM",
      duration: "3h",
      cost: "Free (Pass req.)",
      distance: "12 km",
      tag: "Culture & Peace",
      category: "Culture",
      description: "Experiential township, golden dome view point, and organic botanical cafes."
    },
    {
      id: "act3",
      title: "Paradise Beach Speedboat",
      time: "Day 2, 3:30 PM",
      duration: "2h",
      cost: "₹220/person",
      distance: "8 km (Chunnambar)",
      tag: "Water Adventure",
      category: "Adventure",
      description: "Backwater ferry cruise arriving at secluded golden sand beach."
    },
    {
      id: "act4",
      title: "White Town Heritage Walk",
      time: "Day 3, 8:00 AM",
      duration: "1h 30m",
      cost: "Free",
      distance: "Walking distance",
      tag: "Photography",
      category: "Photography",
      description: "Vibrant yellow mustard villas, bougainvillea flowers, and French street cafes."
    }
  ],

  days: [
    {
      day: 1,
      title: "Arrival & Coastal Exploration",
      date: "Sept 12, Friday",
      summary: "Bus transfer from Chennai, check into French Quarter stay, and sunset at Rock Beach.",
      timeline: [
        {
          id: "d1-1",
          time: "07:00 AM",
          title: "Walk to Koyambedu Bus Terminal",
          type: "walk",
          duration: "15 min",
          cost: 0,
          location: "Chennai",
          notes: "Assemble with the group at Platform 4."
        },
        {
          id: "d1-2",
          time: "07:20 AM",
          title: "Express Bus to Pondicherry",
          type: "transport",
          transport_mode: "Bus",
          duration: "3h 20m",
          cost: 180,
          cost_type: "per_person",
          location: "East Coast Road (ECR)",
          notes: "Scenic coastal highway journey."
        },
        {
          id: "d1-3",
          time: "10:45 AM",
          title: "Shared Auto to Hotel",
          type: "transport",
          transport_mode: "Auto Rickshaw",
          duration: "20 min",
          cost: 60,
          cost_type: "per_person",
          location: "Pondicherry New Bus Stand",
          notes: "Two autos for 5 travelers with backpacks."
        },
        {
          id: "d1-4",
          time: "11:15 AM",
          title: "Check-in at TRIPNEX Heritage Stay",
          type: "hotel",
          duration: "45 min",
          cost: 7500,
          cost_type: "total",
          location: "White Town",
          notes: "Freshen up and drop bags."
        },
        {
          id: "d1-5",
          time: "01:00 PM",
          title: "Authentic South Indian Lunch",
          type: "food",
          duration: "1h",
          cost: 180,
          cost_type: "per_person",
          location: "Hotel Surguru / Ananda Bhavan",
          notes: "Unlimited Thali & filter coffee."
        },
        {
          id: "d1-6",
          time: "02:30 PM",
          title: "Rock Beach & French Quarter",
          type: "sightseeing",
          duration: "2h 30m",
          cost: 0,
          location: "Goubert Avenue",
          notes: "Breezy sea walk, Gandhi memorial, and French war memorial."
        },
        {
          id: "d1-7",
          time: "05:30 PM",
          title: "Café des Arts & Croissants",
          type: "food",
          duration: "1h",
          cost: 140,
          cost_type: "per_person",
          location: "Suffren Street",
          notes: "Vintage art cafe with courtyard seating."
        },
        {
          id: "d1-8",
          time: "07:30 PM",
          title: "Dinner & Night Promenade Stroll",
          type: "food",
          duration: "1h 45m",
          cost: 320,
          cost_type: "per_person",
          location: "White Town Bistro",
          notes: "Wood-fired pizzas and group games."
        }
      ]
    },
    {
      day: 2,
      title: "Auroville, Backwaters & Beach Fun",
      date: "Sept 13, Saturday",
      summary: "Visit the global community township, ride scooters, and take backwater ferry to Paradise Beach.",
      timeline: [
        {
          id: "d2-1",
          time: "08:30 AM",
          title: "Breakfast at Baker Street",
          type: "food",
          duration: "45 min",
          cost: 150,
          cost_type: "per_person",
          location: "Bussy Street",
          notes: "French baguettes and hot cocoa."
        },
        {
          id: "d2-2",
          time: "10:00 AM",
          title: "Scooter Ride to Auroville",
          type: "transport",
          transport_mode: "Rented Scooters",
          duration: "30 min",
          cost: 140,
          cost_type: "per_person",
          location: "ECR to Auroville Road",
          notes: "Helmets on! Smooth green countryside road."
        },
        {
          id: "d2-3",
          time: "11:00 AM",
          title: "Matrimandir Viewing Point",
          type: "sightseeing",
          duration: "2h",
          cost: 0,
          location: "Auroville Visitor Center",
          notes: "Golden geodesic sphere amidst serene banyan trees."
        },
        {
          id: "d2-4",
          time: "01:30 PM",
          title: "Organic Farm Lunch",
          type: "food",
          duration: "1h",
          cost: 250,
          cost_type: "per_person",
          location: "Tanto Pizzeria / Solar Kitchen",
          notes: "Farm-to-table salads & firewood pasta."
        },
        {
          id: "d2-5",
          time: "03:30 PM",
          title: "Paradise Beach Speedboat Ride",
          type: "activity",
          duration: "2h 30m",
          cost: 220,
          cost_type: "per_person",
          location: "Chunnambar Boat House",
          notes: "Scenic 15-min boat cruise to island beach."
        },
        {
          id: "d2-6",
          time: "06:30 PM",
          title: "Goubert Market & Souvenirs",
          type: "shopping",
          duration: "1h 15m",
          cost: 150,
          cost_type: "per_person",
          location: "Mission Street",
          notes: "Handmade soaps, candles, and Auroville pottery."
        },
        {
          id: "d2-7",
          time: "08:30 PM",
          title: "Group Seafood & Beach Dinner",
          type: "food",
          duration: "2h",
          cost: 400,
          cost_type: "per_person",
          location: "Sea Gulls Restaurant",
          notes: "Live acoustic music & ocean view."
        }
      ]
    },
    {
      day: 3,
      title: "French Heritage & Return Home",
      date: "Sept 14, Sunday",
      summary: "Early photography walk, cafe breakfast, checkout, museum visit and return bus to Chennai.",
      timeline: [
        {
          id: "d3-1",
          time: "08:00 AM",
          title: "Sunrise Photography Walk",
          type: "activity",
          duration: "1h 30m",
          cost: 0,
          location: "Romain Rolland Street",
          notes: "Golden hour glow on mustard-yellow colonial buildings."
        },
        {
          id: "d3-2",
          time: "09:30 AM",
          title: "French Breakfast at Coromandel Café",
          type: "food",
          duration: "1h",
          cost: 220,
          cost_type: "per_person",
          location: "Romain Rolland St",
          notes: "Eggs benedict, pancakes & fresh juices."
        },
        {
          id: "d3-3",
          time: "10:30 AM",
          title: "Hotel Checkout & Luggage Drop",
          type: "hotel",
          duration: "30 min",
          cost: 0,
          location: "TRIPNEX Heritage Stay",
          notes: "Checked out on time. Left bags safely with front desk."
        },
        {
          id: "d3-4",
          time: "11:30 AM",
          title: "Sacred Heart Basilica & Museum",
          type: "sightseeing",
          duration: "1h 30m",
          cost: 40,
          cost_type: "per_person",
          location: "South Boulevard",
          notes: "Gothic architecture and stained glass panels."
        },
        {
          id: "d3-5",
          time: "01:30 PM",
          title: "Farewell Thali Lunch",
          type: "food",
          duration: "1h",
          cost: 200,
          cost_type: "per_person",
          location: "Maison Perumal",
          notes: "Final group debrief and photo exchange."
        },
        {
          id: "d3-6",
          time: "03:00 PM",
          title: "Auto to Bus Stand",
          type: "transport",
          transport_mode: "Auto Rickshaw",
          duration: "20 min",
          cost: 60,
          cost_type: "per_person",
          location: "Pondicherry Stand",
          notes: "Pick up bags and head to terminal."
        },
        {
          id: "d3-7",
          time: "03:45 PM",
          title: "Return AC Express Bus to Chennai",
          type: "transport",
          transport_mode: "Express Bus",
          duration: "3h 30m",
          cost: 210,
          cost_type: "per_person",
          location: "Arriving Chennai 07:15 PM",
          notes: "Safe arrival with memories & balanced accounts!"
        }
      ]
    }
  ],

  risks: [
    {
      id: "r1",
      severity: "green",
      title: "Budget Status",
      status: "On track",
      message: "₹4,300 emergency buffer remaining (21.5% unspent).",
      actionText: "Review Buffer",
      actionType: "buffer"
    },
    {
      id: "r2",
      severity: "green",
      title: "Hotel Stay",
      status: "Confirmed",
      message: "Check-in matches arrival bus timing with 35m buffer.",
      actionText: "View Voucher",
      actionType: "hotel"
    },
    {
      id: "r3",
      severity: "yellow",
      title: "Day 2 Schedule",
      status: "Tight schedule",
      message: "Paradise Beach boat ride might overlap with Goubert market sunset.",
      actionText: "Fix automatically",
      actionType: "reschedule_d2"
    },
    {
      id: "r4",
      severity: "red",
      title: "Day 3 Checkout",
      status: "Checkout conflict",
      message: "Standard checkout at 10:00 AM while return bus is at 3:45 PM.",
      actionText: "Fix automatically",
      actionType: "resolve_checkout"
    }
  ]
};
