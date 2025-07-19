import { useState } from "react";
import { Users, BookOpen, Award, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function InstructorDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "127",
      change: "+12",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Assignments",
      value: "8",
      change: "+2",
      icon: BookOpen,
      color: "text-green-600"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "+5",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      title: "Average Score",
      value: "87%",
      change: "+3%",
      icon: Award,
      color: "text-purple-600"
    }
  ];

  const classPerformance = [
    { class: "Batch A", students: 45, avgScore: 92, completion: 78 },
    { class: "Batch B", students: 38, avgScore: 87, completion: 82 },
    { class: "Batch C", students: 44, avgScore: 89, completion: 75 }
  ];

  const recentActivity = [
    {
      id: 1,
      student: "Alice Johnson",
      action: "Submitted React Todo App",
      module: "React Fundamentals",
      time: "2 hours ago",
      needsReview: true
    },
    {
      id: 2,
      student: "Bob Smith",
      action: "Completed Node.js Module",
      module: "Backend Development",
      time: "4 hours ago",
      needsReview: false
    },
    {
      id: 3,
      student: "Carol Davis",
      action: "Submitted API Project",
      module: "REST APIs",
      time: "6 hours ago",
      needsReview: true
    },
    {
      id: 4,
      student: "David Wilson",
      action: "Started Database Module",
      module: "Database Design",
      time: "1 day ago",
      needsReview: false
    }
  ];

  const assignmentStatus = [
    {
      title: "React Component Library",
      dueDate: "Jan 25, 2024",
      submitted: 34,
      total: 45,
      needsGrading: 12
    },
    {
      title: "Express API Development",
      dueDate: "Jan 30, 2024",
      submitted: 18,
      total: 38,
      needsGrading: 8
    },
    {
      title: "Database Schema Design",
      dueDate: "Feb 5, 2024",
      submitted: 5,
      total: 44,
      needsGrading: 2
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-primary rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Dr. Sarah Wilson!</h1>
        <p className="text-blue-100">You have 23 assignments waiting for review and 5 students need attention.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} this week</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Class Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Class Performance Overview</CardTitle>
            <CardDescription>Average scores and completion rates by batch</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={classPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="class" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avgScore" fill="#3b82f6" />
                <Bar dataKey="completion" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Student Activity</CardTitle>
            <CardDescription>Latest submissions and completions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {activity.needsReview ? (
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.module}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                    {activity.needsReview && (
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        Review
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignment Status */}
      <Card>
        <CardHeader>
          <CardTitle>Assignment Status</CardTitle>
          <CardDescription>Track submission rates and pending reviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignmentStatus.map((assignment, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{assignment.submitted}/{assignment.total} submitted</p>
                    {assignment.needsGrading > 0 && (
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        {assignment.needsGrading} need grading
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Submission Progress</span>
                    <span>{Math.round((assignment.submitted / assignment.total) * 100)}%</span>
                  </div>
                  <Progress value={(assignment.submitted / assignment.total) * 100} />
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <Button size="sm" variant="outline">View Submissions</Button>
                  {assignment.needsGrading > 0 && (
                    <Button size="sm">Grade Assignments</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}