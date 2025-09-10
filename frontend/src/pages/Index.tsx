import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdminLoginSection from "@/components/AdminLoginSection";
import InstructorLoginSection from "@/components/InstructorLoginSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AdminLoginSection />
      <InstructorLoginSection />
    </div>
  );
};

export default Index;
