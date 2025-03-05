
import { useState } from "react";
import { ArrowRight, Home, Building, Hotel, School, Wrench, HeartHandshake, 
  Construction, ConstructionIcon, PencilRuler, Sofa, PaintBucket, 
  LayoutDashboard, Layout, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "residential",
    title: "Residential Homes",
    description: "Custom home construction tailored to your unique needs and preferences, creating perfect living spaces.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "commercial",
    title: "Commercial Development",
    description: "High-quality business infrastructure development designed for functionality and aesthetic appeal.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hospitality",
    title: "Hospitality Industry",
    description: "Designing and building hotels, resorts, and cottages that prioritize guest experience and comfort.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "institutional",
    title: "Institutional Development",
    description: "Energy-efficient and functional institutional buildings that serve their purpose with excellence.",
    icon: School,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "renovations",
    title: "Repairs & Renovations",
    description: "Comprehensive property maintenance and refurbishments that breathe new life into existing structures.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description: "Expert guidance in design, architecture, and costing to help you make informed decisions.",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "concrete",
    title: "Concreting Work",
    description: "Efficient execution of large-scale concreting projects with precision and durability.",
    icon: Construction,
    image: "https://images.unsplash.com/photo-1621875688422-5b5feae5c1f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "steelwork",
    title: "Steelwork",
    description: "Fabrication of simple and complex steel structures that provide strength and stability.",
    icon: ConstructionIcon,
    image: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "interiors",
    title: "Interior Fit-outs",
    description: "High-quality interior customization for various spaces, reflecting your style and needs.",
    icon: PencilRuler,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "furniture",
    title: "Furniture & Décor",
    description: "Custom furniture design and decor solutions that enhance the beauty of your spaces.",
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "exterior",
    title: "Exterior Design",
    description: "Enhancing external aesthetics to meet client preferences and complement the surrounding environment.",
    icon: PaintBucket,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "preconstruction",
    title: "Pre-Construction",
    description: "Engineering and pre-construction planning services to ensure your project starts on the right foot.",
    icon: LayoutDashboard,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "designbuild",
    title: "Design-Build",
    description: "Collaborative architectural and budget-focused construction that streamlines the building process.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "construction",
    title: "Construction",
    description: "Comprehensive solutions for diverse building needs, delivering quality at every stage.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const navigate = useNavigate();
  
  const handleServiceClick = () => {
    navigate(`/services#${service.id}`);
  };
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg border border-gray-100 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={handleServiceClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4">
            <div className="w-10 h-10 rounded-md bg-primary/90 backdrop-blur-sm flex items-center justify-center mb-2">
              <service.icon className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <button 
          className="inline-flex items-center text-primary font-medium text-sm hover:underline"
        >
          Learn More <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(6);

  const showMoreServices = () => {
    setVisibleServices(services.length);
  };

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of construction and design services tailored to meet the diverse needs of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.slice(0, visibleServices).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {visibleServices < services.length && (
          <div className="text-center mt-8">
            <Button onClick={showMoreServices} variant="outline" size="lg" className="min-w-[200px]">
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
