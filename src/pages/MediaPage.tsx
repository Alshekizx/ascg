import { siteImage } from "../lib/siteImage";
import type { Photo, Press, Speech, Coverage } from "../types/content";
import { usePageData } from "../lib/usePageData";
import type { MediaPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { safeLink } from "../lib/safeLink";
import { useContent } from "../lib/useContent";
import { useState } from "react";

const tabs = [
  "Photos",
  "Videos",
  "Press Releases",
  "Speeches",
  "Media Coverage",
];

export default function MediaPage() {
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<MediaPageData>("media");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};

  const { items: videos } = useContent<{
    title: string;
    url: string;
    description: string;
  }>("video");
  const { items: photos } = useContent<Photo>("photo");
  const { items: pressReleases } = useContent<Press>("press");
  const { items: speeches } = useContent<Speech>("speech");
  const { items: mediaCoverage } = useContent<Coverage>("coverage");

  const [activeTab, setActiveTab] = useState("Photos");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

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
            Press & Media
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

      {/* Tabs */}
      <div
        className="sticky top-[64px] z-40 bg-white border-b"
        style={{ borderColor: "#EDE9E0" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
                style={{
                  borderColor: activeTab === tab ? "#1B2A56" : "transparent",
                  color: activeTab === tab ? "#1B2A56" : "#9CA3AF",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === "Photos" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.img}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setLightboxImg(photo.id)}
              >
                <img
                  src={siteImage(photo.id)}
                  alt={photo.caption}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(17,27,58,0.85), transparent)",
                  }}
                >
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">
                      {photo.caption}
                    </p>
                    <p className="text-xs" style={{ color: "#D4AE5A" }}>
                      {photo.album}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Videos" && (
          <div className="grid sm:grid-cols-2 gap-6">
            {videos.length === 0 && (
              <p className="text-gray-500">{blocks.paragraph_2}</p>
            )}
            {videos.map((video) => (
              <article
                key={video.title}
                className="bg-white rounded border p-6"
              >
                <h3 className="font-bold mb-3">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {video.description}
                </p>
                {safeLink(video.url) && (
                  <a
                    href={safeLink(video.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#96790f]"
                  >
                    Watch Video →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        {activeTab === "Press Releases" && (
          <div className="max-w-3xl space-y-6">
            {pressReleases.map((pr) => (
              <div
                key={pr.title}
                className="p-6 rounded-sm"
                style={{ backgroundColor: "#fff", border: "1px solid #EDE9E0" }}
              >
                <p className="text-xs text-gray-400 mb-2">{pr.date}</p>
                <h3
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1B2A56",
                  }}
                >
                  {pr.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {pr.excerpt}
                </p>
                {pr.body && (
                  <details className="text-sm">
                    <summary className="font-semibold text-[#96790f] cursor-pointer">
                      Read Full Release
                    </summary>
                    <p className="whitespace-pre-line mt-3 text-gray-600">
                      {pr.body}
                    </p>
                  </details>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Speeches" && (
          <div className="max-w-3xl space-y-5">
            {speeches.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-sm flex gap-6 items-start"
                style={{ backgroundColor: "#fff", border: "1px solid #EDE9E0" }}
              >
                <div
                  className="w-1 flex-shrink-0 self-stretch rounded"
                  style={{ backgroundColor: "#B8963E" }}
                />
                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    {s.date} · {s.event}
                  </p>
                  <h3
                    className="font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#1B2A56",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500">{s.speaker}</p>
                  {safeLink(s.file) && (
                    <a
                      href={safeLink(s.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold mt-2 inline-block text-[#96790f]"
                    >
                      Download PDF →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Media Coverage" && (
          <div className="max-w-3xl space-y-4">
            {mediaCoverage.map((mc) => (
              <div
                key={mc.title}
                className="p-6 rounded-sm flex items-center justify-between gap-4"
                style={{ backgroundColor: "#fff", border: "1px solid #EDE9E0" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-bold uppercase"
                      style={{ color: "#1B2A56" }}
                    >
                      {mc.outlet}
                    </span>
                    <span className="text-xs text-gray-400">{mc.date}</span>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    {mc.title}
                  </p>
                </div>
                {safeLink(mc.url) && (
                  <a
                    href={safeLink(mc.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold flex-shrink-0 text-[#96790f]"
                  >
                    Read →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={siteImage(lightboxImg)}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-sm"
          />
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightboxImg(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
