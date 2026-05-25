import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import JobGuides from "./pages/JobGuides";
import Platforms from "./pages/Platforms";
import HowToApply from "./pages/HowToApply";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:slug" element={<CategoryDetail />} />
          <Route path="job-guides" element={<JobGuides />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="how-to-apply" element={<HowToApply />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
