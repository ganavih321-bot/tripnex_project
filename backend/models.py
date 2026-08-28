from sqlalchemy import Column, Integer, String, Float, Text
from database import Base


class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)

    destination = Column(String, nullable=False)

    start_date = Column(String, nullable=False)
    end_date = Column(String, nullable=False)

    people = Column(Integer, nullable=False)

    budget = Column(Float, nullable=False)

    itinerary = Column(Text, nullable=True)