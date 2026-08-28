from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import json

from database import engine, get_db
from schemas import TripCreate, TripResponse


# Create database tables
models.Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="TRIPNEX API",
    description="AI-powered group travel planning backend",
    version="1.0.0"
)


# Allow React frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to TRIPNEX 🚀",
        "status": "Backend is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/trips", response_model=TripResponse)
def create_trip(
    trip: TripCreate,
    db: Session = Depends(get_db)
):

    new_trip = models.Trip(
        destination=trip.destination,
        start_date=trip.start_date,
        end_date=trip.end_date,
        people=trip.people,
        budget=trip.budget
    )

    db.add(new_trip)
    db.commit()
    db.refresh(new_trip)

    return new_trip


@app.get("/trips")
def get_trips(db: Session = Depends(get_db)):

    trips = db.query(models.Trip).all()

    return trips


@app.get("/trips/{trip_id}")
def get_trip(
    trip_id: int,
    db: Session = Depends(get_db)
):

    trip = db.query(models.Trip).filter(
        models.Trip.id == trip_id
    ).first()

    if not trip:
        return {
            "error": "Trip not found"
        }

    return trip


@app.post("/trips/{trip_id}/generate")
def generate_itinerary(
    trip_id: int,
    db: Session = Depends(get_db)
):

    trip = db.query(models.Trip).filter(
        models.Trip.id == trip_id
    ).first()

    if not trip:
        return {
            "error": "Trip not found"
        }

    per_person = trip.budget / trip.people

    itinerary = {
        "destination": trip.destination,

        "days": [
            {
                "day": 1,
                "title": "Arrival & Exploration",
                "activities": [
                    "Travel to destination",
                    "Hotel check-in",
                    "Lunch",
                    "Local sightseeing",
                    "Dinner"
                ]
            },
            {
                "day": 2,
                "title": "Explore & Experience",
                "activities": [
                    "Breakfast",
                    "Main attraction",
                    "Lunch",
                    "Fun activity",
                    "Dinner"
                ]
            },
            {
                "day": 3,
                "title": "Final Day",
                "activities": [
                    "Breakfast",
                    "Shopping",
                    "Hotel checkout",
                    "Return journey"
                ]
            }
        ],

        "budget": {
            "total": trip.budget,
            "people": trip.people,
            "per_person": round(per_person, 2)
        }
    }

    trip.itinerary = json.dumps(itinerary)

    db.commit()
    db.refresh(trip)

    return itinerary