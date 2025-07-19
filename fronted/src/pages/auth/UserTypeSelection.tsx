import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserTypeSelection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to SmartEduTrack</h1>
          <p className="text-muted-foreground">Choose your account type to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Card */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Student Portal</CardTitle>
              <CardDescription>
                Access your curriculum, submit assignments, and track your learning progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Access course materials and lessons</li>
                <li>• Submit assignments and projects</li>
                <li>• View grades and feedback</li>
                <li>• Track your learning progress</li>
              </ul>
              <div className="space-y-2">
                <Link to="/register?type=student">
                  <Button className="w-full bg-gradient-primary hover:bg-gradient-dark">
                    Sign Up as Student
                  </Button>
                </Link>
                <Link to="/login?type=student">
                  <Button variant="outline" className="w-full">
                    Login as Student
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Instructor Card */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl">Instructor Portal</CardTitle>
              <CardDescription>
                Manage students, review assignments, and track class progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Manage student enrollments</li>
                <li>• Review and grade assignments</li>
                <li>• Monitor student progress</li>
                <li>• Create course content</li>
              </ul>
              <div className="space-y-2">
                <Link to="/register?type=instructor">
                  <Button className="w-full bg-gradient-primary hover:bg-gradient-dark">
                    Sign Up as Instructor
                  </Button>
                </Link>
                <Link to="/login?type=instructor">
                  <Button variant="outline" className="w-full">
                    Login as Instructor
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}