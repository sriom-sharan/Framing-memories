import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/terms&conditions";
function App() {
  return (
    <Routes>

      <Route element={<IndexPage />} path="/" />
      <Route element={<div className="w-screen h-screen flex justify-center items-center text-2xl">404 - Page not found 😓</div>} path="*" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about-us" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<TermsandConditions />} path="/terms&conditions" />
    </Routes>
  );
}

export default App;
