import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Announcements } from "@/components/dashboard/Announcements";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your students today.
        </p>
      </div>

      <DashboardStats />

      <div className="grid lg:grid-cols-2 gap-6">
        <RecentActivity />
        <Announcements />
      </div>
    </div>
  );
}