
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleGetQuote = () => {
    navigate('/contact');
    toast({
      title: "Quote Request",
      description: "Please fill out the form to receive a detailed quote for your project.",
      duration: 5000,
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projects?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery("");
    }
  };

  const toggleProjectsMenu = () => {
    setProjectsOpen(!projectsOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { 
      name: "Projects", 
      path: "/projects",
      hasSubmenu: true,
      submenu: [
        { name: "All Projects", path: "/projects" },
        { name: "Gallery", path: "/project-gallery" }
      ]
    },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="text-foreground font-display text-2xl font-medium">
          Mjengo<span className="text-primary font-semibold">Safi</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.hasSubmenu ? (
              <div key={item.name} className="relative group">
                <button 
                  className="text-sm font-medium transition-all relative flex items-center gap-1 text-foreground hover:text-primary"
                  onClick={toggleProjectsMenu}
                  onMouseEnter={() => setProjectsOpen(true)}
                >
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all origin-top-left ${
                    projectsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  }`}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  {item.submenu?.map((subItem) => (
                    <NavLink
                      key={subItem.name}
                      to={subItem.path}
                      className={({ isActive }) => 
                        `block px-4 py-2 text-sm hover:bg-gray-50 ${
                          isActive ? 'bg-gray-50 text-primary' : 'text-gray-700'
                        }`
                      }
                      onClick={() => setProjectsOpen(false)}
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? "text-primary after:w-full" : "text-foreground"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          ))}
          <button
            onClick={toggleSearch}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Button 
            className="ml-2 px-6 py-2 bg-primary hover:bg-primary/90 transition-all text-white"
            onClick={handleGetQuote}
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleSearch}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 animate-in fade-in slide-in-from-top-5 z-50">
          <form onSubmit={handleSearch} className="container flex gap-2">
            <Input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
              autoFocus
            />
            <Button type="submit">Search</Button>
            <Button variant="outline" type="button" onClick={toggleSearch}>Cancel</Button>
          </form>
        </div>
      )}

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            item.hasSubmenu ? (
              <div key={item.name} className="space-y-2">
                <button 
                  className="text-lg font-medium transition-all flex items-center gap-1"
                  onClick={toggleProjectsMenu}
                >
                  {item.name}
                  <ChevronDown size={16} className={`transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {projectsOpen && (
                  <div className="pl-4 space-y-2">
                    {item.submenu?.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className={({ isActive }) => 
                          `block py-1 text-base ${
                            isActive ? 'text-primary' : 'text-gray-700'
                          }`
                        }
                        onClick={() => {
                          setProjectsOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `text-lg font-medium transition-all ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            )
          ))}
          <Button 
            className="mt-4 w-full py-6"
            onClick={() => {
              handleGetQuote();
              setMobileMenuOpen(false);
            }}
          >
            Get Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
