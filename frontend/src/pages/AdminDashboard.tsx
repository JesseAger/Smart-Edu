import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, GraduationCap, DollarSign, Star, UserX, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import Index from "./Index";
import CreateInstructor from "./createInstructor";
import { Link } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000/api";

interface Application{
  id: number;
  course: string;
  is_paid: boolean;
  submitted_at: string;
  application_status: boolean;
}


const AdminDashboard = () => {

  const [application, setApplication] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`${API_BASE}/applicants/`);
        const data = await response.json();
        setApplication(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);


  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p className="text-lg">Loading programs...</p>
  //     </div>
  //   );
  // }


  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage instructors, students, and system analytics</p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

              <CardContent>
              <div className="text-2xl font-bold"> 
              {Array.isArray(application) ? application.length : 0}
              
              </div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>

          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Instructors</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+2 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Data Science, Software Dev, Cyber Security, DevOps</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$124,000</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="students" className="space-y-4">
          <TabsList>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="graduation">Graduation Approvals</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage student accounts, fees, and graduations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", course: "Data Science", regNo: "DS2024001", status: "Active", payment: "Paid" },
                    { name: "Jane Smith", course: "Software Development", regNo: "SD2024001", status: "Active", payment: "Pending" },
                    { name: "Mike Johnson", course: "Cyber Security", regNo: "CS2024001", status: "Suspended", payment: "Paid" },
                    { name: "Sarah Wilson", course: "DevOps", regNo: "DO2024001", status: "Ready for Graduation", payment: "Paid" }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">Reg: {student.regNo} | {student.course}</p>
                        <div className="flex gap-2">
                          <Badge variant={student.status === "Active" ? "default" : student.status === "Suspended" ? "destructive" : "secondary"}>
                            {student.status}
                          </Badge>
                          <Badge variant={student.payment === "Paid" ? "default" : "outline"}>
                            {student.payment}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Award Stars
                        </Button>
                        <Button variant="outline" size="sm">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Suspend
                        </Button>
                        <Button variant="destructive" size="sm">
                          <UserX className="h-4 w-4 mr-1" />
                          Expel
                        </Button>
                        {student.status === "Ready for Graduation" && (
                          <Button size="sm">
                            <GraduationCap className="h-4 w-4 mr-1" />
                            Approve Graduation
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Instructor Management</CardTitle>
                <CardDescription>Add, remove, and manage instructor accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" asChild> 
                    <a href="add-instructor">
                    Add New Instructor 
                    </a>
                    </Button>
                  <div className="space-y-4">
                    {[
                      { name: "Dr. Emily Clark", courses: ["Data Science", "DevOps"], students: 45, status: "Active" },
                      { name: "Prof. David Lee", courses: ["Software Development"], students: 38, status: "Active" },
                      { name: "Ms. Rachel Green", courses: ["Cyber Security"], students: 32, status: "Active" }
                    ].map((instructor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium">{instructor.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Courses: {instructor.courses.join(", ")} | Students: {instructor.students}
                          </p>
                          <Badge variant="default">{instructor.status}</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-1" />
                            Award Stars
                          </Button>
                          <Button variant="destructive" size="sm">
                            <UserX className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Monitor course enrollments and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Data Science", enrolled: 65, instructor: "Dr. Emily Clark", duration: "6 months" },
                    { name: "Software Development", enrolled: 82, instructor: "Prof. David Lee", duration: "8 months" },
                    { name: "Cyber Security", enrolled: 48, instructor: "Ms. Rachel Green", duration: "7 months" },
                    { name: "DevOps", enrolled: 50, instructor: "Dr. Emily Clark", duration: "5 months" }
                  ].map((course, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <CardDescription>Instructor: {course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm">Enrolled Students: {course.enrolled}</p>
                          <p className="text-sm">Duration: {course.duration}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
                <CardDescription>Performance metrics and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Enrollment Trends</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Data Science</span>
                        <span>65 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Software Development</span>
                        <span>82 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cyber Security</span>
                        <span>48 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DevOps</span>
                        <span>50 students</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Payment Status</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Fully Paid</span>
                        <span>180 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Partial Payment</span>
                        <span>45 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pending</span>
                        <span>20 students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="graduation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Graduation Approvals</CardTitle>
                <CardDescription>Students ready for graduation approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Wilson", course: "DevOps", regNo: "DO2024001", completionDate: "2024-12-15" },
                    { name: "Mark Taylor", course: "Data Science", regNo: "DS2024015", completionDate: "2024-12-20" },
                    { name: "Lisa Brown", course: "Cyber Security", regNo: "CS2024008", completionDate: "2024-12-18" }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Reg: {student.regNo} | {student.course} | Completed: {student.completionDate}
                        </p>
                      </div>
                      <Button>
                        <GraduationCap className="h-4 w-4 mr-1" />
                        Approve Graduation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;