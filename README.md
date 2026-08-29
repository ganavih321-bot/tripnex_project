# 🚀 TRIPNEX — AI-Powered Group Travel Command Center

> **PLAN → TRAVEL → SPEND → ADAPT**
>
> Built for the Group Travel Hackathon. Upgraded into an intelligent, highly visual AI travel command center inspired by **Airbnb + Notion + Google Maps + Modern AI Dashboard**.

---

## 🌟 Key Upgrades & Highlights

### 1. 🎨 Premium Visual Design System
- **Palette**: Warm cream / luxury off-white (`#FAF9F6`) with deep luxury navy text (`#071A3D`, `#0B192C`).
- **Glassmorphic Cards**: Soft frosted cards (`rgba(255, 255, 255, 0.88)` + backdrop blur + subtle borders).
- **Large Rounded Cards**: Modern `20px` to `28px` corner radiuses with refined elevation shadows.
- **Typography & Micro-interactions**: Smooth card hover lifts, subtle photo zoom, animated progress bars, and zero clutter.

### 2. 📸 Curated Destination Photography
- High-resolution, destination-specific photography library for **Pondicherry**, **Goa**, **Manali**, **Wayanad**, **Bali**, **Jaipur**, and custom getaways.
- Large cinematic photography covers on destination cards and headers with `object-fit: cover` and legible gradient overlays.

### 3. 📊 Dynamic Budget Heatmap
- Live status indicator:
  - 🟢 **SAFE** (≤ 80% utilized)
  - 🟡 **GETTING EXPENSIVE** (81% – 95% utilized)
  - 🔴 **OVER BUDGET** (> 95% utilized)
- Animated spending progress gauge (`₹15,700 / ₹20,000 — 78% UTILIZED`).
- Visual category breakdown bars for **Accommodation**, **Transport**, **Food & Dining**, **Activities & Fun**, and **Safety Buffer**.

### 4. 🧠 TRIPNEX Intelligence AI Panel
- **💡 Budget Insight**: Stay vs transit cost analysis & actionable group savings.
- **🌦️ Weather & Climate Insight**: Destination temperatures, optimal outdoor windows, and weather-aware scheduling.
- **🚗 Route Efficiency Insight**: Walking clusters and transit grouping to eliminate unnecessary travel overhead.
- **⏱️ Schedule Pacing**: Balanced pacing with rest buffer windows.

### 5. 🛡️ Emergency & Safety Mode
- Dedicated **Safety Mode** interface accessible from top header and navigation:
  - 🚨 **"I'M IN TROUBLE" SOS Button** with 2-step confirmation modal to prevent accidental triggers.
  - National Emergency Hotlines (Police 112/100, Ambulance 108, Tourist Helpline 1363, Women Safety 1091).
  - Nearest Verified 24/7 Hospital (with distance, address, phone hotline, and Google Maps GPS navigation).
  - Local Police Station contacts & direct routing.
  - One-click **Share Live GPS Location** and **Share Trip with Parents / Emergency Contacts**.

### 6. 📸 Trip Memory & Travel Journal
- Cinematic Trip Memory header:
  - *"PONDICHERRY '26 • 3 DAYS • 5 FRIENDS • 12 PLACES VISITED • ₹15,700 SPENT — 'Some journeys deserve to be remembered.'"*
- **Photo Timeline by Day** (Day 1, Day 2, Day 3) in a clean masonry/grid layout.
- **Upload Memory Photo**: Add photos, custom captions, photographer credits, and day associations.
- **Fullscreen Lightbox Viewer**: Next/Prev gallery browsing with full captions.
- Persisted locally in `localStorage`.

### 7. 👥 Interactive Group Members & Roster
- Clickable member count (`5 travelers`) displaying all friends present (*You, Rahul, Ananya, Priya, Arjun*), roles, and attendance status (*● Present in Trip*).
- Inline name editing, friend additions, and dynamic equal-split recalculation.

### 8. 🌐 Full Multi-Language Localization
- Dynamic language switcher supporting **English, Hindi (हिंदी), Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Telugu (తెలుగు), and French (Français)**.

---

## ⚡ Architecture & Tech Stack

```
TRIPNEX
├── Frontend: React 19 + Vite 8 + Lucide Icons + Pure Modular CSS
├── Backend:  FastAPI + SQLAlchemy + SQLite (Uvicorn on Port 8000)
├── AI Engine: Grounded Deterministic Intelligence + Multi-lingual Copilot Engine
└── Storage:  Local SQLite Database + Browser localStorage Sync
```

---

## 🚀 Quick Launch

### 1. Backend (FastAPI)
```bash
cd backend
.\venv\Scripts\python.exe -m uvicorn main:app --host 127.0.0.1 --port 8000
```
API runs on: **http://127.0.0.1:8000** (Health Check: `http://127.0.0.1:8000/health`)

### 2. Frontend (React + Vite)
```bash
cd frontend
npm run dev -- --host
```
Web App runs on: **http://localhost:5173**

---

© 2026 TRIPNEX. Built for the Group Travel Hackathon.