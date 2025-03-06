
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  const values = [
    "Quality craftsmanship in every project",
    "Transparent communication throughout the process",
    "Timely completion without compromising standards",
    "Attention to detail in design and execution",
    "Client satisfaction as our ultimate goal"
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Mjengo Safi
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Building Excellence Through <br />
              Passion and Precision
            </h2>
            
            <p className="text-muted-foreground mb-6">
              At MjengoSafi, we combine innovative design with quality construction to create spaces that inspire. 
              With years of industry experience, our team of professionals is dedicated to turning your vision into reality.
            </p>
            
            <ul className="space-y-3 mb-8">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="min-w-[180px]">
              <a href="/about">
                Learn More About Us
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Modern building" 
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4" 
                  alt="Construction site" 
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
