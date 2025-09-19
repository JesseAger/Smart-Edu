import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, DollarSign, HandCoins } from "lucide-react";

const API_BASE = "http://127.0.0.1:8000/api";

interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  cost: string; 
  skills: string[];
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch(`${API_BASE}/courses/`);
        const data = await response.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading programs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive tech bootcamp programs designed to prepare you for high-demand careers in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HandCoins className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{program.cost}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.modules?.map((module, index) => (
                      <Badge key={index} variant="secondary">
                        {module}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link to={`/apply/${program.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
