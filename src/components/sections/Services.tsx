
import { useState } from "react";
import { ArrowRight, Home, Building, Hotel, School, Wrench, HeartHandshake, 
  Construction, ConstructionIcon, PencilRuler, Sofa, PaintBucket, FloorPlan, 
  Layout, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "residential",
    title: "Residential Homes",
    description: "Custom home construction tailored to your unique needs and preferences, creating perfect living spaces.",
    icon: Home,
  },
  {
    id: "commercial",
    title: "Commercial Development",
    description: "High-quality business infrastructure development designed for functionality and aesthetic appeal.",
    icon: Building,
  },
  {
    id: "hospitality",
    title: "Hospitality Industry",
    description: "Designing and building hotels, resorts, and cottages that prioritize guest experience and comfort.",
    icon: Hotel,
  },
  {
    id: "institutional",
    title: "Institutional Development",
    description: "Energy-efficient and functional institutional buildings that serve their purpose with excellence.",
    icon: School,
  },
  {
    id: "renovations",
    title: "Repairs & Renovations",
    description: "Comprehensive property maintenance and refurbishments that breathe new life into existing structures.",
    icon: Wrench,
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description: "Expert guidance in design, architecture, and costing to help you make informed decisions.",
    icon: HeartHandshake,
  },
  {
    id: "concrete",
    title: "Concreting Work",
    description: "Efficient execution of large-scale concreting projects with precision and durability.",
    icon: Construction,
  },
  {
    id: "steelwork",
    title: "Steelwork",
    description: "Fabrication of simple and complex steel structures that provide strength and stability.",
    icon: ConstructionIcon,
  },
  {
    id: "interiors",
    title: "Interior Fit-outs",
    description: "High-quality interior customization for various spaces, reflecting your style and needs.",
    icon: PencilRuler,
  },
  {
    id: "furniture",
    title: "Furniture & Décor",
    description: "Custom furniture design and decor solutions that enhance the beauty of your spaces.",
    icon: Sofa,
  },
  {
    id: "exterior",
    title: "Exterior Design",
    description: "Enhancing external aesthetics to meet client preferences and complement the surrounding environment.",
    icon: PaintBucket,
  },
  {
    id: "preconstruction",
    title: "Pre-Construction",
    description: "Engineering and pre-construction planning services to ensure your project starts on the right foot.",
    icon: FloorPlan,
  },
  {
    id: "designbuild",
    title: "Design-Build",
    description: "Collaborative architectural and budget-focused construction that streamlines the building process.",
    icon: Layout,
  },
  {
    id: "construction",
    title: "Construction",
    description: "Comprehensive solutions for diverse building needs, delivering quality at every stage.",
    icon: Hammer,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 transition-all duration-500 hover:shadow-lg border border-gray-100 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
        <service.icon className="text-primary" size={22} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <a 
        href={`/services#${service.id}`} 
        className="inline-flex items-center text-primary font-medium text-sm hover:underline"
      >
        Learn More <ArrowRight size={14} className="ml-1" />
      </a>
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
