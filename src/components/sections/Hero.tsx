
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultation = () => {
    navigate('/contact');
    toast({
      title: "Free Consultation Request",
      description: "Fill out the form to schedule your free consultation",
      duration: 5000,
    });
  };

  const handleViewProjects = () => {
    navigate('/project-gallery');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Modern Architecture"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-white/90 text-sm font-medium">
              Excellence in Construction
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold leading-tight mb-6 tracking-tight">
            Design, Construct 
            <span className="block">Making Your Dream Home a Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We specialize in turning architectural concepts into stunning realities, delivering excellence in every detail of your construction project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-base" onClick={handleConsultation}>
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={handleViewProjects}
            >
              View Our Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={scrollToServices}
              className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Explore More</span>
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
