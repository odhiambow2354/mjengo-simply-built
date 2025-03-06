
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Residential Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    description: "A luxurious residential project featuring contemporary design and premium finishes.",
    location: "Nairobi, Kenya",
    year: "2023",
    details: "This stunning 5-bedroom villa combines modern architecture with practical living spaces. The project included custom interior design, landscaped gardens, and state-of-the-art home automation systems."
  },
  {
    id: 2,
    title: "Corporate Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "State-of-the-art office complex designed for optimal productivity and employee comfort.",
    location: "Mombasa, Kenya",
    year: "2022",
    details: "A 10-story commercial building with open plan offices, meeting rooms, collaborative spaces, and rooftop gardens. The design emphasizes natural light and energy efficiency."
  },
  {
    id: 3,
    title: "Boutique Hotel Renovation",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    description: "Complete renovation of a boutique hotel, blending historical charm with modern amenities.",
    location: "Lamu, Kenya",
    year: "2023",
    details: "Renovation of a 30-room historical hotel, preserving its cultural significance while adding modern comfort features. The project included structural reinforcement, interior redesign, and upgrading all systems."
  },
  {
    id: 4,
    title: "University Learning Center",
    category: "Institutional",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description: "A cutting-edge learning center designed to inspire creativity and collaboration.",
    location: "Nakuru, Kenya",
    year: "2021",
    details: "A multi-functional educational facility featuring lecture halls, collaborative spaces, research laboratories, and a digital library. The design emphasizes sustainability and adaptability."
  },
  {
    id: 5,
    title: "Luxury Apartment Complex",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
    description: "High-end apartment complex featuring premium amenities and stunning architectural details.",
    location: "Nairobi, Kenya",
    year: "2022",
    details: "This 200-unit residential complex features one, two, and three-bedroom apartments with premium finishes, underground parking, swimming pools, gym facilities, and landscaped communal areas."
  },
  {
    id: 6,
    title: "Shopping Mall Expansion",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Major expansion of a shopping mall, adding new retail spaces and modernizing existing areas.",
    location: "Kisumu, Kenya",
    year: "2021",
    details: "Expansion of an existing commercial center, adding 50,000 square feet of retail space, entertainment zones, food courts, and improved parking facilities. The project was completed while keeping the existing mall operational."
  },
  {
    id: 7,
    title: "Eco-Friendly Resort",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    description: "Sustainable resort development with minimal environmental impact and maximum comfort.",
    location: "Diani Beach, Kenya",
    year: "2022",
    details: "A 40-cabin resort built using sustainable materials and practices. Features include solar power, rainwater harvesting, natural ventilation, and locally sourced materials throughout."
  },
  {
    id: 8,
    title: "Modern Hospital Wing",
    category: "Institutional",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    description: "State-of-the-art medical facility designed for patient comfort and operational efficiency.",
    location: "Eldoret, Kenya",
    year: "2023",
    details: "A new 100-bed hospital wing featuring specialized departments, surgical suites, and patient recovery rooms. The design focuses on infection control, natural light, and creating a healing environment."
  },
  {
    id: 9,
    title: "Three-Bedroom Bungalow",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description: "Affordable and well-designed three-bedroom bungalow perfect for a small family.",
    location: "Rongai, Kenya",
    year: "2023",
    details: "This 3-bedroom bungalow was designed for a young family in Rongai. The project focused on efficient use of space, low maintenance materials, and cost-effective construction methods without compromising on quality and aesthetics."
  },
  {
    id: 10,
    title: "Two-Story Modern Home",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    description: "Contemporary two-story home with sleek finishes and practical living spaces for the average Kenyan family.",
    location: "Kitengela, Kenya",
    year: "2022",
    details: "A beautiful 4-bedroom two-story house with a modern open floor plan, designed to maximize natural light and cross-ventilation. The construction used locally available materials and labor, making it an affordable yet stylish option for middle-income Kenyan families."
  },
  {
    id: 11,
    title: "Maisonette in Gated Community",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    description: "Beautiful maisonette design for middle-income families, featuring a modern kitchen and spacious living areas.",
    location: "Syokimau, Kenya",
    year: "2022",
    details: "This 3-bedroom maisonette was built as part of a gated community development. The design focuses on privacy, security, and community living with shared amenities like gardens and playgrounds. The construction emphasized energy efficiency and water conservation."
  },
  {
    id: 12,
    title: "Studio Apartments",
    category: "Personal Homes",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    description: "Cost-effective studio apartments with modern amenities for young professionals and students.",
    location: "Nairobi, Kenya",
    year: "2023",
    details: "A block of 20 studio apartments designed for rental income with young professionals and students in mind. The units maximize space efficiency while maintaining comfort and style. The project included communal facilities and security features."
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality", "Institutional", "Personal Homes"];

const ProjectsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Check for project ID in URL
    const projectId = searchParams.get("id");
    if (projectId) {
      const project = projects.find(p => p.id === Number(projectId));
      if (project) {
        setSelectedProject(project);
      }
    }
    
    // Check for search query in URL
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [searchParams]);

  useEffect(() => {
    let filtered = projects;
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query)
      );
    }
    
    setVisibleProjects(filtered);
    
    // Reset selected project when category or search changes
    setSelectedProject(null);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary/5 py-16 mt-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Our Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our portfolio of successful projects across various sectors. Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
          {searchQuery && (
            <div className="mt-4 p-2 bg-white/50 inline-block rounded">
              <p>Search results for: <span className="font-medium">{searchQuery}</span></p>
              <button 
                onClick={() => setSearchQuery("")}
                className="text-sm text-primary hover:underline ml-2"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container">
          {/* Project filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {selectedProject ? (
            // Project detail view
            <div className="animate-fade-in">
              <button 
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary"
              >
                <ArrowLeft size={16} className="mr-2" /> Back to projects
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-[400px] object-cover object-center transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                      <p>{selectedProject.category}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                      <p>{selectedProject.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Year Completed</h3>
                      <p>{selectedProject.year}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.details}</p>
                <p className="text-muted-foreground">
                  Our team worked closely with the client throughout the project lifecycle, from initial concept and design through to construction and final handover. We're proud of the results achieved and the positive feedback received.
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t">
                <h3 className="text-xl font-semibold mb-6">More Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {projects
                    .filter(p => p.id !== selectedProject.id)
                    .slice(0, 3)
                    .map(project => (
                      <div 
                        key={project.id}
                        className="group cursor-pointer"
                        onClick={() => {
                          setSelectedProject(project);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <div className="rounded-lg overflow-hidden aspect-[4/3] mb-3 shadow transition-all duration-300 group-hover:shadow-md">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">{project.title}</h3>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            // Projects grid view
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {visibleProjects.length > 0 ? (
                visibleProjects.map(project => (
                  <div 
                    key={project.id}
                    className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="rounded-lg overflow-hidden aspect-[4/3] mb-4 shadow-sm transition-all duration-300 group-hover:shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <button className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                      View Project <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground">No projects found in this category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
