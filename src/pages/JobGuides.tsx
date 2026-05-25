import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import NewsletterSection from "../components/NewsletterSection";
import { Link } from "react-router-dom";

const allJobGuides = [...articles.filter(a => a.categorySlug === "remote-jobs"), ...articles.filter(a => a.categorySlug === "application-guides")];

const guides = [
  {
    title: "Remote Customer Service Jobs",
    desc: "Full-time and part-time remote customer service positions paying $12–$20/hr. No degree required for most.",
    platforms: ["Amazon", "Apple", "Concentrix", "TTEC"],
    level: "Beginner",
    icon: "🎧",
  },
  {
    title: "Virtual Assistant Jobs",
    desc: "Flexible VA work supporting businesses, entrepreneurs, and executives remotely. Great for organized people.",
    platforms: ["Zirtual", "BELAY", "Time Etc", "Fancy Hands"],
    level: "Beginner",
    icon: "📅",
  },
  {
    title: "Online Tutoring & Teaching",
    desc: "Teach English, math, or other subjects to students around the world from the comfort of home.",
    platforms: ["VIPKid", "Chegg", "Wyzant", "Tutor.com"],
    level: "Intermediate",
    icon: "🎓",
  },
  {
    title: "Data Entry & Transcription",
    desc: "Entry-level data entry and transcription work. Great first remote job. Flexible hours.",
    platforms: ["Rev", "TranscribeMe", "Scribie", "Clickworker"],
    level: "Beginner",
    icon: "⌨️",
  },
  {
    title: "Content Writing & Copywriting",
    desc: "Write articles, blog posts, web copy, and social media content for businesses worldwide.",
    platforms: ["Contently", "Textbroker", "WriterAccess", "ProBlogger"],
    level: "Intermediate",
    icon: "✍️",
  },
  {
    title: "Graphic Design Remote Jobs",
    desc: "Remote graphic design positions for logos, marketing materials, social media, and more.",
    platforms: ["99designs", "DesignCrowd", "Dribbble", "Behance"],
    level: "Intermediate",
    icon: "🎨",
  },
];

export default function JobGuides() {
  return (
    <main>
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Work From Home</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Remote Job Guides</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Find the right remote job category for your skills and learn exactly how to apply and get hired.
          </p>
        </div>
      </section>

      {/* Job Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Remote Job Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse by job type. Each category includes application guides and platform recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-3xl mb-4">{guide.icon}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base">{guide.title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${guide.level === "Beginner" ? "bg-green-50 text-green-700 border border-green-100" : "bg-blue-50 text-blue-700 border border-blue-100"}`}>
                    {guide.level}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{guide.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {guide.platforms.map((p) => (
                    <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                      {p}
                    </span>
                  ))}
                </div>
                <Link to="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                  View guides
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest Remote Job Articles</h2>
            <p className="text-gray-500">Real guides written by people who've actually done it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allJobGuides.slice(0, 6).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
