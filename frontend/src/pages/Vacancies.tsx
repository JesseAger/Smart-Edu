import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Vacancies = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Data Science Instructor",
      department: "Academic",
      type: "Full-time",
      location: "On-site",
      description: "Lead our data science program and mentor students in machine learning, statistics, and data visualization.",
      requirements: ["PhD/Masters in Data Science or related field", "5+ years industry experience", "Teaching experience preferred"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Software Development Instructor",
      department: "Academic",
      type: "Full-time",
      location: "Hybrid",
      description: "Teach full-stack development, guide students through practical projects, and provide career mentorship.",
      requirements: ["Bachelor's degree in Computer Science", "3+ years development experience", "Knowledge of React, Node.js, databases"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Cyber Security Instructor",
      department: "Academic",
      type: "Part-time",
      location: "On-site",
      description: "Deliver cybersecurity curriculum covering network security, ethical hacking, and security protocols.",
      requirements: ["Security certifications (CISSP, CEH, etc.)", "Industry experience in cybersecurity", "Strong communication skills"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Student Success Coordinator",
      department: "Student Services",
      type: "Full-time",
      location: "On-site",
      description: "Support student engagement, track academic progress, and coordinate career services.",
      requirements: ["Bachelor's degree", "Experience in education or student services", "Strong organizational skills"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "DevOps Engineer & Instructor",
      department: "Academic",
      type: "Full-time",
      location: "Hybrid",
      description: "Teach DevOps practices and maintain our technical infrastructure for hands-on learning.",
      requirements: ["Experience with AWS, Docker, Kubernetes", "CI/CD pipeline expertise", "Teaching or mentoring experience"],
      posted: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Career Opportunities</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Join our team of passionate educators and help shape the next generation of tech professionals.
          </p>
          
          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">{job.title}</h2>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge variant="outline">{job.location}</Badge>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{job.posted}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Requirements:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Button>Apply Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Don't see the right position?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button>Submit General Application</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vacancies;