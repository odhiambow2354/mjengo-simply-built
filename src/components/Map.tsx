
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Maximize, Minimize, Building } from 'lucide-react';
import { Button } from './ui/button';

// You would replace this with your actual Mapbox token in production
const DEFAULT_MAP_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoibG92YWJsZS1kZWZhdWx0IiwiYSI6ImNscTFhZXZ5NTBldTYya3A2a3N2OHZuNWIifQ.a4PGK_vinRCM6Mhk-jmfcA';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Business location coordinates (example for a central location)
  const lng = 36.8219;
  const lat = -1.2921;

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // Initialize map with default token
      mapboxgl.accessToken = DEFAULT_MAP_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: 14,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for business location
      const marker = new mapboxgl.Marker({ color: '#2563eb' })
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Our Construction Office</h3>"))
        .addTo(map.current);

      map.current.on('load', () => {
        setIsMapLoaded(true);
      });

      map.current.on('error', () => {
        setMapError(true);
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapError(true);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Fallback static map if there's an error loading the interactive map
  if (mapError) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-0 shadow-sm h-full flex flex-col relative">
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <img 
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+2563eb(${lng},${lat})/${lng},${lat},14,0/800x600?access_token=${DEFAULT_MAP_TOKEN}`} 
            alt="Static Map"
            className="w-full h-full object-cover"
            onError={() => {
              // If static map fails, show placeholder
              const img = document.createElement('img');
              img.src = 'https://placehold.co/800x600/e2e8f0/64748b?text=Map+Location';
              img.alt = 'Map Placeholder';
              img.className = 'w-full h-full object-cover';
              mapContainer.current?.appendChild(img);
            }}
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto">
            <h3 className="font-medium flex items-center justify-center">
              <Building size={16} className="text-primary mr-2" />
              Our Construction Office
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-0 shadow-sm flex flex-col relative ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-full'}`}>
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute top-2 right-2 z-10 bg-white shadow-sm" 
        onClick={toggleFullscreen}
      >
        {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
      </Button>
      <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto">
        <h3 className="font-medium flex items-center justify-center">
          <Building size={16} className="text-primary mr-2" />
          Our Construction Office
        </h3>
      </div>
    </div>
  );
};

export default Map;
