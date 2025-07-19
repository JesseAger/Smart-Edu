import { Users, BookOpen, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Students",
    value: "1,234",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users
  },
  {
    title: "Active Courses",
    value: "24",
    change: "+3",
    changeType: "positive" as const,
    icon: BookOpen
  },
  {
    title: "Average Score",
    value: "87.5%",
    change: "+2.4%",
    changeType: "positive" as const,
    icon: TrendingUp
  },
  {
    title: "Completion Rate",
    value: "94.2%",
    change: "-1.2%",
    changeType: "negative" as const,
    icon: Award
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <stat.icon className="w-4 h-4 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
            }`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}