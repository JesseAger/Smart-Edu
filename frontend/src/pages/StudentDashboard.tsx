import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BookOpen, FileText, User, DollarSign, Award, Bell } from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>

        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Modules
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="finances" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Finances
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certificates
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Science Bootcamp - Modules</CardTitle>
                <CardDescription>Track your progress through course modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Introduction to Python", completed: true, progress: 100 },
                    { name: "Data Analysis with Pandas", completed: true, progress: 100 },
                    { name: "Machine Learning Basics", completed: false, progress: 60 },
                    { name: "Advanced ML Algorithms", completed: false, progress: 0 },
                  ].map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{module.name}</h4>
                        <div className="flex items-center gap-4 mt-2">
                          <Progress value={module.progress} className="w-48" />
                          <span className="text-sm text-muted-foreground">{module.progress}%</span>
                          {module.completed && <Badge variant="default">Completed</Badge>}
                        </div>
                      </div>
                      <Button variant={module.progress > 0 ? "default" : "outline"}>
                        {module.progress > 0 ? "Continue" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assignments</CardTitle>
                <CardDescription>View and submit your course assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Python Data Analysis Project", due: "2024-01-15", status: "pending", grade: null },
                    { title: "ML Model Implementation", due: "2024-01-10", status: "submitted", grade: "A" },
                    { title: "Statistics Report", due: "2024-01-05", status: "graded", grade: "B+" },
                  ].map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">Due: {assignment.due}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={assignment.status === "pending" ? "destructive" : "default"}>
                          {assignment.status}
                        </Badge>
                        {assignment.grade && (
                          <Badge variant="secondary">{assignment.grade}</Badge>
                        )}
                        <Button variant="outline" size="sm">
                          {assignment.status === "pending" ? "Submit" : "View"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information and profile photo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-muted rounded-full"></div>
                    <Button variant="outline">Upload Photo</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <p className="text-lg">John Doe</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-lg">john.doe@email.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Student ID</label>
                      <p className="text-lg">UTS-2024-001</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Course</label>
                      <p className="text-lg">Data Science Bootcamp</p>
                    </div>
                  </div>
                  <Button>Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finances" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>Track your payments and financial status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold">Total Fee</h4>
                    <p className="text-2xl font-bold text-primary">$2,500</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold">Paid</h4>
                    <p className="text-2xl font-bold text-green-600">$1,250</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold">Remaining</h4>
                    <p className="text-2xl font-bold text-orange-600">$1,250</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Payment History</h4>
                  {[
                    { date: "2024-01-01", amount: "$1,250", type: "Initial Payment", status: "Completed" },
                    { date: "2024-03-01", amount: "$1,250", type: "Final Payment", status: "Pending" },
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h5 className="font-medium">{payment.type}</h5>
                        <p className="text-sm text-muted-foreground">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{payment.amount}</p>
                        <Badge variant={payment.status === "Completed" ? "default" : "secondary"}>
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificates</CardTitle>
                <CardDescription>View your completed course certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">No certificates available yet</p>
                  <p className="text-sm text-muted-foreground">Complete your course to earn your certificate</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay updated with course announcements and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "New Module Available", message: "Machine Learning Basics module is now available", time: "2 hours ago", type: "info" },
                    { title: "Assignment Due", message: "Python Data Analysis Project due in 3 days", time: "1 day ago", type: "warning" },
                    { title: "Course Resource Added", message: "New reading material added to your course", time: "3 days ago", type: "info" },
                  ].map((notification, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium">{notification.title}</h5>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
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

export default StudentDashboard;