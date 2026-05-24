import type { Publication, UserNotification } from "./types";

export const userProfile = {
  name: "Ananya Das",
  email: "ananya.das@research.edu",
  role: "Publisher",
  institution: "University of Calcutta",
  researchArea: "Life Science and Biotechnology",
  joined: "18 May 2026",
};

export const publications: Publication[] = [
  {
    id: "IYJ-2026-118",
    title: "Antioxidant Activity of Endophytic Fungal Extracts",
    articleType: "Original Research",
    submitted: "21 May 2026",
    status: "Editorial Check",
    editor: "Dr. Pradeep Kumar Das",
    lastUpdate: "Editor started initial formatting and scope review.",
  },
  {
    id: "IYJ-2026-114",
    title: "Screening of Bioactive Compounds in Coastal Plants",
    articleType: "Short Communication",
    submitted: "13 May 2026",
    status: "Reviewer Update",
    editor: "Dr. Meera Kapoor",
    lastUpdate: "Reviewer requested a clearer methods section and figure legends.",
  },
  {
    id: "IYJ-2026-109",
    title: "Microbial Diversity in Organic Farming Soil",
    articleType: "Review Article",
    submitted: "02 May 2026",
    status: "Published",
    editor: "Dr. Pradeep Kumar Das",
    lastUpdate: "Article is live in the current issue.",
  },
];

export const notifications: UserNotification[] = [
  {
    id: "N-1208",
    title: "Editorial check started",
    source: "Editor",
    message: "Your manuscript is being checked for scope, formatting and required declarations.",
    date: "23 May 2026",
    unread: true,
  },
  {
    id: "N-1207",
    title: "Reviewer requested clarification",
    source: "Reviewer",
    message: "Please revise the methods section and upload a clean corrected file.",
    date: "22 May 2026",
    unread: true,
  },
  {
    id: "N-1201",
    title: "Publication submitted",
    source: "System",
    message: "Your publication was submitted successfully and added to your publication table.",
    date: "21 May 2026",
    unread: false,
  },
];

export const articleTypes = [
  "Original Research",
  "Review Article",
  "Case Report",
  "Short Communication",
  "Letter / Commentary",
];

export const subjectAreas = [
  "Molecular Biology",
  "Microbiology",
  "Pharmaceutical Sciences",
  "Biotechnology",
  "Biomedical Sciences",
  "Environmental Biology",
];

