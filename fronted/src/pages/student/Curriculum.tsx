import { useState } from "react";
import { BookOpen, Play, CheckCircle, Lock, Clock, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function Curriculum() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript",
      progress: 100,
      status: "completed",
      lessons: [
        { id: 1, title: "Introduction to HTML", type: "video", duration: "15 min", completed: true },
        { id: 2, title: "CSS Styling Basics", type: "video", duration: "20 min", completed: true },
        { id: 3, title: "JavaScript Fundamentals", type: "video", duration: "25 min", completed: true },
        { id: 4, title: "Build Your First Website", type: "assignment", duration: "2 hours", completed: true, hasAssignment: true }
      ]
    },
    {
      id: 2,
      title: "React Fundamentals",
      description: "Master React components, state, and lifecycle methods",
      progress: 75,
      status: "in-progress",
      lessons: [
        { id: 5, title: "Introduction to React", type: "video", duration: "18 min", completed: true },
        { id: 6, title: "Components and JSX", type: "video", duration: "22 min", completed: true },
        { id: 7, title: "State and Props", type: "video", duration: "25 min", completed: true },
        { id: 8, title: "React Hooks Deep Dive", type: "video", duration: "30 min", completed: false, current: true },
        { id: 9, title: "Todo App Project", type: "assignment", duration: "3 hours", completed: false, hasAssignment: true }
      ]
    },
    {
      id: 3,
      title: "Node.js & Express",
      description: "Build server-side applications with Node.js",
      progress: 30,
      status: "in-progress",
      lessons: [
        { id: 10, title: "Node.js Basics", type: "video", duration: "20 min", completed: true },
        { id: 11, title: "NPM and Package Management", type: "video", duration: "15 min", completed: true },
        { id: 12, title: "Building REST APIs", type: "video", duration: "35 min", completed: false, current: true },
        { id: 13, title: "Middleware and Authentication", type: "video", duration: "25 min", completed: false },
        { id: 14, title: "API Project", type: "assignment", duration: "4 hours", completed: false, hasAssignment: true }
      ]
    },
    {
      id: 4,
      title: "Database Design",
      description: "Learn SQL and database fundamentals",
      progress: 0,
      status: "locked",
      lessons: [
        { id: 15, title: "Introduction to Databases", type: "video", duration: "18 min", completed: false },
        { id: 16, title: "SQL Fundamentals", type: "video", duration: "25 min", completed: false },
        { id: 17, title: "Database Design Principles", type: "video", duration: "22 min", completed: false },
        { id: 18, title: "Database Project", type: "assignment", duration: "3 hours", completed: false, hasAssignment: true }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <Lock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getLessonIcon = (type: string, completed: boolean) => {
    if (completed) return <CheckCircle className="w-4 h-4 text-green-600" />;
    
    switch (type) {
      case "video":
        return <Play className="w-4 h-4 text-blue-600" />;
      case "assignment":
        return <FileText className="w-4 h-4 text-purple-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Curriculum</h1>
        <p className="text-muted-foreground">
          Complete modules in order to unlock new content and advance your learning
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <Card key={module.id} className="overflow-hidden">
            <Collapsible 
              open={selectedModule === module.id}
              onOpenChange={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(module.status)}
                      <div>
                        <CardTitle className="text-left">{module.title}</CardTitle>
                        <CardDescription className="text-left">{module.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={
                        module.status === "completed" ? "secondary" :
                        module.status === "in-progress" ? "default" : "outline"
                      }>
                        {module.status === "completed" ? "Completed" :
                         module.status === "in-progress" ? "In Progress" : "Locked"}
                      </Badge>
                      <div className="text-right min-w-[100px]">
                        <div className="text-sm font-medium">{module.progress}%</div>
                        <Progress value={module.progress} className="w-20" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className={`
                        flex items-center justify-between p-3 rounded-lg border
                        ${lesson.current ? 'bg-blue-50 border-blue-200' : ''}
                        ${lesson.completed ? 'bg-green-50 border-green-200' : ''}
                        ${module.status === 'locked' ? 'opacity-50' : ''}
                      `}>
                        <div className="flex items-center gap-3">
                          {getLessonIcon(lesson.type, lesson.completed)}
                          <div>
                            <h4 className="font-medium">{lesson.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="capitalize">{lesson.type}</span>
                              <span>•</span>
                              <span>{lesson.duration}</span>
                              {lesson.hasAssignment && (
                                <>
                                  <span>•</span>
                                  <Badge variant="outline" className="text-xs">Assignment</Badge>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {lesson.current && (
                            <Badge className="bg-blue-100 text-blue-700">Current</Badge>
                          )}
                          {lesson.completed ? (
                            <Button variant="outline" size="sm" disabled>
                              Completed
                            </Button>
                          ) : module.status !== "locked" ? (
                            <Button size="sm">
                              {lesson.current ? "Continue" : "Start"}
                            </Button>
                          ) : (
                            <Button size="sm" disabled>
                              Locked
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
}