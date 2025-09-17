import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Users, BookOpen, FileText, BarChart3, Download } from "lucide-react";

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Instructor Dashboard</h1>
          <p className="text-muted-foreground">Manage your courses, students, and content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">147</div>
              <p className="text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Data Science, DevOps, Python</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Assignments to grade</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Performance</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">Student success rate</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Student Progress</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: "Data Science", 
                  students: 65, 
                  modules: 12, 
                  completion: 78,
                  assignments: 8
                },
                { 
                  name: "DevOps Engineering", 
                  students: 50, 
                  modules: 10, 
                  completion: 65,
                  assignments: 6
                },
                { 
                  name: "Python Programming", 
                  students: 32, 
                  modules: 8, 
                  completion: 82,
                  assignments: 5
                }
              ].map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.students} enrolled students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Course Progress</span>
                        <span>{course.completion}%</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Modules</p>
                        <p className="font-medium">{course.modules}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Assignments</p>
                        <p className="font-medium">{course.assignments}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Course Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Progress Overview</CardTitle>
                <CardDescription>Monitor individual student performance across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", course: "Data Science", progress: 85, lastActive: "2 hours ago", grade: "A" },
                    { name: "Jane Smith", course: "DevOps", progress: 72, lastActive: "1 day ago", grade: "B+" },
                    { name: "Mike Johnson", course: "Python", progress: 95, lastActive: "30 minutes ago", grade: "A+" },
                    { name: "Sarah Wilson", course: "Data Science", progress: 68, lastActive: "3 days ago", grade: "B" }
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.course} • Last active: {student.lastActive}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Progress:</span>
                            <Progress value={student.progress} className="w-20 h-2" />
                            <span className="text-sm">{student.progress}%</span>
                          </div>
                          <Badge variant="outline">{student.grade}</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Assignment Management</CardTitle>
                <CardDescription>Review and grade student submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Pending Reviews</h3>
                    <Badge variant="destructive">23 pending</Badge>
                  </div>
                  {[
                    { 
                      title: "Machine Learning Project", 
                      course: "Data Science", 
                      submissions: 15, 
                      dueDate: "2024-01-15",
                      status: "Active"
                    },
                    { 
                      title: "Docker Container Setup", 
                      course: "DevOps", 
                      submissions: 8, 
                      dueDate: "2024-01-12",
                      status: "Overdue"
                    },
                    { 
                      title: "Web Scraping Script", 
                      course: "Python", 
                      submissions: 12, 
                      dueDate: "2024-01-18",
                      status: "Active"
                    }
                  ].map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {assignment.course} • Due: {assignment.dueDate} • {assignment.submissions} submissions
                        </p>
                        <Badge variant={assignment.status === "Active" ? "default" : "destructive"}>
                          {assignment.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review Submissions
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download All
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Upload and manage course materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Content
                    </Button>
                    <Button variant="outline">
                      Create Assignment
                    </Button>
                    <Button variant="outline">
                      Schedule Live Session
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Recent Uploads</h3>
                    {[
                      { name: "Week 5: Advanced Statistics", type: "Video", course: "Data Science", date: "2024-01-10" },
                      { name: "Kubernetes Deployment Guide", type: "PDF", course: "DevOps", date: "2024-01-08" },
                      { name: "Python Functions Workshop", type: "Video", course: "Python", date: "2024-01-05" }
                    ].map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium">{content.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {content.type} • {content.course} • {content.date}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Analytics</CardTitle>
                  <CardDescription>Student enrollment trends by course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { course: "Data Science", enrolled: 65, completed: 45, dropRate: "8%" },
                      { course: "DevOps", enrolled: 50, completed: 38, dropRate: "12%" },
                      { course: "Python", enrolled: 32, completed: 28, dropRate: "5%" }
                    ].map((data, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{data.course}</span>
                          <span className="text-sm text-muted-foreground">Drop rate: {data.dropRate}</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Enrolled: {data.enrolled}</span>
                          <span>Completed: {data.completed}</span>
                        </div>
                        <Progress value={(data.completed / data.enrolled) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Student performance across courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Average Grade</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Assignment Completion</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Student Satisfaction</span>
                        <span className="font-medium">4.6/5</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Download detailed analytics and performance reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Student Progress Report
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Course Analytics Report
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Performance Summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstructorDashboard;