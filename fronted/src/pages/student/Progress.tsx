import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Award, Clock, CheckCircle } from "lucide-react";

export default function Progress() {
  const overallStats = {
    modulesCompleted: 3,
    totalModules: 8,
    averageScore: 92,
    totalHours: 127,
    streak: 15
  };

  const moduleProgress = [
    { name: "HTML/CSS", completed: 100, score: 95 },
    { name: "JavaScript", completed: 100, score: 88 },
    { name: "React", completed: 75, score: 92 },
    { name: "Node.js", completed: 30, score: 89 },
    { name: "Database", completed: 0, score: 0 },
    { name: "DevOps", completed: 0, score: 0 }
  ];

  const weeklyProgress = [
    { week: "Week 1", hours: 18, score: 85 },
    { week: "Week 2", hours: 22, score: 88 },
    { week: "Week 3", hours: 16, score: 92 },
    { week: "Week 4", hours: 20, score: 89 },
    { week: "Week 5", hours: 25, score: 94 },
    { week: "Week 6", hours: 19, score: 91 },
    { week: "Week 7", hours: 23, score: 96 }
  ];

  const skillDistribution = [
    { name: "Frontend", value: 40, color: "#3b82f6" },
    { name: "Backend", value: 25, color: "#8b5cf6" },
    { name: "Database", value: 15, color: "#06b6d4" },
    { name: "DevOps", value: 10, color: "#10b981" },
    { name: "Testing", value: 10, color: "#f59e0b" }
  ];

  const achievements = [
    {
      title: "First Assignment",
      description: "Completed your first assignment",
      date: "Dec 15, 2023",
      icon: CheckCircle,
      earned: true
    },
    {
      title: "Perfect Score",
      description: "Achieved 100% on an assignment",
      date: "Dec 20, 2023",
      icon: Award,
      earned: true
    },
    {
      title: "Study Streak",
      description: "15 days of continuous learning",
      date: "Jan 10, 2024",
      icon: TrendingUp,
      earned: true
    },
    {
      title: "Speed Learner",
      description: "Complete a module ahead of schedule",
      date: "Not earned",
      icon: Clock,
      earned: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Progress Overview</h1>
          <p className="text-muted-foreground">
            Track your learning journey and celebrate your achievements
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {overallStats.modulesCompleted}/{overallStats.totalModules}
              </p>
              <p className="text-sm text-muted-foreground">Modules Completed</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{overallStats.averageScore}%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{overallStats.totalHours}h</p>
              <p className="text-sm text-muted-foreground">Total Study Time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{overallStats.streak}</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-600">38%</p>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Module Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Module Progress</CardTitle>
            <CardDescription>Your completion status across all modules</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={moduleProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>Study hours and average scores over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="hours" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Skill Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Distribution</CardTitle>
            <CardDescription>Time spent on different areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {skillDistribution.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Milestones you've unlocked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    achievement.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <achievement.icon className={`w-5 h-5 ${
                      achievement.earned ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                  {achievement.earned && (
                    <Badge variant="secondary">Earned</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}