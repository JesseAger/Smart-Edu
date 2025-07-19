import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Director of Education",
    company: "TechBootcamp Pro",
    content: "SmartEduTrack transformed how we manage our students. The analytics are incredible and save us hours every week.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9ac?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Lead Instructor",
    company: "CodeAcademy Plus",
    content: "The performance tracking features help us identify struggling students early. It's been a game-changer for our retention rates.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Academic Coordinator",
    company: "DataScience Institute",
    content: "Finally, a platform that actually understands education. The communication tools alone have improved our student satisfaction scores.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by leading
            <span className="bg-gradient-primary bg-clip-text text-transparent"> educators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how institutions worldwide are transforming their student management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                
                <blockquote className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}