import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">About Uptown School</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Uptown School is a premier tech bootcamp dedicated to empowering the next generation of technology professionals. 
              We specialize in comprehensive training programs that bridge the gap between theoretical knowledge and practical industry skills.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p>
                  To provide accessible, high-quality technology education that transforms lives and careers. 
                  We believe in hands-on learning, industry-relevant curriculum, and personalized support for every student.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
                <p>
                  To be the leading tech education provider that connects aspiring professionals with the skills 
                  and knowledge needed to excel in the rapidly evolving technology landscape.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Programs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Data Science</h3>
                  <p className="text-sm">Master analytics, machine learning, and data visualization</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Software Development</h3>
                  <p className="text-sm">Full-stack development with modern technologies</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">Cyber Security</h3>
                  <p className="text-sm">Protect digital assets and secure networks</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-foreground mb-2">System DevOps</h3>
                  <p className="text-sm">Infrastructure automation and deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;