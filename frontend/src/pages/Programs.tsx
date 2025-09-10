import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, DollarSign } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Data Science Bootcamp",
      description: "Master data analysis, machine learning, and statistical modeling with Python and R. Learn to extract insights from complex datasets and build predictive models.",
      duration: "6 months",
      cost: "$2,500",
      skills: ["Python", "R", "Machine Learning", "SQL", "Tableau", "Statistics"]
    },
    {
      id: 2,
      title: "Software Development",
      description: "Full-stack web development using modern technologies. Build responsive web applications and learn both frontend and backend development.",
      duration: "8 months",
      cost: "$3,000",
      skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "MongoDB", "Git"]
    },
    {
      id: 3,
      title: "Cyber Security",
      description: "Comprehensive cybersecurity training covering network security, ethical hacking, risk assessment, and security compliance.",
      duration: "5 months",
      cost: "$2,800",
      skills: ["Network Security", "Penetration Testing", "Risk Assessment", "Compliance", "Incident Response"]
    },
    {
      id: 4,
      title: "System DevOps",
      description: "Learn infrastructure automation, continuous integration/deployment, cloud platforms, and container orchestration.",
      duration: "4 months",
      cost: "$2,200",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Terraform"]
    }
  ];

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
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{program.cost}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
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