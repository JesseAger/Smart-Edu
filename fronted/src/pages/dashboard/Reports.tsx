import { FileText, Download, Calendar, Filter, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const reportTemplates = [
  {
    id: 1,
    name: "Student Progress Report",
    description: "Comprehensive overview of individual student performance",
    icon: Users,
    lastGenerated: "2024-01-28"
  },
  {
    id: 2,
    name: "Course Performance Summary",
    description: "Aggregate statistics and trends for course completion",
    icon: BarChart3,
    lastGenerated: "2024-01-27"
  },
  {
    id: 3,
    name: "Attendance Analytics",
    description: "Detailed attendance patterns and participation rates",
    icon: Calendar,
    lastGenerated: "2024-01-26"
  },
  {
    id: 4,
    name: "Assessment Results",
    description: "Grade distributions and assessment performance analysis",
    icon: FileText,
    lastGenerated: "2024-01-25"
  }
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-muted-foreground">
          Generate and download comprehensive reports for your institution
        </p>
      </div>

      {/* Generate New Report */}
      <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary" />
            Generate Custom Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student-progress">Student Progress</SelectItem>
                  <SelectItem value="course-performance">Course Performance</SelectItem>
                  <SelectItem value="attendance">Attendance Report</SelectItem>
                  <SelectItem value="assessment">Assessment Results</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course-filter">Course</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="react">React Development</SelectItem>
                  <SelectItem value="javascript">JavaScript Bootcamp</SelectItem>
                  <SelectItem value="data-science">Data Science</SelectItem>
                  <SelectItem value="python">Python Fundamentals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-from">From Date</Label>
              <Input type="date" id="date-from" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-to">To Date</Label>
              <Input type="date" id="date-to" />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button className="bg-gradient-primary hover:bg-gradient-dark">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Report Templates</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reportTemplates.map((template) => (
            <Card key={template.id} className="border-0 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <template.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Last generated: {new Date(template.lastGenerated).toLocaleDateString()}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:bg-gradient-dark">
                      <Download className="w-3 h-3 mr-1" />
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Q1 Student Progress Report", date: "2024-01-28", size: "2.4 MB", format: "PDF" },
              { name: "JavaScript Bootcamp Performance", date: "2024-01-27", size: "1.8 MB", format: "PDF" },
              { name: "Monthly Attendance Summary", date: "2024-01-26", size: "892 KB", format: "Excel" },
              { name: "Assessment Results Analysis", date: "2024-01-25", size: "3.1 MB", format: "PDF" }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.date} • {report.size} • {report.format}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}