# 🚀 TRIPNEX — AI-Powered Group Travel Command Center

> **PLAN → TRAVEL → SPEND → ADAPT**
>
> Built for the Group Travel Hackathon. Elevated into an intelligent, highly visual AI travel command center combining **Airbnb + Notion + Google Maps + Modern AI Dashboard**.

---

## 🌟 Key Features & Add-Ons

### 1. 🎛️ TRIPNEX Command Dashboard (`Dashboard.jsx`)
- **Hero Greeting**: *"GOOD MORNING 👋 — Where are we going next?"* with live destination search.
- **Your Next Adventure**: Cinematic spotlight card with dates, duration, friends count, estimated budget, and 1-click launch.
- **Your Trips Portfolio**: Visual photo cards for Bali, Tokyo, Paris, Switzerland, Iceland, Dubai, Pondicherry, Goa, and Manali.
- **Tripnex Intelligence & Live Budget**: Real-time spending progress gauge and verified AI insights.
- **Quick Actions**: `+ Plan a Trip`, `Explore Places`, `📸 Memories`, `🚨 Safety Mode`.

### 2. 🎨 6 Atmospheric Themes System (`ThemeContext.jsx` & `ThemeSwitcher.jsx`)
- **☀️ Light**: Warm luxury cream (`#FAF9F6`) + Deep Navy (`#071A3D`).
- **🌙 Dark**: Cinematic deep charcoal (`#090E17`, `#131C2E`) with soft neon glow.
- **🌅 Sunset**: Warm peach, terracotta, and golden hour tones.
- **🌊 Ocean**: Cool island azure, deep teal, and seafoam accents.
- **🌿 Nature**: Serene emerald, pine green, and earth tones.
- **⚙️ Auto**: Dynamically follows your operating system appearance preference (`prefers-color-scheme`).
- *Persisted across page refreshes via `localStorage` with smooth animated atmospheric transitions.*

### 3. 📜 Immersive 10-Section Long-Form Travel Story (`Home.jsx`)
1. **Hero**: *"YOUR JOURNEY STARTS HERE. Plan smarter. Travel better. Remember everything."*
2. **Explore The World**: Horizontal destination carousel with drag/swipe and photo zoom on hover.
3. **AI Trip Architect**: Visual interactive transformation (*"Your Idea ➔ TRIPNEX AI ➔ Your Perfect Plan"*).
4. **Smart Itinerary**: Day-wise timeline preview with progressive reveal.
5. **TRIPNEX Intelligence**: 4 AI insight cards (Budget, Weather, Route, Pacing).
6. **Budget Heatmap**: Live budget status (🟢 SAFE / 🟡 EXPENSIVE / 🔴 OVER) & category breakdown bars.
7. **Interactive Map**: Route waypoints & GPS synchronization preview.
8. **Safety Mode**: Emergency command center with SOS beacon & hospital routing.
9. **Trip Memory**: Travel journal & photo timeline.
10. **Final Cinematic CTA**: *"WHERE WILL YOU GO NEXT? [ PLAN MY NEXT TRIP ✈️ ]"*

### 4. 🧭 Scroll-Adaptive Sticky Navbar (`Navbar.jsx`)
- Shrinks slightly on scroll with dynamic backdrop blur and elevated shadow.
- Instant navigation: `Explore`, `Dashboard`, `My Trips`, `Memories`, `Theme Switcher`, `Language Selector`, and `+ Plan Trip`.
- Responsive mobile drawer menu.

### 5. ⏱️ Live In-Trip Progress HUD (`LiveTripProgress.jsx`)
- In-trip completion tracker: *"BALI — DAY 2 • 68% COMPLETE • 9 / 17 places visited"*.
- Active stop indicator (`✓ Breakfast → ✓ Waterfall → ➔ Beach (CURRENT) → ○ Sunset`).

---

## ⚡ Architecture & Tech Stack

```
TRIPNEX
├── Frontend: React 19 + Vite 8 + Lucide Icons + Pure Modular CSS
├── Themes:   Light | Dark | Sunset | Ocean | Nature | Auto (CSS Variables)
├── Backend:  FastAPI + SQLAlchemy + SQLite (Uvicorn on Port 8000)
├── AI Engine: Deterministic Intelligence + Multi-lingual Copilot Engine
└── Storage:  Local SQLite Database + Browser localStorage Sync
```

---

## 🚀 Quick Launch

### 1. Backend (FastAPI)
```bash
cd backend
.\venv\Scripts\python.exe -m uvicorn main:app --host 127.0.0.1 --port 8000
```
API runs on: **http://127.0.0.1:8000** *(Health: `http://127.0.0.1:8000/health`)*

### 2. Frontend (React + Vite)
```bash
cd frontend
npm run dev -- --host
```
Web App runs on: **http://localhost:5173**

---

© 2026 TRIPNEX. Built with ❤️ for Student Group Travel Hackathon.