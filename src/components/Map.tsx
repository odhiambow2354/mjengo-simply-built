
import React, { useEffect, useRef, useState } from 'react';
import { Maximize, Minimize, Building } from 'lucide-react';
import { Button } from './ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Business location coordinates (example for a central location)
  const lat = -1.2921;
  const lng = 36.8219;

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      if (!mapContainer.current || !window.google) return;
      
      try {
        const location = { lat, lng };
        const mapOptions = {
          center: location,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          streetViewControl: true,
        };
        
        const map = new google.maps.Map(mapContainer.current, mapOptions);
        
        // Add marker for business location
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: "Our Construction Office"
        });
        
        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: "<h3>Our Construction Office</h3>"
        });
        
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
        
        setIsLoaded(true);
      } catch (error) {
        console.error("Error initializing map:", error);
        setMapError(true);
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => setMapError(true);
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [lat, lng]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Fallback static map if there's an error loading the interactive map
  if (mapError) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-0 shadow-sm h-full flex flex-col relative">
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <img 
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x600&markers=color:red|${lat},${lng}&key=`} 
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

// Add TypeScript global declaration for Google Maps
declare global {
  interface Window {
    google: any;
  }
}

export default Map;
