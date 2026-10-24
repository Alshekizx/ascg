import PhoneLinks from "../components/PhoneLinks";
import { safeLink } from "../lib/safeLink";
import { useSettings } from "../lib/useSettings";
import { useState } from "react";
import { submitEnquiry } from "../lib/supabase";
import { Link } from "react-router-dom";

export default function Footer() {
  const { settings } = useSettings();
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const subscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (subscribing) return;
    setSubscribing(true);
    setSubscriptionMessage("");
    try {
      await submitEnquiry("newsletter", { email });
      setSubscriptionMessage("Thank you for subscribing to ASGC updates.");
      setEmail("");
    } catch (error) {
      setSubscriptionMessage(
        error instanceof Error ? error.message : "Please try again.",
      );
    } finally {
      setSubscribing(false);
    }
  };
  return (
    <footer style={{ backgroundColor: "#111B3A", color: "#fff" }}>
      {/* Newsletter strip */}
      <div
        style={{
          backgroundColor: "#1B2A56",
          borderBottom: "1px solid rgba(184,150,62,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="section-label" style={{ color: "#B8963E" }}>
              Stay Connected
            </p>
            <h3
              className="text-xl font-semibold text-white mt-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Subscribe to ASGC Updates
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Receive news, publications and event announcements from ASGC.
            </p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={subscribe}>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="flex-1 md:w-64 px-4 py-2.5 text-sm rounded bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-amber-400 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <button
              type="submit"
              disabled={subscribing}
              className="px-5 py-2.5 text-sm font-semibold rounded transition-all hover:opacity-90"
              style={{
                backgroundColor: "#B8963E",
                color: "#fff",
                fontFamily: "var(--font-body)",
              }}
            >
              {subscribing ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
          {subscriptionMessage && (
            <p role="status" className="text-sm text-white/80">
              {subscriptionMessage}
            </p>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={settings?.footerLogo}
                alt="ASGC"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ASGC
                </div>
                <div className="text-white/50 text-[10px] uppercase tracking-wider leading-tight">
                  {settings?.shortName}
                </div>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-3">
              {settings?.fullName}
            </p>
            <p className="text-xs italic" style={{ color: "#B8963E" }}>
              {settings?.tagline}
            </p>
            <p className="text-xs text-white/40 mt-3 leading-relaxed">
              {settings?.description}
            </p>
            <div className="flex gap-3 mt-5">
              {(["twitter", "linkedin", "facebook", "instagram"] as const)
                .filter((sn) => safeLink(settings?.[sn]))
                .map((sn) => (
                  <a
                    key={sn}
                    href={safeLink(settings?.[sn])}
                    className="w-8 h-8 rounded flex items-center justify-center transition-all hover:opacity-80"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "#B8963E",
                    }}
                    aria-label={sn}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </a>
                ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B8963E", fontFamily: "var(--font-body)" }}
            >
              Organisation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About ASGC", to: "/about" },
                { label: "Our Mandate", to: "/our-work" },
                { label: "Founder / Ambassador Ahmed Sule", to: "/founder" },
                { label: "Programmes & Initiatives", to: "/programmes" },
                { label: "Strategic Partnerships", to: "/partnerships" },
                { label: "Contact Us", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B8963E", fontFamily: "var(--font-body)" }}
            >
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "News & Insights", to: "/news" },
                { label: "Events", to: "/events" },
                { label: "Publications & Research", to: "/publications" },
                { label: "Media & Gallery", to: "/media" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B8963E", fontFamily: "var(--font-body)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "#B8963E" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-xs text-white/60 leading-relaxed">
                  {settings?.address}
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#B8963E" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="flex flex-col gap-1">
                  <a
                    href={`mailto:${settings?.email ?? ""}`}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {settings?.email}
                  </a>
                  <a
                    href={`mailto:${settings?.ceoEmail ?? ""}`}
                    className="text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {settings?.ceoEmail}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#B8963E" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-xs text-white/60">
                  <PhoneLinks phone={settings?.phone}
                    className="hover:text-white transition-colors block"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} {settings?.shortName} for Diplomacy,
            Trade and Investment. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            A nonprofit organisation. No profit or surplus shall be distributed
            to its founders, trustees or members.
          </p>
        </div>
      </div>
    </footer>
  );
}
