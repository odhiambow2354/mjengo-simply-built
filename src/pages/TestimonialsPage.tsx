
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    content: "Working with Ujenzi Bora on our dream home was an incredible experience. Their attention to detail and commitment to quality exceeded our expectations. The team was responsive and kept us informed throughout the entire process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    project: "Custom Residential Home"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "Our commercial space renovation was completed on time and within budget. The Ujenzi Bora team understood our business needs and created a functional yet stylish environment that our clients love. Highly recommend their services!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    project: "Commercial Renovation"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Hotel Manager",
    content: "The renovation of our boutique hotel was a complex project, but Ujenzi Bora handled it with professionalism and expertise. Their hospitality construction specialists understood our unique requirements and delivered exceptional results.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    project: "Hotel Renovation"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "School Administrator",
    content: "Our school needed significant upgrades to accommodate growing enrollment. Ujenzi Bora worked around our schedule to minimize disruption and delivered a beautiful, functional space for our students and staff.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    project: "Educational Facility Expansion"
  },
  {
    id: 5,
    name: "David Ochieng",
    role: "Property Developer",
    content: "I've worked with many construction companies over the years, but Ujenzi Bora stands out for their integrity and quality of work. They've been our go-to contractor for multiple developments, and they never disappoint.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    project: "Multi-Unit Residential Complex"
  },
  {
    id: 6,
    name: "Grace Wanjiku",
    role: "Restaurant Owner",
    content: "The interior fit-out for our restaurant was beautifully executed by Ujenzi Bora. They transformed our space into exactly what we envisioned, with careful attention to both aesthetics and functionality.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    project: "Restaurant Interior Design"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="text-primary" size={24} />
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="mb-4 italic">{testimonial.content}</p>
      
      <div className="text-sm font-medium text-primary">
        Project: {testimonial.project}
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary/5 py-16 mt-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Client Testimonials</h1>
          <p className="text-muted-foreground max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Ujenzi Bora.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
