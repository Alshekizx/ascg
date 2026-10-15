import type { Publication } from "../types/content";
import { usePageData } from "../lib/usePageData";
import type { PublicationsPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { safeLink } from "../lib/safeLink";
import { useContent } from "../lib/useContent";
import { useState } from "react";

export default function PublicationsPage() {
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<PublicationsPageData>("publications");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};

  const { items: publications } = useContent<Publication>("publication");

  const pubTypes = ["All", ...new Set(publications.map((item) => item.type))];
  const years = [
    "All Years",
    ...new Set(publications.map((item) => item.year)),
  ];
  const [activeType, setActiveType] = useState("All");
  const [activeYear, setActiveYear] = useState("All Years");
  const [search, setSearch] = useState("");

  const filtered = publications.filter((p) => {
    const matchType = activeType === "All" || p.type === activeType;
    const matchYear = activeYear === "All Years" || p.year === activeYear;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    return matchType && matchYear && matchSearch;
  });

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
      {/* Header */}
      <div
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "#B8963E" }}>
            {blocks.paragraph_1}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {blocks.heading_2}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {blocks.paragraph_3}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div
        className="sticky top-[64px] z-40 bg-white border-b"
        style={{ borderColor: "#EDE9E0" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search publications..."
                className="pl-9 pr-4 py-2 text-sm border rounded-sm outline-none focus:border-amber-500"
                style={{ borderColor: "#EDE9E0", width: "200px" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {pubTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-sm transition-all"
                  style={{
                    backgroundColor: activeType === t ? "#1B2A56" : "#F8F7F4",
                    color: activeType === t ? "#fff" : "#6B7280",
                    border: `1px solid ${
                      activeType === t ? "#1B2A56" : "#EDE9E0"
                    }`,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <select
              value={activeYear}
              onChange={(e) => setActiveYear(e.target.value)}
              className="px-3 py-2 text-xs border rounded-sm outline-none"
              style={{ borderColor: "#EDE9E0", color: "#1B2A56" }}
            >
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Publications grid */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "#F8F7F4", minHeight: "60vh" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pub) => (
              <div
                key={pub.title}
                className="group bg-white rounded-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ border: "1px solid #EDE9E0" }}
              >
                <div
                  className="relative overflow-hidden h-48 flex items-center justify-center"
                  style={{ backgroundColor: "#1B2A56" }}
                >
                  <img
                    src={pub.img}
                    alt={pub.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="relative z-10 text-center px-6">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm"
                      style={{
                        backgroundColor: "rgba(184,150,62,0.25)",
                        color: "#D4AE5A",
                      }}
                    >
                      {pub.type}
                    </span>
                    <p
                      className="text-white font-bold mt-3 text-sm leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {pub.title.length > 50
                        ? pub.title.substring(0, 50) + "…"
                        : pub.title}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-400">{pub.date}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{pub.pages}</span>
                  </div>
                  <h3
                    className="font-bold mb-2 leading-snug text-sm"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#1B2A56",
                    }}
                  >
                    {pub.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {pub.summary}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">By {pub.author}</p>
                  {safeLink(pub.file) ? (
                    <a
                      href={safeLink(pub.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: "#1B2A56", color: "#fff" }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      View / Download
                    </a>
                  ) : (
                    <p className="text-xs text-gray-500">
                      {blocks.paragraph_4}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">{blocks.paragraph_5}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
