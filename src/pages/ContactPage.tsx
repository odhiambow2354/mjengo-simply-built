
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

const ContactPage = () => {
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
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl">
              Get in touch with our team for inquiries, consultations, or to discuss your construction project.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
