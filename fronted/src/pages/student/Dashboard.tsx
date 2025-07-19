import { useState } from "react";
import { BookOpen, CheckCircle, Clock, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function StudentDashboard() {
  const [user] = useState({
    name: "Alex Johnson",
    avatar: "/placeholder.svg",
    currentCourse: "Full Stack Web Development Bootcamp",
    overallProgress: 68
  });

  const currentModules = [
    {
      id: 1,
      title: "React Fundamentals",
      progress: 85,
      status: "in-progress",
      lessons: 12,
      completedLessons: 10,
      nextLesson: "React Hooks Deep Dive"
    },
    {
      id: 2,
      title: "Node.js & Express",
      progress: 45,
      status: "in-progress",
      lessons: 15,
      completedLessons: 7,
      nextLesson: "Building REST APIs"
    },
    {
      id: 3,
      title: "Database Design",
      progress: 0,
      status: "not-started",
      lessons: 10,
      completedLessons: 0,
      nextLesson: "Introduction to SQL"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "assignment",
      title: "React Todo App",
      action: "Submitted",
      score: 95,
      date: "2 hours ago"
    },
    {
      id: 2,
      type: "lesson",
      title: "useState and useEffect",
      action: "Completed",
      date: "1 day ago"
    },
    {
      id: 3,
      type: "assignment",
      title: "JavaScript ES6 Quiz",
      action: "Graded",
      score: 88,
      date: "2 days ago"
    }
  ];

  const stats = [
    {
      title: "Modules Completed",
      value: "3",
      total: "8",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Assignments Submitted",
      value: "12",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Average Score",
      value: "92%",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Study Streak",
      value: "15 days",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-primary rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
        <p className="text-blue-100 mb-4">{user.currentCourse}</p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm mb-2">
              <span>Overall Progress</span>
              <span>{user.overallProgress}%</span>
            </div>
            <Progress value={user.overallProgress} className="bg-blue-200" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">
                    {stat.value}
                    {stat.total && <span className="text-sm text-muted-foreground">/{stat.total}</span>}
                  </p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Continue Learning */}
        <Card>
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentModules.map((module) => (
              <div key={module.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{module.title}</h3>
                  <Badge variant={
                    module.status === "in-progress" ? "default" :
                    module.status === "completed" ? "secondary" : "outline"
                  }>
                    {module.status === "in-progress" ? "In Progress" :
                     module.status === "completed" ? "Completed" : "Not Started"}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{module.completedLessons}/{module.lessons} lessons</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} />
                </div>

                {module.status !== "completed" && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Next: {module.nextLesson}
                    </span>
                    <Button size="sm">Continue</Button>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest learning activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {activity.type === "assignment" ? (
                      <BookOpen className="w-5 h-5 text-primary" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{activity.action}</span>
                      {activity.score && (
                        <>
                          <span>•</span>
                          <span className="font-medium text-green-600">{activity.score}%</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}