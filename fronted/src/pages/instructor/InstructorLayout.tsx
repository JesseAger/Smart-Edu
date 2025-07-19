import { Outlet } from "react-router-dom";
import Sidebar from "@/components/shared/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, LogOut } from "lucide-react";

export default function InstructorLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar userType="instructor" />
      
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Instructor Portal</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Dr. Sarah Wilson</p>
                <p className="text-muted-foreground text-xs">Instructor</p>
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}