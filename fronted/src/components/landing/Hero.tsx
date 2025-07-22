import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Start Tracking{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smarter
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empower your educational institution with comprehensive student management, 
                performance tracking, and seamless communication tools.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-primary hover:bg-gradient-dark shadow-glow">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-glow" />
            {/* <img
              src={heroImage}
              alt="SmartEduTrack Dashboard"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            /> */}
            <p>hero_img</p>
          </div>
        </div>
      </div>
    </section>
  );
}