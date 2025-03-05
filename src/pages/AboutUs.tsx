
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Users, History, Award, Target } from "lucide-react";

const AboutUs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "James Wilson",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
      bio: "With over 20 years of experience in construction, James founded UjenziBora to provide quality construction services with integrity."
    },
    {
      name: "Sarah Kamau",
      position: "Head Architect",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      bio: "Sarah brings innovative design thinking and sustainable architecture practices to every project, ensuring both beauty and functionality."
    },
    {
      name: "David Mwangi",
      position: "Construction Manager",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
      bio: "David oversees all construction projects, ensuring they are completed on time, within budget, and to the highest standards of quality."
    },
    {
      name: "Lisa Njoroge",
      position: "Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
      bio: "Lisa specializes in creating beautiful, functional interior spaces that reflect the unique personality and needs of each client."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="relative py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">About UjenziBora</h1>
              <p className="text-xl text-muted-foreground mb-0">
                We are a leading construction company committed to excellence, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 animate-fade-in">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Our Story
                  </div>
                  <h2 className="text-3xl font-semibold mb-4">Building Excellence Since 2005</h2>
                  <p className="text-muted-foreground mb-4">
                    UjenziBora was founded with a vision to transform the construction industry in East Africa by providing high-quality, 
                    innovative, and sustainable building solutions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our journey began with a small team of dedicated professionals who shared a passion for excellence in construction. 
                    Today, we have grown into a full-service construction company with a portfolio of successful projects across residential, 
                    commercial, hospitality, and institutional sectors.
                  </p>
                  <p className="text-muted-foreground">
                    What sets us apart is our unwavering commitment to quality, transparency, and client satisfaction. We believe in building 
                    not just structures, but lasting relationships with our clients based on trust and exceptional service.
                  </p>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden h-[500px] animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="UjenziBora Construction" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Our Guiding Principles</h2>
              <p className="section-subtitle">
                At UjenziBora, our mission, vision, and values guide everything we do and shape the way we serve our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional construction services that exceed client expectations, while maintaining the highest standards 
                  of quality, safety, and environmental responsibility.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and respected construction company in East Africa, known for our innovative solutions, 
                  quality craftsmanship, and positive impact on communities.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="text-left text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Excellence in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Integrity and transparency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Innovation and creativity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Respect for people and environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>Commitment to client satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Meet Our Team
              </div>
              <h2 className="section-title">The People Behind Our Success</h2>
              <p className="section-subtitle">
                Our team of skilled professionals is the driving force behind our success. Each member brings unique expertise and a 
                shared commitment to excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Company History */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="section-title">History & Milestones</h2>
              <p className="section-subtitle">
                Our journey from a small startup to a leading construction company has been marked by significant milestones and achievements.
              </p>
            </div>
            
            <div className="space-y-12 max-w-3xl mx-auto">
              <div className="flex animate-fade-in">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    1
                  </div>
                  <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2005: Foundation</h3>
                  <p className="text-muted-foreground mb-4">
                    UjenziBora was founded by James Wilson with a small team of 5 employees, focusing initially on residential renovations.
                  </p>
                </div>
              </div>
              
              <div className="flex animate-fade-in">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    2
                  </div>
                  <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2008: Expansion</h3>
                  <p className="text-muted-foreground mb-4">
                    Expanded services to include commercial construction and hired specialized teams for different construction aspects.
                  </p>
                </div>
              </div>
              
              <div className="flex animate-fade-in">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    3
                  </div>
                  <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2012: Major Projects</h3>
                  <p className="text-muted-foreground mb-4">
                    Completed our first major commercial project - a 10-story office building in downtown Nairobi, which won a design award.
                  </p>
                </div>
              </div>
              
              <div className="flex animate-fade-in">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    4
                  </div>
                  <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2015: Innovation</h3>
                  <p className="text-muted-foreground mb-4">
                    Introduced sustainable building practices and became the first construction company in the region to achieve green building certification.
                  </p>
                </div>
              </div>
              
              <div className="flex animate-fade-in">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2020-Present: Growth & Recognition</h3>
                  <p className="text-muted-foreground mb-4">
                    Expanded operations across East Africa with offices in Tanzania and Uganda. Recognized as one of the top construction companies in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
