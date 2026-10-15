import type { Article } from "../types/content";
import { usePageData } from "../lib/usePageData";
import type { NewsPageData } from "../types/pages";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContent } from "../lib/useContent";
import ContentStatus from "../components/ContentStatus";

export default function NewsPage() {
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<NewsPageData>("news");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};

  const { items: articles, loading, error } = useContent<Article>("news");

  const categories = [
    "All",
    ...new Set(articles.map((article) => article.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const featured =
    activeCategory === "All" ? articles.find((a) => a.featured) : undefined;
  const regular = articles.filter(
    (a) =>
      a.slug !== featured?.slug &&
      (activeCategory === "All" || a.category === activeCategory),
  );

  if (!page)
    return (
      <div className="pt-28 min-h-[50vh]">
        <ContentStatus
          loading={pageLoading}
          error={
            pageError ||
            (!pageLoading ? "This page has no published content yet." : "")
          }
        />
      </div>
    );
  return (
    <div className="pt-20">
      <ContentStatus loading={loading} error={error} />
      {/* Header */}
      <div
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "#B8963E" }}>
            Editorial
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {blocks.heading_3}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {blocks.paragraph_1}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured story */}
        {featured && (
          <div className="mb-16">
            <p className="section-label mb-4" style={{ color: "#B8963E" }}>
              Featured Story
            </p>
            <Link
              to={`/news/${featured.slug}`}
              className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden hover:shadow-xl focus-visible:outline-2 focus-visible:outline-gold transition-shadow"
              style={{ border: "1px solid #EDE9E0" }}
            >
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-72 lg:h-auto object-cover"
              />
              <div
                className="p-10 flex flex-col justify-center"
                style={{ backgroundColor: "#1B2A56" }}
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider mb-3 px-2.5 py-1 rounded-sm inline-block"
                  style={{
                    backgroundColor: "rgba(184,150,62,0.2)",
                    color: "#D4AE5A",
                  }}
                >
                  {featured.category}
                </span>
                <h2
                  className="text-2xl font-bold text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-white/50">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <span className="mt-6 text-gold-light text-sm font-semibold">
                  Read full story →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className="px-3 py-1.5 text-xs font-semibold rounded-sm transition-all"
              style={{
                backgroundColor: activeCategory === cat ? "#1B2A56" : "#F8F7F4",
                color: activeCategory === cat ? "#fff" : "#6B7280",
                border: `1px solid ${
                  activeCategory === cat ? "#1B2A56" : "#EDE9E0"
                }`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((article) => (
            <Link
              to={`/news/${article.slug}`}
              key={article.slug}
              className="group bg-white rounded-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              style={{ border: "1px solid #EDE9E0" }}
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-sm"
                    style={{
                      backgroundColor: "rgba(27,42,86,0.08)",
                      color: "#1B2A56",
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3
                  className="font-bold mb-2 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1B2A56",
                  }}
                >
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <p className="text-xs text-gray-400">{article.author}</p>
                <span className="block mt-4 text-sm font-semibold text-navy">
                  Read full story →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {regular.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">{blocks.paragraph_2}</p>
          </div>
        )}
      </div>
    </div>
  );
}
