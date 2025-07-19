import { Users, BarChart3, MessageSquare, FileText, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student profiles, enrollment tracking, and class organization in one central hub."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time insights into student progress with interactive charts and detailed reporting."
  },
  {
    icon: MessageSquare,
    title: "Smart Communication",
    description: "Streamlined messaging system for seamless instructor-student interactions."
  },
  {
    icon: FileText,
    title: "Results Management",
    description: "Efficient grade entry, progress tracking, and automated report generation."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with FERPA compliance and data protection."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with instant data sync and responsive design."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to manage your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> institution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed specifically for bootcamps and learning institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}