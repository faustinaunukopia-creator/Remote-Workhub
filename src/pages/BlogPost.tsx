import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import NewsletterSection from "../components/NewsletterSection";

// Sample full article content for demonstration
const articleContent: Record<string, string[]> = {
  "how-i-got-remote-job-step-by-step": [
    "Finding a legitimate remote job that pays $16/hour without a college degree might sound difficult — but it's more achievable than you think. In this guide, I'll walk you through the exact steps I took to land a remote customer service position.",
    "**Step 1: Identify Your Target Role**\n\nI started by looking at entry-level remote positions that didn't require a degree. Customer service, data entry, and virtual assistant roles are great starting points. Sites like Remote.co, We Work Remotely, and Indeed are good places to search.",
    "**Step 2: Polish Your Resume**\n\nEven without experience, you can highlight transferable skills — communication, problem-solving, computer skills, and any relevant volunteer work or personal projects. Keep your resume to one page, clean and professional.",
    "**Step 3: Write a Tailored Cover Letter**\n\nI wrote a short, specific cover letter for each application. I mentioned what I liked about the company and why I was the right fit. This made a noticeable difference in my response rate.",
    "**Step 4: Apply Consistently**\n\nI applied to 10–15 positions per day for two weeks. Most didn't respond — and that's normal. It's a numbers game. The important thing is consistency and keeping your application quality high.",
    "**Step 5: Prepare for Video Interviews**\n\nMany remote jobs do video interviews via Zoom or Google Meet. I practiced common questions, tested my setup (lighting, audio, background), and dressed professionally. Preparation builds confidence.",
    "**The Result**\n\nAfter about 3 weeks of consistent effort, I received an offer for a remote customer support role at $16/hour. It wasn't overnight, and it wasn't luck — it was a systematic approach.",
    "**Key Takeaways**\n\nStart with roles that match your current skills. Don't wait until you feel 'ready.' Apply now, learn as you go, and improve your profile over time. Legitimate remote jobs exist — you just need to know where to look and how to apply properly.",
  ],
  "fiverr-beginner-guide": [
    "Fiverr is one of the best platforms for beginners to start freelancing. It's free to join, has millions of buyers, and lets you offer virtually any service. Here's everything you need to get started.",
    "**What is Fiverr?**\n\nFiverr is a freelance marketplace where sellers create 'Gigs' — service listings — and buyers purchase them. Services start at $5 but can go much higher depending on your package.",
    "**Step 1: Create Your Account**\n\nGo to Fiverr.com and sign up with your email. Choose a professional username — ideally your name or a variation. Complete your profile fully, including a professional photo, a bio, and your skills.",
    "**Step 2: Set Up Your First Gig**\n\nClick 'Selling > Gigs > Create a New Gig.' Choose a clear, searchable title. Good example: 'I will write a professional resume for job seekers.' Use keywords buyers would search for.",
    "**Step 3: Write a Compelling Gig Description**\n\nExplain exactly what you offer, what the buyer will receive, and why they should choose you. Be specific. Use bullet points for clarity. End with a call to action.",
    "**Step 4: Set Your Pricing**\n\nFiverr allows three tiers: Basic, Standard, and Premium. Start lower to build reviews, then raise your prices as your reputation grows. Don't sell yourself too cheap long-term.",
    "**Step 5: Add Gig Extras and FAQs**\n\nGig extras let you upsell additional services. FAQs help reduce repetitive questions from buyers. Both improve your conversion rate.",
    "**Getting Your First Order**\n\nShare your Gig on social media, relevant forums, and communities. Be responsive, deliver quality work, and ask satisfied clients for reviews. Your first order may take 1–4 weeks — be patient and stay active on the platform.",
  ],
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const relatedArticles = articles.filter((a) => a.slug !== slug && a.categorySlug === article?.categorySlug).slice(0, 3);
  const content = articleContent[slug || ""] || null;

  if (!article) {
    return (
      <main className="pt-28 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl mb-4">📄</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-500 mb-6">This article doesn't exist yet.</p>
          <Link to="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Browse All Articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50">
      {/* Post Header */}
      <section className="pt-28 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-600 truncate">{article.title}</span>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5">
              <span>{article.icon}</span>
              {article.category}
            </span>
            {article.badge && (
              <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                {article.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Published {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
            <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Intro */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
                <p className="text-blue-900 text-lg leading-relaxed font-medium">{article.excerpt}</p>
              </div>

              {/* Content */}
              {content ? (
                <div className="prose max-w-none">
                  {content.map((paragraph, i) => {
                    if (paragraph.startsWith("**") && paragraph.includes("\n\n")) {
                      const [heading, ...body] = paragraph.split("\n\n");
                      const headingText = heading.replace(/\*\*/g, "");
                      return (
                        <div key={i} className="mb-8">
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">{headingText}</h2>
                          <p className="text-gray-600 leading-relaxed text-lg">{body.join(" ")}</p>
                        </div>
                      );
                    }
                    if (paragraph.startsWith("**")) {
                      const match = paragraph.match(/\*\*(.+?)\*\*\n([\s\S]+)/);
                      if (match) {
                        return (
                          <div key={i} className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">{match[1]}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{match[2]}</p>
                          </div>
                        );
                      }
                    }
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Placeholder content for articles without custom content */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-yellow-800 font-semibold mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Full Guide Coming Soon
                    </div>
                    <p className="text-yellow-700 text-sm">
                      We're currently writing this in-depth guide. Subscribe to our newsletter to get notified when it's published.
                    </p>
                  </div>
                  {[
                    "This comprehensive guide will walk you through everything you need to know about this topic. Our team is working hard to deliver accurate, beginner-friendly content that actually helps you take action.",
                    "We research every platform, test every method, and write guides based on real experience — not speculation. When this article is published, it will include step-by-step instructions, screenshots where helpful, and honest pros and cons.",
                    "In the meantime, browse our other guides using the links below, or subscribe to get notified when this guide goes live.",
                  ].map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-lg">{p}</p>
                  ))}
                </div>
              )}

              {/* Share */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Guide</h3>
                <div className="flex gap-3">
                  {["Twitter / X", "Facebook", "Pinterest"].map((platform) => (
                    <button
                      key={platform}
                      className="flex-1 sm:flex-none bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h3 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Related Guides
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((a) => (
                        <Link
                          key={a.id}
                          to={`/blog/${a.slug}`}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                            {a.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                              {a.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{a.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories Box */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-4">Browse Categories</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Remote Jobs", slug: "remote-jobs", icon: "💼" },
                      { name: "Freelance Platforms", slug: "freelance-platforms", icon: "🚀" },
                      { name: "Application Guides", slug: "application-guides", icon: "📝" },
                      { name: "Online Earning Tips", slug: "online-earning-tips", icon: "💡" },
                      { name: "Beginner Tutorials", slug: "beginner-tutorials", icon: "🎓" },
                    ].map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/categories/${cat.slug}`}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-base">{cat.icon}</span>
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors font-medium">
                          {cat.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mini Newsletter */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white">
                  <div className="text-2xl mb-3">📬</div>
                  <h3 className="font-bold text-base mb-2">Get New Guides Free</h3>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    New job guides, platform reviews, and tutorials in your inbox.
                  </p>
                  <a
                    href="#newsletter"
                    className="block w-full bg-white text-blue-600 font-bold text-sm text-center py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Subscribe Free →
                  </a>
                  <p className="text-blue-300 text-xs text-center mt-2">No spam. Unsubscribe anytime.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div id="newsletter">
        <NewsletterSection />
      </div>
    </main>
  );
}
