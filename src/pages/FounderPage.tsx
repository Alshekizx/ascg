const timelineItems = [
  {
    period: 'Early Career',
    title: 'Entry into the Diplomatic Service',
    items: [
      'Third Secretary, Second Secretary — Federal Ministry of Foreign Affairs, Abuja',
      'First Secretary — Diplomatic postings at Nigerian Mission, Riyadh, Saudi Arabia',
      'Counsellor — New Delhi, India',
    ],
  },
  {
    period: 'Overseas Service',
    title: 'International Postings',
    items: [
      'Riyadh, Saudi Arabia',
      'New Delhi, India',
      'Dhaka, Bangladesh',
      'Kathmandu, Nepal',
      'Colombo, Sri Lanka',
      'Ottawa, Canada',
      'London, United Kingdom',
      'Permanent Mission of Nigeria to the United Nations, New York, USA',
    ],
  },
  {
    period: 'Senior Leadership',
    title: 'Ministerial and Senior Advisory Roles',
    items: [
      'Special Assistant on Diplomacy and Foreign Relations to the Honourable Minister of Foreign Affairs',
      'Personal Assistant to the Honourable Minister of State for Foreign Affairs',
      'Director of Protocol — Office of the First Lady of the Federal Republic of Nigeria',
      'Director — Middle East and Gulf Division',
      'Deputy Director for Industry, Trade and Investment',
      'Assistant Director for European Affairs',
    ],
  },
  {
    period: 'Economic Diplomacy',
    title: 'Investment Promotion & Bilateral Outcomes',
    items: [
      'During the G20 Summit in New Delhi, facilitated investment pledges valued at approximately US$14 billion across priority sectors through diplomatic engagement, strategic liaison and investment promotion',
      'Contributed to the diplomatic work surrounding the State Visit of President Bola Ahmed Tinubu to Qatar, including the signing of eight bilateral agreements and Memoranda of Understanding in Doha',
      'Supported Nigeria\'s international legal and diplomatic engagement in the P&ID matter as part of the wider efforts associated with the Federal Government\'s successful defence before the Commercial Court in London',
      'Served on the Nigeria-India Joint Trade and Investment Commission in New Delhi (2001)',
    ],
  },
  {
    period: 'United Nations',
    title: 'International Security & UN Engagement',
    items: [
      'Served at the Permanent Mission of Nigeria to the United Nations, New York',
      'Participated in UN Security Council matters and international security discussions',
      'Engaged in multilateral negotiations and diplomatic processes at the United Nations',
    ],
  },
  {
    period: 'Foundation',
    title: 'Establishment of ASGC',
    items: [
      'Founded the Ahmed Sule Global Centre for Diplomacy, Trade and Investment (ASGC) in Abuja, Nigeria',
      'Appointed Founder and Chief Executive Officer of ASGC',
      'Launched ASGC\'s programmes across diplomacy, trade, investment, policy research and capacity building',
    ],
  },
];

const achievementCards = [
  { title: 'US$14 Billion', sub: 'Investment facilitation', desc: 'Facilitated investment pledges during the G20 Summit in New Delhi across priority sectors.' },
  { title: '8 Bilateral Agreements', sub: 'Qatar State Visit', desc: 'Contributed to diplomatic work surrounding the signing of agreements and MoUs in Doha.' },
  { title: '8 Countries', sub: 'Diplomatic postings', desc: 'Served at Nigerian missions across Asia, Europe, North America and the United Nations.' },
  { title: 'UN New York', sub: 'Multilateral diplomacy', desc: 'Represented Nigeria at the Permanent Mission to the United Nations in New York.' },
];

export default function FounderPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative">
              <img
                src="/amb_sule_photo.png"
                alt="Ambassador Ahmed Sule"
                className="rounded-sm w-full object-cover shadow-2xl"
                style={{ height: '420px', maxWidth: '340px' }}
              />
              <div
                className="absolute -bottom-4 -right-4 p-5 rounded-sm shadow-lg"
                style={{ backgroundColor: '#B8963E' }}
              >
                <p className="text-white text-xs font-semibold uppercase tracking-wider">Founder & CEO</p>
                <p className="text-white text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>ASGC</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="section-label mb-3" style={{ color: '#B8963E' }}>Leadership</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              Ambassador Ahmed Sule
            </h1>
            <p className="text-lg mb-5" style={{ color: '#D4AE5A' }}>Founder & Chief Executive Officer, ASGC</p>
            <p className="text-white/60 text-sm italic mb-6">
              Former High Commissioner of Nigeria to India, Bangladesh, Sri Lanka and Nepal
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Ambassador Ahmed Sule is a senior career diplomat with experience in foreign policy, economic diplomacy and high-level international engagement. His career encompasses ministerial advisory responsibilities, overseas assignments and participation in major bilateral and multilateral forums.
            </p>
            <p className="text-white/70 leading-relaxed">
              He brings an understanding of how governments work, how international relationships develop and how diplomatic engagement can support national and economic priorities — providing the substantive foundation for ASGC's focus on diplomacy, trade and investment.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement cards */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievementCards.map((card) => (
              <div key={card.title} className="p-6 bg-white rounded-sm" style={{ border: '1px solid #EDE9E0' }}>
                <div className="gold-divider-left mb-4" />
                <p className="text-2xl font-bold mb-0.5" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{card.title}</p>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#B8963E' }}>{card.sub}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
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
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
              Career Profile
            </h2>
          </div>

          {/* Executive Profile */}
          <div className="mb-12 p-8 rounded-sm" style={{ backgroundColor: '#F8F7F4', border: '1px solid #EDE9E0' }}>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Executive Profile</h3>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>
                Ambassador Ahmed Sule is a senior career diplomat with experience in foreign policy, economic diplomacy and high-level international engagement. His career encompasses ministerial advisory responsibilities, overseas assignments and participation in major bilateral and multilateral forums.
              </p>
              <p>
                He brings an understanding of how governments work, how international relationships develop and how diplomatic engagement can support national and economic priorities. This experience provides a substantive foundation for ASGC's focus on diplomacy, trade and investment.
              </p>
              <p>
                His approach is centred on identifying shared interests, building institutional relationships and creating opportunities for purposeful cooperation between public institutions, business and international partners.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <h3 className="text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Career Timeline</h3>
          <div className="space-y-0">
            {timelineItems.map((item, i) => (
              <div key={item.period} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: '#B8963E' }} />
                  {i < timelineItems.length - 1 && <div className="w-px flex-1 my-1" style={{ backgroundColor: '#EDE9E0' }} />}
                </div>
                <div className="pb-10">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#B8963E' }}>{item.period}</p>
                  <h4 className="font-bold mb-3 text-base" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{item.title}</h4>
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
          <div className="mt-10 p-8 rounded-sm" style={{ backgroundColor: '#1B2A56' }}>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>Professional Enquiries</h3>
            <p className="text-white/70 text-sm mb-5">
              For professional engagements, speaking invitations, diplomatic enquiries or partnership discussions with Ambassador Ahmed Sule, please contact the ASGC office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:ceo@asgc.us.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded"
                style={{ backgroundColor: '#B8963E', color: '#fff' }}
              >
                ceo@asgc.us.com
              </a>
              <a
                href="tel:+2348057576575"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded border"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
              >
                +234 805 757 6575
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
