import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/asgc-attachment-1.png';

type NavLink = { label: string; to: string; children?: { label: string; to: string }[] };

const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about', children: [
    { label: 'About ASGC', to: '/about' },
    { label: 'Founder', to: '/founder' },
  ] },
  { label: 'Programmes', to: '/programmes', children: [
    { label: 'Programmes & Initiatives', to: '/programmes' },
    { label: 'Our Work & Mandate', to: '/our-work' },
    { label: 'Events', to: '/events' },
    { label: 'Partnerships', to: '/partnerships' },
  ] },
  { label: 'News & Magazine', to: '/news', children: [
    { label: 'News & Insights', to: '/news' },
    { label: 'Publications & Research', to: '/publications' },
  ] },
  { label: 'Media', to: '/media' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  const renderLink = (link: NavLink, mobile = false) => {
    const id = `${mobile ? 'mobile' : 'desktop'}-${link.label.toLowerCase().replace(/[^a-z]+/g, '-')}`;
    const expanded = openDropdown === id;
    const active = location.pathname === link.to || link.children?.some(child => (child.to === location.pathname || location.pathname.startsWith(`${child.to}/`)));
    return (
      <div key={link.to} className="relative" onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpenDropdown(current => current === id ? null : current);
        }
      }} onKeyDown={event => {
        if (event.key === 'Escape' && expanded) {
          event.stopPropagation();
          setOpenDropdown(null);
          event.currentTarget.querySelector<HTMLButtonElement>('button')?.focus();
        }
      }}>
        <div className={`flex items-center rounded ${active ? 'bg-white/10 text-white' : 'text-white/80'}`}>
          {link.children ? (
            <button type="button" aria-expanded={expanded} aria-controls={id}
              onClick={() => setOpenDropdown(expanded ? null : id)}
              className={`flex items-center justify-between gap-2 ${mobile ? 'w-full px-4 py-3' : 'px-3 py-2'} text-sm font-medium rounded hover:text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-300`}
              style={{ fontFamily: 'var(--font-body)' }}>
              <span>{link.label}</span>
              <svg aria-hidden="true" className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
              </svg>
            </button>
          ) : (
            <Link to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined}
              onClick={() => { setOpenDropdown(null); setMobileOpen(false); }}
              className={`${mobile ? 'flex-1 px-4 py-3 text-sm' : 'px-3 py-2 text-sm'} font-medium hover:text-white focus-visible:outline-2 focus-visible:outline-amber-300 rounded`}
              style={{ fontFamily: 'var(--font-body)' }}>
              {link.label}
            </Link>
          )}
        </div>
        {link.children && (
          <div id={id} hidden={!expanded}
            className={mobile ? 'ml-4 mt-1 border-l border-white/20 pl-2' : 'absolute left-0 top-full mt-2 min-w-60 rounded-lg border border-white/10 bg-[#111B3A] p-2 shadow-xl'}>
            {link.children.map(child => (
              <Link key={child.to} to={child.to} aria-current={location.pathname === child.to ? 'page' : undefined}
                onClick={() => { setOpenDropdown(null); setMobileOpen(false); }}
                className={`block rounded px-4 py-3 text-sm hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-300 ${location.pathname === child.to ? 'text-amber-300 bg-white/5' : 'text-white/80 hover:text-white'}`}>
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        onKeyDown={event => {
          if (event.key === 'Escape') {
            setOpenDropdown(null);
            setSearchOpen(false);
            setMobileOpen(false);
            navRef.current?.querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')?.focus();
          }
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: transparent ? 'transparent' : '#1B2A56',
          boxShadow: transparent ? 'none' : '0 2px 24px rgba(27,42,86,0.18)',
        }}
      >
        {/* Top bar */}
        <div
          className="hidden lg:block border-b transition-all"
          style={{
            borderColor: transparent ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-1.5">
            <p className="text-xs text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
              House 18A, Idris Salmaho Street, Life Camp, Abuja, Nigeria
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:ahmedsule@gmail.com" className="text-xs text-white/60 hover:text-amber-300 transition-colors">
                ahmedsule@gmail.com
              </a>
              <span className="text-white/30">|</span>
              <a href="tel:+2349138000004" className="text-xs text-white/60 hover:text-amber-300 transition-colors">
                +234 913 800 0004
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src={logoImg} alt="ASGC Logo" className="h-10 w-10 object-contain" />
              <div className="hidden sm:block">
                <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  ASGC
                </div>
                <div className="text-white/60 text-[10px] leading-tight uppercase tracking-wider">
                  Ahmed Sule Global Centre
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navLinks.map(link => renderLink(link))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link
                to="/partnerships"
                className="hidden lg:inline-flex items-center px-4 py-1.5 text-xs font-semibold rounded transition-all"
                style={{
                  backgroundColor: '#B8963E',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.04em',
                }}
              >
                Partner With Us
              </Link>
              <button
                className="xl:hidden p-2 text-white/80 hover:text-white"
                onClick={() => { setMobileOpen(!mobileOpen); setOpenDropdown(null); }}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ASGC..."
                  autoFocus
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-amber-400 transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-navigation" className="xl:hidden border-t max-h-[calc(100dvh-4rem)] overflow-y-auto" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: '#111B3A' }}>
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => renderLink(link, true))}
              <div className="pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <Link
                  to="/partnerships"
                  className="block text-center px-4 py-2.5 text-sm font-semibold rounded"
                  style={{ backgroundColor: '#B8963E', color: '#fff', fontFamily: 'var(--font-body)' }}
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
