import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import NewsletterSection from "../components/NewsletterSection";

const platforms = [
  {
    name: "Fiverr",
    slug: "fiverr",
    icon: "⭐",
    tagline: "Best for creative & digital services",
    description:
      "Fiverr is one of the most beginner-friendly freelance platforms. You create service listings called 'Gigs' and buyers come to you. Great for writers, designers, and marketers.",
    pros: ["Easy to set up", "Buyers come to you", "Great for beginners", "Huge marketplace"],
    cons: ["20% commission fee", "Competitive in popular niches", "Requires patience to build reviews"],
    bestFor: "Writers, Designers, Voice Artists, Video Editors",
    startingPay: "$5 – $500+ per gig",
    difficulty: "Beginner",
    diffColor: "green",
    link: "https://www.fiverr.com",
  },
  {
    name: "Upwork",
    slug: "upwork",
    icon: "🎯",
    tagline: "Best for long-term professional clients",
    description:
      "Upwork connects freelancers with clients for both short and long-term projects. You submit proposals to job postings. Excellent for professionals in tech, writing, and business services.",
    pros: ["High-paying clients", "Long-term contracts available", "Wide range of job types", "Talent badges for top performers"],
    cons: ["Proposal system requires credits", "Competitive for new accounts", "20% commission initially"],
    bestFor: "Developers, Writers, Marketers, Designers, Consultants",
    startingPay: "$15 – $100+ per hour",
    difficulty: "Intermediate",
    diffColor: "blue",
    link: "https://www.upwork.com",
  },
  {
    name: "Freelancer",
    slug: "freelancer",
    icon: "💼",
    tagline: "Best for wide variety of projects",
    description:
      "Freelancer.com has millions of projects posted across hundreds of categories. Great for finding quick one-time projects and building your portfolio.",
    pros: ["Massive job volume", "Good for portfolio building", "International clients", "Contest opportunities"],
    cons: ["Highly competitive bidding", "Some low-paying projects", "Platform can feel cluttered"],
    bestFor: "All skill levels, especially tech and writing",
    startingPay: "$10 – $50+ per project",
    difficulty: "Beginner",
    diffColor: "green",
    link: "https://www.freelancer.com",
  },
  {
    name: "PeoplePerHour",
    slug: "peoplehour",
    icon: "⏰",
    tagline: "Best for UK/EU hourly work",
    description:
      "PeoplePerHour focuses on hourly freelance work and is popular in the UK and EU. You can post 'Hourlies' (fixed-price offers) or bid on jobs.",
    pros: ["Strong in UK/EU market", "Fixed-price Hourlies option", "Dedicated project management"],
    cons: ["Smaller than Fiverr/Upwork", "Less beginner-friendly UI", "Fees can add up"],
    bestFor: "Writers, Developers, Designers in UK/EU",
    startingPay: "$15 – $75+ per hour",
    difficulty: "Intermediate",
    diffColor: "blue",
    link: "https://www.peopleperhour.com",
  },
  {
    name: "Toptal",
    slug: "toptal",
    icon: "💎",
    tagline: "Best for elite professionals",
    description:
      "Toptal only accepts the top 3% of freelance applicants through a rigorous screening process. If you make it in, you'll work with top-tier companies at premium rates.",
    pros: ["Premium pay rates", "Exclusive client network", "Highly respected platform", "Dedicated matching"],
    cons: ["Very selective application process", "Not for beginners", "Time-intensive screening"],
    bestFor: "Senior Developers, Finance Experts, Designers",
    startingPay: "$60 – $200+ per hour",
    difficulty: "Expert",
    diffColor: "purple",
    link: "https://www.toptal.com",
  },
  {
    name: "Remote.co",
    slug: "remote-co",
    icon: "🏠",
    tagline: "Best for full-time remote positions",
    description:
      "Remote.co is a job board focused exclusively on remote employment. Unlike gig platforms, you apply for actual full-time and part-time remote jobs with real companies.",
    pros: ["Legitimate company jobs", "No bidding required", "Full-time opportunities", "Curated listings"],
    cons: ["Not a gig platform (need traditional resume)", "Competition from many applicants", "No built-in profile"],
    bestFor: "Anyone seeking a stable remote job vs. freelancing",
    startingPay: "$12 – $50+ per hour depending on role",
    difficulty: "Beginner",
    diffColor: "green",
    link: "https://remote.co",
  },
];

const platformArticles = articles.filter((a) => a.categorySlug === "freelance-platforms");

export default function Platforms() {
  return (
    <main>
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Honest Reviews</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Freelance Platforms</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Honest, beginner-friendly reviews of the top platforms where you can find real online work.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {platforms.map((platform, idx) => (
              <div key={platform.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left - Main Info */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                        {platform.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1 flex-wrap">
                          <h2 className="text-2xl font-extrabold text-gray-900">{platform.name}</h2>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            platform.diffColor === "green" ? "bg-green-50 text-green-700 border border-green-100" :
                            platform.diffColor === "blue" ? "bg-blue-50 text-blue-700 border border-blue-100" :
                            "bg-purple-50 text-purple-700 border border-purple-100"
                          }`}>
                            {platform.difficulty}
                          </span>
                          {idx === 0 && <span className="text-xs font-bold bg-orange-50 text-orange-700 border border-orange-100 px-2.5 py-1 rounded-full">Editor's Pick</span>}
                        </div>
                        <p className="text-blue-600 text-sm font-semibold">{platform.tagline}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{platform.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {/* Pros */}
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                          <span className="text-green-500">✓</span> Pros
                        </h4>
                        <ul className="space-y-1.5">
                          {platform.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Cons */}
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                          <span className="text-red-400">✗</span> Cons
                        </h4>
                        <ul className="space-y-1.5">
                          {platform.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                    >
                      Visit {platform.name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Right - Quick Stats */}
                  <div className="lg:w-64 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-100 p-6 flex-shrink-0">
                    <h4 className="font-bold text-gray-900 text-sm mb-4">Quick Stats</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Best For</p>
                        <p className="text-sm text-gray-700 font-medium">{platform.bestFor}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Starting Pay</p>
                        <p className="text-sm text-gray-700 font-medium">{platform.startingPay}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Difficulty</p>
                        <span className={`text-sm font-bold ${
                          platform.diffColor === "green" ? "text-green-600" :
                          platform.diffColor === "blue" ? "text-blue-600" :
                          "text-purple-600"
                        }`}>
                          {platform.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link
                        to="/blog"
                        className="text-blue-600 text-sm font-semibold hover:text-blue-800 flex items-center gap-1"
                      >
                        Read our guides
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Articles */}
      {platformArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Platform-Specific Guides</h2>
              <p className="text-gray-500">Deep-dive tutorials for each platform.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterSection />
    </main>
  );
}
