import { siteImage } from "../lib/siteImage";
import PhoneLinks from "../components/PhoneLinks";
import { useContent } from "../lib/useContent";
import type { Leader } from "../types/content";
import { useSettings } from "../lib/useSettings";
import { usePageData } from "../lib/usePageData";
import type { FounderPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";

export default function FounderPage() {
  const { items: leaders } = useContent<Leader>("leadership");
  const founder = leaders.find((leader) => leader.founder);

  const { settings } = useSettings();
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<FounderPageData>("founder");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};
  const timelineItems = arrays.timelineItems ?? [];
  const achievementCards = arrays.achievementCards ?? [];

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
      {/* Hero */}
      <div
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative">
              <img
                src={siteImage(founder?.id, 3)}
                alt={founder?.name}
                className="rounded-sm w-full object-cover shadow-2xl"
                style={{ height: "420px", maxWidth: "340px" }}
              />
              <div
                className="absolute -bottom-4 -right-4 p-5 rounded-sm shadow-lg"
                style={{ backgroundColor: "#B8963E" }}
              >
                <p className="text-white text-xs font-semibold uppercase tracking-wider">
                  {founder?.position}
                </p>
                <p
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {settings?.name}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="section-label mb-3" style={{ color: "#B8963E" }}>
              Leadership
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {founder?.name}
            </h1>
            <p className="text-lg mb-5" style={{ color: "#D4AE5A" }}>
              {founder?.position}
            </p>
            <p className="text-white/60 text-sm italic mb-6">
              {blocks.paragraph_3}
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              {blocks.paragraph_4}
            </p>
            <p className="text-white/70 leading-relaxed">
              {blocks.paragraph_5}
            </p>
          </div>
        </div>
      </div>

      {/* Achievement cards */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementCards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-sm"
                style={{ border: "1px solid #EDE9E0" }}
              >
                <div className="gold-divider-left mb-4" />
                <p
                  className="text-2xl font-bold mb-0.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1B2A56",
                  }}
                >
                  {card.title}
                </p>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "#B8963E" }}
                >
                  {card.sub}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography sections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Biography</p>
            <div className="gold-divider mb-5" />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
            >
              {blocks.heading_11}
            </h2>
          </div>

          {/* Executive Profile */}
          <div
            className="mb-12 p-8 rounded-sm"
            style={{ backgroundColor: "#F8F7F4", border: "1px solid #EDE9E0" }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
            >
              {blocks.heading_12}
            </h3>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p className="whitespace-pre-line">{founder?.biography}</p>
            </div>
          </div>

          {/* Timeline */}
          <h3
            className="text-xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
          >
            {blocks.heading_13}
          </h3>
          <div className="space-y-0">
            {timelineItems.map((item, i) => (
              <div key={item.period} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                    style={{ backgroundColor: "#B8963E" }}
                  />
                  {i < timelineItems.length - 1 && (
                    <div
                      className="w-px flex-1 my-1"
                      style={{ backgroundColor: "#EDE9E0" }}
                    />
                  )}
                </div>
                <div className="pb-10">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#B8963E" }}
                  >
                    {item.period}
                  </p>
                  <h4
                    className="font-bold mb-3 text-base"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#1B2A56",
                    }}
                  >
                    {item.title}
                  </h4>
                  <div className="space-y-2">
                    {item.items.map((it) => (
                      <div key={it} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gray-300" />
                        <p className="text-sm text-gray-600">{it}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Enquiries */}
          <div
            className="mt-10 p-8 rounded-sm"
            style={{ backgroundColor: "#1B2A56" }}
          >
            <h3
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {blocks.heading_9}
            </h3>
            <p className="text-white/70 text-sm mb-5">{blocks.paragraph_10}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${settings?.ceoEmail ?? ""}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded"
                style={{ backgroundColor: "#B8963E", color: "#fff" }}
              >
                {settings?.ceoEmail}
              </a>
              <PhoneLinks phone={settings?.phone}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded border"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
