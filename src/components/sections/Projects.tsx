
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Modern Residential Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    description: "A luxurious residential project featuring contemporary design and premium finishes."
  },
  {
    id: 2,
    title: "Corporate Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "State-of-the-art office complex designed for optimal productivity and employee comfort."
  },
  {
    id: 3,
    title: "Boutique Hotel Renovation",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    description: "Complete renovation of a boutique hotel, blending historical charm with modern amenities."
  },
  {
    id: 4,
    title: "University Learning Center",
    category: "Institutional",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description: "A cutting-edge learning center designed to inspire creativity and collaboration."
  },
  {
    id: 5,
    title: "Luxury Apartment Complex",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
    description: "High-end apartment complex featuring premium amenities and stunning architectural details."
  },
  {
    id: 6,
    title: "Shopping Mall Expansion",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Major expansion of a shopping mall, adding new retail spaces and modernizing existing areas."
  },
  {
    id: 7,
    title: "Three-Bedroom Bungalow",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description: "Affordable and well-designed three-bedroom bungalow perfect for a small family."
  },
  {
    id: 8,
    title: "Two-Story Modern Home",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    description: "Contemporary two-story home with sleek finishes and practical living spaces for the average Kenyan family."
  },
  {
    id: 9,
    title: "Maisonette in Gated Community",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    description: "Beautiful maisonette design for middle-income families, featuring a modern kitchen and spacious living areas."
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality", "Institutional", "Personal Homes"];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-fade-in">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-white/80 text-sm mb-4">{project.description}</p>
        <Link 
          to={`/project-gallery?id=${project.id}`} 
          className="inline-flex items-center text-white font-medium text-sm hover:underline"
        >
          View Project <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (activeCategory === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            We take pride in our portfolio of successful projects that demonstrate our commitment to excellence and innovation.
          </p>
        </div>

        <div className="relative mb-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border-gray-200 hidden md:flex"
            onClick={scrollLeft}
          >
            <ArrowLeft size={16} />
          </Button>
          
          <div 
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-4 md:px-12" 
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium whitespace-nowrap px-5 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border-gray-200 hidden md:flex"
            onClick={scrollRight}
          >
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="min-w-[200px]">
            <Link to="/project-gallery">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
