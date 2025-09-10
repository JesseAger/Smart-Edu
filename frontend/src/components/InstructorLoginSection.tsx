import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const InstructorLoginSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">Instructor Portal</CardTitle>
            <CardDescription className="text-lg">
              Instructors can manage their courses, upload content, review assignments, and track student progress.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Upload course materials, grade assignments, monitor student performance, 
                and generate progress reports for your classes.
              </p>
              <Button asChild>
                <Link to="/instructor-login">Instructor Login</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstructorLoginSection;