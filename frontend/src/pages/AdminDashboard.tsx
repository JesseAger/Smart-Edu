import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, GraduationCap, DollarSign, Star, UserX, AlertTriangle, Eye, CheckIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Index from "./Index";
import CreateInstructorForm from "./createInstructor";
import { text } from "stream/consumers";

const API_BASE = "http://127.0.0.1:8000/api";

interface Application {
  id: number;
  first_name: String;
  last_name: String;
  course: string;
  is_paid: boolean;
  submitted_at: string;
  application_status: boolean;
  payment_method: string;
}

interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  cost: number;
  skills: string[];
}

interface Instructor{
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  department: string;
  status: boolean;

}

const AdminDashboard = () => {
  const [application, setApplication] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<Instructor[]>([]);

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

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(`${API_BASE}/courses/`);
        const data = await res.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
    if (loading) {
      setLoading(true);
    }
  }, []);


  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await fetch(`${API_BASE}/get-instructors/`);
        const data = await res.json();
        setActive(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstructor();
    if (loading) {
      setLoading(true);
    }
  }, []);


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
              <div className="text-2xl font-bold">
                {Array.isArray(active) ? active.length : 0}
              </div>
              <p className="text-xs text-muted-foreground">+2 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Array.isArray(programs) ? programs.length : 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Loading...
              </p>
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
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="graduation">Graduation Approvals</TabsTrigger>
          </TabsList>


        <TabsContent value="applications" className="space-y-4">
          <Card>
                <CardHeader>
                  <CardTitle>Student Applictions Management</CardTitle>
                  <CardDescription>Manage Applications to Active Courses made by Students</CardDescription>
                </CardHeader>
                <CardContent>
                  {application.map((application, index)=>(
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{application.last_name} {application.first_name}</p>
                        <p className="text-sm text-muted-foreground">
                          Date: {application.submitted_at} | {application.course}
                        </p>
                        <div className="flex gap-2">
                          <Badge
                            variant={
                              application.application_status === true
                                ? "default"
                                : application.application_status === false
                                
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {application.application_status}
                          </Badge>
                          <Badge
                            variant={
                              application.is_paid === true ? "default" : "outline"
                            }
                          >
                            {application.payment_method}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Application Details
                        </Button>
                        {/* <Button variant="outline" size="sm">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          Approve Application
                        </Button> */}
                        <Button variant="destructive" size="sm">
                          <UserX className="h-4 w-4 mr-1" />
                          Reject Application
                        </Button>
                        {application.application_status === false && (
                          <Button size="sm">
                            <CheckIcon className="h-4 w-4 mr-1" />
                            Approve Application
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
              </CardContent>
          </Card>

        </TabsContent>


          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage student accounts, fees, and graduations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">

                      {application.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{student.first_name} {student.last_name} </p>
                        <p className="text-sm text-muted-foreground">
                          Email: {student.email} | {student.course}
                        </p>
                        <div className="flex gap-2">
                          <Badge
                            variant={
                              student.application_status === true
                                ? "default"
                                : student.application_status === false
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {student.application_status}
                          </Badge>
                          <Badge
                            variant={
                              student.payment_method === "Paid" ? "default" : "outline"
                            }
                          >
                            {student.payment_method}
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
                        {student.application_status=== true && (
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
                  <Button className="w-full" onClick={() => setIsOpen(true)}>
                    Add New Instructor
                  </Button>

                  {isOpen && (
                    <div
                      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className="bg-white rounded-2xl shadow-lg p-6 w-96 transform transition-all duration-300 animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <h2 className="text-xl font-semibold mb-4">Add Instructor</h2>
                        <CreateInstructorForm onSubmitSuccess={() => setIsOpen(false)} />
                        <div className="flex justify-end mt-4">
                          <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {active.map((instructor, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="space-y-1">
                          <p className="font-medium">{instructor.title} {instructor.last_name}</p>
                          <p className="text-sm text-muted-foreground">
                            Courses: {instructor.department} | Students:{" "}
                            {Array.isArray(application) ? application.length : 0}
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

          {/* course management  */}
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Monitor course enrollments and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-3" asChild>
                  <a href="#">Add New Program</a>
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programs.map((program, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                        <CardDescription>Instructor: Null</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm">Enrolled Students: Null</p>
                          <p className="text-sm">Duration: {program.duration}</p>
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
                    {
                      name: "Sarah Wilson",
                      course: "DevOps",
                      regNo: "DO2024001",
                      completionDate: "2024-12-15",
                    },
                    {
                      name: "Mark Taylor",
                      course: "Data Science",
                      regNo: "DS2024015",
                      completionDate: "2024-12-20",
                    },
                    {
                      name: "Lisa Brown",
                      course: "Cyber Security",
                      regNo: "CS2024008",
                      completionDate: "2024-12-18",
                    },
                  ].map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Reg: {student.regNo} | {student.course} | Completed:{" "}
                          {student.completionDate}
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
