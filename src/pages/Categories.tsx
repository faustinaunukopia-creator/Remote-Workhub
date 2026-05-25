import { Link } from "react-router-dom";
import { categories, articles, categoryColorMap } from "../data/articles";

export default function Categories() {
  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Browse Topics</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Categories</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Explore guides organized by topic — from platform reviews to application tutorials.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const colors = categoryColorMap[cat.color];
              const catArticles = articles.filter((a) => a.categorySlug === cat.slug);

              return (
                <div key={cat.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className={`${colors.bg} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{cat.icon}</div>
                      <div>
                        <h2 className="font-bold text-xl mb-1">{cat.name}</h2>
                        <p className="text-white/80 text-sm">{catArticles.length} article{catArticles.length !== 1 ? "s" : ""} available</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{cat.description}</p>

                    {/* Sample articles */}
                    {catArticles.length > 0 && (
                      <div className="space-y-3 mb-5">
                        {catArticles.slice(0, 2).map((article) => (
                          <Link
                            key={article.id}
                            to={`/blog/${article.slug}`}
                            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                          >
                            <span className="text-xl">{article.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-900 text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-1">
                                {article.title}
                              </p>
                              <p className="text-gray-400 text-xs">{article.readTime}</p>
                            </div>
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/categories/${cat.slug}`}
                      className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm hover:underline`}
                    >
                      View all {cat.name} articles
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
