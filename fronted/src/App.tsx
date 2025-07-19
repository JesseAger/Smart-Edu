import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserTypeSelection from "./pages/auth/UserTypeSelection";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import Curriculum from "./pages/student/Curriculum";
import Assignments from "./pages/student/Assignments";
import Progress from "./pages/student/Progress";

// Instructor Pages
import InstructorDashboard from "./pages/instructor/Dashboard";
import InstructorStudents from "./pages/instructor/Students";

// Layouts
import StudentLayout from "./pages/student/StudentLayout";
import InstructorLayout from "./pages/instructor/InstructorLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<UserTypeSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="progress" element={<Progress />} />
          </Route>
          
          {/* Instructor Routes */}
          <Route path="/instructor" element={<InstructorLayout />}>
            <Route path="dashboard" element={<InstructorDashboard />} />
            <Route path="students" element={<InstructorStudents />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
