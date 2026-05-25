import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import NewsletterSection from "../components/NewsletterSection";

const steps = [
  {
    number: "01",
    title: "Research the Platform",
    desc: "Before applying anywhere, understand how the platform works, what they expect, and whether it suits your skills. Read reviews, check forums, and look at what top earners in your niche are doing.",
    tip: "Pro Tip: Check if the platform has a skill test or verification requirement before you start.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Prepare Your Profile",
    desc: "Your profile is your first impression. Use a professional photo, write a clear bio that explains what you do and who you help, and list your skills accurately.",
    tip: "Pro Tip: Use keywords that clients or employers search for — this helps your profile appear in search results.",
    icon: "👤",
  },
  {
    number: "03",
    title: "Build a Portfolio (Even Without Experience)",
    desc: "No client work yet? Create sample projects. Write a practice article, design a mock logo, or do a demo video. Real portfolio pieces built from practice still demonstrate skill.",
    tip: "Pro Tip: Volunteer for non-profits or help a friend's business for free in exchange for a testimonial.",
    icon: "💼",
  },
  {
    number: "04",
    title: "Write a Winning Application or Proposal",
    desc: "Keep it short, specific, and focused on the client's needs. Don't copy-paste generic templates. Address the job description directly and show that you've actually read it.",
    tip: "Pro Tip: Open with something specific about the job — not 'I am a professional with 5 years of experience.'",
    icon: "📝",
  },
  {
    number: "05",
    title: "Pass Onboarding & Skill Tests",
    desc: "Many platforms require skill assessments or onboarding quizzes. Take them seriously. Practice beforehand using free resources on YouTube or platform help centers.",
    tip: "Pro Tip: Read the onboarding instructions carefully — skipping steps is the #1 reason people get rejected.",
    icon: "✅",
  },
  {
    number: "06",
    title: "Deliver Quality & Get Reviews",
    desc: "Your first job is your most important. Over-deliver, communicate clearly, meet deadlines, and politely ask for a review afterward. Reviews unlock more opportunities.",
    tip: "Pro Tip: Under-promise and over-deliver on your first few jobs to build a strong reputation fast.",
    icon: "⭐",
  },
];

const applicationArticles = articles.filter((a) => a.categorySlug === "application-guides");

const commonMistakes = [
  { mistake: "Copying and pasting generic proposals", fix: "Personalize every single application" },
  { mistake: "Applying with an incomplete profile", fix: "Complete 100% of your profile before applying" },
  { mistake: "Setting prices too high before you have reviews", fix: "Start competitive, raise prices as reviews grow" },
  { mistake: "Ignoring platform onboarding requirements", fix: "Read all guidelines before submitting anything" },
  { mistake: "Giving up after 1-2 rejections", fix: "Persistence wins — most people get hired after 10-20 applications" },
  { mistake: "Not following up on applications", fix: "Send a polite follow-up message after 3-5 days" },
];

export default function HowToApply() {
  return (
    <main>
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Application Tutorials</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How to Apply</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A complete step-by-step guide to applying for online jobs and freelance platforms the right way.
          </p>
        </div>
      </section>

      {/* Step-by-Step */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The 6-Step Application Process</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Follow these steps in order. Skip any step and you're reducing your chances of success.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-md shadow-blue-100">
                    <span className="text-blue-200 text-xs font-bold leading-none">STEP</span>
                    <span className="text-white text-2xl font-extrabold leading-none">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="text-blue-800 text-sm font-medium">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Common Mistakes to Avoid</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              These mistakes cost beginners weeks of wasted time. Know them before you start.
            </p>
          </div>

          <div className="space-y-4">
            {commonMistakes.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-2xl p-5">
                <div className="flex-1 flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-red-500 font-bold uppercase tracking-wide mb-0.5">Mistake</p>
                    <p className="text-gray-800 font-medium text-sm">{item.mistake}</p>
                  </div>
                </div>
                <div className="flex-1 flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-green-600 font-bold uppercase tracking-wide mb-0.5">Instead</p>
                    <p className="text-gray-800 font-medium text-sm">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Articles */}
      {applicationArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Application Guides</h2>
              <p className="text-gray-500">Platform-specific application walkthroughs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationArticles.map((article) => (
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
