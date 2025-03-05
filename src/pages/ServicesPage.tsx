import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Home, Building, Hotel, School, Wrench, HeartHandshake, 
  Construction, PencilRuler, Sofa, PaintBucket, LayoutDashboard, Layout, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "residential",
    title: "Residential Homes",
    description: "Custom home construction tailored to your unique needs and preferences, creating perfect living spaces.",
    icon: Home,
    details: "Our residential construction services cover everything from concept development to final handover. We specialize in building custom homes that reflect your personality and lifestyle needs. Our team works closely with you to understand your requirements, provide professional advice, and deliver a home that exceeds expectations. We handle all aspects including architectural design, engineering, interior finishing, landscaping, and smart home integration.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Development",
    description: "High-quality business infrastructure development designed for functionality and aesthetic appeal.",
    icon: Building,
    details: "Our commercial development services focus on creating functional, cost-effective, and visually impressive business spaces. We understand that commercial properties need to serve specific business functions while presenting the right image to clients and customers. Our team handles all aspects of commercial construction, from site selection and feasibility studies to design, construction, and final fit-out. We specialize in office buildings, retail spaces, warehouses, and mixed-use developments.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604328471151-b52226907017?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality Industry",
    description: "Designing and building hotels, resorts, and cottages that prioritize guest experience and comfort.",
    icon: Hotel,
    details: "We create exceptional hospitality spaces that delight guests and maximize operational efficiency. Our hospitality construction services include hotels, resorts, restaurants, and entertainment venues. We understand the unique requirements of the hospitality industry, from creating inviting public spaces to designing functional back-of-house areas. Our team focuses on durability, aesthetic appeal, and creating environments that enhance the guest experience.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "institutional",
    title: "Institutional Development",
    description: "Energy-efficient and functional institutional buildings that serve their purpose with excellence.",
    icon: School,
    details: "Our institutional development services focus on creating spaces that serve communities effectively. We specialize in schools, universities, healthcare facilities, government buildings, and other public institutions. These projects require careful consideration of public safety, accessibility, durability, and specific functional requirements. Our team works closely with stakeholders to ensure that institutional buildings meet both current needs and allow for future growth and adaptation.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "renovations",
    title: "Repairs & Renovations",
    description: "Comprehensive property maintenance and refurbishments that breathe new life into existing structures.",
    icon: Wrench,
    details: "Our renovation services give new life to existing buildings while preserving their character and value. Whether you're looking to modernize, expand, repurpose, or restore a property, our team has the expertise to handle projects of any scale. We specialize in structural repairs, layout modifications, systems upgrades, and aesthetic improvements. Our renovation process minimizes disruption while maximizing the potential of your existing property.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574621100236-d25b64cfd647?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523413363574-c30aa5c2d308?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585128993280-9456c19c987d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    description: "Expert guidance in design, architecture, and costing to help you make informed decisions.",
    icon: HeartHandshake,
    details: "Our consultancy services provide expert guidance throughout your construction journey. We offer pre-construction consulting, feasibility studies, budget planning, project management, and quality assurance services. Our experienced consultants can help you navigate complex decisions, optimize your construction budget, and ensure that your project aligns with your long-term objectives. We provide clear, actionable advice based on decades of industry experience.",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "concrete",
    title: "Concreting Work",
    description: "Efficient execution of large-scale concreting projects with precision and durability.",
    icon: Construction,
    details: "Our concrete services deliver durable, precision-engineered structures for projects of all sizes. We handle everything from foundations and floor slabs to decorative concrete features and specialized industrial applications. Our team uses the latest concrete technologies and techniques to ensure structural integrity, optimal finish quality, and long-term performance. We specialize in both standard and specialized concrete work, including exposed aggregate, stamped concrete, and polished concrete finishes.",
    image: "https://images.unsplash.com/photo-1621875688422-5b5feae5c1f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545259741-2d3762ddc5a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094651181-35689a6ed43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601589990328-8ede54a2a35f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "steelwork",
    title: "Steelwork",
    description: "Fabrication of simple and complex steel structures that provide strength and stability.",
    icon: Construction,
    details: "Our steelwork services provide the backbone for durable, versatile structures. We handle structural steel fabrication and installation for buildings of all types, including complex architectural features and specialized industrial applications. Our steel fabrication team works closely with architects and engineers to ensure that steel components are manufactured to exact specifications and installed with precision. We prioritize quality, safety, and efficiency in all our steel construction projects.",
    image: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533009754026-1a57fe10ec6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587582345426-bf9fa797d3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502780982944-cfe7b459cd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "interiors",
    title: "Interior Fit-outs",
    description: "High-quality interior customization for various spaces, reflecting your style and needs.",
    icon: PencilRuler,
    details: "Our interior fit-out services transform empty spaces into functional, beautiful environments. We handle all aspects of interior finishing, from space planning and material selection to installation and final decoration. Our interior specialists work with you to understand your aesthetic preferences, functional requirements, and budget constraints. We coordinate all trades—including carpentry, electrical, plumbing, painting, and specialized finishes—to deliver cohesive, polished interiors.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "furniture",
    title: "Furniture & Décor",
    description: "Custom furniture design and decor solutions that enhance the beauty of your spaces.",
    icon: Sofa,
    details: "Our furniture and décor services provide the finishing touches that make a space truly yours. We design and craft custom furniture pieces that complement your interior design while meeting specific functional requirements. Our team can also source high-quality ready-made furniture and decorative elements to complete your space. We consider factors such as durability, comfort, aesthetic coherence, and practical functionality in all our furniture recommendations.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "exterior",
    title: "Exterior Design",
    description: "Enhancing external aesthetics to meet client preferences and complement the surrounding environment.",
    icon: PaintBucket,
    details: "Our exterior design services create curb appeal and environmental harmony for your property. We handle façade design, material selection, landscaping, outdoor living spaces, and exterior lighting. Our team considers factors such as architectural style, climate conditions, maintenance requirements, and energy efficiency when developing exterior designs. We create cohesive outdoor environments that enhance property value while providing functional outdoor spaces.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "preconstruction",
    title: "Pre-Construction",
    description: "Engineering and pre-construction planning services to ensure your project starts on the right foot.",
    icon: LayoutDashboard,
    details: "Our pre-construction services lay the groundwork for successful project execution. We provide comprehensive planning, including site analysis, regulatory review, cost estimation, scheduling, and risk assessment. Our pre-construction team identifies potential challenges early and develops effective solutions before construction begins. This thorough preparation minimizes surprises, controls costs, and establishes clear expectations for all project stakeholders.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586126487628-085aa024834a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603039849612-31f3b365e2c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "designbuild",
    title: "Design-Build",
    description: "Collaborative architectural and budget-focused construction that streamlines the building process.",
    icon: Layout,
    details: "Our design-build approach integrates design and construction under one contract, creating a seamless process from concept to completion. This collaborative method improves communication, reduces costs, and accelerates project timelines. Our design-build team works together from day one, ensuring that designs are both beautiful and buildable within your budget. This integrated approach minimizes change orders, reduces conflicts, and delivers exceptional results with less stress for our clients.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546542848-03ef9f8d85b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492270350- 2f62e826b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "construction",
    title: "Construction",
    description: "Comprehensive solutions for diverse building needs, delivering quality at every stage.",
    icon: Hammer,
    details: "Our core construction services deliver buildings of exceptional quality, on time and on budget. We handle projects of all sizes and complexity, from simple structures to sophisticated buildings with specialized requirements. Our construction team includes experienced project managers, site supervisors, and skilled tradespeople who maintain the highest standards of workmanship. We emphasize safety, quality control, efficient resource utilization, and effective communication throughout the construction process.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530334565651-208b45ebb393?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465125672495-60dde3bf2f64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [visibleServices, setVisibleServices] = useState(services);
  
  useEffect(() => {
    // Check if there's a hash in URL and scroll to that section
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveService(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    
    // Update URL with hash without page reload
    window.history.pushState(null, '', `#${serviceId}`);
    
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary/5 py-16 mt-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl">
            We offer a comprehensive range of construction and design services tailored to meet the diverse needs of our clients. From initial planning to final execution, we ensure quality at every step.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Service navigation sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-auto pb-6">
              <h2 className="text-xl font-semibold mb-6">All Services</h2>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      className={`w-full text-left p-3 rounded-md transition-colors flex items-start ${
                        activeService === service.id 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <service.icon className="mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span>{service.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Service details */}
            <div className="lg:col-span-2">
              {activeService ? (
                // Show selected service details
                (() => {
                  const service = services.find(s => s.id === activeService);
                  if (!service) return null;
                  
                  return (
                    <div id={service.id} className="animate-fade-in">
                      <div className="mb-8 overflow-hidden rounded-lg">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mr-4">
                          <service.icon className="text-primary" size={24} />
                        </div>
                        <h2 className="text-2xl font-semibold">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="prose max-w-none">
                        <p className="mb-6">{service.details}</p>
                        
                        <h3 className="text-xl font-medium mb-4">How We Deliver</h3>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <ArrowRight className="mr-2 text-primary flex-shrink-0 mt-1" size={16} />
                            <span>Initial consultation to understand your specific requirements</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="mr-2 text-primary flex-shrink-0 mt-1" size={16} />
                            <span>Detailed proposal with transparent pricing and timelines</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="mr-2 text-primary flex-shrink-0 mt-1" size={16} />
                            <span>Regular progress updates and quality assurance checks</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="mr-2 text-primary flex-shrink-0 mt-1" size={16} />
                            <span>Experienced professionals using industry-best practices</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="mr-2 text-primary flex-shrink-0 mt-1" size={16} />
                            <span>Comprehensive follow-up and support after completion</span>
                          </li>
                        </ul>
                        
                        {service.gallery && service.gallery.length > 0 && (
                          <>
                            <h3 className="text-xl font-medium mb-4">Recent Projects</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                              {service.gallery.map((img, idx) => (
                                <div key={idx} className="rounded-lg overflow-hidden bg-gray-100 aspect-video">
                                  <img 
                                    src={img} 
                                    alt={`${service.title} project ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="mt-10 pt-6 border-t">
                        <Button asChild size="lg">
                          <a href="/contact">Get a Quote for This Service</a>
                        </Button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                // Show services overview
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Our Comprehensive Services</h2>
                  <p className="text-muted-foreground mb-10">
                    At Ujenzi Bora, we provide a full range of construction and design services for projects of all sizes. Select a service from the list to learn more about our specific offerings and expertise.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleServiceClick(service.id)}
                      >
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                            <service.icon className="text-primary" size={22} />
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          <button className="inline-flex items-center text-primary font-medium text-sm">
                            Learn More <ArrowRight size={14} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
