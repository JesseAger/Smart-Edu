import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Users, 
  Settings, 
  GraduationCap,
  CheckSquare,
  Award
} from "lucide-react";

interface SidebarProps {
  userType: "student" | "instructor";
}

export default function Sidebar({ userType }: SidebarProps) {
  const location = useLocation();

  const studentNavItems = [
    { to: "/student/dashboard", icon: Home, label: "Dashboard" },
    { to: "/student/curriculum", icon: BookOpen, label: "Curriculum" },
    { to: "/student/assignments", icon: FileText, label: "Assignments" },
    { to: "/student/progress", icon: BarChart3, label: "Progress" },
    { to: "/student/settings", icon: Settings, label: "Settings" }
  ];

  const instructorNavItems = [
    { to: "/instructor/dashboard", icon: Home, label: "Dashboard" },
    { to: "/instructor/students", icon: Users, label: "Students" },
    { to: "/instructor/assignments", icon: CheckSquare, label: "Assignments" },
    { to: "/instructor/reviews", icon: Award, label: "Reviews" },
    { to: "/instructor/analytics", icon: BarChart3, label: "Analytics" },
    { to: "/instructor/settings", icon: Settings, label: "Settings" }
  ];

  const navItems = userType === "student" ? studentNavItems : instructorNavItems;

  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg">SmartEduTrack</h2>
            <p className="text-xs text-muted-foreground capitalize">{userType} Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          SmartEduTrack v1.0
        </div>
      </div>
    </div>
  );
}