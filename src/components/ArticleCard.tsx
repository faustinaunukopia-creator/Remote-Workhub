import { Link } from "react-router-dom";
import { Article, badgeColorMap } from "../data/articles";

interface ArticleCardProps {
  article: Article;
  size?: "default" | "large";
}

export default function ArticleCard({ article, size = "default" }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Card Top Color Bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 w-full"></div>

      <div className="p-5 flex flex-col flex-1">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 flex items-center gap-1">
            <span>{article.icon}</span>
            {article.category}
          </span>
          {article.badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColorMap[article.badgeColor || "blue"]}`}>
              {article.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors ${size === "large" ? "text-xl" : "text-base"}`}>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{article.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {article.date}
            </span>
          </div>
          <Link
            to={`/blog/${article.slug}`}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link"
          >
            Read
            <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
