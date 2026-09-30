import { useState } from 'react';

const tabs = ['Photos', 'Videos', 'Press Releases', 'Speeches', 'Media Coverage'];

const photos = [
  { img: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&h=400&fit=crop&auto=format', caption: 'ASGC Diplomatic Dialogue Forum, Abuja 2026', album: 'Events' },
  { img: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=600&h=400&fit=crop&auto=format', caption: 'Africa Trade & Investment Symposium, Lagos 2026', album: 'Events' },
  { img: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=600&h=400&fit=crop&auto=format', caption: 'Economic Diplomacy Training Workshop, Abuja 2026', album: 'Programmes' },
  { img: 'https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=600&h=400&fit=crop&auto=format', caption: 'Ambassador Ahmed Sule – Diplomatic engagement', album: 'Leadership' },
  { img: 'https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=600&h=400&fit=crop&auto=format', caption: 'Nigeria–Gulf Cooperation Forum, Abuja 2026', album: 'Events' },
  { img: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=600&h=400&fit=crop&auto=format', caption: 'ASGC Partnerships and Cooperation Dialogue', album: 'Partnerships' },
];

const pressReleases = [
  { date: 'September 10, 2026', title: 'ASGC Announces Nigeria–Gulf Cooperation Forum 2026', excerpt: 'The Ahmed Sule Global Centre for Diplomacy, Trade and Investment announces its flagship Nigeria–Gulf Cooperation Forum, to be held on 15 October 2026 in Abuja.' },
  { date: 'August 5, 2026', title: 'ASGC Publishes Policy Brief on West African Investment Frameworks', excerpt: 'ASGC has released its latest policy brief, examining responsible investment standards and opportunities across West Africa.' },
  { date: 'July 1, 2026', title: 'ASGC Launches Inaugural Economic Diplomacy Training Programme', excerpt: 'The Centre has launched its inaugural Economic Diplomacy Training Programme, targeting young professionals across Nigeria.' },
];

const speeches = [
  { date: 'February 2026', title: 'Nigeria\'s Diplomatic Priorities in a Changing World', speaker: 'Ambassador Ahmed Sule', event: 'ASGC Diplomacy & Trade Forum' },
  { date: 'March 2026', title: 'Opening Remarks: Economic Diplomacy Training Workshop', speaker: 'Ambassador Ahmed Sule', event: 'ASGC Training Programme Launch' },
];

const mediaCoverage = [
  { date: 'September 2026', outlet: 'This Day', title: 'ASGC Emerges as Key Voice on Nigeria\'s Trade and Investment Diplomacy' },
  { date: 'August 2026', outlet: 'The Punch', title: 'New Policy Brief Charts Course for Responsible Investment in West Africa' },
  { date: 'July 2026', outlet: 'Business Day', title: 'ASGC Trains Young Professionals in Economic Diplomacy' },
];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('Photos');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: '#B8963E' }}>Press & Media</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Media & Gallery
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Photos, videos, press releases, speeches and media coverage from ASGC's activities and engagements.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[64px] z-40 bg-white border-b" style={{ borderColor: '#EDE9E0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
                style={{
                  borderColor: activeTab === tab ? '#1B2A56' : 'transparent',
                  color: activeTab === tab ? '#1B2A56' : '#9CA3AF',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === 'Photos' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.img}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setLightboxImg(photo.img)}
              >
                <img src={photo.img} alt={photo.caption} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end" style={{ background: 'linear-gradient(to top, rgba(17,27,58,0.85), transparent)' }}>
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                    <p className="text-xs" style={{ color: '#D4AE5A' }}>{photo.album}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Videos' && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(27,42,86,0.08)' }}>
              <svg className="w-8 h-8" style={{ color: '#B8963E' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-400">Video content will be available shortly. Please check back soon.</p>
          </div>
        )}

        {activeTab === 'Press Releases' && (
          <div className="max-w-3xl space-y-6">
            {pressReleases.map((pr) => (
              <div key={pr.title} className="p-6 rounded-sm" style={{ backgroundColor: '#fff', border: '1px solid #EDE9E0' }}>
                <p className="text-xs text-gray-400 mb-2">{pr.date}</p>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{pr.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{pr.excerpt}</p>
                <button className="text-xs font-semibold" style={{ color: '#B8963E' }}>Read Full Release →</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Speeches' && (
          <div className="max-w-3xl space-y-5">
            {speeches.map((s) => (
              <div key={s.title} className="p-6 rounded-sm flex gap-6 items-start" style={{ backgroundColor: '#fff', border: '1px solid #EDE9E0' }}>
                <div className="w-1 flex-shrink-0 self-stretch rounded" style={{ backgroundColor: '#B8963E' }} />
                <div>
                  <p className="text-xs text-gray-400 mb-1">{s.date} · {s.event}</p>
                  <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.speaker}</p>
                  <button className="text-xs font-semibold mt-2" style={{ color: '#B8963E' }}>Download PDF →</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Media Coverage' && (
          <div className="max-w-3xl space-y-4">
            {mediaCoverage.map((mc) => (
              <div key={mc.title} className="p-6 rounded-sm flex items-center justify-between gap-4" style={{ backgroundColor: '#fff', border: '1px solid #EDE9E0' }}>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold uppercase" style={{ color: '#1B2A56' }}>{mc.outlet}</span>
                    <span className="text-xs text-gray-400">{mc.date}</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#374151' }}>{mc.title}</p>
                </div>
                <button className="text-xs font-semibold flex-shrink-0" style={{ color: '#B8963E' }}>Read →</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setLightboxImg(null)}
        >
          <img src={lightboxImg} alt="Gallery" className="max-w-full max-h-full object-contain rounded-sm" />
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightboxImg(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
