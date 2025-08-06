import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GlobeMap = ({ countries }: any) => {
  const defaultCenter: LatLngExpression = [20, 0];
  const defaultZoom = 2;

  const center: LatLngExpression = countries.length === 1 
    ? [countries[0].lat, countries[0].lng] as LatLngExpression
    : defaultCenter;

  const zoom = countries.length === 1 ? 15 : defaultZoom;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: '350px', width: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {countries.map((country: any, index: number) => (
        <Marker key={index} position={[country.lat, country.lng]}>
          <Popup>
            {country.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobeMap;
