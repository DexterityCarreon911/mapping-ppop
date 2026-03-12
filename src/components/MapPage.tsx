import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { cities } from '../data/cities';
import type { City } from '../data/cities';
import { CityPopup } from './CityPopup';
import './MapPage.css';

export const MapPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const resetMapView = () => {
    map.current?.flyTo([39.8283, -98.5795], 4, {
      duration: 1.5,
    });
  };

  const handleCityClose = () => {
    setSelectedCity(null);
    resetMapView();
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([39.8283, -98.5795], 4);

    // Add dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19,
      minZoom: 3,
    }).addTo(map.current);

    // Custom icon for city markers
    const cityIcon = L.divIcon({
      className: 'city-marker',
      html: `
        <div class="marker-inner">
          <div class="marker-pulse"></div>
        </div>
      `,
      iconSize: [40, 40],
      popupAnchor: [0, -20],
    });

    // Add city markers
    cities.forEach((city) => {
      const marker = L.marker([city.lat, city.lng], { icon: cityIcon })
        .addTo(map.current!)
        .on('click', () => {
          setSelectedCity(city);
          // Zoom in on the clicked city
          map.current?.flyTo([city.lat, city.lng], 10, {
            duration: 1.5,
          });
        });

      // Add tooltip on hover
      marker.bindTooltip(city.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -10],
        className: 'city-tooltip',
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <div className="map-page">
      <div ref={mapContainer} className="map-container" />
      
      <div className="map-controls">
        <h1 className="map-title">IT World Explorer</h1>
        <p className="map-subtitle">Click on cities to explore their culture and technology</p>
      </div>

      <CityPopup city={selectedCity} onClose={handleCityClose} />
    </div>
  );
};
