import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, Car, Wrench } from "lucide-react";

export default function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
    { name: "Parts", path: "/parts" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fbd3eb5f66ce348d78b8b8fc379cafda2%2Fba02f0849c824eb984be01149c7f11e8?format=webp&width=800"
              alt="Check before go logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-12"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Check before go</h1>
            <p className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">Pre-Delivery Inspection</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 transform relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === item.path
                  ? "text-primary after:w-full"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button size="sm" className="hidden sm:flex transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
            <Phone className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
            Get Quote
          </Button>
          <Button size="sm" variant="outline" className="md:hidden transition-all duration-300 hover:scale-105 hover:shadow-md transform">
            <Wrench className="h-4 w-4 transition-transform duration-300 hover:rotate-180" />
          </Button>
        </div>
      </div>
    </header>
  );
}
