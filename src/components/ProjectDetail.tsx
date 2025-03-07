
import React from 'react';
import { X, Calendar, Tag, ArrowLeft, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    date?: string;
    client?: string;
    location?: string;
    scope?: string[];
  };
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ArrowLeft size={20} />
          </Button>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>
        
        <div className="overflow-y-auto">
          <div className="aspect-video w-full relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {project.date && (
                <div className="flex items-start">
                  <Calendar size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Completion Date</h4>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                </div>
              )}
              
              {project.client && (
                <div className="flex items-start">
                  <Tag size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Client</h4>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                </div>
              )}
              
              {project.location && (
                <div className="flex items-start">
                  <MapPin size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                </div>
              )}
            </div>
            
            {project.scope && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Project Scope</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {project.scope.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
