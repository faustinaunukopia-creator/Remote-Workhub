import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="pt-28 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-blue-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
            Go to Homepage
          </Link>
          <Link to="/blog" className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-xl transition-colors">
            Browse Guides
          </Link>
        </div>
      </div>
    </main>
  );
}
