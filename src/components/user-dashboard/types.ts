import type { LucideIcon } from "lucide-react";

export type UserDashboardSection = "overview" | "publications" | "submit" | "notifications" | "profile";

export type DashboardNavItem = {
  id: UserDashboardSection;
  label: string;
  icon: LucideIcon;
};

export type PublicationStatus = "Submitted" | "Editorial Check" | "Edits Requested" | "Reviewer Update" | "Accepted" | "Published";

export type Publication = {
  id: string;
  title: string;
  articleType: string;
  submitted: string;
  status: PublicationStatus;
  editor: string;
  lastUpdate: string;
};

export type UserNotification = {
  id: string;
  title: string;
  source: "Editor" | "Reviewer" | "System";
  message: string;
  date: string;
  unread: boolean;
};

