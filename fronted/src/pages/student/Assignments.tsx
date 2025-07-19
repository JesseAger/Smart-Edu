import { useState } from "react";
import { FileText, Upload, CheckCircle, Clock, AlertCircle, Download, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Assignments() {
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null);

  const assignments = [
    {
      id: 1,
      title: "Todo App with React",
      module: "React Fundamentals",
      description: "Build a fully functional todo application using React hooks and local storage",
      dueDate: "2024-01-25",
      status: "submitted",
      score: 95,
      maxScore: 100,
      submittedAt: "2024-01-23",
      feedback: "Excellent work! Clean code structure and good use of React hooks. Consider adding error handling for edge cases.",
      requirements: [
        "Create a responsive todo interface",
        "Implement add, edit, delete functionality",
        "Use React hooks for state management",
        "Persist data in localStorage",
        "Include basic styling with CSS"
      ]
    },
    {
      id: 2,
      title: "REST API with Express",
      module: "Node.js & Express",
      description: "Create a RESTful API for a book management system",
      dueDate: "2024-01-30",
      status: "in-progress",
      submittedAt: null,
      requirements: [
        "Create CRUD endpoints for books",
        "Implement proper HTTP status codes",
        "Add input validation",
        "Include error handling middleware",
        "Write API documentation"
      ]
    },
    {
      id: 3,
      title: "Database Schema Design",
      module: "Database Design",
      description: "Design and implement a database schema for an e-commerce platform",
      dueDate: "2024-02-05",
      status: "pending",
      requirements: [
        "Design normalized database schema",
        "Create SQL scripts for table creation",
        "Include sample data insertion",
        "Write queries for common operations",
        "Document relationships and constraints"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "secondary";
      case "in-progress":
        return "default";
      default:
        return "outline";
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Assignments</h1>
        <p className="text-muted-foreground">
          Complete assignments to test your knowledge and get feedback from instructors
        </p>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle>{assignment.title}</CardTitle>
                      {getStatusIcon(assignment.status)}
                    </div>
                    <CardDescription>{assignment.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Module: {assignment.module}</span>
                      <span>•</span>
                      <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      {getDaysUntilDue(assignment.dueDate) > 0 && assignment.status !== "submitted" && (
                        <>
                          <span>•</span>
                          <span className={getDaysUntilDue(assignment.dueDate) <= 3 ? "text-red-600" : ""}>
                            {getDaysUntilDue(assignment.dueDate)} days left
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusColor(assignment.status)}>
                      {assignment.status === "submitted" ? "Submitted" :
                       assignment.status === "in-progress" ? "In Progress" : "Pending"}
                    </Badge>
                    {assignment.status === "submitted" && assignment.score && (
                      <Badge variant="secondary">
                        {assignment.score}/{assignment.maxScore}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {assignment.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {assignment.status === "submitted" && assignment.feedback && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-800">Instructor Feedback</span>
                      </div>
                      <p className="text-sm text-green-700">{assignment.feedback}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    {assignment.status === "pending" && (
                      <Button>Start Assignment</Button>
                    )}
                    {assignment.status === "in-progress" && (
                      <>
                        <Button>Continue Working</Button>
                        <Button variant="outline">Submit Assignment</Button>
                      </>
                    )}
                    {assignment.status === "submitted" && (
                      <>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Submission
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending">
          {assignments.filter(a => a.status === "pending").map((assignment) => (
            <Card key={assignment.id}>
              {/* Same card structure as above */}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="in-progress">
          {assignments.filter(a => a.status === "in-progress").map((assignment) => (
            <Card key={assignment.id}>
              {/* Same card structure as above */}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="submitted">
          {assignments.filter(a => a.status === "submitted").map((assignment) => (
            <Card key={assignment.id}>
              {/* Same card structure as above */}
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Assignment Submission Modal would go here */}
    </div>
  );
}