
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Users, Briefcase, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in materials and workmanship, ensuring every project meets our exacting quality benchmarks."
  },
  {
    title: "Client-Centered Approach",
    description: "We prioritize understanding and fulfilling client needs, delivering solutions that align with their vision and objectives."
  },
  {
    title: "Integrity & Transparency",
    description: "We conduct business with honesty and openness, building lasting relationships based on trust and mutual respect."
  },
  {
    title: "Innovation & Adaptability",
    description: "We embrace new technologies and methods, continuously improving our processes to deliver better results."
  },
  {
    title: "Sustainability",
    description: "We implement environmentally responsible practices, minimizing ecological impact while maximizing resource efficiency."
  }
];

const team = [
  {
    name: "David Kamau",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "With over 20 years of industry experience, David founded Ujenzi Bora with a vision to transform the construction landscape through quality and innovation."
  },
  {
    name: "Sarah Ochieng",
    position: "Head Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Sarah leads our design team with her exceptional talent for blending aesthetics with functionality, creating spaces that inspire and perform."
  },
  {
    name: "Michael Mwangi",
    position: "Construction Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Michael ensures that every project is executed with precision, overseeing construction activities with expertise and attention to detail."
  },
  {
    name: "Jane Njeri",
    position: "Client Relations Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Jane serves as the bridge between our company and clients, ensuring clear communication and exceptional service throughout the project lifecycle."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary/5 py-16 mt-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">About Ujenzi Bora</h1>
          <p className="text-muted-foreground max-w-2xl">
            Learn about our journey, our values, and the team behind our success in delivering exceptional construction projects.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container">
          {/* Company Overview */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2005, Ujenzi Bora has grown from a small residential contractor to a comprehensive construction firm serving diverse sectors across East Africa. Our name, which means "Quality Construction" in Swahili, reflects our unwavering commitment to excellence in everything we build.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've assembled a team of highly skilled professionals who share our passion for quality craftsmanship and innovative solutions. Together, we've successfully completed hundreds of projects, ranging from luxury homes to commercial complexes and institutional buildings.
                </p>
                <p className="text-muted-foreground">
                  What sets us apart is our holistic approach to construction. We don't just build structures; we create spaces that enhance lives, facilitate business operations, and serve communities. Our integrated services span the entire construction lifecycle, from initial design and planning to final execution and handover.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                    alt="Modern building" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4" 
                    alt="Construction site" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Mission, Vision, Values */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center">Our Foundation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional construction services that exceed client expectations, creating spaces that inspire, function efficiently, and stand the test of time.
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the region's most trusted construction partner, known for quality, innovation, and commitment to sustainable building practices.
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  We combine traditional craftsmanship with modern techniques, embracing innovation while maintaining a focus on quality and client satisfaction.
                </p>
              </div>
            </div>
          </section>
          
          {/* Company Values */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              At Ujenzi Bora, our values guide every decision we make and every project we undertake. These core principles define our culture and drive our commitment to excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={22} className="text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Team Members */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Our Leadership Team</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Our success is driven by our talented team of professionals who bring diverse expertise and a shared commitment to excellence to every project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* CTA */}
          <section className="bg-primary/5 rounded-lg p-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your construction vision to life. Our team is ready to provide expert guidance and exceptional service throughout your project journey.
            </p>
            <Button asChild size="lg">
              <a href="/contact" className="min-w-[200px]">
                Contact Us <ArrowRight size={16} className="ml-1" />
              </a>
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
