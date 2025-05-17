import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const visitedPlaces = [
  { name: "서울", position: [37.5665, 126.9780] },
  { name: "강화도", position: [37.7461, 126.4871] },
  { name: "춘천(제이드가든)", position: [37.8231, 127.6710] },
  { name: "의정부", position: [37.7380, 127.0330] },
  { name: "파주", position: [37.7599, 126.7802] },
  { name: "일산", position: [37.6584, 126.8320] }
];

// 하트 이모지 마커
const heartIcon = new L.DivIcon({
  html: '❤️',
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

function KoreaMap() {
  return (
    <div style={{ height: '500px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <MapContainer center={[37.4, 127]} zoom={8} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        {visitedPlaces.map((place, idx) => (
          <Marker key={idx} position={place.position} icon={heartIcon}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default KoreaMap;
