
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>('');
  const [tokenEntered, setTokenEntered] = useState(false);

  // Business location coordinates (example for Nairobi CBD)
  const lng = 36.8219;
  const lat = -1.2921;

  useEffect(() => {
    if (!mapContainer.current || !tokenEntered || !mapToken) return;

    // Initialize map
    mapboxgl.accessToken = mapToken;
    
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
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Find Us Here</h3><p>123 Business Park</p>"))
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapToken, tokenEntered]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapToken) {
      setTokenEntered(true);
    }
  };

  if (!tokenEntered) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full flex flex-col justify-center items-center text-center">
        <MapPin size={32} className="text-primary mb-4" />
        <h3 className="font-medium mb-4">Enter Mapbox Token to View Map</h3>
        <p className="text-sm text-muted-foreground mb-4">
          To display the interactive map, please enter your Mapbox public token.
          <br />
          <a 
            href="https://account.mapbox.com/access-tokens/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Get a token from Mapbox
          </a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-sm">
          <div className="flex flex-col gap-2">
            <input 
              type="text" 
              value={mapToken}
              onChange={(e) => setMapToken(e.target.value)}
              placeholder="Enter your Mapbox token"
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <Button type="submit">
              Display Map
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-0 shadow-sm h-full flex flex-col">
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto">
        <h3 className="font-medium flex items-center justify-center">
          <MapPin size={16} className="text-primary mr-2" />
          Find Us Here
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          123 Business Park, Nairobi CBD
        </p>
      </div>
    </div>
  );
};

export default Map;
