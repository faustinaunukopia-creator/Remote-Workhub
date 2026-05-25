import { useParams, Link } from "react-router-dom";
import { articles, categories, categoryColorMap } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const catArticles = articles.filter((a) => a.categorySlug === slug);
  const colors = category ? categoryColorMap[category.color] : categoryColorMap.blue;

  if (!category) {
    return (
      <main className="pt-28 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
          <p className="text-gray-500 mb-6">This category doesn't exist.</p>
          <Link to="/categories" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Browse All Categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className={`pt-28 pb-12 ${colors.bg} relative overflow-hidden`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="text-5xl mb-4">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{category.name}</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{category.description}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
            {catArticles.length} guide{catArticles.length !== 1 ? "s" : ""} available
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-blue-600 transition-colors">Categories</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>

          {catArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📝</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h2>
              <p className="text-gray-500">We're working on guides for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
