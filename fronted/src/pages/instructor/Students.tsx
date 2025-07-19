import { useState } from "react";
import { Search, UserPlus, MoreHorizontal, UserCheck, UserX, Eye, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function InstructorStudents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("all");

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "/placeholder.svg",
      batch: "Batch A",
      status: "active",
      progress: 78,
      lastActive: "2 hours ago",
      joinDate: "2023-12-01",
      modules: 5,
      completedModules: 4,
      avgScore: 92
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "/placeholder.svg",
      batch: "Batch A",
      status: "active",
      progress: 65,
      lastActive: "1 day ago",
      joinDate: "2023-12-01",
      modules: 5,
      completedModules: 3,
      avgScore: 87
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@example.com",
      avatar: "/placeholder.svg",
      batch: "Batch B",
      status: "suspended",
      progress: 45,
      lastActive: "1 week ago",
      joinDate: "2023-12-05",
      modules: 5,
      completedModules: 2,
      avgScore: 72
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david@example.com",
      avatar: "/placeholder.svg",
      batch: "Batch A",
      status: "active",
      progress: 82,
      lastActive: "30 minutes ago",
      joinDate: "2023-11-28",
      modules: 5,
      completedModules: 4,
      avgScore: 94
    },
    {
      id: 5,
      name: "Eva Martinez",
      email: "eva@example.com",
      avatar: "/placeholder.svg",
      batch: "Batch C",
      status: "active",
      progress: 58,
      lastActive: "3 hours ago",
      joinDate: "2023-12-10",
      modules: 5,
      completedModules: 3,
      avgScore: 89
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "secondary";
      case "suspended":
        return "destructive";
      case "inactive":
        return "outline";
      default:
        return "outline";
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch = selectedBatch === "all" || student.batch === selectedBatch;
    return matchesSearch && matchesBatch;
  });

  const handleSuspendStudent = (studentId: number) => {
    console.log("Suspending student:", studentId);
    // TODO: Implement suspend functionality
  };

  const handleActivateStudent = (studentId: number) => {
    console.log("Activating student:", studentId);
    // TODO: Implement activate functionality
  };

  const handleExpelStudent = (studentId: number) => {
    console.log("Expelling student:", studentId);
    // TODO: Implement expel functionality
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Management</h1>
          <p className="text-muted-foreground">
            Manage student enrollments, track progress, and handle student status
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enroll a new student in the program
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter student's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter student's email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="batch">Batch</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="batch-a">Batch A</SelectItem>
                    <SelectItem value="batch-b">Batch B</SelectItem>
                    <SelectItem value="batch-c">Batch C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Add Student</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedBatch} onValueChange={setSelectedBatch}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Batches" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Batches</SelectItem>
            <SelectItem value="Batch A">Batch A</SelectItem>
            <SelectItem value="Batch B">Batch B</SelectItem>
            <SelectItem value="Batch C">Batch C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Students ({students.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({students.filter(s => s.status === "active").length})</TabsTrigger>
          <TabsTrigger value="suspended">Suspended ({students.filter(s => s.status === "suspended").length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredStudents.map((student) => (
            <Card key={student.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={student.avatar} />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{student.batch}</Badge>
                        <Badge variant={getStatusColor(student.status)}>
                          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Progress</p>
                      <p className="font-semibold">{student.progress}%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Modules</p>
                      <p className="font-semibold">{student.completedModules}/{student.modules}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Avg Score</p>
                      <p className="font-semibold">{student.avgScore}%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Last Active</p>
                      <p className="font-semibold text-sm">{student.lastActive}</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        {student.status === "active" ? (
                          <DropdownMenuItem 
                            onClick={() => handleSuspendStudent(student.id)}
                            className="text-orange-600"
                          >
                            <UserX className="w-4 h-4 mr-2" />
                            Suspend Student
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem 
                            onClick={() => handleActivateStudent(student.id)}
                            className="text-green-600"
                          >
                            <UserCheck className="w-4 h-4 mr-2" />
                            Activate Student
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem 
                          onClick={() => handleExpelStudent(student.id)}
                          className="text-red-600"
                        >
                          <UserX className="w-4 h-4 mr-2" />
                          Expel Student
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          {/* Show only active students */}
        </TabsContent>

        <TabsContent value="suspended">
          {/* Show only suspended students */}
        </TabsContent>
      </Tabs>
    </div>
  );
}