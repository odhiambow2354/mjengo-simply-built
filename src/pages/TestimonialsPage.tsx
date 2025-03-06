
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/sections/Testimonials";
import TestimonialForm from "@/components/TestimonialForm";

const TestimonialsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary/5 py-16 mt-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Testimonials</h1>
            <p className="text-muted-foreground max-w-2xl">
              Read what our clients have to say about their experience working with us.
            </p>
          </div>
        </div>
        
        <Testimonials />
        
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">Share Your Feedback</h2>
              <p className="section-subtitle">
                We value our clients' opinions and would love to hear about your experience with us.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <TestimonialForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
