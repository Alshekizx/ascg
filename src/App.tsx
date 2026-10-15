import DynamicPage from "./pages/DynamicPage";
import SiteMetadata from "./components/SiteMetadata";
import LoadingIndicator from "./components/LoadingIndicator";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurWorkPage from "./pages/OurWorkPage";
import FounderPage from "./pages/FounderPage";
import ProgrammesPage from "./pages/ProgrammesPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import EventsPage from "./pages/EventsPage";
import PublicationsPage from "./pages/PublicationsPage";
import MediaPage from "./pages/MediaPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

function Layout() {
  const location = useLocation();
  const isAdmin = /^\/admin\/?$/.test(location.pathname);

  if (isAdmin) {
    return (
      <>
        <LoadingIndicator navigationKey={location.pathname + location.search} />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <LoadingIndicator navigationKey={location.pathname + location.search} />
      <SiteMetadata />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<ArticlePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<DynamicPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
