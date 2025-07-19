import { Clock, User, FileText, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    type: "assignment",
    user: "Sarah Johnson",
    action: "submitted assignment",
    target: "React Fundamentals Project",
    time: "2 minutes ago",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9ac?w=400&h=400&fit=crop&crop=face",
    icon: FileText
  },
  {
    id: 2,
    type: "message",
    user: "Michael Chen",
    action: "sent a message in",
    target: "JavaScript Bootcamp",
    time: "15 minutes ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    icon: MessageCircle
  },
  {
    id: 3,
    type: "enrollment",
    user: "Emily Rodriguez",
    action: "enrolled in",
    target: "Data Science Program",
    time: "1 hour ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    icon: User
  },
  {
    id: 4,
    type: "assignment",
    user: "David Kim",
    action: "completed assessment",
    target: "Python Basics Quiz",
    time: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    icon: FileText
  }
];

export function RecentActivity() {
  return (
    <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback>
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium text-primary">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                <activity.icon className="w-3 h-3 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}