import React from 'react'
import { useCurrentLocation } from './useCurrentLocation'

function CurrentLocation() {
    const { location, getCurrentLocation, error, loading } = useCurrentLocation();
    
    return (
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {location && (
            <p>
              Your current location is: {location.latitude}, {location.longitude}
            </p>
          )}
          <button onClick={getCurrentLocation}>Get Current Location</button>
        </div>
      );
}

export default CurrentLocation
