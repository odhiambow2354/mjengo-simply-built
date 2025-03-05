
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Modern Architecture"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-white/90 text-sm font-medium">
              Excellence in Construction
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold leading-tight mb-6 tracking-tight">
            Design, Costing, Construction 
            <span className="block">Making Your Dream Home a Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            We specialize in turning architectural concepts into stunning realities, delivering excellence in every detail of your construction project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8 py-6 text-base">
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              View Our Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
