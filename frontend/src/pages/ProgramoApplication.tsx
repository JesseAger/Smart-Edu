import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const programs = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Learn modern web development with React, Node.js, and databases",
    duration: "12 weeks",
    cost: "$2,999",
    skills: ["React", "Node.js", "MongoDB", "Express", "HTML/CSS", "JavaScript"]
  },
  {
    id: "2", 
    title: "Data Science & Analytics",
    description: "Master data analysis, machine learning, and statistical modeling",
    duration: "16 weeks",
    cost: "$3,499",
    skills: ["Python", "Machine Learning", "SQL", "Tableau", "Statistics", "Pandas"]
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Build native iOS and Android applications",
    duration: "14 weeks", 
    cost: "$3,299",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "UI/UX", "App Store"]
  },
  {
    id: "4",
    title: "Cybersecurity Fundamentals",
    description: "Learn ethical hacking, network security, and digital forensics",
    duration: "10 weeks",
    cost: "$2,799", 
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Assessment", "Compliance"]
  }
];

const countries = [
  "Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan", "Ethiopia", "Somalia", "Other"
];

const ProgramApplication = () => {
  const { programId } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const program = programs.find(p => p.id === programId);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    motivation: "",
    experience: "",
    paymentMethod: ""
  });

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Program Not Found</CardTitle>
              <CardDescription>The program you're looking for doesn't exist.</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // API call to submit application
      const applicationData = {
        ...formData,
        programId: program.id,
        programTitle: program.title,
        programCost: program.cost,
        submittedAt: new Date().toISOString()
      };

      // Replace with actual API endpoint
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData)
      });

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "We'll review your application and get back to you soon!",
        });
        
        // Process payment if needed
        if (paymentMethod) {
          await handlePayment();
        }
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePayment = async () => {
    try {
      const paymentData = {
        programId: program.id,
        amount: program.cost,
        paymentMethod: paymentMethod,
        studentEmail: formData.email,
        studentPhone: formData.phone
      };

      // Replace with actual payment API endpoint
      const response = await fetch('/api/payments/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });

      const data = await response.json();
      
      if (paymentMethod === 'mpesa') {
        // Handle M-Pesa payment flow
        toast({
          title: "M-Pesa Payment",
          description: "Please check your phone for the payment prompt.",
        });
      } else {
        // Redirect to Stripe or other card payment processor
        window.location.href = data.paymentUrl;
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Program Info Header */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">{program.title}</CardTitle>
              <CardDescription className="text-lg">{program.description}</CardDescription>
              <div className="flex gap-4 mt-4">
                <Badge variant="secondary">Duration: {program.duration}</Badge>
                <Badge variant="outline">Cost: {program.cost}</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {program.skills.map((skill) => (
                  <Badge key={skill} variant="default">{skill}</Badge>
                ))}
              </div>
            </CardHeader>
          </Card>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Fill out the form below to apply for {program.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Background Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Background Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                        placeholder="Tell us about your motivation and goals..."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">Previous experience (if any)</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder="Describe any relevant experience or education..."
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Payment Options */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mpesa" id="mpesa" />
                      <Label htmlFor="mpesa">M-Pesa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={isSubmitting} className="flex-1">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  {paymentMethod && (
                    <Button type="button" variant="outline" onClick={handlePayment}>
                      Proceed to Payment
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramApplication;