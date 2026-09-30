import { useState } from 'react';

const upcomingEvents = [
  {
    date: '15 Oct 2026',
    title: 'Nigeria–Gulf Cooperation Forum 2026',
    location: 'Transcorp Hilton, Abuja, Nigeria',
    type: 'Forum',
    desc: 'A high-level forum convening Nigerian government officials, Gulf Cooperation Council partners and business representatives to explore frameworks for enhanced trade, investment and diplomatic cooperation.',
    speakers: ['Ambassador Ahmed Sule, Founder/CEO, ASGC', 'Senior representatives from Gulf Cooperation Council missions', 'Nigerian Ministry of Foreign Affairs officials', 'Private sector leaders from Nigeria and the Gulf'],
    img: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=700&h=400&fit=crop&auto=format',
    registration: true,
  },
  {
    date: '3 Nov 2026',
    title: 'Africa Trade & Investment Symposium',
    location: 'Eko Hotels & Suites, Lagos, Nigeria',
    type: 'Symposium',
    desc: 'An annual gathering examining the state of African trade and investment, featuring keynote addresses, expert panels, and bilateral engagement sessions for businesses and institutions.',
    speakers: ['Panellists from the African Development Bank', 'Trade policy experts from across Africa', 'Investment promotion agencies', 'Entrepreneurs and SME leaders'],
    img: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=700&h=400&fit=crop&auto=format',
    registration: true,
  },
  {
    date: '28 Nov 2026',
    title: 'ASGC Annual Diplomacy Lecture 2026',
    location: 'ASGC Centre, Abuja, Nigeria',
    type: 'Lecture',
    desc: 'The inaugural ASGC Annual Diplomacy Lecture, featuring a distinguished speaker on contemporary diplomatic challenges and opportunities for Nigeria and Africa.',
    speakers: ['Distinguished guest lecturer (to be announced)', 'Ambassador Ahmed Sule, Founder/CEO, ASGC'],
    img: 'https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=700&h=400&fit=crop&auto=format',
    registration: true,
  },
];

const pastEvents = [
  {
    date: 'March 2026',
    title: 'Economic Diplomacy Training Workshop – Cohort I',
    location: 'Abuja, Nigeria',
    type: 'Workshop',
    img: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=600&h=400&fit=crop&auto=format',
  },
  {
    date: 'January 2026',
    title: 'Nigeria–Africa Trade Corridor Dialogue',
    location: 'Abuja, Nigeria',
    type: 'Dialogue',
    img: 'https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=600&h=400&fit=crop&auto=format',
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', org: '', email: '', phone: '', role: '' });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: '#B8963E' }}>Calendar</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Events
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Forums, symposia, training programmes and lectures convened by ASGC across Nigeria, Africa and internationally.
          </p>
        </div>
      </div>

      {/* Upcoming */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: '#B8963E' }}>Calendar</p>
          <div className="gold-divider-left mb-6" />
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.title}
                className="group flex flex-col lg:flex-row gap-0 rounded-sm overflow-hidden transition-all hover:shadow-lg"
                style={{ border: '1px solid #EDE9E0' }}
              >
                <img src={ev.img} alt={ev.title} className="w-full lg:w-64 h-48 lg:h-auto object-cover" />
                <div className="flex-1 p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-sm"
                      style={{ backgroundColor: 'rgba(27,42,86,0.08)', color: '#1B2A56' }}
                    >
                      {ev.type}
                    </span>
                    <span className="text-xs font-medium text-amber-700">{ev.date}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {ev.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                    {ev.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{ev.desc}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#B8963E' }}>Featured Speakers</p>
                    <div className="space-y-1">
                      {ev.speakers.map((s) => (
                        <p key={s} className="text-xs text-gray-500">· {s}</p>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => { setSelectedEvent(ev); setRegistered(false); }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded transition-all hover:opacity-90"
                    style={{ backgroundColor: '#1B2A56', color: '#fff' }}
                  >
                    Register to Attend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
            Past Events
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {pastEvents.map((ev) => (
              <div key={ev.title} className="bg-white rounded-sm overflow-hidden" style={{ border: '1px solid #EDE9E0' }}>
                <img src={ev.img} alt={ev.title} className="w-full h-44 object-cover opacity-80" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-sm" style={{ backgroundColor: 'rgba(27,42,86,0.08)', color: '#1B2A56' }}>{ev.type}</span>
                    <span className="text-xs text-gray-400">{ev.date}</span>
                  </div>
                  <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{ev.title}</h3>
                  <p className="text-sm text-gray-500">{ev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(17,27,58,0.85)' }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-sm w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#B8963E' }}>Event Registration</p>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{selectedEvent.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{selectedEvent.date} · {selectedEvent.location}</p>
                </div>
                <button onClick={() => setSelectedEvent(null)} className="p-1 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {registered ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style={{ backgroundColor: 'rgba(184,150,62,0.15)' }}>
                    ✅
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Registration Submitted</h4>
                  <p className="text-sm text-gray-600">Thank you, {formData.name}. A confirmation will be sent to {formData.email}.</p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', required: true },
                    { label: 'Organisation / Institution', key: 'org', type: 'text', required: false },
                    { label: 'Email Address', key: 'email', type: 'email', required: true },
                    { label: 'Phone Number', key: 'phone', type: 'tel', required: false },
                    { label: 'Your Role / Title', key: 'role', type: 'text', required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#1B2A56' }}>
                        {field.label}{field.required && ' *'}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={(formData as any)[field.key]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500 transition-colors"
                        style={{ borderColor: '#EDE9E0' }}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full py-3 text-sm font-semibold rounded transition-all hover:opacity-90"
                    style={{ backgroundColor: '#1B2A56', color: '#fff' }}
                  >
                    Submit Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
