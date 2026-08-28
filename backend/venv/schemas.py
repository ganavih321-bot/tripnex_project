from pydantic import BaseModel, Field


class TripCreate(BaseModel):
    destination: str = Field(
        default="Pondicherry",
        examples=["Pondicherry"]
    )

    start_date: str = Field(
        default="2026-09-12",
        examples=["2026-09-12"]
    )

    end_date: str = Field(
        default="2026-09-14",
        examples=["2026-09-14"]
    )

    people: int = Field(
        default=5,
        examples=[5]
    )

    budget: float = Field(
        default=20000,
        examples=[20000]
    )


class TripResponse(BaseModel):
    id: int
    destination: str
    start_date: str
    end_date: str
    people: int
    budget: float

    class Config:
        from_attributes = True