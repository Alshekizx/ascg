import { safeLink } from "../lib/safeLink"
import { useContent } from "../lib/useContent"
import { useState } from "react"

const tabs = [
  "Photos",
  "Videos",
  "Press Releases",
  "Speeches",
  "Media Coverage",
]

const initialPhotos = [
  {
    img: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&h=400&fit=crop&auto=format",
    caption: "ASGC Diplomatic Dialogue Forum, Abuja 2026",
    album: "Events",
  },
  {
    img: "https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=600&h=400&fit=crop&auto=format",
    caption: "Africa Trade & Investment Symposium, Lagos 2026",
    album: "Events",
  },
  {
    img: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=600&h=400&fit=crop&auto=format",
    caption: "Economic Diplomacy Training Workshop, Abuja 2026",
    album: "Programmes",
  },
  {
    img: "https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=600&h=400&fit=crop&auto=format",
    caption: "Ambassador Ahmed Sule – Diplomatic engagement",
    album: "Leadership",
  },
  {
    img: "https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=600&h=400&fit=crop&auto=format",
    caption: "Nigeria–Gulf Cooperation Forum, Abuja 2026",
    album: "Events",
  },
  {
    img: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&h=400&fit=crop&auto=format",
    caption: "ASGC Partnerships and Cooperation Dialogue",
    album: "Partnerships",
  },
]

const initialPressReleases = [
  {
    date: "September 10, 2026",
    title: "ASGC Announces Nigeria–Gulf Cooperation Forum 2026",
    excerpt:
      "The Ahmed Sule Global Centre for Diplomacy, Trade and Investment announces its flagship Nigeria–Gulf Cooperation Forum, to be held on 15 October 2026 in Abuja.",
  },
  {
    date: "August 5, 2026",
    title: "ASGC Publishes Policy Brief on West African Investment Frameworks",
    excerpt:
      "ASGC has released its latest policy brief, examining responsible investment standards and opportunities across West Africa.",
  },
  {
    date: "July 1, 2026",
    title: "ASGC Launches Inaugural Economic Diplomacy Training Programme",
    excerpt:
      "The Centre has launched its inaugural Economic Diplomacy Training Programme, targeting young professionals across Nigeria.",
  },
]

const initialSpeeches = [
  {
    date: "February 2026",
    title: "Nigeria's Diplomatic Priorities in a Changing World",
    speaker: "Ambassador Ahmed Sule",
    event: "ASGC Diplomacy & Trade Forum",
  },
  {
    date: "March 2026",
    title: "Opening Remarks: Economic Diplomacy Training Workshop",
    speaker: "Ambassador Ahmed Sule",
    event: "ASGC Training Programme Launch",
  },
]

const initialMediaCoverage = [
  {
    date: "September 2026",
    outlet: "This Day",
    title:
      "ASGC Emerges as Key Voice on Nigeria's Trade and Investment Diplomacy",
  },
  {
    date: "August 2026",
    outlet: "The Punch",
    title:
      "New Policy Brief Charts Course for Responsible Investment in West Africa",
  },
  {
    date: "July 2026",
    outlet: "Business Day",
    title: "ASGC Trains Young Professionals in Economic Diplomacy",
  },
]

export default function MediaPage() {
  const { items: videos } = useContent<{
    title: string
    url: string
    description: string
  }>("video", [])
  const { items: photos } = useContent("photo", initialPhotos)
  const { items: pressReleases } = useContent(
    "press",
    initialPressReleases.map((item) => ({ ...item, body: "" })),
  )
  const { items: speeches } = useContent(
    "speech",
    initialSpeeches.map((item) => ({ ...item, file: "" })),
  )
  const { items: mediaCoverage } = useContent(
    "coverage",
    initialMediaCoverage.map((item) => ({ ...item, url: "" })),
  )

  const [activeTab, setActiveTab] = useState("Photos")
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

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
            Media & Gallery
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Photos, videos, press releases, speeches and media coverage from
            ASGC's activities and engagements.
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
                onClick={() => setLightboxImg(photo.img)}
              >
                <img
                  src={photo.img}
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
              <p className="text-gray-500">No videos published yet.</p>
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
            src={lightboxImg}
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
  )
}
