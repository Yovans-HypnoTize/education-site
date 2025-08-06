import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '12px',
};

const GoogleGlobMap = ({ countries }: any) => {
  const mapRef = useRef(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  const onLoad = useCallback((map: any) => {
    mapRef.current = map;

    if (countries.length === 1) {
      const location = { lat: countries[0].lat, lng: countries[0].lng };
      map.setCenter(location);
      map.setZoom(18);
    } else if (countries.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      countries.forEach((country: any) => {
        bounds.extend({ lat: country.lat, lng: country.lng });
      });
      map.fitBounds(bounds);
    }
  }, [countries]);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div style={{ display: 'flex', borderRadius: '16px', flexWrap: 'wrap' }}>
      <div style={{ width: '90%' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 20.0, lng: 0.0 }}
          zoom={2}
          onLoad={onLoad}
        >
          {countries.map((country: any, index: number) => (
            <Marker
              key={index}
              position={{ lat: country.lat, lng: country.lng }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleGlobMap;
