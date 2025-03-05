
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-medium mb-4">
              Ujenzi<span className="text-primary font-semibold">Bora</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Design, Costing, Construction – Making Your Dream Home a Reality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services#residential" className="text-muted-foreground hover:text-primary transition-colors">
                  Residential Homes
                </a>
              </li>
              <li>
                <a href="/services#commercial" className="text-muted-foreground hover:text-primary transition-colors">
                  Commercial Development
                </a>
              </li>
              <li>
                <a href="/services#hospitality" className="text-muted-foreground hover:text-primary transition-colors">
                  Hospitality Industry
                </a>
              </li>
              <li>
                <a href="/services#institutional" className="text-muted-foreground hover:text-primary transition-colors">
                  Institutional Development
                </a>
              </li>
              <li>
                <a href="/services#renovations" className="text-muted-foreground hover:text-primary transition-colors">
                  Repairs & Renovations
                </a>
              </li>
              <li>
                <a href="/services#consultancy" className="text-muted-foreground hover:text-primary transition-colors">
                  Consultancy Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-muted-foreground">+254 712 345 678</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-muted-foreground">info@MjengoSafi.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-muted-foreground">
                  123 Business Park, <br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MjengoSafi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
