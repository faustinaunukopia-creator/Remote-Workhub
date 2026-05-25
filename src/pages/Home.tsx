import { Link } from "react-router-dom";
import { articles, categories, categoryColorMap } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import NewsletterSection from "../components/NewsletterSection";

const featuredArticles = articles.filter((a) => a.featured);

const categoryHoverTextMap: Record<string, string> = {
  blue: "group-hover:text-blue-600",
  purple: "group-hover:text-purple-600",
  green: "group-hover:text-green-600",
  orange: "group-hover:text-orange-600",
  teal: "group-hover:text-teal-600",
};

const roadmapSteps = [
  {
    step: 1,
    title: "Choose a Platform",
    desc: "Pick from remote job boards, Fiverr, Upwork, or other platforms based on your skills.",
    icon: "🎯",
  },
  {
    step: 2,
    title: "Create Your Profile",
    desc: "Set up a professional, keyword-optimized profile that attracts clients or employers.",
    icon: "👤",
  },
  {
    step: 3,
    title: "Learn the Application",
    desc: "Follow our step-by-step guides to submit winning applications or proposals.",
    icon: "📋",
  },
  {
    step: 4,
    title: "Pass Onboarding",
    desc: "Complete skill tests, verification steps, and any onboarding requirements.",
    icon: "✅",
  },
  {
    step: 5,
    title: "Start Earning",
    desc: "Land your first client, complete your first job, and build a track record.",
    icon: "💰",
  },
];

const stats = [
  { value: "50+", label: "Guides Published" },
  { value: "10+", label: "Platforms Reviewed" },
  { value: "100%", label: "Free Resources" },
  { value: "Beginner", label: "Friendly Content" },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-100"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted Beginner-Friendly Guides — No Fluff, No Hype
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Real Online Jobs &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Step-by-Step
            </span>
            <br />
            Application Guides
          </h1>

          {/* Subheadline */}
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Learn how to apply, get accepted, and start earning from real online platforms through simple beginner-friendly guides.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Start Reading Guides
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all backdrop-blur-sm"
            >
              Learn About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-extrabold text-white mb-0.5">{stat.value}</div>
                <div className="text-blue-300 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">Latest Guides</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Articles</h2>
              <p className="text-gray-500 mt-2 max-w-lg">
                Hand-picked, beginner-friendly guides to help you start your online work journey.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors whitespace-nowrap"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES SECTION ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">Browse By Topic</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Categories</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Find exactly what you need — from remote job listings to platform-specific tutorials.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const colors = categoryColorMap[cat.color];
              return (
                <Link
                  key={cat.slug}
                  to={`/categories/${cat.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-bold text-gray-900 text-lg mb-2 ${categoryHoverTextMap[cat.color]} transition-colors`}>
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${colors.text} ${colors.light} px-3 py-1 rounded-full`}>
                      {cat.count} articles
                    </span>
                    <svg className={`w-4 h-4 ${colors.text} group-hover:translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── START HERE ROADMAP ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">New Here?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Start Here — Your Beginner Roadmap</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Not sure where to begin? Follow this simple 5-step roadmap to go from zero to your first online paycheck.
            </p>
          </div>

          {/* Roadmap */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 z-0"></div>

            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 relative z-10">
              {roadmapSteps.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Step Circle */}
                  <div className="relative flex flex-col items-center gap-1 z-10 md:flex-none">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 text-2xl">
                      {step.icon}
                    </div>
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wide">Step {step.step}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/job-guides"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-blue-100 hover:-translate-y-0.5"
            >
              Browse All Job Guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm font-medium">PLATFORMS WE COVER & REVIEW</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["Fiverr", "Upwork", "Freelancer", "PeoplePerHour", "Toptal", "LinkedIn", "Indeed", "Remote.co"].map((platform) => (
              <div key={platform} className="text-gray-300 font-bold text-lg hover:text-gray-500 transition-colors cursor-default">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Trust RemoteWorkHub?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Researched & Accurate",
                desc: "Every guide is thoroughly researched and tested. We only share what actually works in the real world.",
              },
              {
                icon: "🚫",
                title: "No Get-Rich-Quick",
                desc: "We don't promote unrealistic promises. We focus on legitimate platforms and honest income expectations.",
              },
              {
                icon: "📚",
                title: "Step-by-Step Clarity",
                desc: "All our guides are written for beginners. Clear instructions, no confusing jargon.",
              },
              {
                icon: "🔄",
                title: "Regularly Updated",
                desc: "Platforms change their policies. We keep our guides up-to-date so you always have current information.",
              },
              {
                icon: "🆓",
                title: "Always Free",
                desc: "Every guide, tutorial, and tip on this site is completely free. We earn through ads, not by charging you.",
              },
              {
                icon: "🤝",
                title: "Community Focused",
                desc: "Built for real people looking for real income opportunities — not marketers selling courses.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
}
