export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  { code: 'fr', label: 'French', native: 'Français', flag: '🇫🇷' },
];

export const translations = {
  en: {
    // Nav
    tagline_copilot: "AI Copilot",
    nav_explore: "Explore",
    nav_how_it_works: "How it works",
    nav_my_trips: "My Trips",
    nav_plan_btn: "Plan My Trip",
    status_fastapi_live: "FastAPI Live",
    status_demo_mode: "Demo Mode",

    // Hero
    hero_badge: "AI-POWERED GROUP TRAVEL COPILOT",
    hero_title_1: "Your next journey,",
    hero_title_2: "planned intelligently.",
    hero_subtitle: "Plan routes, stays, activities and group spending in one place. Auto-arranges day-wise itineraries with instant per-person cost split and adaptive real-time optimization.",
    hero_cta_plan: "✨ Plan My Trip",
    hero_cta_how: "See how it works",
    
    // Product Promise
    promise_plan_title: "1. PLAN",
    promise_plan_desc: "Smart route planning, synchronized transport, verified student stays, and curated day-wise activities.",
    promise_travel_title: "2. TRAVEL",
    promise_travel_desc: "Real-time group timeline, transit departure schedules, check-in alerts, and navigation links.",
    promise_spend_title: "3. SPEND",
    promise_spend_desc: "Automated per-person splits, live remaining budget gauges, and 1-click settlement recommendations.",
    promise_adapt_title: "4. ADAPT",
    promise_adapt_desc: "Live AI optimization when budget changes, trains get delayed, or group size changes midway.",

    // Presets
    presets_badge: "Instant Demo Presets",
    presets_title: "Explore Popular Student Getaways",
    presets_desc: "Click any card to inspect a generated itinerary immediately.",
    preset_launch: "Launch Itinerary",
    preset_total_budget: "Total Group Budget:",
    preset_per_person: "Per Person",

    // Planner
    planner_badge: "Interactive Trip Planner",
    planner_title: "Where are you going?",
    planner_desc: "Enter your group requirements and let TRIPNEX auto-arrange transit, stays, day-wise timeline, and per-person cost splits.",
    planner_quick_templates: "Quick 1-Click Itinerary Templates:",
    field_destination: "Destination",
    field_starting_location: "Starting Location",
    field_start_date: "Start Date",
    field_end_date: "End Date",
    field_travelers: "Number of Travelers",
    field_budget: "Total Trip Budget (₹)",
    field_est_split: "Est. Split:",
    field_travel_style: "Travel Style Preference:",
    field_interests: "Group Interests (Select all that apply):",
    btn_generate_trip: "✨ Generate My Trip",
    btn_back_explore: "Back to Explore",

    // Travel Styles
    style_budget_title: "Budget",
    style_budget_desc: "Hostels, public transit & street food",
    style_balanced_title: "Balanced",
    style_balanced_desc: "Private homestays, mixed transit & cafes",
    style_comfort_title: "Comfort",
    style_comfort_desc: "Resorts/villas, cabs & premium dining",

    // Interests
    interest_beaches: "Beaches",
    interest_food: "Food",
    interest_adventure: "Adventure",
    interest_culture: "Culture",
    interest_shopping: "Shopping",
    interest_nightlife: "Nightlife",
    interest_photography: "Photography",

    // Generating
    gen_title_working: "Planning your journey...",
    gen_title_ready: "Your trip is ready ✨",
    gen_sub_working: "TRIPNEX engine is crafting the optimal student itinerary",
    gen_step_1: "Understanding your group & travel style",
    gen_step_2: "Optimizing budget allocation & buffers",
    gen_step_3: "Planning transit routes & local hops",
    gen_step_4: "Finding top-rated verified activities & stays",
    gen_step_5: "Building your day-wise group itinerary",

    // Dashboard Header
    dash_verified_route: "AI Verified Route",
    dash_edit_trip: "Edit Trip",
    dash_optimize_trip: "✨ Optimize Trip",
    dash_share: "Share",
    dash_copied: "Copied Link!",
    dash_total_budget: "Total Budget",
    dash_per_person: "Per Person",
    dash_travelers_count: "travelers",

    // Day Tabs & Timeline
    dash_day_by_day: "📅 Day-by-Day Itinerary",
    dash_days_total: "Days Total",
    dash_day: "DAY",
    dash_stops: "stops",
    dash_focus: "FOCUS",
    dash_free_entry: "Free Entry",
    dash_per_person_tag: "per person",
    dash_total_group: "Total Group",

    // Right Panels
    panel_map_title: "Interactive Route Map",
    panel_map_sub: "GPS synchronized waypoint cluster",
    panel_budget_title: "Live Budget Engine",
    panel_budget_sub: "Real-time expense tracking",
    panel_budget_allocated: "Allocated",
    panel_budget_remaining: "Remaining",
    panel_budget_utilized: "Budget Utilized",
    panel_budget_cat_alloc: "Category Allocations",

    panel_split_title: "Group Expense Engine",
    panel_split_sub: "Equal split:",
    panel_split_settled: "Settled",
    panel_split_receives: "Receives",
    panel_split_owes: "Owes",
    panel_split_suggestions: "1-Click Settlement Suggestions",
    panel_split_tap_settle: "Tap to Settle",
    panel_split_settled_btn: "Settled ✓",

    panel_transit_title: "Transportation Plan",
    panel_transit_sub: "Multi-leg coordinated transit",
    panel_transit_sync: "Group Sync",

    panel_hotel_title: "TRIPNEX Verified Stay",
    panel_hotel_checkin: "Check-in",
    panel_hotel_checkout: "Check-out",
    panel_hotel_room_setup: "Room Setup:",

    panel_act_title: "Top Curated Activities",
    panel_act_sub: "Student-approved gems",

    panel_health_title: "Trip Health & Risk Detector",
    panel_health_sub: "Proactive conflict detection",
    panel_health_active: "AI Active",
    panel_health_fix_btn: "Fix automatically",
    panel_health_resolved: "Resolved & Optimized",

    // Copilot
    copilot_btn: "✨ Trip Copilot",
    copilot_title: "TRIPNEX Copilot",
    copilot_active: "● AI Group Assistant Active",
    copilot_placeholder: "Ask anything about this trip...",
    prompt_opt_budget: "✨ Optimize my budget",
    prompt_running_late: "⏰ We're running late",
    prompt_more_fun: "🎉 Make this trip more fun",
    prompt_cheap_transit: "🚌 Find cheaper transport",
    prompt_food_spots: "🍛 Add more food spots",

    // Optimize Modal
    opt_title: "✨ Optimize My Trip",
    opt_subtitle: "Killer Feature — Adaptive Real-Time Re-planning",
    opt_question: "What's changed?",
    opt_opt_budget_dec: "Budget decreased",
    opt_opt_budget_dec_desc: "Smart substitutions for transit and stays to save cost without losing fun.",
    opt_opt_running_late: "We're running late",
    opt_opt_running_late_desc: "Compress timeline, remove redundant transit buffer, and re-order spots.",
    opt_opt_member_drop: "Someone dropped out",
    opt_opt_member_drop_desc: "Recalculate room configuration, vehicle split, and fair share balances.",
    opt_opt_more_acts: "We want more activities",
    opt_opt_more_acts_desc: "Fill idle gaps with high-adrenaline group experiences.",
    opt_opt_relaxed: "We want a relaxed trip",
    opt_opt_relaxed_desc: "Slow down the pace, extend cafe breaks, and eliminate early morning calls.",
    opt_preview_title: "Optimization Preview",
    opt_btn_cancel: "Cancel",
    opt_btn_apply: "Apply Optimization",
    
    // Saved Trips Drawer
    drawer_title: "My Saved Trips",
    drawer_empty: "No saved trips yet.",
    drawer_empty_sub: "Create a new trip or choose a preset to see it listed here.",
    drawer_active: "Active",
    drawer_open_btn: "Open Dashboard",
    drawer_clear: "Clear History",
    drawer_close: "Close",

    // Social Share & Email
    share_modal_title: "Share Trip & Invite Friends",
    share_tab_link: "Link & WhatsApp",
    share_tab_email: "Email Itinerary",
    share_copy_btn: "Copy Share Link",
    share_copied_btn: "Copied to Clipboard! ✓",
    share_whatsapp_btn: "Share on WhatsApp",
    share_qr_title: "Scan with Mobile",
    email_input_label: "Send itinerary to emails (comma-separated):",
    email_placeholder: "e.g. rahul@college.edu, ananya@gmail.com",
    email_send_btn: "Send Itinerary Email",
    email_sent_msg: "Itinerary sent to group members! 🚀",
    email_preview_subject: "Subject: TRIPNEX Group Plan to",

    // Group Discussion & Suggestions
    discuss_btn: "💬 Suggestions & Tips",
    discuss_title: "Group Suggestions & Tips",
    discuss_subtitle: "Propose spots, vote with friends, and inject into itinerary",
    discuss_add_placeholder: "Suggest a cafe, shortcut, or hidden gem...",
    discuss_add_btn: "Add Suggestion",
    discuss_accept_btn: "✨ Add to Timeline",
    discuss_added_badge: "Added to Itinerary ✓",
    discuss_upvote: "Vote",

    // Visited Checkmarks Tracker
    visited_badge: "Visited ✓",
    visited_mark_btn: "Mark as visited",
    visited_unmark_btn: "Visited",
    visited_progress_title: "Today's Journey Progress",
    visited_progress_done: "All scheduled stops completed today! 🎉",

    // Group Members Roster
    members_modal_title: "Trip Members & Attendance",
    members_modal_sub: "Verified student travel group roster",
    members_present_badge: "Present in Trip 🟢",
    members_active_count: "Active Members Present",
    members_add_btn: "Add Member",
    members_add_placeholder: "Enter friend's name...",
    members_role_label: "Role",
    members_paid_label: "Paid",
    members_click_to_view: "Click to view members",
    members_edit_name: "Edit Name",
    members_save_name: "Save",
    members_remove: "Remove",

    // Footer
    footer_built_for: "© 2026 TRIPNEX. Built with ❤️ for Student Group Travel Hackathon.",
    footer_stack: "FastAPI + React + Vite + Multilingual Copilot Engine"
  },

  hi: {
    // Nav
    tagline_copilot: "एआई कोपायलट",
    nav_explore: "खोजें",
    nav_how_it_works: "यह कैसे काम करता है",
    nav_my_trips: "मेरी यात्राएं",
    nav_plan_btn: "यात्रा प्लान करें",
    status_fastapi_live: "फास्टएपीआई लाइव",
    status_demo_mode: "डेमो मोड",

    // Hero
    hero_badge: "एआई-संचालित ग्रुप ट्रैवल कोपायलट",
    hero_title_1: "आपकी अगली यात्रा,",
    hero_title_2: "स्मार्ट तरीके से प्लान की गई।",
    hero_subtitle: "मार्ग, ठहरने, गतिविधियों और समूह खर्च को एक ही स्थान पर प्लान करें। प्रति व्यक्ति खर्च विभाजन और वास्तविक समय अनुकूलन के साथ दिन-वार यात्रा कार्यक्रम।",
    hero_cta_plan: "✨ यात्रा प्लान करें",
    hero_cta_how: "देखें यह कैसे काम करता है",

    // Product Promise
    promise_plan_title: "1. प्लान करें (PLAN)",
    promise_plan_desc: "स्मार्ट रूट प्लानिंग, सार्वजनिक व स्थानीय परिवहन, छात्रों के लिए सत्यापित स्टे और दिन-वार गतिविधियां।",
    promise_travel_title: "2. यात्रा करें (TRAVEL)",
    promise_travel_desc: "ग्रुप टाइमलाइन, बस/ट्रेन प्रस्थान समय, चेक-इन अलर्ट और लाइव नेविगेशन लिंक।",
    promise_spend_title: "3. खर्च प्रबंधन (SPEND)",
    promise_spend_desc: "प्रति व्यक्ति ऑटोमैटिक खर्च बंटवारा, लाइव बजट ट्रैकर और 1-क्लिक हिसाब चुकता सुझाव।",
    promise_adapt_title: "4. अनुकूलित करें (ADAPT)",
    promise_adapt_desc: "बजट बदलने, ट्रेन लेट होने या ग्रुप मेंबर कम होने पर लाइव एआई री-प्लानिंग।",

    // Presets
    presets_badge: "इंस्टेंट डेमो प्रीसेट्स",
    presets_title: "छात्रों के लोकप्रिय हॉलिडे ट्रिप्स",
    presets_desc: "तुरंत जनरेटेड यात्रा कार्यक्रम देखने के लिए किसी भी कार्ड पर क्लिक करें।",
    preset_launch: "ट्रिप शुरू करें",
    preset_total_budget: "कुल ग्रुप बजट:",
    preset_per_person: "प्रति व्यक्ति",

    // Planner
    planner_badge: "इंटरएक्टिव ट्रिप प्लानर",
    planner_title: "आप कहाँ जा रहे हैं?",
    planner_desc: "अपने ग्रुप की आवश्यकताएं दर्ज करें और TRIPNEX को बस, होटल, दिन-वार टाइमलाइन और प्रति व्यक्ति खर्च तय करने दें।",
    planner_quick_templates: "1-क्लिक त्वरित ट्रिप टेम्पलेट्स:",
    field_destination: "गंतव्य (Destination)",
    field_starting_location: "शुरुआती स्थान (Starting Location)",
    field_start_date: "प्रारंभ तिथि",
    field_end_date: "समाप्ति तिथि",
    field_travelers: "यात्रियों की संख्या",
    field_budget: "कुल यात्रा बजट (₹)",
    field_est_split: "अनुमानित हिस्सा:",
    field_travel_style: "यात्रा शैली प्राथमिकता:",
    field_interests: "ग्रुप की रुचियां (जो लागू हों चुनें):",
    btn_generate_trip: "✨ मेरी यात्रा जनरेट करें",
    btn_back_explore: "एक्सप्लोर पर वापस जाएं",

    // Travel Styles
    style_budget_title: "किफायती (Budget)",
    style_budget_desc: "हॉस्टल, बस/ट्रेन और स्ट्रीट फूड",
    style_balanced_title: "संतुलित (Balanced)",
    style_balanced_desc: "प्राइवेट होमस्टे, मिश्रित परिवहन और कैफे",
    style_comfort_title: "आरामदायक (Comfort)",
    style_comfort_desc: "रिसॉर्ट/विला, टैक्सी और प्रीमियम भोजन",

    // Interests
    interest_beaches: "समुद्र तट (Beaches)",
    interest_food: "खान-पान (Food)",
    interest_adventure: "एडवेंचर (Adventure)",
    interest_culture: "संस्कृति (Culture)",
    interest_shopping: "शॉपिंग (Shopping)",
    interest_nightlife: "नाइटलाइफ़ (Nightlife)",
    interest_photography: "फोटोग्राफी (Photography)",

    // Generating
    gen_title_working: "आपकी यात्रा की योजना बन रही है...",
    gen_title_ready: "आपकी यात्रा तैयार है ✨",
    gen_sub_working: "TRIPNEX इंजन आपके ग्रुप के लिए सबसे बेहतरीन प्लान तैयार कर रहा है",
    gen_step_1: "आपके ग्रुप और यात्रा शैली को समझना",
    gen_step_2: "बजट आवंटन और सुरक्षा राशि का अनुकूलन",
    gen_step_3: "ट्रांजिट रूट और स्थानीय वाहनों की योजना",
    gen_step_4: "सत्यापित गतिविधियों और ठहरने की व्यवस्था खोजना",
    gen_step_5: "आपका दिन-वार ग्रुप कार्यक्रम तैयार करना",

    // Dashboard Header
    dash_verified_route: "एआई सत्यापित रूट",
    dash_edit_trip: "ट्रिप संपादित करें",
    dash_optimize_trip: "✨ ट्रिप अनुकूलित करें",
    dash_share: "शेयर करें",
    dash_copied: "लिंक कॉपी हो गया!",
    dash_total_budget: "कुल बजट",
    dash_per_person: "प्रति व्यक्ति",
    dash_travelers_count: "यात्री",

    // Day Tabs & Timeline
    dash_day_by_day: "📅 दिन-वार यात्रा कार्यक्रम",
    dash_days_total: "कुल दिन",
    dash_day: "दिन",
    dash_stops: "स्टॉप",
    dash_focus: "मुख्य आकर्षण",
    dash_free_entry: "निःशुल्क प्रवेश",
    dash_per_person_tag: "प्रति व्यक्ति",
    dash_total_group: "कुल ग्रुप",

    // Right Panels
    panel_map_title: "इंटरएक्टिव रूट मैप",
    panel_map_sub: "जीपीएस सिंक किए गए वेपॉइंट्स",
    panel_budget_title: "लाइव बजट इंजन",
    panel_budget_sub: "वास्तविक समय व्यय ट्रैकिंग",
    panel_budget_allocated: "आवंटित",
    panel_budget_remaining: "शेष राशि",
    panel_budget_utilized: "बजट का उपयोग",
    panel_budget_cat_alloc: "श्रेणीवार बजट आवंटन",

    panel_split_title: "ग्रुप खर्च और बंटवारा इंजन",
    panel_split_sub: "समान हिस्सा:",
    panel_split_settled: "हिसाब चुकता",
    panel_split_receives: "पाने हैं",
    panel_split_owes: "देने हैं",
    panel_split_suggestions: "1-क्लिक हिसाब चुकता सुझाव",
    panel_split_tap_settle: "चुकता करने के लिए टैप करें",
    panel_split_settled_btn: "चुकता हो गया ✓",

    panel_transit_title: "परिवहन योजना",
    panel_transit_sub: "समन्वित बस, ऑटो व स्कूटर",
    panel_transit_sync: "ग्रुप सिंक",

    panel_hotel_title: "TRIPNEX सत्यापित स्टे",
    panel_hotel_checkin: "चेक-इन",
    panel_hotel_checkout: "चेक-आउट",
    panel_hotel_room_setup: "कमरा व्यवस्था:",

    panel_act_title: "शीर्ष चुनिंदा गतिविधियां",
    panel_act_sub: "छात्रों द्वारा अनुशंसित",

    panel_health_title: "ट्रिप स्वास्थ्य और जोखिम डिटेक्टर",
    panel_health_sub: "सक्रिय समय-संघर्ष पहचान",
    panel_health_active: "एआई सक्रिय",
    panel_health_fix_btn: "स्वचालित रूप से ठीक करें",
    panel_health_resolved: "सुलझाया और अनुकूलित किया गया",

    // Copilot
    copilot_btn: "✨ ट्रिप कोपायलट",
    copilot_title: "TRIPNEX कोपायलट",
    copilot_active: "● एआई ग्रुप सहायक सक्रिय",
    copilot_placeholder: "इस यात्रा के बारे में कुछ भी पूछें...",
    prompt_opt_budget: "✨ मेरा बजट अनुकूलित करें",
    prompt_running_late: "⏰ हमें देर हो रही है",
    prompt_more_fun: "🎉 ट्रिप को और मजेदार बनाएं",
    prompt_cheap_transit: "🚌 सस्ता परिवहन खोजें",
    prompt_food_spots: "🍛 अच्छे खाने की जगहें बताएं",

    // Optimize Modal
    opt_title: "✨ मेरी यात्रा अनुकूलित करें",
    opt_subtitle: "किलर फीचर — वास्तविक समय में ऑटो री-प्लानिंग",
    opt_question: "क्या बदलाव हुआ है?",
    opt_opt_budget_dec: "बजट कम हो गया है",
    opt_opt_budget_dec_desc: "आनंद कम किए बिना लागत बचाने के लिए स्मार्ट स्टे और ट्रांजिट विकल्प।",
    opt_opt_running_late: "हमें देर हो रही है",
    opt_opt_running_late_desc: "समय सीमा को व्यवस्थित करें और अनावश्यक बफर हटाएं।",
    opt_opt_member_drop: "कोई सदस्य ट्रिप से बाहर हो गया",
    opt_opt_member_drop_desc: "कमरे और वाहन के खर्च को बचे हुए यात्रियों में पुनः विभाजित करें।",
    opt_opt_more_acts: "हमें और अधिक गतिविधियां चाहिए",
    opt_opt_more_acts_desc: "खाली समय में रोमांचक साहसिक अनुभव जोड़ें।",
    opt_opt_relaxed: "हमें आरामदायक और शांत यात्रा चाहिए",
    opt_opt_relaxed_desc: "यात्रा की गति धीमी करें और कैफे में आराम का समय बढ़ाएं।",
    opt_preview_title: "अनुकूलन पूर्वावलोकन",
    opt_btn_cancel: "रद्द करें",
    opt_btn_apply: "अनुकूलन लागू करें",

    // Saved trips drawer
    saved_title: "मेरी सहेजी गई यात्राएं",
    saved_no_trips: "अभी तक कोई यात्रा सहेजी नहीं गई है।",
    saved_no_trips_sub: "नई यात्रा बनाएं या किसी प्रीसेट को चुनें।",
    saved_active: "सक्रिय",
    saved_open_btn: "डैशबोर्ड खोलें",
    saved_clear_btn: "इतिहास साफ़ करें",
    saved_close_btn: "बंद करें",

    // Footer
    footer_built_for: "© 2026 TRIPNEX. छात्र समूह यात्रा हैकाथॉन के लिए ❤️ से निर्मित।",
    footer_stack: "फास्टएपीआई + रिएक्ट + वाइट + बहुभाषी कोपायलट इंजन"
  },

  ta: {
    // Nav
    tagline_copilot: "AI துணைவி",
    nav_explore: "ஆராய்க",
    nav_how_it_works: "எப்படி செயல்படுகிறது",
    nav_my_trips: "எனது பயணங்கள்",
    nav_plan_btn: "பயணத்தை திட்டமிடு",
    status_fastapi_live: "FastAPI தயார்",
    status_demo_mode: "மாதிரி முறை",

    // Hero
    hero_badge: "AI-இயங்கும் குழு பயண உதவியாளர்",
    hero_title_1: "உங்கள் அடுத்த பயணம்,",
    hero_title_2: "அறிவார்ந்த முறையில் திட்டமிடப்பட்டது.",
    hero_subtitle: "வழிகள், தங்குமிடம், செயல்பாடுகள் மற்றும் குழு செலவுகளை ஒரே இடத்தில் திட்டமிடுங்கள். தானியங்கி நாள் வாரியான திட்டம் மற்றும் தலா செலவு கணக்கீடு.",
    hero_cta_plan: "✨ பயணத்தை திட்டமிடு",
    hero_cta_how: "எப்படி செயல்படுகிறது என்று காண்க",

    // Product Promise
    promise_plan_title: "1. திட்டம் (PLAN)",
    promise_plan_desc: "ஸ்மார்ட் வழித் திட்டமிடல், பேருந்து/ரயில் முன்பதிவு மற்றும் சரிபார்க்கப்பட்ட தங்குமிடங்கள்.",
    promise_travel_title: "2. பயணம் (TRAVEL)",
    promise_travel_desc: "குழு காலவரிசை, நிகழ்நேர நேரங்கள் மற்றும் ஜிபிஎஸ் இருப்பிட வழிகாட்டல்.",
    promise_spend_title: "3. செலவு (SPEND)",
    promise_spend_desc: "நபர்வாரி தானியங்கி செலவு பகிர்வு மற்றும் 1-கிளிக் கணக்கு தீர்வு பரிந்துரைகள்.",
    promise_adapt_title: "4. தகவமைப்பு (ADAPT)",
    promise_adapt_desc: "பட்ஜெட் மாறும் போது அல்லது தாமதம் ஏற்படும் போது நேரலை AI மறு திட்டமிடல்.",

    // Presets
    presets_badge: "உடனடி பயண மாதிரிகள்",
    presets_title: "மாணவர்களுக்கான புகழ்பெற்ற சுற்றுலா இடங்கள்",
    presets_desc: "திட்டத்தை உடனே பார்க்க ஏதேனும் கார்டை கிளிக் செய்யவும்.",
    preset_launch: "திட்டத்தை திறக்க",
    preset_total_budget: "மொத்த குழு பட்ஜெட்:",
    preset_per_person: "ஒரு நபருக்கு",

    // Planner
    planner_badge: "பயணத் திட்டமிடுபவர்",
    planner_title: "எங்கே செல்ல திட்டமிடுகிறீர்கள்?",
    planner_desc: "உங்கள் குழு தகவல்களை உள்ளிட்டு பேருந்து, தங்குமிடம் மற்றும் செலவுப் பகிர்வை தானாக உருவாக்குங்கள்.",
    planner_quick_templates: "1-கிளிக் பயண வார்ப்புருக்கள்:",
    field_destination: "இலக்கு (Destination)",
    field_starting_location: "தொடக்க இடம் (Starting Location)",
    field_start_date: "தொடக்க தேதி",
    field_end_date: "முடிவு தேதி",
    field_travelers: "பயணிகள் எண்ணிக்கை",
    field_budget: "மொத்த பட்ஜெட் (₹)",
    field_est_split: "மதிப்பிடப்பட்ட பங்கு:",
    field_travel_style: "பயண முறை தேர்வு:",
    field_interests: "குழு விருப்பங்கள்:",
    btn_generate_trip: "✨ பயணத் திட்டத்தை உருவாக்கு",
    btn_back_explore: "மீண்டும் செல்க",

    // Travel Styles
    style_budget_title: "சிக்கனம் (Budget)",
    style_budget_desc: "ஹோஸ்டல்கள், பேருந்து மற்றும் உள்ளூர் உணவுகள்",
    style_balanced_title: "சமநிலை (Balanced)",
    style_balanced_desc: "ஹோம்ஸ்டே, கலவையான போக்குவரத்து மற்றும் கஃபேக்கள்",
    style_comfort_title: "ஆடம்பரம் (Comfort)",
    style_comfort_desc: "ரிசார்ட், வாடகை கார்கள் மற்றும் உயர்தர உணவகங்கள்",

    // Interests
    interest_beaches: "கடற்கரைகள்",
    interest_food: "உணவு & சுவை",
    interest_adventure: "சாகசங்கள்",
    interest_culture: "கலாச்சாரம்",
    interest_shopping: "ஷாப்பிங்",
    interest_nightlife: "இரவு வாழ்க்கை",
    interest_photography: "புகைப்படம்",

    // Generating
    gen_title_working: "உங்கள் பயணம் திட்டமிடப்படுகிறது...",
    gen_title_ready: "உங்கள் பயணம் தயார் ✨",
    gen_sub_working: "TRIPNEX குழுவுக்கான சிறந்த பயண அட்டவணையை உருவாக்குகிறது",
    gen_step_1: "குழு மற்றும் பயண பாணியை புரிந்துகொள்ளுதல்",
    gen_step_2: "பட்ஜெட் ஒதுக்கீடு மற்றும் சேமிப்பு",
    gen_step_3: "போக்குவரத்து வழிகளை திட்டமிடுதல்",
    gen_step_4: "சிறந்த தங்குமிடம் மற்றும் இடங்களை கண்டறிதல்",
    gen_step_5: "நாள் வாரியான முழு அட்டவணையை உருவாக்குதல்",

    // Dashboard Header
    dash_verified_route: "AI சரிபார்க்கப்பட்ட பாதை",
    dash_edit_trip: "திருத்துக",
    dash_optimize_trip: "✨ மேம்படுத்துக",
    dash_share: "பகிர்",
    dash_copied: "இணைப்பு நகலெடுக்கப்பட்டது!",
    dash_total_budget: "மொத்த பட்ஜெட்",
    dash_per_person: "தலா",
    dash_travelers_count: "பயணிகள்",

    // Day Tabs & Timeline
    dash_day_by_day: "📅 நாள் வாரியான அட்டவணை",
    dash_days_total: "மொத்த நாட்கள்",
    dash_day: "நாள்",
    dash_stops: "இடங்கள்",
    dash_focus: "சிறப்பம்சம்",
    dash_free_entry: "இலவச அனுமதி",
    dash_per_person_tag: "ஒரு நபருக்கு",
    dash_total_group: "குழு மொத்தம்",

    // Right Panels
    panel_map_title: "வரைபட வழிகாட்டி",
    panel_map_sub: "GPS ஒருங்கிணைந்த வழித்தடம்",
    panel_budget_title: "நேரலை பட்ஜெட் இயந்திரம்",
    panel_budget_sub: "நிகழ்நேர செலவு கண்காணிப்பு",
    panel_budget_allocated: "ஒதுக்கப்பட்டது",
    panel_budget_remaining: "மீதமுள்ளது",
    panel_budget_utilized: "பயன்படுத்தப்பட்டது",
    panel_budget_cat_alloc: "பிரிவு வாரியான செலவு",

    panel_split_title: "குழு செலவுப் பகிர்வு",
    panel_split_sub: "சம பங்கு:",
    panel_split_settled: "தீர்க்கப்பட்டது",
    panel_split_receives: "வரவேண்டியது",
    panel_split_owes: "தரவேண்டியது",
    panel_split_suggestions: "1-கிளிக் கணக்கு தீர்வு",
    panel_split_tap_settle: "தீர்க்க தட்டவும்",
    panel_split_settled_btn: "முடிந்தது ✓",

    panel_transit_title: "போக்குவரத்து திட்டம்",
    panel_transit_sub: "பேருந்து, ஆட்டோ மற்றும் பைக்குகள்",
    panel_transit_sync: "குழு ஒத்திசைவு",

    panel_hotel_title: "TRIPNEX தங்குமிடம்",
    panel_hotel_checkin: "செக்-இன்",
    panel_hotel_checkout: "செக்-அவுட்",
    panel_hotel_room_setup: "அறை அமைப்பு:",

    panel_act_title: "சிறந்த செயல்பாடுகள்",
    panel_act_sub: "மாணவர்கள் பரிந்துரைத்தவை",

    panel_health_title: "பயண சுகாதார கண்காணிப்பாளர்",
    panel_health_sub: "நேர முரண்பாடுகளை அறிதல்",
    panel_health_active: "AI இயங்குகிறது",
    panel_health_fix_btn: "தானாக சரிசெய்",
    panel_health_resolved: "சரிசெய்யப்பட்டது",

    // Copilot
    copilot_btn: "✨ பயண Copilot",
    copilot_title: "TRIPNEX Copilot",
    copilot_active: "● AI உதவியாளர் தயார்",
    copilot_placeholder: "இந்தப் பயணம் பற்றி எதையும் கேட்கவும்...",
    prompt_opt_budget: "✨ பட்ஜெட்டை சரிசெய்",
    prompt_running_late: "⏰ எங்களுக்கு தாமதமாகிறது",
    prompt_more_fun: "🎉 கூடுதல் மகிழ்ச்சி சேர்",
    prompt_cheap_transit: "🚌 மலிவான வாகனம் காண்க",
    prompt_food_spots: "🍛 சிறந்த உணவகங்கள்",

    // Optimize Modal
    opt_title: "✨ பயணத்தை மேம்படுத்து",
    opt_subtitle: "நேரலை தகவமைப்பு மறு திட்டமிடல்",
    opt_question: "என்ன மாற்றம் நிகழ்ந்தது?",
    opt_opt_budget_dec: "பட்ஜெட் குறைந்துவிட்டது",
    opt_opt_budget_dec_desc: "செலவை மிச்சப்படுத்த மலிவான தங்குமிடம் மற்றும் வாகனங்கள்.",
    opt_opt_running_late: "எங்களுக்கு தாமதமாகிறது",
    opt_opt_running_late_desc: "நேரத்தை சுருக்கி முக்கிய இடங்களை மட்டும் திட்டமிடுங்கள்.",
    opt_opt_member_drop: "குழுவில் ஒருவர் வரவில்லை",
    opt_opt_member_drop_desc: "அறை மற்றும் வாகன செலவை மீதமுள்ளோருக்கு மறுபகிர்வு செய்.",
    opt_opt_more_acts: "கூடுதல் சாகசம் வேண்டும்",
    opt_opt_more_acts_desc: "அதிரடி மற்றும் சுவாரஸ்யமான செயல்களை சேர்க்க.",
    opt_opt_relaxed: "நிதானமான ஓய்வு பயணம்",
    opt_opt_relaxed_desc: "அவசரமில்லாத அமைதியான பயண அட்டவணை.",
    opt_preview_title: "முன்னோட்டம்",
    opt_btn_cancel: "ரத்து செய்",
    opt_btn_apply: "மாற்றங்களை செயல்படுத்து",

    // Saved trips drawer
    saved_title: "சேமிக்கப்பட்ட பயணங்கள்",
    saved_no_trips: "இன்னும் பயணங்கள் இல்லை.",
    saved_no_trips_sub: "புதிய பயணத்தை உருவாக்கவும்.",
    saved_active: "தற்போது",
    saved_open_btn: "திறக்க",
    saved_clear_btn: "வரலாற்றை நீக்கு",
    saved_close_btn: "மூடு",

    // Footer
    footer_built_for: "© 2026 TRIPNEX. மாணவர் குழு பயண ஹேக்கத்தானுக்காக ❤️ உடன் உருவாக்கப்பட்டது.",
    footer_stack: "FastAPI + React + Vite + பன்மொழி AI என்ஜின்"
  },

  kn: {
    // Nav
    tagline_copilot: "AI ಸಹಾಯಕ",
    nav_explore: "ಅನ್ವೇಷಿಸಿ",
    nav_how_it_works: "ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    nav_my_trips: "ನನ್ನ ಪ್ರವಾಸಗಳು",
    nav_plan_btn: "ಪ್ರವಾಸ ಯೋಜಿಸಿ",
    status_fastapi_live: "FastAPI ಲೈವ್",
    status_demo_mode: "ಡೆಮೊ ಮೋಡ್",

    // Hero
    hero_badge: "AI-ಚಾಲಿತ ಗುಂಪು ಪ್ರವಾಸ ಕೋಪೈಲಟ್",
    hero_title_1: "ನಿಮ್ಮ ಮುಂದಿನ ಪ್ರಯಾಣ,",
    hero_title_2: "ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಯೋಜಿಸಲಾಗಿದೆ.",
    hero_subtitle: "ಮಾರ್ಗಗಳು, ವಾಸ್ತವ್ಯ, ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಗುಂಪು ವೆಚ್ಚಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಯೋಜಿಸಿ. ಸ್ವಯಂಚಾಲಿತ ದಿನವಾರು ಪ್ರವಾಸ ಮತ್ತು ತಲಾ ವೆಚ್ಚ ವಿಭಜನೆ.",
    hero_cta_plan: "✨ ಪ್ರವಾಸ ಯೋಜಿಸಿ",
    hero_cta_how: "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ನೋಡಿ",

    // Product Promise
    promise_plan_title: "1. ಯೋಜನೆ (PLAN)",
    promise_plan_desc: "ಸ್ಮಾರ್ಟ್ ಮಾರ್ಗ ಯೋಜನೆ, ಬಸ್/ರೈಲು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ವಾಸ್ತವ್ಯಗಳು.",
    promise_travel_title: "2. ಪ್ರಯಾಣ (TRAVEL)",
    promise_travel_desc: "ಗುಂಪು ವೇಳಾಪಟ್ಟಿ, ನಿರ್ಗಮನ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಜಿಪಿಎಸ್ ನ್ಯಾವಿಗೇಶನ್.",
    promise_spend_title: "3. ಖರ್ಚು (SPEND)",
    promise_spend_desc: "ಸ್ವಯಂಚಾಲಿತ ತಲಾ ವೆಚ್ಚ ವಿಭಜನೆ ಮತ್ತು 1-ಕ್ಲಿಕ್ ಲೆಕ್ಕಾಚಾರ ಇತ್ಯರ್ಥ.",
    promise_adapt_title: "4. ಹೊಂದಿಕೊಳ್ಳುವಿಕೆ (ADAPT)",
    promise_adapt_desc: "ಬಜೆಟ್ ಬದಲಾದಾಗ ಅಥವಾ ತಡವಾದಾಗ ತಕ್ಷಣದ ಲೈವ್ AI ಮರು ಯೋಜನೆ.",

    // Presets
    presets_badge: "ತ್ವರಿತ ಡೆಮೊ ಪ್ರವಾಸಗಳು",
    presets_title: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜನಪ್ರಿಯ ತಾಣಗಳು",
    presets_desc: "ತಕ್ಷಣದ ವೇಳಾಪಟ್ಟಿ ವೀಕ್ಷಿಸಲು ಕಾರ್ಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    preset_launch: "ಪ್ರವಾಸ ಪ್ರಾರಂಭಿಸಿ",
    preset_total_budget: "ಒಟ್ಟು ಗುಂಪು ಬಜೆಟ್:",
    preset_per_person: "ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ",

    // Planner
    planner_badge: "ಪ್ರವಾಸ ಯೋಜಕ",
    planner_title: "ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?",
    planner_desc: "ನಿಮ್ಮ ಗುಂಪಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ ಮತ್ತು TRIPNEX ಬಸ್, ವಾಸ್ತವ್ಯ ಮತ್ತು ವೆಚ್ಚ ವಿಭಜನೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಿದ್ಧಪಡಿಸುತ್ತದೆ.",
    planner_quick_templates: "1-ಕ್ಲಿಕ್ ಪ್ರವಾಸ ಟೆಂಪ್ಲೇಟ್‌ಗಳು:",
    field_destination: "ತಲುಪುವ ಸ್ಥಳ (Destination)",
    field_starting_location: "ಪ್ರಾರಂಭ ಸ್ಥಳ (Starting Location)",
    field_start_date: "ಪ್ರಾರಂಭ ದಿನಾಂಕ",
    field_end_date: "ಮುಕ್ತಾಯ ದಿನಾಂಕ",
    field_travelers: "ಪ್ರಯಾಣಿಕರ ಸಂಖ್ಯೆ",
    field_budget: "ಒಟ್ಟು ಪ್ರವಾಸ ಬಜೆಟ್ (₹)",
    field_est_split: "ಅಂದಾಜು ಪಾಲು:",
    field_travel_style: "ಪ್ರವಾಸ ಶೈಲಿ:",
    field_interests: "ಆಸಕ್ತಿಗಳು:",
    btn_generate_trip: "✨ ನನ್ನ ಪ್ರವಾಸವನ್ನು ರಚಿಸಿ",
    btn_back_explore: "ಹಿಂದೆ ಹೋಗಿ",

    // Travel Styles
    style_budget_title: "ಮಿತವ್ಯಯ (Budget)",
    style_budget_desc: "ಹಾಸ್ಟೆಲ್‌ಗಳು, ಬಸ್ಸುಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಆಹಾರ",
    style_balanced_title: "ಸಮತೋಲನ (Balanced)",
    style_balanced_desc: "ಹೋಮ್‌ಸ್ಟೇಗಳು ಮತ್ತು ಕೆಫೆಗಳು",
    style_comfort_title: "ಆರಾಮದಾಯಕ (Comfort)",
    style_comfort_desc: "ರೆಸಾರ್ಟ್‌ಗಳು, ಕ್ಯಾಬ್‌ಗಳು ಮತ್ತು ಪ್ರೀಮಿಯಂ ಊಟ",

    // Interests
    interest_beaches: "ಕಡಲತೀರಗಳು",
    interest_food: "ಆಹಾರ",
    interest_adventure: "ಸಾಹಸ",
    interest_culture: "ಸಂಸ್ಕೃತಿ",
    interest_shopping: "ಶಾಪಿಂಗ್",
    interest_nightlife: "ನೈಟ್‌ಲೈಫ್",
    interest_photography: "ಛಾಯಾಗ್ರಹಣ",

    // Generating
    gen_title_working: "ನಿಮ್ಮ ಪ್ರವಾಸವನ್ನು ಯೋಜಿಸಲಾಗುತ್ತಿದೆ...",
    gen_title_ready: "ನಿಮ್ಮ ಪ್ರವಾಸ ಸಿದ್ಧವಾಗಿದೆ ✨",
    gen_sub_working: "TRIPNEX ಎಂಜಿನ್ ಅತ್ಯುತ್ತಮ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತಿದೆ",
    gen_step_1: "ಗುಂಪು ಮತ್ತು ಪ್ರವಾಸ ಶೈಲಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು",
    gen_step_2: "ಬಜೆಟ್ ಹಂಚಿಕೆ ಮತ್ತು ಉಳಿತಾಯ ಯೋಜನೆ",
    gen_step_3: "ಸಾರಿಗೆ ಮಾರ್ಗಗಳ ಯೋಜನೆ",
    gen_step_4: "ಅತ್ಯುತ್ತಮ ವಾಸ್ತವ್ಯ ಮತ್ತು ತಾಣಗಳನ್ನು ಹುಡುಕುವುದು",
    gen_step_5: "ದಿನವಾರು ಗುಂಪು ವೇಳಾಪಟ್ಟಿ ರಚನೆ",

    // Dashboard Header
    dash_verified_route: "AI ಪರಿಶೀಲಿಸಿದ ಮಾರ್ಗ",
    dash_edit_trip: "ತಿದ್ದುಪಡಿ ಮಾಡಿ",
    dash_optimize_trip: "✨ ಉತ್ತಮಗೊಳಿಸಿ",
    dash_share: "ಹಂಚಿಕೊಳ್ಳಿ",
    dash_copied: "ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!",
    dash_total_budget: "ಒಟ್ಟು ಬಜೆಟ್",
    dash_per_person: "ಪ್ರತಿ ವ್ಯಕ್ತಿಗೆ",
    dash_travelers_count: "ಪ್ರಯಾಣಿಕರು",

    // Day Tabs & Timeline
    dash_day_by_day: "📅 ದಿನವಾರು ವೇಳಾಪಟ್ಟಿ",
    dash_days_total: "ಒಟ್ಟು ದಿನಗಳು",
    dash_day: "ದಿನ",
    dash_stops: "ತಾಣಗಳು",
    dash_focus: "ಮುಖ್ಯ ಆಕರ್ಷಣೆ",
    dash_free_entry: "ಉಚಿತ ಪ್ರವೇಶ",
    dash_per_person_tag: "ತಲಾ",
    dash_total_group: "ಗುಂಪು ಒಟ್ಟು",

    // Right Panels
    panel_map_title: "ನಕ್ಷೆ ಮಾರ್ಗಸೂಚಿ",
    panel_map_sub: "ಜಿಪಿಎಸ್ ಸಿಂಕ್ ಮಾರ್ಗ",
    panel_budget_title: "ಲೈವ್ ಬಜೆಟ್ ಎಂಜಿನ್",
    panel_budget_sub: "ನೈಜ-ಸಮಯದ ವೆಚ್ಚ ಟ್ರ್ಯಾಕಿಂಗ್",
    panel_budget_allocated: "ಹಂಚಿಕೆ ಮಾಡಲಾಗಿದೆ",
    panel_budget_remaining: "ಉಳಿದಿರುವ ಮೊತ್ತ",
    panel_budget_utilized: "ಬಳಸಿದ ಬಜೆಟ್",
    panel_budget_cat_alloc: "ವಿಭಾಗವಾರು ಬಜೆಟ್",

    panel_split_title: "ಗುಂಪು ವೆಚ್ಚ ಮತ್ತು ವಿಭಜನೆ",
    panel_split_sub: "ಸಮಾನ ಪಾಲು:",
    panel_split_settled: "ಇತ್ಯರ್ಥವಾಗಿದೆ",
    panel_split_receives: "ಸ್ವೀಕರಿಸಬೇಕಿದೆ",
    panel_split_owes: "ನೀಡಬೇಕಿದೆ",
    panel_split_suggestions: "1-ಕ್ಲಿಕ್ ಇತ್ಯರ್ಥ ಸಲಹೆಗಳು",
    panel_split_tap_settle: "ಇತ್ಯರ್ಥಗೊಳಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
    panel_split_settled_btn: "ಇತ್ಯರ್ಥವಾಯಿತು ✓",

    panel_transit_title: "ಸಾರಿಗೆ ಯೋಜನೆ",
    panel_transit_sub: "ಬಸ್, ಆಟೋ ಮತ್ತು ಸ್ಕೂಟರ್‌ಗಳು",
    panel_transit_sync: "ಗುಂಪು ಸಿಂಕ್",

    panel_hotel_title: "TRIPNEX ವಾಸ್ತವ್ಯ",
    panel_hotel_checkin: "ಚೆಕ್-ಇನ್",
    panel_hotel_checkout: "ಚೆಕ್-ಔಟ್",
    panel_hotel_room_setup: "ಕೋಣೆ ವಿನ್ಯಾಸ:",

    panel_act_title: "ಪ್ರಮುಖ ಚಟುವಟಿಕೆಗಳು",
    panel_act_sub: "ವಿದ್ಯಾರ್ಥಿ ಮೆಚ್ಚುಗೆಯ ತಾಣಗಳು",

    panel_health_title: "ಪ್ರವಾಸ ಆರೋಗ್ಯ & ಅಪಾಯ ಪತ್ತೆ",
    panel_health_sub: "ಸಮಯ ಸಂಘರ್ಷ ತಡೆಗಟ್ಟುವಿಕೆ",
    panel_health_active: "AI ಸಕ್ರಿಯವಾಗಿದೆ",
    panel_health_fix_btn: "ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸರಿಪಡಿಸಿ",
    panel_health_resolved: "ಸರಿಪಡಿಸಲಾಗಿದೆ",

    // Copilot
    copilot_btn: "✨ ಪ್ರವಾಸ ಕೋಪೈಲಟ್",
    copilot_title: "TRIPNEX ಕೋಪೈಲಟ್",
    copilot_active: "● AI ಸಹಾಯಕ ಸಕ್ರಿಯ",
    copilot_placeholder: "ಈ ಪ್ರವಾಸದ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ...",
    prompt_opt_budget: "✨ ಬಜೆಟ್ ಉತ್ತಮಗೊಳಿಸಿ",
    prompt_running_late: "⏰ ನಮಗೆ ತಡವಾಗುತ್ತಿದೆ",
    prompt_more_fun: "🎉 ಇನ್ನಷ್ಟು ಮೋಜು ಸೇರಿಸಿ",
    prompt_cheap_transit: "🚌 ಅಗ್ಗದ ಸಾರಿಗೆ ಹುಡುಕಿ",
    prompt_food_spots: "🍛 ಊಟದ ತಾಣಗಳು",

    // Optimize Modal
    opt_title: "✨ ಪ್ರವಾಸವನ್ನು ಉತ್ತಮಗೊಳಿಸಿ",
    opt_subtitle: "ನೈಜ-ಸಮಯದ ಹೊಂದಾಣಿಕೆಯ ಮರು-ಯೋಜನೆ",
    opt_question: "ಏನು ಬದಲಾಗಿದೆ?",
    opt_opt_budget_dec: "ಬಜೆಟ್ ಕಡಿಮೆಯಾಗಿದೆ",
    opt_opt_budget_dec_desc: "ಖರ್ಚು ಉಳಿಸಲು ಸ್ಮಾರ್ಟ್ ವಾಸ್ತವ್ಯ ಮತ್ತು ಸಾರಿಗೆ ಆಯ್ಕೆಗಳು.",
    opt_opt_running_late: "ನಮಗೆ ತಡವಾಗುತ್ತಿದೆ",
    opt_opt_running_late_desc: "ಸಮಯವನ್ನು ಮರುಹೊಂದಿಸಿ ಮತ್ತು ಅನಗತ್ಯ ವಿಳಂಬ ತಪ್ಪಿಸಿ.",
    opt_opt_member_drop: "ಸ್ನೇಹಿತರೊಬ್ಬರು ಬರುತ್ತಿಲ್ಲ",
    opt_opt_member_drop_desc: "ಉಳಿದ ಪ್ರಯಾಣಿಕರಿಗೆ ಕೋಣೆ ಮತ್ತು ವಾಹನ ವೆಚ್ಚ ಮರುಹಂಚಿಕೆ.",
    opt_opt_more_acts: "ಇನ್ನಷ್ಟು ಸಾಹಸ ಬೇಕಿದೆ",
    opt_opt_more_acts_desc: "ಖಾಲಿ ಸಮಯದಲ್ಲಿ ರೋಮಾಂಚಕಾರಿ ಚಟುವಟಿಕೆ ಸೇರಿಸಿ.",
    opt_opt_relaxed: "ಆರಾಮದಾಯಕ ಮತ್ತು ಪ್ರಶಾಂತ ಪ್ರವಾಸ",
    opt_opt_relaxed_desc: "ನಿಧಾನಗತಿಯ ಶಾಂತಿಯುತ ವೇಳಾಪಟ್ಟಿ.",
    opt_preview_title: "ಮುನ್ನೋಟ",
    opt_btn_cancel: "ರದ್ದುಮಾಡಿ",
    opt_btn_apply: "ಬದಲಾವಣೆ ಅನ್ವಯಿಸಿ",

    // Saved trips drawer
    saved_title: "ಉಳಿಸಿದ ಪ್ರವಾಸಗಳು",
    saved_no_trips: "ಯಾವುದೇ ಪ್ರವಾಸಗಳಿಲ್ಲ.",
    saved_no_trips_sub: "ಹೊಸ ಪ್ರವಾಸವನ್ನು ರಚಿಸಿ.",
    saved_active: "ಪ್ರಸ್ತುತ",
    saved_open_btn: "ತೆರೆಯಿರಿ",
    saved_clear_btn: "ಇತಿಹಾಸ ಅಳಿಸಿ",
    saved_close_btn: "ಮುಚ್ಚಿ",

    // Footer
    footer_built_for: "© 2026 TRIPNEX. ವಿದ್ಯಾರ್ಥಿ ಸಮೂಹ ಪ್ರವಾಸ ಹ್ಯಾಕಥಾನ್‌ಗಾಗಿ ❤️ ನೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
    footer_stack: "FastAPI + React + Vite + ಬಹುಭಾಷಾ AI ಎಂಜಿನ್"
  },

  te: {
    // Nav
    tagline_copilot: "AI కోపైలట్",
    nav_explore: "అన్వేషించండి",
    nav_how_it_works: "ఇది ఎలా పనిచేస్తుంది",
    nav_my_trips: "నా ట్రిప్పులు",
    nav_plan_btn: "ట్రిప్ ప్లాన్ చేయండి",
    status_fastapi_live: "FastAPI లైవ్",
    status_demo_mode: "డెమో మోడ్",

    // Hero
    hero_badge: "AI-ఆధారిత గ్రూప్ ట్రావెల్ కోపైలట్",
    hero_title_1: "మీ తదుపరి ప్రయాణం,",
    hero_title_2: "తెలివిగా ప్లాన్ చేయబడింది.",
    hero_subtitle: "మార్గాలు, బస, కార్యకలాపాలు మరియు గ్రూప్ ఖర్చులను ఒకే చోట ప్లాన్ చేయండి. రోజువారీ ప్రయాణ ప్రణాళిక మరియు తలసరి ఖర్చు విభజన.",
    hero_cta_plan: "✨ ట్రిప్ ప్లాన్ చేయండి",
    hero_cta_how: "ఎలా పనిచేస్తుందో చూడండి",

    // Product Promise
    promise_plan_title: "1. ప్లాన్ (PLAN)",
    promise_plan_desc: "స్మార్ట్ రూట్ ప్లానింగ్, బస్సు/రైలు మరియు ధృవీకరించబడిన విద్యార్థి స్టేలు.",
    promise_travel_title: "2. ప్రయాణం (TRAVEL)",
    promise_travel_desc: "గ్రూప్ టైమ్‌లైన్, బయలుదేరే సమయాలు మరియు లైవ్ జీపీఎస్ నావిగేషన్.",
    promise_spend_title: "3. ఖర్చు (SPEND)",
    promise_spend_desc: "వ్యక్తిగత ఖర్చుల ఆటోమేటిక్ విభజన మరియు 1-క్లిక్ క్లియరెన్స్ సూచనలు.",
    promise_adapt_title: "4. అనుకూలత (ADAPT)",
    promise_adapt_desc: "బడ్జెట్ మారినప్పుడు లేదా ఆలస్యమైనప్పుడు తక్షణ లైవ్ AI రీ-ప్లానింగ్.",

    // Presets
    presets_badge: "తక్షణ డెమో ట్రిప్పులు",
    presets_title: "విద్యార్థులకు ప్రసిద్ధ గమ్యస్థానాలు",
    presets_desc: "తక్షణ ప్రణాళిక చూడటానికి ఏదైనా కార్డ్ క్లిక్ చేయండి.",
    preset_launch: "ట్రిప్ ప్రారంభించండి",
    preset_total_budget: "మొత్తం గ్రూప్ బడ్జెట్:",
    preset_per_person: "ఒక్కొక్కరికి",

    // Planner
    planner_badge: "ఇంటరాక్టివ్ ట్రిప్ ప్లానర్",
    planner_title: "మీరు ఎక్కడికి వెళ్తున్నారు?",
    planner_desc: "మీ గ్రూప్ వివరాలను నమోదు చేయండి మరియు TRIPNEX బస్సు, స్టే మరియు ఖర్చు విభజనను రూపొందిస్తుంది.",
    planner_quick_templates: "1-క్లిక్ ట్రిప్ టెంప్లేట్లు:",
    field_destination: "గమ్యస్థానం (Destination)",
    field_starting_location: "ప్రారంభ స్థానం (Starting Location)",
    field_start_date: "ప్రారంభ తేదీ",
    field_end_date: "ముగింపు తేదీ",
    field_travelers: "ప్రయాణికుల సంఖ్య",
    field_budget: "మొత్తం బడ్జెట్ (₹)",
    field_est_split: "అంచనా వాటా:",
    field_travel_style: "ప్రయాణ శైలి:",
    field_interests: "ఆసక్తులు:",
    btn_generate_trip: "✨ నా ట్రిప్ రూపొందించండి",
    btn_back_explore: "వెనుకకు వెళ్లండి",

    // Travel Styles
    style_budget_title: "బడ్జెట్ (Budget)",
    style_budget_desc: "హాస్టళ్లు, బస్సులు మరియు స్థానిక ఆహారం",
    style_balanced_title: "సమతుల్యత (Balanced)",
    style_balanced_desc: "హోమ్‌స్టేలు మరియు కేఫ్‌లు",
    style_comfort_title: "సౌకర్యం (Comfort)",
    style_comfort_desc: "రిసార్టులు, క్యాబ్‌లు మరియు ప్రీమియం భోజనం",

    // Interests
    interest_beaches: "బీచ్‌లు",
    interest_food: "ఆహారం",
    interest_adventure: "సాహసం",
    interest_culture: "సంస్కృతి",
    interest_shopping: "షాపింగ్",
    interest_nightlife: "నైట్‌లైఫ్",
    interest_photography: "ఫోటోగ్రఫీ",

    // Generating
    gen_title_working: "మీ ప్రయాణం ప్లాన్ చేయబడుతోంది...",
    gen_title_ready: "మీ ట్రిప్ సిద్ధంగా ఉంది ✨",
    gen_sub_working: "TRIPNEX ఇంజిన్ మీ కోసం ఉత్తమ షెడ్యూల్‌ను సిద్ధం చేస్తోంది",
    gen_step_1: "గ్రూప్ మరియు ప్రయాణ శైలిని అర్థం చేసుకోవడం",
    gen_step_2: "బడ్జెట్ కేటాయింపు మరియు ఆదా ప్రణాళిక",
    gen_step_3: "రవాణా మార్గాల ప్రణాళిక",
    gen_step_4: "ఉత్తమ స్టే మరియు సందర్శనా స్థలాలను కనుగొనడం",
    gen_step_5: "రోజువారీ గ్రూప్ ప్రణాళిక రూపకల్పన",

    // Dashboard Header
    dash_verified_route: "AI ధృవీకరించిన రూట్",
    dash_edit_trip: "సవరించండి",
    dash_optimize_trip: "✨ ఆప్టిమైజ్ చేయండి",
    dash_share: "షేర్ చేయండి",
    dash_copied: "లింక్ కాపీ చేయబడింది!",
    dash_total_budget: "మొత్తం బడ్జెట్",
    dash_per_person: "ఒక్కొక్కరికి",
    dash_travelers_count: "ప్రయాణికులు",

    // Day Tabs & Timeline
    dash_day_by_day: "📅 రోజువారీ ప్రయాణ ప్రణాళిక",
    dash_days_total: "మొత్తం రోజులు",
    dash_day: "రోజు",
    dash_stops: "స్టాప్‌లు",
    dash_focus: "ప్రధాన ఆకర్షణ",
    dash_free_entry: "ఉచిత ప్రవేశం",
    dash_per_person_tag: "ఒక్కొక్కరికి",
    dash_total_group: "గ్రూప్ మొత్తం",

    // Right Panels
    panel_map_title: "ఇంటరాక్టివ్ రూట్ మ్యాప్",
    panel_map_sub: "జీపీఎస్ సింక్ మార్గం",
    panel_budget_title: "లైవ్ బడ్జెట్ ఇంజిన్",
    panel_budget_sub: "నిజ-సమయ ఖర్చుల ట్రాకింగ్",
    panel_budget_allocated: "కేటాయించినది",
    panel_budget_remaining: "మిగిలిన మొత్తం",
    panel_budget_utilized: "ఉపయోగించిన బడ్జెట్",
    panel_budget_cat_alloc: "కేటగిరీ వారీగా బడ్జెట్",

    panel_split_title: "గ్రూప్ ఖర్చులు మరియు విభజన",
    panel_split_sub: "సమాన వాటా:",
    panel_split_settled: "క్లియర్ అయింది",
    panel_split_receives: "రావాల్సింది",
    panel_split_owes: "ఇవ్వాల్సింది",
    panel_split_suggestions: "1-క్లిక్ సెటిల్మెంట్ సూచనలు",
    panel_split_tap_settle: "సెటిల్ చేయడానికి నొక్కండి",
    panel_split_settled_btn: "పూర్తయింది ✓",

    panel_transit_title: "రవాణా ప్రణాళిక",
    panel_transit_sub: "బస్సు, ఆటో మరియు స్కూటర్లు",
    panel_transit_sync: "గ్రూప్ సింక్",

    panel_hotel_title: "TRIPNEX బస",
    panel_hotel_checkin: "చెక్-ఇన్",
    panel_hotel_checkout: "చెక్-అవుట్",
    panel_hotel_room_setup: "రూమ్ సెటప్:",

    panel_act_title: "టాప్ కార్యకలాపాలు",
    panel_act_sub: "విద్యార్థుల సిఫార్సులు",

    panel_health_title: "ట్రిప్ హెల్త్ & రిస్క్ డిటెక్టర్",
    panel_health_sub: "సమయ సంఘర్షణల గుర్తింపు",
    panel_health_active: "AI యాక్టివ్",
    panel_health_fix_btn: "స్వయంచాలకంగా సరిచేయండి",
    panel_health_resolved: "పరిష్కరించబడింది",

    // Copilot
    copilot_btn: "✨ ట్రిప్ కోపైలట్",
    copilot_title: "TRIPNEX కోపైలట్",
    copilot_active: "● AI అసిస్టెంట్ యాక్టివ్",
    copilot_placeholder: "ఈ ట్రిప్ గురించి ఏదైనా అడగండి...",
    prompt_opt_budget: "✨ బడ్జెట్ ఆప్టిమైజ్ చేయండి",
    prompt_running_late: "⏰ మాకు ఆలస్యం అవుతోంది",
    prompt_more_fun: "🎉 మరింత సరదా జోడించండి",
    prompt_cheap_transit: "🚌 చౌకైన రవాణా కనుగొనండి",
    prompt_food_spots: "🍛 మంచి భోజన స్థలాలు",

    // Optimize Modal
    opt_title: "✨ నా ట్రిప్ ఆప్టిమైజ్ చేయండి",
    opt_subtitle: "నిజ-సమయ రీ-ప్లానింగ్",
    opt_question: "ఏమి మారింది?",
    opt_opt_budget_dec: "బడ్జెట్ తగ్గింది",
    opt_opt_budget_dec_desc: "ఖర్చు తగ్గించడానికి స్మార్ట్ బస మరియు రవాణా ప్రత్యామ్నాయాలు.",
    opt_opt_running_late: "మాకు ఆలస్యం అవుతోంది",
    opt_opt_running_late_desc: "సమయాన్ని సర్దుబాటు చేసి అనవసర జాప్యాన్ని నివారించండి.",
    opt_opt_member_drop: "గ్రూప్‌లో ఒకరు రాలేకపోయారు",
    opt_opt_member_drop_desc: "మిగిలిన ప్రయాణికులకు గది మరియు వాహన ఖర్చులను తిరిగి లెక్కించండి.",
    opt_opt_more_acts: "మరిన్ని సాహసాలు కావాలి",
    opt_opt_more_acts_desc: "ఖాళీ సమయంలో ఉత్తేజకరమైన కార్యకలాపాలను జోడించండి.",
    opt_opt_relaxed: "ప్రశాంతమైన రిలాక్స్డ్ ట్రిప్",
    opt_opt_relaxed_desc: "విశ్రాంతినిచ్చే సౌకర్యవంతమైన షెడ్యూల్.",
    opt_preview_title: "మునుజూపు",
    opt_btn_cancel: "రద్దు చేయండి",
    opt_btn_apply: "మార్పులను వర్తింపజేయండి",

    // Saved trips drawer
    saved_title: "సేవ్ చేసిన ట్రిప్పులు",
    saved_no_trips: "ఇంకా ట్రిప్పులు లేవు.",
    saved_no_trips_sub: "కొత్త ట్రిప్ రూపొందించండి.",
    saved_active: "ప్రస్తుతం",
    saved_open_btn: "తెరవండి",
    saved_clear_btn: "చరిత్రను తొలగించు",
    saved_close_btn: "మూసివేయి",

    // Footer
    footer_built_for: "© 2026 TRIPNEX. విద్యార్థి బృంద ప్రయాణాల హ్యాకథాన్ కోసం ❤️ తో రూపొందించబడింది.",
    footer_stack: "FastAPI + React + Vite + బహుభాషా AI ఇంజిన్"
  },

  fr: {
    // Nav
    tagline_copilot: "Copilote IA",
    nav_explore: "Explorer",
    nav_how_it_works: "Comment ça marche",
    nav_my_trips: "Mes Voyages",
    nav_plan_btn: "Planifier mon voyage",
    status_fastapi_live: "FastAPI En Ligne",
    status_demo_mode: "Mode Démo",

    // Hero
    hero_badge: "COPILOTE DE VOYAGE DE GROUPE IA",
    hero_title_1: "Votre prochain voyage,",
    hero_title_2: "planifié intelligemment.",
    hero_subtitle: "Planifiez itinéraires, séjours, activités et dépenses de groupe en un seul endroit. Itinéraires jour par jour avec partage des coûts instantané et optimisation adaptative.",
    hero_cta_plan: "✨ Planifier mon voyage",
    hero_cta_how: "Voir le fonctionnement",

    // Product Promise
    promise_plan_title: "1. PLANIFIER (PLAN)",
    promise_plan_desc: "Itinéraires optimisés, transports collectifs, hébergements vérifiés et activités quotidiennes.",
    promise_travel_title: "2. VOYAGER (TRAVEL)",
    promise_travel_desc: "Chronologie de groupe en direct, alertes d'enregistrement et guidage GPS.",
    promise_spend_title: "3. DÉPENSER (SPEND)",
    promise_spend_desc: "Répartition automatique des frais par personne et suggestions de remboursement en 1 clic.",
    promise_adapt_title: "4. ADAPTER (ADAPT)",
    promise_adapt_desc: "Ré-optimisation IA en direct en cas de changement de budget, retard ou désistement.",

    // Presets
    presets_badge: "Modèles Démo Instantanés",
    presets_title: "Escapades Étudiantes Populaires",
    presets_desc: "Cliquez sur une carte pour inspecter immédiatement un itinéraire complet.",
    preset_launch: "Lancer l'itinéraire",
    preset_total_budget: "Budget Total du Groupe :",
    preset_per_person: "Par Personne",

    // Planner
    planner_badge: "Planificateur Interactif",
    planner_title: "Où partez-vous ?",
    planner_desc: "Indiquez les détails de votre groupe et laissez TRIPNEX organiser transports, hôtels, calendrier et partage des frais.",
    planner_quick_templates: "Modèles d'itinéraires en 1 clic :",
    field_destination: "Destination",
    field_starting_location: "Ville de départ",
    field_start_date: "Date de début",
    field_end_date: "Date de fin",
    field_travelers: "Nombre de voyageurs",
    field_budget: "Budget Total (₹)",
    field_est_split: "Part estimée :",
    field_travel_style: "Style de voyage préféré :",
    field_interests: "Centres d'intérêt du groupe :",
    btn_generate_trip: "✨ Générer mon voyage",
    btn_back_explore: "Retour à l'accueil",

    // Travel Styles
    style_budget_title: "Économique (Budget)",
    style_budget_desc: "Auberges, transports en commun et street food",
    style_balanced_title: "Équilibré (Balanced)",
    style_balanced_desc: "Maisons d'hôtes, transports mixtes et cafés",
    style_comfort_title: "Confort (Comfort)",
    style_comfort_desc: "Villas/resorts, taxis et gastronomie",

    // Interests
    interest_beaches: "Plages",
    interest_food: "Gastronomie",
    interest_adventure: "Aventure",
    interest_culture: "Culture & Histoire",
    interest_shopping: "Shopping",
    interest_nightlife: "Vie nocturne",
    interest_photography: "Photographie",

    // Generating
    gen_title_working: "Planification de votre voyage en cours...",
    gen_title_ready: "Votre voyage est prêt ✨",
    gen_sub_working: "Le moteur TRIPNEX élabore le meilleur itinéraire étudiant",
    gen_step_1: "Analyse de votre groupe et préférences",
    gen_step_2: "Optimisation de la répartition du budget",
    gen_step_3: "Planification des trajets et correspondances",
    gen_step_4: "Sélection des meilleurs séjours et activités",
    gen_step_5: "Création de votre chronologie jour par jour",

    // Dashboard Header
    dash_verified_route: "Itinéraire Vérifié par IA",
    dash_edit_trip: "Modifier",
    dash_optimize_trip: "✨ Optimiser",
    dash_share: "Partager",
    dash_copied: "Lien copié !",
    dash_total_budget: "Budget Total",
    dash_per_person: "Par Personne",
    dash_travelers_count: "voyageurs",

    // Day Tabs & Timeline
    dash_day_by_day: "📅 Itinéraire Jour par Jour",
    dash_days_total: "Jours au total",
    dash_day: "JOUR",
    dash_stops: "étapes",
    dash_focus: "OBJECTIF",
    dash_free_entry: "Entrée Gratuite",
    dash_per_person_tag: "par personne",
    dash_total_group: "Total Groupe",

    // Right Panels
    panel_map_title: "Carte de Route Interactive",
    panel_map_sub: "Points de passage synchronisés GPS",
    panel_budget_title: "Moteur de Budget en Direct",
    panel_budget_sub: "Suivi des dépenses en temps réel",
    panel_budget_allocated: "Alloué",
    panel_budget_remaining: "Restant",
    panel_budget_utilized: "Budget Utilisé",
    panel_budget_cat_alloc: "Répartition par Catégorie",

    panel_split_title: "Moteur de Dépenses de Groupe",
    panel_split_sub: "Part équitable :",
    panel_split_settled: "Réglé",
    panel_split_receives: "Reçoit",
    panel_split_owes: "Doit",
    panel_split_suggestions: "Suggestions de remboursement en 1 clic",
    panel_split_tap_settle: "Cliquer pour solder",
    panel_split_settled_btn: "Saldé ✓",

    panel_transit_title: "Plan de Transport",
    panel_transit_sub: "Bus, rickshaws et scooters coordonnés",
    panel_transit_sync: "Synchronisé",

    panel_hotel_title: "Séjour Vérifié TRIPNEX",
    panel_hotel_checkin: "Arrivée",
    panel_hotel_checkout: "Départ",
    panel_hotel_room_setup: "Configuration :",

    panel_act_title: "Activités Recommandées",
    panel_act_sub: "Coups de cœur étudiants",

    panel_health_title: "Santé du Voyage & Alertes",
    panel_health_sub: "Détection proactive des conflits",
    panel_health_active: "IA Active",
    panel_health_fix_btn: "Corriger automatiquement",
    panel_health_resolved: "Résolu & Optimisé",

    // Copilot
    copilot_btn: "✨ Copilote de Voyage",
    copilot_title: "TRIPNEX Copilote",
    copilot_active: "● Assistant IA de Groupe Actif",
    copilot_placeholder: "Posez une question sur ce voyage...",
    prompt_opt_budget: "✨ Optimiser mon budget",
    prompt_running_late: "⏰ Nous sommes en retard",
    prompt_more_fun: "🎉 Rendre le voyage plus fun",
    prompt_cheap_transit: "🚌 Trouver transport moins cher",
    prompt_food_spots: "🍛 Bonnes adresses restos",

    // Optimize Modal
    opt_title: "✨ Optimiser Mon Voyage",
    opt_subtitle: "Fonctionnalité Clé — Re-planification Adaptative",
    opt_question: "Qu'est-ce qui a changé ?",
    opt_opt_budget_dec: "Le budget a diminué",
    opt_opt_budget_dec_desc: "Alternatives économiques pour les transports et séjours sans rien perdre en plaisir.",
    opt_opt_running_late: "Nous sommes en retard",
    opt_opt_running_late_desc: "Compresser le planning et supprimer les temps morts.",
    opt_opt_member_drop: "Un ami s'est désisté",
    opt_opt_member_drop_desc: "Recalculer les chambres et véhicules pour les membres restants.",
    opt_opt_more_acts: "Nous voulons plus d'activités",
    opt_opt_more_acts_desc: "Remplir les moments libres avec des expériences fortes.",
    opt_opt_relaxed: "Nous voulons un voyage détente",
    opt_opt_relaxed_desc: "Ralentir le rythme et prolonger les pauses cafés.",
    opt_preview_title: "Aperçu de l'Optimisation",
    opt_btn_cancel: "Annuler",
    opt_btn_apply: "Appliquer l'Optimisation",

    // Saved trips drawer
    saved_title: "Mes Voyages Sauvegardés",
    saved_no_trips: "Aucun voyage enregistré.",
    saved_no_trips_sub: "Créez un nouveau voyage pour le retrouver ici.",
    saved_active: "Actif",
    saved_open_btn: "Ouvrir",
    saved_clear_btn: "Effacer l'historique",
    saved_close_btn: "Fermer",

    // Footer
    footer_built_for: "© 2026 TRIPNEX. Créé avec ❤️ pour le Hackathon de Voyage Étudiant.",
    footer_stack: "FastAPI + React + Vite + Moteur Copilote Multilingue"
  }
};
