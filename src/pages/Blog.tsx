import { useState } from "react";
import { articles, categories } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import NewsletterSection from "../components/NewsletterSection";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === "all" || a.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">All Articles</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Online Job & Freelance Blog
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Step-by-step guides, platform reviews, and beginner tutorials — all in one place.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Search Bar */}
          <div className="mb-8 max-w-xl mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search guides and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              All Guides
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.slug
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-gray-500 text-sm">
              {filtered.length === 0 ? "No articles found" : `Showing ${filtered.length} article${filtered.length !== 1 ? "s" : ""}`}
              {activeCategory !== "all" && ` in ${categories.find((c) => c.slug === activeCategory)?.name}`}
            </p>
          </div>

          {/* Articles Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">Try a different search term or browse all categories.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
