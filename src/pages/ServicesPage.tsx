
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Home, Building, Hotel, School, Wrench, HeartHandshake, 
  Construction, PencilRuler, Sofa, PaintBucket, FloorPlan, Layout, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "residential",
    title: "Residential Homes",
    description: "We create custom homes that reflect your personal style and meet your specific needs. Our residential construction services cover everything from initial design to final finishing touches.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    features: [
      "Custom home design and construction",
      "Major renovations and additions",
      "Luxury home building",
      "Energy-efficient home solutions",
      "Smart home technology integration"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Development",
    description: "Our commercial construction services are designed to help businesses create functional, attractive spaces that enhance productivity and make a positive impression on clients and employees.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    features: [
      "Office buildings and complexes",
      "Retail spaces and shopping centers",
      "Industrial facilities and warehouses",
      "Medical and healthcare facilities",
      "Sustainable commercial construction"
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality Industry",
    description: "We specialize in creating inviting, comfortable spaces for the hospitality industry, from boutique hotels to large resorts, focusing on both aesthetics and functionality.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    features: [
      "Hotel construction and renovation",
      "Resort development",
      "Restaurant construction",
      "Spa and wellness facilities",
      "Recreational facilities"
    ]
  },
  {
    id: "institutional",
    title: "Institutional Development",
    description: "We build functional, durable, and energy-efficient institutional buildings designed to serve communities and organizations for generations.",
    icon: School,
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    features: [
      "Educational facilities",
      "Healthcare institutions",
      "Government buildings",
      "Religious institutions",
      "Community centers"
    ]
  },
  {
    id: "renovations",
    title: "Repairs & Renovations",
    description: "Our renovation services breathe new life into existing structures, improving functionality, appearance, and often increasing property value.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
    features: [
      "Complete property renovations",
      "Structural repairs",
      "Historic building restoration",
      "Commercial space remodeling",
      "Facade improvements"
    ]
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description: "Our experienced team provides expert guidance throughout your construction project, helping you make informed decisions that align with your goals and budget.",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    features: [
      "Project feasibility studies",
      "Cost estimation and budgeting",
      "Construction planning and scheduling",
      "Quality assurance and control",
      "Sustainable building consulting"
    ]
  }
];

const ServiceSection = ({ service, index }: { service: typeof services[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section 
      id={service.id} 
      className={`py-16 ${isEven ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mr-4">
                <service.icon className="text-primary" size={22} />
              </div>
              <h2 className="text-3xl font-semibold">{service.title}</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">{service.description}</p>
            
            <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
            <ul className="space-y-2 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <ArrowRight size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="min-w-[180px]">
              Request Consultation
            </Button>
          </div>
          
          <div className={`relative rounded-lg overflow-hidden aspect-[4/3] animate-fade-in ${isEven ? "lg:order-last" : "lg:order-first"}`}>
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle hash links for smooth scrolling
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-0">
                We offer a comprehensive range of construction and design services to meet your needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Navigation */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
          <div className="container">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="text-sm font-medium whitespace-nowrap px-5 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors mr-3 flex-shrink-0"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Sections */}
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8">
                Contact us today for a free consultation. Our team is ready to help you bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="min-w-[200px]">
                  Get Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  View Our Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
