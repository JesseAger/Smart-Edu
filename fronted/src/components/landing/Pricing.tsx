import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for small bootcamps and learning centers",
    features: [
      "Up to 50 students",
      "Basic analytics",
      "Email support",
      "Core features",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    description: "Ideal for growing institutions and academies",
    features: [
      "Up to 200 students",
      "Advanced analytics",
      "Priority support",
      "All features included",
      "Custom integrations",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large institutions with complex needs",
    features: [
      "Unlimited students",
      "Custom analytics",
      "24/7 dedicated support",
      "White-label solution",
      "Advanced security",
      "Custom development"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent
            <span className="bg-gradient-primary bg-clip-text text-transparent"> pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your institution. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg ${
                plan.popular ? 'ring-2 ring-primary bg-gradient-subtle' : 'bg-card/50'
              } backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/register" className="block">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:bg-gradient-dark shadow-glow' 
                        : 'bg-gradient-primary hover:bg-gradient-dark'
                    }`}
                    size="lg"
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}