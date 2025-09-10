import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              Uptown School
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/programs" className="text-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/vacancies" className="text-foreground hover:text-primary transition-colors">
                Vacancies
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/student-login">Student Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;