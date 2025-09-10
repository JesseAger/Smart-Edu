import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Uptown School
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Master the future of technology with our comprehensive bootcamp programs. 
          Learn Data Science, Software Development, Cyber Security, and System DevOps 
          from industry experts and transform your career in the tech industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/programs">Explore Programs</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link to="/apply">Apply Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;