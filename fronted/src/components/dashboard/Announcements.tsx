import { Megaphone, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    id: 1,
    title: "New Course: Advanced React Patterns",
    content: "We're excited to announce our new advanced React course starting next week.",
    type: "info",
    date: "Today",
    priority: "high"
  },
  {
    id: 2,
    title: "System Maintenance Scheduled",
    content: "Planned maintenance on Sunday 2-4 AM EST. Platform will be temporarily unavailable.",
    type: "warning",
    date: "Yesterday",
    priority: "medium"
  },
  {
    id: 3,
    title: "Holiday Schedule Update",
    content: "Classes will be suspended during the holiday week. Check your course calendar for details.",
    type: "info",
    date: "2 days ago",
    priority: "low"
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "warning":
      return AlertCircle;
    case "info":
    default:
      return Megaphone;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "warning":
      return "bg-warning-light text-warning border-warning/20";
    case "info":
    default:
      return "bg-primary-light text-primary border-primary/20";
  }
};

export function Announcements() {
  return (
    <Card className="border-0 shadow-md bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Megaphone className="w-5 h-5 mr-2 text-primary" />
          Announcements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement) => {
            const Icon = getTypeIcon(announcement.type);
            return (
              <div key={announcement.id} className="border border-border rounded-lg p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <h4 className="font-medium text-sm">{announcement.title}</h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getTypeColor(announcement.type)}>
                      {announcement.priority}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {announcement.content}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {announcement.date}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}