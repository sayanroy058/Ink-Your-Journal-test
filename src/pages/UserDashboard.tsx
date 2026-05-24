import { useState } from "react";
import { BarChart3, Bell, FileText, Upload, UserCog } from "lucide-react";
import DashboardOverview from "@/components/user-dashboard/DashboardOverview";
import NotificationsPanel from "@/components/user-dashboard/NotificationsPanel";
import PublicationsTable from "@/components/user-dashboard/PublicationsTable";
import SubmitPublicationForm from "@/components/user-dashboard/SubmitPublicationForm";
import UserDashboardFooter from "@/components/user-dashboard/UserDashboardFooter";
import UserDashboardNavbar from "@/components/user-dashboard/UserDashboardNavbar";
import UserProfilePanel from "@/components/user-dashboard/UserProfilePanel";
import { notifications, publications } from "@/components/user-dashboard/userDashboardData";
import type { DashboardNavItem, UserDashboardSection } from "@/components/user-dashboard/types";

const navItems: DashboardNavItem[] = [
  { id: "overview", label: "Dashboard", icon: BarChart3 },
  { id: "publications", label: "My Publications", icon: FileText },
  { id: "submit", label: "Submit Publication", icon: Upload },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "profile", label: "Profile", icon: UserCog },
];

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState<UserDashboardSection>("overview");
  const unreadCount = notifications.filter((notification) => notification.unread).length;

  const sectionContent = {
    overview: <DashboardOverview publications={publications} notifications={notifications} />,
    publications: <PublicationsTable publications={publications} />,
    submit: <SubmitPublicationForm />,
    notifications: <NotificationsPanel notifications={notifications} />,
    profile: <UserProfilePanel />,
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <UserDashboardNavbar
        activeSection={activeSection}
        navItems={navItems}
        onSectionChange={setActiveSection}
        unreadCount={unreadCount}
      />
      <main className="mx-auto min-h-[calc(100vh-134px)] max-w-7xl px-4 py-6 md:px-6 md:py-8">
        {sectionContent[activeSection]}
      </main>
      <UserDashboardFooter />
    </div>
  );
};

export default UserDashboard;

