
import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-0 shadow-sm h-full flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="w-full h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1551042863-71d0d453d2c9?auto=format&fit=crop&w=800&q=80" 
          alt="Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs mx-auto">
            <h3 className="font-medium flex items-center justify-center">
              <MapPin size={16} className="text-primary mr-2" />
              Find Us Here
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              123 Business Park, Nairobi CBD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
