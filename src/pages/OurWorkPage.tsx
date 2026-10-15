import { usePageData } from "../lib/usePageData";
import type { OurWorkPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { Link } from "react-router-dom";

export default function OurWorkPage() {
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<OurWorkPageData>("our-work");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};
  const mandateAreas = arrays.mandateAreas ?? [];

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
            What We Do
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {blocks.heading_1}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {blocks.paragraph_2}
          </p>
        </div>
      </div>

      {/* Mandate areas */}
      <div className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {mandateAreas.map((area, i) => (
            <div
              key={area.num}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center py-16 ${i < mandateAreas.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="lg:w-1/2">
                <img
                  src={area.img}
                  alt={area.title}
                  className="rounded-sm w-full object-cover shadow-lg"
                  style={{ height: "360px" }}
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-5xl font-bold"
                    style={{
                      color: "#EDE9E0",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {area.num}
                  </span>
                  <span className="text-3xl">{area.icon}</span>
                </div>
                <div className="gold-divider-left mb-5" />
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1B2A56",
                  }}
                >
                  {area.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.desc}
                </p>
                <div className="space-y-2.5">
                  {area.activities.map((act) => (
                    <div key={act} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "#B8963E" }}
                      />
                      <p className="text-sm text-gray-600">{act}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/programmes"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold"
                  style={{ color: "#1B2A56", fontFamily: "var(--font-body)" }}
                >
                  View related programmes
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
          >
            {blocks.heading_3}
          </h2>
          <p className="text-gray-600 mb-8">{blocks.paragraph_4}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programmes"
              className="px-8 py-3.5 font-semibold text-sm rounded"
              style={{ backgroundColor: "#1B2A56", color: "#fff" }}
            >
              View Programmes
            </Link>
            <Link
              to="/partnerships"
              className="px-8 py-3.5 font-semibold text-sm rounded border"
              style={{ borderColor: "#1B2A56", color: "#1B2A56" }}
            >
              Partner With ASGC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
