import { useContent } from "../lib/useContent";
import type { Programme } from "../types/content";
import { usePageData } from "../lib/usePageData";
import type { ProgrammesPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { Link } from "react-router-dom";

export default function ProgrammesPage() {
  const { items: programmes } = useContent<Programme>("programme");
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<ProgrammesPageData>("programmes");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};

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
      <header
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: "#B8963E" }}>
            Our Programmes
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
      </header>
      <section aria-label="Programme areas" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className="p-8 rounded border border-gray-100"
              style={{ backgroundColor: "#F8F7F4" }}
            >
              <div className="gold-divider-left mb-5" />
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
              >
                {programme.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {programme.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "#F8F7F4" }}
      >
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
        >
          {blocks.heading_3}
        </h2>
        <p className="text-gray-600 mb-8">{blocks.paragraph_4}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3.5 font-semibold text-sm rounded text-white"
            style={{ backgroundColor: "#1B2A56" }}
          >
            Contact Us
          </Link>
          <Link
            to="/events"
            className="px-8 py-3.5 font-semibold text-sm rounded border"
            style={{ borderColor: "#1B2A56", color: "#1B2A56" }}
          >
            View Events
          </Link>
        </div>
      </section>
    </div>
  );
}
