import { useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function getCurrentLocation() {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              setLoading(false);
            },
            (err) => {
              setError(err);
              setLoading(false);
            }
          );
    }

    return { location, getCurrentLocation, error, loading };

}