import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our programs? Want to learn more about enrollment? 
                We're here to help you start your tech career journey.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Nairobi City,<br />
                    Kenya<br />
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">info@uptownschool.edu</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Program Interest</label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option>Select a program</option>
                    <option>Data Science</option>
                    <option>Software Development</option>
                    <option>Cyber Security</option>
                    <option>System DevOps</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea placeholder="Tell us about your interest in our programs..." rows={4} />
                </div>
                
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;