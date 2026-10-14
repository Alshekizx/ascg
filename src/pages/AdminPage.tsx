import { useState } from 'react';
import logoImg from '../assets/asgc-attachment-1.png';

type AdminView = 'dashboard' | 'news' | 'events' | 'programmes' | 'publications' | 'media' | 'users';

const menuItems: { id: AdminView; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'news', label: 'News & Insights', icon: '📰' },
  { id: 'events', label: 'Events', icon: '📅' },
  { id: 'programmes', label: 'Programmes', icon: '📋' },
  { id: 'publications', label: 'Publications', icon: '📄' },
  { id: 'media', label: 'Media & Gallery', icon: '🖼️' },
  { id: 'users', label: 'Staff Accounts', icon: '👤' },
];

const stats = [
  { label: 'News Articles', value: '12', change: '+3 this month' },
  { label: 'Active Programmes', value: '6', change: '+1 this month' },
  { label: 'Upcoming Events', value: '3', change: 'Next: Oct 15' },
  { label: 'Publications', value: '6', change: '+2 this month' },
];

function DashboardView() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>
        Overview
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="p-6 bg-white rounded-sm" style={{ border: '1px solid #EDE9E0' }}>
            <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{s.value}</p>
            <p className="text-sm font-medium text-gray-700">{s.label}</p>
            <p className="text-xs text-gray-400 mt-1">{s.change}</p>
          </div>
        ))}
      </div>
      <h3 className="text-base font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Recent Activity</h3>
      <div className="bg-white rounded-sm" style={{ border: '1px solid #EDE9E0' }}>
        {[
          { action: 'News article published', detail: 'ASGC Convenes High-Level Dialogue on Nigeria–Africa Trade Corridors', time: '2 hours ago', user: 'Admin' },
          { action: 'Event created', detail: 'Nigeria–Gulf Cooperation Forum 2026', time: '1 day ago', user: 'Admin' },
          { action: 'Publication uploaded', detail: 'Responsible Investment in West Africa (Policy Brief)', time: '3 days ago', user: 'Admin' },
          { action: 'Programme updated', detail: 'ASGC Economic Diplomacy Training Programme', time: '5 days ago', user: 'Admin' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border-b last:border-b-0" style={{ borderColor: '#F8F7F4' }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#B8963E' }} />
            <div className="flex-1">
              <span className="text-xs font-semibold" style={{ color: '#1B2A56' }}>{item.action}: </span>
              <span className="text-xs text-gray-600">{item.detail}</span>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-xs text-gray-400">{item.time}</p>
              <p className="text-xs text-gray-400">{item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsAdminView() {
  const [showForm, setShowForm] = useState(false);
  const articles = [
    { title: 'ASGC Convenes High-Level Dialogue on Nigeria–Africa Trade Corridors', category: 'Diplomacy', date: 'Sep 15, 2026', status: 'Published' },
    { title: 'ASGC Publishes New Policy Brief on Responsible Investment', category: 'Policy', date: 'Aug 28, 2026', status: 'Published' },
    { title: 'ASGC Launches Economic Diplomacy Training Programme', category: 'ASGC News', date: 'Jul 14, 2026', status: 'Published' },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>News & Insights</h2>
        <button onClick={() => setShowForm(!showForm)} className="px-5 py-2.5 text-sm font-semibold rounded" style={{ backgroundColor: '#1B2A56', color: '#fff' }}>
          + Add Article
        </button>
      </div>
      {showForm && (
        <div className="bg-white rounded-sm p-6 mb-6" style={{ border: '1px solid #EDE9E0' }}>
          <h3 className="font-bold mb-5" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>New Article</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Article headline *" className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none" style={{ borderColor: '#EDE9E0' }} />
            <div className="grid sm:grid-cols-2 gap-4">
              <select className="px-4 py-2.5 text-sm border rounded-sm outline-none" style={{ borderColor: '#EDE9E0' }}>
                <option>Select category</option>
                {['Diplomacy', 'Trade', 'Investment', 'Policy', 'ASGC News', 'International Cooperation', 'Commentary'].map(c => <option key={c}>{c}</option>)}
              </select>
              <input type="text" placeholder="Author" className="px-4 py-2.5 text-sm border rounded-sm outline-none" style={{ borderColor: '#EDE9E0' }} />
            </div>
            <textarea rows={4} placeholder="Article content..." className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none resize-none" style={{ borderColor: '#EDE9E0' }} />
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer px-4 py-2.5 text-sm border rounded-sm" style={{ borderColor: '#EDE9E0' }}>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upload Featured Image
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowForm(false)} className="px-6 py-2.5 text-sm font-semibold rounded" style={{ backgroundColor: '#1B2A56', color: '#fff' }}>Publish</button>
              <button onClick={() => setShowForm(false)} className="px-6 py-2.5 text-sm font-semibold rounded border" style={{ borderColor: '#EDE9E0', color: '#6B7280' }}>Save Draft</button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-sm overflow-hidden" style={{ border: '1px solid #EDE9E0' }}>
        <table className="w-full text-sm">
          <thead style={{ backgroundColor: '#F8F7F4' }}>
            <tr>
              {['Title', 'Category', 'Date', 'Status', 'Actions'].map(h => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ color: '#1B2A56' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.title} className="border-t" style={{ borderColor: '#F8F7F4' }}>
                <td className="px-4 py-3 text-xs font-medium" style={{ color: '#1B2A56', maxWidth: '280px' }}>{a.title}</td>
                <td className="px-4 py-3 text-xs text-gray-500">{a.category}</td>
                <td className="px-4 py-3 text-xs text-gray-500">{a.date}</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-sm font-medium" style={{ backgroundColor: 'rgba(27,42,86,0.08)', color: '#1B2A56' }}>{a.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    <button className="text-xs font-semibold" style={{ color: '#B8963E' }}>Edit</button>
                    <button className="text-xs font-semibold text-red-500">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MediaAdminView() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Media & Gallery</h2>
      </div>
      <div className="bg-white rounded-sm p-6 mb-6" style={{ border: '1px solid #EDE9E0' }}>
        <h3 className="font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>Upload Media</h3>
        <div
          className="border-2 border-dashed rounded-sm flex flex-col items-center justify-center py-14 cursor-pointer hover:border-amber-400 transition-colors"
          style={{ borderColor: '#EDE9E0' }}
        >
          <svg className="w-10 h-10 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-sm text-gray-500 mb-1">Drag and drop files here, or click to upload</p>
          <p className="text-xs text-gray-400">PNG, JPG, MP4, PDF — up to 50MB</p>
          <label className="mt-4 cursor-pointer">
            <span className="px-5 py-2 text-xs font-semibold rounded" style={{ backgroundColor: '#1B2A56', color: '#fff' }}>Browse Files</span>
            <input type="file" className="hidden" multiple accept="image/*,video/*,.pdf" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {[
          'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=200&h=200&fit=crop',
          'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=200&h=200&fit=crop',
          'https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=200&h=200&fit=crop',
          'https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=200&h=200&fit=crop',
        ].map((img) => (
          <div key={img} className="relative group rounded-sm overflow-hidden">
            <img src={img} alt="Media" className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <button className="text-xs text-white font-semibold">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GenericAdminView({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B2A56' }}>{title}</h2>
      <div className="bg-white rounded-sm p-12 text-center" style={{ border: '1px solid #EDE9E0' }}>
        <p className="text-gray-400">Content management for {title} is available here.</p>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [activeView, setActiveView] = useState<AdminView>('dashboard');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'asgc2026') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: 'linear-gradient(135deg, #111B3A 0%, #1B2A56 100%)' }}
      >
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img src={logoImg} alt="ASGC" className="w-16 h-16 object-contain mx-auto mb-4" />
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>ASGC Admin</h1>
            <p className="text-white/50 text-xs mt-1">Content Management Dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white rounded-sm p-8 space-y-5 shadow-2xl">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#1B2A56' }}>Username</label>
              <input
                type="text"
                required
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500 transition-colors"
                style={{ borderColor: '#EDE9E0' }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#1B2A56' }}>Password</label>
              <input
                type="password"
                required
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500 transition-colors"
                style={{ borderColor: '#EDE9E0' }}
              />
            </div>
            {loginError && (
              <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-sm">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold rounded transition-all hover:opacity-90"
              style={{ backgroundColor: '#1B2A56', color: '#fff' }}
            >
              Sign In
            </button>
            <p className="text-xs text-center text-gray-400">Authorised ASGC staff only</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col"
        style={{ backgroundColor: '#1B2A56', minHeight: '100vh' }}
      >
        <div className="flex items-center gap-2.5 p-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <img src={logoImg} alt="ASGC" className="w-8 h-8 object-contain" />
          <div>
            <p className="text-white text-xs font-bold">ASGC</p>
            <p className="text-white/40 text-[10px]">Admin CMS</p>
          </div>
        </div>
        <nav className="flex-1 py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className="w-full flex items-center gap-3 px-5 py-2.5 text-left transition-all"
              style={{
                backgroundColor: activeView === item.id ? 'rgba(184,150,62,0.15)' : 'transparent',
                color: activeView === item.id ? '#D4AE5A' : 'rgba(255,255,255,0.6)',
                borderLeft: activeView === item.id ? '2px solid #B8963E' : '2px solid transparent',
                fontSize: '0.8rem',
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full text-xs text-white/50 hover:text-white/80 transition-colors text-left"
          >
            Sign Out →
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <div className="bg-white border-b px-8 py-4 flex items-center justify-between" style={{ borderColor: '#EDE9E0' }}>
          <h1 className="text-sm font-semibold" style={{ color: '#1B2A56' }}>ASGC Content Management Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Welcome, Administrator</span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#1B2A56', color: '#B8963E' }}>
              A
            </div>
          </div>
        </div>
        <div className="p-8">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'news' && <NewsAdminView />}
          {activeView === 'media' && <MediaAdminView />}
          {activeView === 'events' && <GenericAdminView title="Events Management" />}
          {activeView === 'programmes' && <GenericAdminView title="Programmes Management" />}
          {activeView === 'publications' && <GenericAdminView title="Publications Management" />}
          {activeView === 'users' && <GenericAdminView title="Staff Accounts" />}
        </div>
      </main>
    </div>
  );
}
