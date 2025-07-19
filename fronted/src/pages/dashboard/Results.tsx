import { BarChart3, TrendingUp, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock results data
const recentResults = [
  {
    id: 1,
    studentName: "Sarah Johnson",
    course: "React Development",
    assessment: "Final Project",
    score: 95,
    grade: "A",
    date: "2024-01-28"
  },
  {
    id: 2,
    studentName: "Michael Chen",
    course: "JavaScript Bootcamp",
    assessment: "Mid-term Exam",
    score: 88,
    grade: "B+",
    date: "2024-01-27"
  },
  {
    id: 3,
    studentName: "Emily Rodriguez",
    course: "Data Science",
    assessment: "Lab Assignment #3",
    score: 76,
    grade: "B-",
    date: "2024-01-26"
  },
  {
    id: 4,
    studentName: "David Kim",
    course: "Python Fundamentals",
    assessment: "Quiz #5",
    score: 92,
    grade: "A-",
    date: "2024-01-25"
  }
];

const courseAverages = [
  { course: "React Development", average: 87.5, students: 24 },
  { course: "JavaScript Bootcamp", average: 84.2, students: 32 },
  { course: "Data Science", average: 79.8, students: 18 },
  { course: "Python Fundamentals", average: 88.1, students: 28 }
];

export default function Results() {
  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return "bg-success-light text-success";
    if (grade.startsWith('B')) return "bg-warning-light text-warning";
    return "bg-destructive-light text-destructive";
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Results Management</h1>
        <p className="text-muted-foreground">
          Track student performance and analyze learning outcomes
        </p>
      </div>

      {/* Course Averages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseAverages.map((course, index) => (
          <Card key={index} className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {course.course}
                </CardTitle>
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.average}%</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Users className="w-3 h-3 mr-1" />
                {course.students} students
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Results */}
      <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Recent Results
            </CardTitle>
            <Badge variant="outline" className="bg-primary-light text-primary">
              Last 7 Days
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentResults.map((result) => (
              <div key={result.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium">{result.studentName}</h4>
                    <Badge variant="outline" className="text-xs">
                      {result.course}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.assessment}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(result.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
                    {result.score}%
                  </div>
                  <Badge variant="outline" className={getGradeColor(result.grade)}>
                    {result.grade}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Placeholder for Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                <p>Performance Chart</p>
                <p className="text-sm">Chart component integration pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                <p>Distribution Chart</p>
                <p className="text-sm">Chart component integration pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}