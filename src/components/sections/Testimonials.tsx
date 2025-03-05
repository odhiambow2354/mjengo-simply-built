
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
    quote: "MjengoSafi transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations.",
    rating: 5,
    project: "Modern Residential Villa"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CEO, TechSpace Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    quote: "Working with MjengoSafi on our office complex was a seamless experience. They delivered on time and within budget.",
    rating: 5,
    project: "Corporate Office Complex"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Property Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
    quote: "The team at MjengoSafi are true professionals. Their expertise in construction and project management is unmatched.",
    rating: 5,
    project: "Luxury Apartment Complex"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Hotel Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
    quote: "The renovation of our boutique hotel was handled with such care and precision. MjengoSafi understood our vision perfectly.",
    rating: 5,
    project: "Boutique Hotel Renovation"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col h-full animate-fade-in">
      <div className="mb-6 text-primary">
        <Quote size={32} className="opacity-20" />
      </div>
      
      <p className="italic text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          <p className="text-xs text-primary mt-1">{testimonial.project}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={scrollRef}>
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevPage}
              disabled={currentPage === 0}
              className="h-10 w-10 rounded-full"
            >
              <ArrowLeft size={16} />
            </Button>
            
            {[...Array(totalPages)].map((_, i) => (
              <Button
                key={i}
                variant={i === currentPage ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(i)}
                className="h-10 w-10 rounded-full"
              >
                {i + 1}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="h-10 w-10 rounded-full"
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        )}
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="min-w-[200px]">
            <a href="/testimonials">View All Testimonials</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
