import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProjectGalleryPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "completed", label: "Completed" },
    { id: "ongoing", label: "Ongoing" },
    { id: "renovated", label: "Renovated" }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Residence in Karen",
      category: "completed",
      location: "Karen, Nairobi",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Luxurious 5-bedroom modern house with swimming pool and garden."
    },
    {
      id: 2,
      title: "Commercial Building in CBD",
      category: "ongoing",
      location: "Nairobi CBD",
      image: "https://images.unsplash.com/photo-1517553923948-df0d55fae8fe?auto=format&fit=crop&w=1200&q=80",
      description: "10-storey commercial property with retail spaces and offices."
    },
    {
      id: 3,
      title: "Apartment Complex in Westlands",
      category: "completed",
      location: "Westlands, Nairobi",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      description: "Modern apartment complex with 50 units and recreational facilities."
    },
    {
      id: 4,
      title: "Villa Renovation in Runda",
      category: "renovated",
      location: "Runda, Nairobi",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      description: "Complete renovation of a classic villa with modern amenities."
    },
    {
      id: 5,
      title: "Shopping Mall Extension",
      category: "ongoing",
      location: "Kilimani, Nairobi",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80",
      description: "Extension of existing shopping mall with additional retail spaces."
    },
    {
      id: 6,
      title: "Traditional Home Modernization",
      category: "renovated",
      location: "Muthaiga, Nairobi",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
      description: "Modernization of traditional home while preserving its character."
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        project.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary/5 py-16 mt-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Project Gallery</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our diverse portfolio of construction projects across Kenya.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Our Projects</h2>
                <p className="text-muted-foreground mb-6">Browse through our completed and ongoing construction projects.</p>
                
                <div className="flex flex-wrap gap-3">
                  {filters.map(filter => (
                    <Button
                      key={filter.id}
                      variant={activeFilter === filter.id ? "default" : "outline"}
                      onClick={() => setActiveFilter(filter.id)}
                      className="flex items-center gap-2"
                    >
                      {activeFilter === filter.id && <CheckCircle size={16} />}
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-[300px]"
                  />
                </div>
              </div>
            </div>
            
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <div key={project.id} className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative overflow-hidden h-60">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === 'completed' ? 'bg-green-100 text-green-800' :
                          project.category === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                      <p className="text-sm mb-4">{project.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchTerm('');
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectGalleryPage;
