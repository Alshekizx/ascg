import { LeadershipDirectory } from "../components/Directory";
import { usePageData } from "../lib/usePageData";
import type { AboutPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<AboutPageData>("about");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};
  const coreValues = arrays.coreValues ?? [];

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
      {/* Page header */}
      <div
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "#B8963E" }}>
            About
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {blocks.heading_10}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {blocks.paragraph_1}
          </p>
        </div>
      </div>
      <LeadershipDirectory />

      {/* Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Overview</p>
            <div className="gold-divider-left mb-6" />
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
            >
              {blocks.heading_2}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{blocks.paragraph_3}</p>
              <p>{blocks.paragraph_4}</p>
              <p>{blocks.paragraph_5}</p>
            </div>
          </div>
          <div className="space-y-5">
            {(arrays.items_1 ?? []).map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-4 rounded-sm"
                style={{
                  backgroundColor: "#F8F7F4",
                  borderLeft: "3px solid #B8963E",
                }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "#B8963E" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#1B2A56" }}
                  >
                    {item.val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1B2A56" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="p-10 rounded-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,62,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 text-2xl"
                style={{ backgroundColor: "rgba(184,150,62,0.15)" }}
              >
                👁️
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {blocks.heading_11}
              </h3>
              <p
                className="text-white/80 text-lg italic leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {blocks.paragraph_6}
              </p>
            </div>
            <div
              className="p-10 rounded-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,62,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 text-2xl"
                style={{ backgroundColor: "rgba(184,150,62,0.15)" }}
              >
                🎯
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {blocks.heading_12}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {blocks.paragraph_7}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What Guides Us</p>
            <div className="gold-divider mb-5" />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
            >
              {blocks.heading_13}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-sm"
                style={{
                  backgroundColor: "#F8F7F4",
                  border: "1px solid #EDE9E0",
                }}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1B2A56",
                  }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nonprofit commitment */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-3">{blocks.paragraph_8}</p>
          <div className="gold-divider mb-6" />
          <p className="text-gray-600 leading-relaxed text-base">
            {blocks.paragraph_9}
          </p>
          <div className="mt-8">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded transition-all hover:opacity-90"
              style={{
                backgroundColor: "#1B2A56",
                color: "#fff",
                fontFamily: "var(--font-body)",
              }}
            >
              Explore Our Mandate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
