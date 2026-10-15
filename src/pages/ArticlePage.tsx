import type { Article } from "../types/content";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContent } from "../lib/useContent";
import ContentStatus from "../components/ContentStatus";

export default function ArticlePage() {
  const { items: articles, loading, error } = useContent<Article>("news");

  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  const [shareStatus, setShareStatus] = useState("");

  useEffect(() => {
    setShareStatus("");
  }, [slug]);
  useEffect(() => {
    if (loading) return;
    const previousTitle = document.title;
    document.title = article
      ? `${article.title} | ASGC`
      : "Article not found | ASGC";
    return () => {
      document.title = previousTitle;
    };
  }, [article?.title, loading]);

  if (loading)
    return (
      <div className="pt-40 min-h-screen">
        <ContentStatus loading={loading} error={error} />
      </div>
    );
  if (!article)
    return (
      <section className="px-6 pt-44 pb-24 text-center min-h-[65vh]">
        <p className="section-label mb-4">News & Insights</p>
        <h1 className="text-4xl mb-6">Article not found</h1>
        <p className="text-gray-500 mb-8">
          This story may have moved or is no longer available.
        </p>
        <Link
          to="/news"
          className="inline-block bg-navy text-white px-6 py-3 rounded"
        >
          Browse all stories
        </Link>
      </section>
    );

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("Article link copied.");
    } catch {
      setShareStatus(
        "Copy the page address from your browser to share this article.",
      );
    }
  };

  return (
    <div className="pt-28 lg:pt-36 bg-cream">
      <article>
        <header className="max-w-5xl mx-auto px-6 pt-6 pb-10 md:pb-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap gap-2 text-xs text-gray-500 mb-10"
          >
            <Link to="/" className="hover:text-navy">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/news" className="hover:text-navy">
              News & Insights
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-navy" aria-current="page">
              {article.category}
            </span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">{article.category}</span>
            <span className="w-10 h-px bg-gold" aria-hidden="true" />
            <span className="text-xs text-gray-500">
              {article.readingMinutes} min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.16] tracking-tight text-navy max-w-4xl">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-7 max-w-3xl">
            {article.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-stone pt-6">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="w-11 h-11 rounded-full bg-navy text-gold-light flex items-center justify-center text-xs font-semibold"
              >
                ASGC
              </div>
              <div>
                <p className="text-sm font-semibold">{article.author}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Published {article.date}
                </p>
              </div>
            </div>
            <Link to="/news" className="text-xs font-semibold hover:text-gold">
              ← All stories
            </Link>
          </div>
        </header>

        <figure className="max-w-6xl mx-auto px-6">
          <img
            src={article.img
              .replace(/w=\d+/, "w=1600")
              .replace(/h=\d+/, "h=800")}
            alt=""
            className="w-full aspect-[16/9] md:aspect-[2/1] object-cover rounded-sm"
          />
          <figcaption className="text-xs text-gray-500 border-b border-stone py-3">
            Illustrative photography · Unsplash
          </figcaption>
        </figure>

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16">
          <aside aria-label="Article navigation and sharing">
            <div className="lg:sticky lg:top-32">
              <p className="section-label mb-5">In this article</p>
              <nav
                aria-label="Article contents"
                className="border-l border-stone space-y-4 pl-4"
              >
                {article.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm leading-relaxed text-gray-500 hover:text-navy"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
              <div className="border-t border-stone mt-8 pt-6">
                <p className="section-label mb-4">Share this story</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={copyLink}
                    className="border border-stone rounded px-3 py-2 text-xs hover:border-gold"
                  >
                    Copy link
                  </button>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`}
                    className="border border-stone rounded px-3 py-2 text-xs hover:border-gold"
                  >
                    Email
                  </a>
                </div>
                <p role="status" className="text-xs text-gray-500 mt-3">
                  {shareStatus}
                </p>
              </div>
            </div>
          </aside>

          <div className="max-w-[720px]">
            <p className="text-xs text-gray-500 border-l-2 border-gold pl-4 mb-10">
              Sample editorial content for this website preview.
            </p>
            {article.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 mb-10"
              >
                <h2 className="text-2xl md:text-3xl text-navy mb-5">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base md:text-lg leading-[1.9] text-gray-600 mb-5"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <div className="border-y border-stone py-7 flex items-start gap-4">
              <div
                aria-hidden="true"
                className="w-12 h-12 shrink-0 rounded-full bg-navy text-gold-light flex items-center justify-center text-xs font-semibold"
              >
                ASGC
              </div>
              <div>
                <p className="section-label mb-2">About the contributor</p>
                <h2 className="text-xl mb-2">{article.author}</h2>
                <p className="text-sm leading-relaxed text-gray-500">
                  Perspectives from the Ahmed Sule Global Centre for Diplomacy,
                  Trade and Investment.
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-3 text-sm font-semibold hover:text-gold"
                >
                  Discover ASGC →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section
        aria-labelledby="related-heading"
        className="bg-white border-t border-stone px-6 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <p className="section-label mb-3">Continue reading</p>
              <h2 id="related-heading" className="text-3xl">
                More News & Insights
              </h2>
            </div>
            <Link to="/news" className="text-sm font-semibold text-gold">
              View all stories →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="group block rounded border border-stone overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="section-label mb-3">{item.category}</p>
                  <h3 className="text-xl leading-snug mb-4">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    {item.date} · {item.readingMinutes} min read
                  </p>
                  <span className="block mt-5 text-sm font-semibold">
                    Read story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
