
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

type MapProps = {
  center?: [number, number];
  zoom?: number;
  height?: string;
};

const Map = ({ center = [36.8219, -1.2921], zoom = 12, height = '300px' }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string | null>(localStorage.getItem('mapbox-token'));
  const [tokenInput, setTokenInput] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: center,
        zoom: zoom,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker
      new mapboxgl.Marker({ color: '#f43f5e' })
        .setLngLat(center)
        .addTo(map.current);

      // Add success handler
      map.current.on('load', () => {
        setIsTokenValid(true);
      });

      // Add error handler
      map.current.on('error', (e) => {
        if (e.error?.status === 401) {
          setIsTokenValid(false);
          localStorage.removeItem('mapbox-token');
          setMapboxToken(null);
          console.error('Invalid Mapbox token');
        }
      });

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Mapbox initialization error:', error);
      setIsTokenValid(false);
      localStorage.removeItem('mapbox-token');
      setMapboxToken(null);
    }
  }, [mapboxToken, center, zoom]);

  const handleSaveToken = () => {
    if (tokenInput) {
      localStorage.setItem('mapbox-token', tokenInput);
      setMapboxToken(tokenInput);
    }
  };

  if (!mapboxToken) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-semibold mb-4">Mapbox Token Required</h3>
        <p className="text-muted-foreground mb-6">
          Please enter your Mapbox public token to view the map. You can get one for free at{' '}
          <a 
            href="https://mapbox.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            mapbox.com
          </a>
        </p>
        <div className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
          />
          <Button onClick={handleSaveToken} className="w-full">
            Save Token
          </Button>
        </div>
      </div>
    );
  }

  if (!isTokenValid && mapboxToken) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-semibold mb-4 text-red-500">Invalid Mapbox Token</h3>
        <p className="text-muted-foreground mb-6">
          The Mapbox token you provided is invalid. Please try again with a valid token.
        </p>
        <div className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
          />
          <Button onClick={handleSaveToken} className="w-full">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainer} 
      className="rounded-lg overflow-hidden h-full w-full" 
      style={{ height }}
    />
  );
};

export default Map;
