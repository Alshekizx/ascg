import { Link } from 'react-router-dom';

const mandateAreas = [
  {
    num: '01',
    icon: '🤝',
    title: 'Advance Diplomacy and Dialogue',
    desc: 'Convene diplomatic missions, public institutions, business leaders, scholars and civil society to address shared challenges and strengthen international cooperation.',
    activities: [
      'High-level diplomatic dialogue forums',
      'Bilateral and multilateral roundtables',
      'Track II diplomacy initiatives',
      'Conflict prevention and peacebuilding discussions',
      'Government-to-government engagement support',
    ],
    img: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=700&h=450&fit=crop&auto=format',
  },
  {
    num: '02',
    icon: '📦',
    title: 'Promote Inclusive Trade',
    desc: 'Undertake research, knowledge sharing and programmes that help entrepreneurs and small businesses understand and access regional and international opportunities.',
    activities: [
      'Trade facilitation workshops and training',
      'Research on regional trade frameworks (AfCFTA)',
      'SME capacity building for export readiness',
      'Trade missions and business matching',
      'Policy briefings on trade corridors',
    ],
    img: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=700&h=450&fit=crop&auto=format',
  },
  {
    num: '03',
    icon: '💼',
    title: 'Encourage Responsible Investment',
    desc: 'Connect development needs with partners committed to ethical practices, job creation, environmental responsibility and community benefit.',
    activities: [
      'Investment promotion events and forums',
      'Responsible investment frameworks and guidelines',
      'Investor-community engagement dialogues',
      'Environmental and social governance seminars',
      'Development finance partnership facilitation',
    ],
    img: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=700&h=450&fit=crop&auto=format',
  },
  {
    num: '04',
    icon: '📊',
    title: 'Support Informed Policymaking',
    desc: 'Produce independent research, policy dialogue and publications on diplomacy, trade, investment and sustainable development.',
    activities: [
      'Policy briefs and research papers',
      'Expert consultations and think-tank roundtables',
      'Engagement with government ministries and agencies',
      'Evidence-based policy recommendations',
      'Scholarly publications and reports',
    ],
    img: 'https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=700&h=450&fit=crop&auto=format',
  },
  {
    num: '05',
    icon: '🎓',
    title: 'Build Skills and Leadership',
    desc: 'Provide training, mentorship and exchanges in negotiation, economic diplomacy, entrepreneurship and international engagement, particularly for young people and women.',
    activities: [
      'Economic diplomacy training programmes',
      'Negotiation skills workshops',
      'Youth and women leadership development',
      'Mentorship schemes with experienced diplomats',
      'International exchange programmes',
    ],
    img: 'https://images.unsplash.com/photo-1739285452644-3a2c009112fe?w=700&h=450&fit=crop&auto=format',
  },
  {
    num: '06',
    icon: '🌐',
    title: 'Develop Strategic Partnerships',
    desc: 'Work with universities, development organisations, diplomatic institutions, diaspora networks and the private sector to implement programmes serving the public good.',
    activities: [
      'University research collaboration agreements',
      'Development organisation programme partnerships',
      'Diplomatic institution exchanges',
      'Diaspora network engagement',
      'Private sector CSR programme delivery',
    ],
    img: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=700&h=450&fit=crop&auto=format',
  },
];

export default function OurWorkPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: '#B8963E' }}>What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our Mandate & Our Work
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Six areas of mandate guiding every programme, publication and partnership ASGC undertakes.
          </p>
        </div>
      </div>

      {/* Mandate areas */}
      <div className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {mandateAreas.map((area, i) => (
            <div
              key={area.num}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center py-16 ${i < mandateAreas.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="lg:w-1/2">
                <img
                  src={area.img}
                  alt={area.title}
                  className="rounded-sm w-full object-cover shadow-lg"
                  style={{ height: '360px' }}
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold" style={{ color: '#EDE9E0', fontFamily: 'var(--font-display)' }}>{area.num}</span>
                  <span className="text-3xl">{area.icon}</span>
                </div>
                <div className="gold-divider-left mb-5" />
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
                  {area.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{area.desc}</p>
                <div className="space-y-2.5">
                  {area.activities.map((act) => (
                    <div key={act} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#B8963E' }} />
                      <p className="text-sm text-gray-600">{act}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/programmes"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold"
                  style={{ color: '#1B2A56', fontFamily: 'var(--font-body)' }}
                >
                  View related programmes
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
            Get Involved in Our Work
          </h2>
          <p className="text-gray-600 mb-8">
            Whether as a partner, participant, funder or collaborator — ASGC welcomes engagement from institutions, businesses, scholars and individuals committed to diplomacy, trade and responsible investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programmes" className="px-8 py-3.5 font-semibold text-sm rounded" style={{ backgroundColor: '#1B2A56', color: '#fff' }}>
              View Programmes
            </Link>
            <Link to="/partnerships" className="px-8 py-3.5 font-semibold text-sm rounded border" style={{ borderColor: '#1B2A56', color: '#1B2A56' }}>
              Partner With ASGC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
