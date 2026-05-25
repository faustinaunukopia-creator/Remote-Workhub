import { Link } from "react-router-dom";
import NewsletterSection from "../components/NewsletterSection";

export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About RemoteWorkHub</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A trusted resource for beginners who want to find and apply for real online jobs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Mission */}
          <div className="mb-14">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 mb-8">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                RemoteWorkHub exists to help everyday people — regardless of background, education, or experience — discover and land legitimate online jobs and freelance opportunities.
              </p>
            </div>

            <div className="prose max-w-none space-y-5">
              <p className="text-gray-600 leading-relaxed text-lg">
                The internet is full of "make money online" content that overpromises and underdelivers. We built RemoteWorkHub to be different: a clean, honest, beginner-first resource that focuses on what actually works.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Every guide on this site is written with one goal in mind — to give you the clearest, most actionable steps to find, apply for, and start earning from real online platforms. No hype. No exaggerated income claims. Just practical, step-by-step information.
              </p>
            </div>
          </div>

          {/* What We Cover */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Cover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💼", title: "Remote Jobs", desc: "Work-from-home positions on real company job boards, with full application guides." },
                { icon: "🚀", title: "Freelance Platforms", desc: "In-depth reviews of Fiverr, Upwork, Freelancer, and more — with setup walkthroughs." },
                { icon: "📝", title: "Application Guides", desc: "Step-by-step tutorials for writing proposals, setting up profiles, and passing onboarding." },
                { icon: "💡", title: "Earning Tips", desc: "Practical strategies to increase your income once you've started working online." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Standards */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Content Standards</h2>
            <div className="space-y-4">
              {[
                { title: "Accuracy First", desc: "We verify every platform, rate, and requirement we mention before publishing." },
                { title: "No Exaggerated Claims", desc: "We don't promise specific income amounts. Earnings depend on effort, skill, and consistency." },
                { title: "Regular Updates", desc: "Platform policies change. We update our guides when platforms make changes." },
                { title: "Transparency About Affiliates", desc: "Some links may be affiliate links. We only recommend platforms we genuinely believe in, and we always disclose affiliate relationships." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-sm">{item.title}: </span>
                    <span className="text-gray-600 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Note */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Important Disclaimer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              RemoteWorkHub provides informational content only. We are not an employment agency and we do not guarantee job placement or specific earnings. Results depend on individual effort, skill level, and market conditions. Please read our full{" "}
              <Link to="/disclaimer" className="text-blue-600 hover:underline font-medium">Disclaimer</Link> and{" "}
              <Link to="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-500 mb-6">Browse our beginner-friendly guides and find the right path for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Browse All Guides
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
