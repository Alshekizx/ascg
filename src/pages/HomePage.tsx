import { Link } from 'react-router-dom';
import AnimatedStatistic from '../components/AnimatedStatistic';
import { articles } from '../data/articles';
const logoImg = '/ASGC_colored_logo.png';

const heroImg = 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1800&h=900&fit=crop&auto=format';
const meetingImg = 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=800&h=600&fit=crop&auto=format';
const diplomacyImg = 'https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=800&h=600&fit=crop&auto=format';
const tradeImg = 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=800&h=600&fit=crop&auto=format';

const mandateItems = [
  { icon: '🤝', title: 'Advance Diplomacy & Dialogue', desc: 'Convening diplomatic missions, public institutions and civil society to address shared challenges and strengthen international cooperation.' },
  { icon: '📦', title: 'Promote Inclusive Trade', desc: 'Research, knowledge sharing and programmes helping entrepreneurs and small businesses access regional and international opportunities.' },
  { icon: '💼', title: 'Encourage Responsible Investment', desc: 'Connecting development needs with partners committed to ethical practices, job creation and community benefit.' },
  { icon: '📊', title: 'Support Informed Policymaking', desc: 'Independent research, policy dialogue and publications on diplomacy, trade, investment and sustainable development.' },
  { icon: '🎓', title: 'Build Skills & Leadership', desc: 'Training, mentorship and exchanges in negotiation, economic diplomacy and entrepreneurship, particularly for young people and women.' },
  { icon: '🌐', title: 'Develop Strategic Partnerships', desc: 'Working with universities, development organisations, diplomatic institutions, diaspora networks and the private sector.' },
];

const newsItems = articles.slice(0, 3);

const upcomingEvents = [
  { date: 'Oct 15, 2026', title: 'Nigeria–Gulf Cooperation Forum', location: 'Abuja, Nigeria', type: 'Forum' },
  { date: 'Nov 3, 2026', title: 'Africa Trade & Investment Symposium', location: 'Lagos, Nigeria', type: 'Symposium' },
  { date: 'Nov 28, 2026', title: 'ASGC Annual Diplomacy Lecture', location: 'Abuja, Nigeria', type: 'Lecture' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#111B3A' }}
      >
        <img
          src={heroImg}
          alt="International flags"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(17,27,58,0.97) 0%, rgba(27,42,86,0.85) 60%, rgba(17,27,58,0.96) 100%)' }}
        />
        {/* Gold accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, transparent, #B8963E, transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <img src={logoImg} alt="ASGC Logo" className="w-36 h-36 object-contain mx-auto mb-8 bg-white rounded-xl p-3 shadow-xl" />
          <p className="section-label mb-4" style={{ color: '#B8963E' }}>Abuja, Nigeria · Est. 2024</p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ahmed Sule Global Centre<br />
            <span style={{ color: '#D4AE5A' }}>for Diplomacy, Trade</span><br />
            and Investment
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-amber-600/40" />
            <p className="text-base md:text-lg italic" style={{ color: '#D4AE5A', fontFamily: 'var(--font-display)' }}>
              Connecting Nations. Advancing Trade. Inspiring Investment.
            </p>
            <div className="h-px w-16 bg-amber-600/40" />
          </div>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            An independent, nonpartisan, nonprofit organisation advancing international cooperation, inclusive economic development and peaceful relations through diplomacy, trade and responsible investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="px-8 py-3.5 font-semibold rounded transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: '#B8963E', color: '#fff', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}
            >
              Discover ASGC
            </Link>
            <Link
              to="/our-work"
              className="px-8 py-3.5 font-semibold rounded transition-all text-sm border"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}
            >
              Explore Our Work
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">About ASGC</p>
              <div className="gold-divider-left mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                A Centre for International Cooperation and Sustainable Development
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Ahmed Sule Global Centre for Diplomacy, Trade and Investment is conceived as an independent, nonpartisan, nonprofit organisation dedicated to advancing international cooperation, inclusive economic development and peaceful relations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through research, capacity building and strategic partnerships, ASGC delivers measurable public benefit to Nigeria, Africa and the global community.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { val: '6', label: 'Mandate Areas' },
                  { val: '50+', label: 'Partner Countries' },
                  { val: '20+', label: 'Active Programmes' },
                  { val: '500+', label: 'Beneficiaries' },
                ].map((stat) => (
                  <AnimatedStatistic key={stat.label} value={stat.val} label={stat.label} />
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#1B2A56', fontFamily: 'var(--font-body)' }}
              >
                Learn more about ASGC
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src={meetingImg}
                alt="ASGC diplomatic meeting"
                className="rounded-sm w-full object-cover"
                style={{ height: '420px' }}
              />
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-sm shadow-xl"
                style={{ backgroundColor: '#1B2A56', width: '220px' }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#B8963E', fontFamily: 'var(--font-body)' }}>Our Motto</p>
                <p className="text-sm italic text-white leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
                  "Connecting Nations. Advancing Trade. Inspiring Investment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Focus pillars */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Focus</p>
            <div className="gold-divider mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
              Three Pillars of ASGC
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Diplomacy',
                img: diplomacyImg,
                desc: 'Convening diplomatic missions, governments, institutions and civil society to address shared challenges and strengthen international cooperation across Nigeria and Africa.',
                to: '/our-work',
              },
              {
                title: 'Trade',
                img: tradeImg,
                desc: 'Undertaking research, knowledge sharing and programmes that help entrepreneurs and small businesses access regional and international trade opportunities.',
                to: '/our-work',
              },
              {
                title: 'Investment',
                img: meetingImg,
                desc: 'Connecting development needs with partners committed to ethical practices, job creation, environmental responsibility and community benefit.',
                to: '/our-work',
              },
            ].map((pillar) => (
              <Link
                key={pillar.title}
                to={pillar.to}
                className="group relative overflow-hidden rounded-sm block"
                style={{ backgroundColor: '#1B2A56' }}
              >
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="w-full h-56 object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="h-0.5 w-10 mb-4" style={{ backgroundColor: '#B8963E' }} />
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">{pillar.desc}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider group-hover:gap-2 flex items-center gap-1.5" style={{ color: '#B8963E', fontFamily: 'var(--font-body)' }}>
                    Learn More
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6" style={{ backgroundColor: '#1B2A56' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(184,150,62,0.2)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 rounded" style={{ backgroundColor: '#B8963E' }} />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-lg italic" style={{ fontFamily: 'var(--font-display)' }}>
                "A peaceful, connected and prosperous global community where cooperation creates inclusive opportunities and shared progress."
              </p>
            </div>
            <div className="p-8 rounded-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(184,150,62,0.2)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 rounded" style={{ backgroundColor: '#B8963E' }} />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To serve Nigeria, Africa and the global community by advancing diplomatic dialogue, inclusive trade and responsible investment through research, capacity building and strategic partnerships that deliver measurable public benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section className="py-24 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Mandate</p>
            <div className="gold-divider mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
              Six Areas of Mandate
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3">
              ASGC's mandate guides every programme, publication and partnership the Centre undertakes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandateItems.map((item, i) => (
              <div
                key={item.title}
                className="p-7 rounded-sm transition-all hover:shadow-lg hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#F8F7F4', border: '1px solid #EDE9E0' }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="h-0.5 w-8 mb-4 transition-all group-hover:w-12" style={{ backgroundColor: '#B8963E' }} />
                <h3 className="font-bold mb-3 text-base" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                  {i + 1}. {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded transition-all hover:opacity-90"
              style={{ backgroundColor: '#1B2A56', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              Explore Our Full Mandate
            </Link>
          </div>
        </div>
      </section>

      {/* Ambassador intro */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/amb_sule_photo.png"
                alt="Ambassador Ahmed Sule"
                className="rounded-sm w-full object-cover"
                style={{ height: '500px' }}
              />
              <div
                className="absolute top-6 -right-6 p-5 rounded-sm shadow-lg hidden lg:block"
                style={{ backgroundColor: '#B8963E' }}
              >
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">Founder & CEO</p>
                <p className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>Ambassador Ahmed Sule</p>
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Leadership</p>
              <div className="gold-divider-left mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                Ambassador Ahmed Sule
              </h2>
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: '#B8963E' }}>
                Founder & Chief Executive Officer
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ambassador Ahmed Sule is a senior career diplomat with extensive experience in foreign policy, economic diplomacy and high-level international engagement. A Former High Commissioner of Nigeria to India, Bangladesh, Sri Lanka and Nepal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                His postings have included Riyadh, New Delhi, Dhaka, Kathmandu, Colombo, Ottawa, London and the Permanent Mission of Nigeria to the United Nations in New York. He has facilitated investment pledges valued at approximately US$14 billion and played key roles in bilateral agreements across multiple continents.
              </p>
              <Link
                to="/founder"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: '#1B2A56', fontFamily: 'var(--font-body)' }}
              >
                Read the full biography
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 px-6" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Latest</p>
              <div className="gold-divider-left mb-4" />
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>News & Insights</h2>
            </div>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-sm font-semibold" style={{ color: '#B8963E' }}>
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="group block rounded-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#F8F7F4', border: '1px solid #EDE9E0' }}
              >
                <img src={item.img} alt={item.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm" style={{ backgroundColor: 'rgba(27,42,86,0.08)', color: '#1B2A56' }}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-bold mb-2 leading-snug" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-3">Calendar</p>
              <div className="gold-divider-left mb-4" />
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Upcoming Events</h2>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-2 text-sm font-semibold" style={{ color: '#B8963E' }}>
              All events
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((ev) => (
              <Link
                key={ev.title}
                to="/events"
                className="flex items-center gap-6 p-6 rounded-sm transition-all hover:shadow-md group"
                style={{ backgroundColor: '#fff', border: '1px solid #EDE9E0' }}
              >
                <div className="flex-shrink-0 text-center w-16">
                  <p className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#B8963E' }}>
                    {ev.date.split(' ')[0].replace(',', '')}
                  </p>
                  <p className="text-xs text-gray-400">{ev.date.split(' ').slice(1).join(' ')}</p>
                </div>
                <div className="w-px h-12 bg-gray-200 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: '#B8963E' }}>{ev.type}</p>
                  <h3 className="font-bold text-base group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                    {ev.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {ev.location}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-amber-600 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: '#1B2A56' }}
      >
        <div className="absolute inset-0 opacity-5">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4" style={{ color: '#B8963E' }}>Join Our Network</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Partner With ASGC
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Whether you are a government institution, university, business, development organisation or diaspora network, ASGC welcomes purposeful partnerships that serve the public good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/partnerships"
              className="px-8 py-3.5 font-semibold text-sm rounded transition-all hover:opacity-90"
              style={{ backgroundColor: '#B8963E', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              Explore Partnership Opportunities
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 font-semibold text-sm rounded border transition-all"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
