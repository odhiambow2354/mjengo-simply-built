
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestimonialForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    message: ""
  });
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please provide a rating for your testimonial.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Testimonial Submitted",
        description: "Thank you for sharing your experience with us!",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        role: "",
        company: "",
        message: ""
      });
      
      setRating(0);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-fade-in">
      <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
      <p className="text-muted-foreground mb-6">We value your feedback! Let us know about your experience working with us.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Your Role
            </label>
            <Input
              id="role"
              name="role"
              placeholder="Homeowner"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company (if applicable)
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Your Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1 focus:outline-none"
              >
                <Star
                  size={24}
                  className={`${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Your Testimonial <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your experience working with us..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center">
              Submit Testimonial <Send size={16} className="ml-2" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default TestimonialForm;
