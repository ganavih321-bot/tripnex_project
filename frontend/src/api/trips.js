const API_BASE_URL = 'http://127.0.0.1:8000';

/**
 * Check backend connectivity status
 */
export async function checkBackendHealth() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${API_BASE_URL}/health`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return { isOnline: false };
    const data = await res.json();
    return { isOnline: true, data };
  } catch (err) {
    return { isOnline: false, error: err.message };
  }
}

/**
 * Create a new trip in backend (POST /trips)
 */
export async function createTrip(tripData) {
  try {
    const response = await fetch(`${API_BASE_URL}/trips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destination: tripData.destination,
        start_date: tripData.start_date,
        end_date: tripData.end_date,
        people: Number(tripData.people),
        budget: Number(tripData.budget),
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn('[TRIPNEX API] Backend unreachable or failed. Using client-side state.', error);
    // Return simulated backend trip structure for seamless offline resilience
    return {
      id: Date.now(),
      destination: tripData.destination,
      start_date: tripData.start_date,
      end_date: tripData.end_date,
      people: Number(tripData.people),
      budget: Number(tripData.budget),
      _isOffline: true,
    };
  }
}

/**
 * Generate itinerary from backend (POST /trips/{id}/generate)
 */
export async function generateItinerary(tripId) {
  try {
    const response = await fetch(`${API_BASE_URL}/trips/${tripId}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(`[TRIPNEX API] Backend generate failed for trip ${tripId}. Fallback to dynamic enricher.`, error);
    return null;
  }
}

/**
 * Fetch all saved trips (GET /trips)
 */
export async function getTrips() {
  try {
    const response = await fetch(`${API_BASE_URL}/trips`);
    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('[TRIPNEX API] Could not fetch saved trips from backend.', error);
    return [];
  }
}

/**
 * Fetch single trip by ID (GET /trips/{id})
 */
export async function getTrip(tripId) {
  try {
    const response = await fetch(`${API_BASE_URL}/trips/${tripId}`);
    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`[TRIPNEX API] Could not fetch trip ${tripId}.`, error);
    return null;
  }
}
