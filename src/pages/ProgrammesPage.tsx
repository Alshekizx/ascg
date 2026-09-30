import { Link } from 'react-router-dom';

const programmes = [
  { title: 'Diplomacy & Dialogue', description: 'Diplomatic dialogue forums, bilateral and multilateral roundtables, and peacebuilding discussions that strengthen international cooperation.' },
  { title: 'Inclusive Trade', description: 'Trade facilitation workshops, export readiness training and research on regional trade frameworks for entrepreneurs and small businesses.' },
  { title: 'Responsible Investment', description: 'Investment forums, investor-community dialogues and development finance partnerships focused on ethical practices and community benefit.' },
  { title: 'Policy & Research', description: 'Independent research, policy briefs and expert roundtables on diplomacy, trade, investment and sustainable development.' },
  { title: 'Skills & Leadership', description: 'Training and mentorship in economic diplomacy, negotiation and entrepreneurship, particularly for young people and women.' },
  { title: 'Strategic Partnerships', description: 'Research collaborations, institutional exchanges and joint programmes with universities, diplomatic institutions and development organisations.' },
];

export default function ProgrammesPage() {
  return (
    <div className="pt-20">
      <header className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B2A56 0%, #111B3A 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3" style={{ color: '#B8963E' }}>Our Programmes</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>Turning Our Mandate into Action</h1>
          <p className="text-white/60 text-lg max-w-2xl">Explore ASGC's programme areas in diplomacy, trade, responsible investment and leadership development.</p>
        </div>
      </header>
      <section aria-label="Programme areas" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme) => (
            <article key={programme.title} className="p-8 rounded border border-gray-100" style={{ backgroundColor: '#F8F7F4' }}>
              <div className="gold-divider-left mb-5" />
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{programme.title}</h2>
              <p className="text-gray-600 leading-relaxed">{programme.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 text-center" style={{ backgroundColor: '#F8F7F4' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Participate in Our Programmes</h2>
        <p className="text-gray-600 mb-8">Contact ASGC for programme details and opportunities to participate or collaborate.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="px-8 py-3.5 font-semibold text-sm rounded text-white" style={{ backgroundColor: '#1B2A56' }}>Contact Us</Link>
          <Link to="/events" className="px-8 py-3.5 font-semibold text-sm rounded border" style={{ borderColor: '#1B2A56', color: '#1B2A56' }}>View Events</Link>
        </div>
      </section>
    </div>
  );
}
