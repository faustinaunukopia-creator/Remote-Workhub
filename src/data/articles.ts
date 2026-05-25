export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  readTime: string;
  date: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
  featured?: boolean;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "How I Got a $16/hr Remote Job (Step-by-Step)",
    slug: "how-i-got-remote-job-step-by-step",
    category: "Remote Jobs",
    categorySlug: "remote-jobs",
    excerpt:
      "A complete walkthrough of how I found, applied, and got accepted for a real $16/hour remote customer service position — with no degree required.",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    badge: "Popular",
    badgeColor: "blue",
    icon: "💼",
    featured: true,
    tags: ["remote job", "customer service", "no degree"],
  },
  {
    id: "2",
    title: "Best Beginner Freelance Platforms in 2025",
    slug: "best-beginner-freelance-platforms",
    category: "Freelance Platforms",
    categorySlug: "freelance-platforms",
    excerpt:
      "Comparing the top freelance platforms for beginners — Fiverr, Upwork, Freelancer, PeoplePerHour — with honest pros and cons of each.",
    readTime: "10 min read",
    date: "Jan 20, 2025",
    badge: "Top Pick",
    badgeColor: "green",
    icon: "🚀",
    featured: true,
    tags: ["freelance", "platforms", "beginners"],
  },
  {
    id: "3",
    title: "How to Apply for Online Jobs Without Experience",
    slug: "apply-online-jobs-without-experience",
    category: "Application Guides",
    categorySlug: "application-guides",
    excerpt:
      "No experience? No problem. Learn exactly how to write your first application, what skills to highlight, and how to compete with experienced applicants.",
    readTime: "7 min read",
    date: "Jan 25, 2025",
    badge: "Beginner",
    badgeColor: "orange",
    icon: "📝",
    featured: true,
    tags: ["no experience", "job application", "beginners"],
  },
  {
    id: "4",
    title: "Fiverr Beginner Guide: Set Up & Get Your First Order",
    slug: "fiverr-beginner-guide",
    category: "Freelance Platforms",
    categorySlug: "freelance-platforms",
    excerpt:
      "Everything you need to know to get started on Fiverr — from creating your first gig to getting that first five-star review.",
    readTime: "12 min read",
    date: "Feb 1, 2025",
    badge: "Guide",
    badgeColor: "purple",
    icon: "⭐",
    featured: true,
    tags: ["Fiverr", "gig", "freelance"],
  },
  {
    id: "5",
    title: "Upwork Profile Setup Guide for Beginners",
    slug: "upwork-profile-setup-guide",
    category: "Freelance Platforms",
    categorySlug: "freelance-platforms",
    excerpt:
      "A step-by-step guide to creating an Upwork profile that gets noticed — portfolio, skills, rates, and how to write a winning proposal.",
    readTime: "9 min read",
    date: "Feb 8, 2025",
    badge: "Step-by-Step",
    badgeColor: "blue",
    icon: "🎯",
    featured: true,
    tags: ["Upwork", "profile", "proposals"],
  },
  {
    id: "6",
    title: "Top 10 Remote Jobs You Can Do From Home in 2025",
    slug: "top-remote-jobs-from-home",
    category: "Remote Jobs",
    categorySlug: "remote-jobs",
    excerpt:
      "Discover the most in-demand remote jobs this year, what they pay, and exactly where to apply — including entry-level options.",
    readTime: "11 min read",
    date: "Feb 15, 2025",
    badge: "New",
    badgeColor: "teal",
    icon: "🏠",
    tags: ["remote work", "work from home", "job list"],
  },
  {
    id: "7",
    title: "How to Pass the Fiverr Skill Test (2025 Update)",
    slug: "fiverr-skill-test-guide",
    category: "Application Guides",
    categorySlug: "application-guides",
    excerpt:
      "Practical tips to prepare for and pass Fiverr's skill assessment tests so your profile ranks higher in search results.",
    readTime: "6 min read",
    date: "Feb 22, 2025",
    icon: "✅",
    tags: ["Fiverr", "skill test", "tips"],
  },
  {
    id: "8",
    title: "Beginner's Guide to Earning on Toptal",
    slug: "toptal-beginner-guide",
    category: "Freelance Platforms",
    categorySlug: "freelance-platforms",
    excerpt:
      "Toptal is selective — but well-paying. Here's what you need to qualify, how to prepare for the screening, and whether it's worth it.",
    readTime: "8 min read",
    date: "Mar 1, 2025",
    icon: "💡",
    tags: ["Toptal", "elite freelance", "screening"],
  },
];

export const categories = [
  {
    name: "Remote Jobs",
    slug: "remote-jobs",
    icon: "💼",
    description: "Find real remote job listings, reviews, and application strategies for work-from-home positions.",
    count: 14,
    color: "blue",
  },
  {
    name: "Freelance Platforms",
    slug: "freelance-platforms",
    icon: "🚀",
    description: "In-depth reviews and guides for Fiverr, Upwork, Freelancer, PeoplePerHour, and more.",
    count: 18,
    color: "purple",
  },
  {
    name: "Application Guides",
    slug: "application-guides",
    icon: "📝",
    description: "Step-by-step application walkthroughs, cover letter templates, and onboarding tips.",
    count: 11,
    color: "green",
  },
  {
    name: "Online Earning Tips",
    slug: "online-earning-tips",
    icon: "💡",
    description: "Proven strategies to maximize your earnings from online platforms and remote positions.",
    count: 9,
    color: "orange",
  },
  {
    name: "Beginner Tutorials",
    slug: "beginner-tutorials",
    icon: "🎓",
    description: "From zero to your first paycheck — beginner-friendly walkthroughs for all skill levels.",
    count: 16,
    color: "teal",
  },
];

export const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border border-blue-100",
  green: "bg-green-50 text-green-700 border border-green-100",
  orange: "bg-orange-50 text-orange-700 border border-orange-100",
  purple: "bg-purple-50 text-purple-700 border border-purple-100",
  teal: "bg-teal-50 text-teal-700 border border-teal-100",
};

export const categoryColorMap: Record<string, { bg: string; text: string; border: string; light: string }> = {
  blue: { bg: "bg-blue-600", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  purple: { bg: "bg-purple-600", text: "text-purple-600", border: "border-purple-200", light: "bg-purple-50" },
  green: { bg: "bg-green-600", text: "text-green-600", border: "border-green-200", light: "bg-green-50" },
  orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200", light: "bg-orange-50" },
  teal: { bg: "bg-teal-600", text: "text-teal-600", border: "border-teal-200", light: "bg-teal-50" },
};
