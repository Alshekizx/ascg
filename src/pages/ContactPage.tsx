import PhoneLinks from "../components/PhoneLinks";
import { safeLink } from "../lib/safeLink";
import { useSettings } from "../lib/useSettings";
import { usePageData } from "../lib/usePageData";
import type { ContactPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { submitEnquiry } from "../lib/supabase";
import { useState } from "react";

export default function ContactPage() {
  const { settings } = useSettings();
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<ContactPageData>("contact");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};
  const departments = arrays.departments ?? [];

  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    dept: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSubmitError("");
    try {
      await submitEnquiry("contact", formData);
      setStatus("success");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  if (!page)
    return (
      <div className="pt-28 min-h-[50vh]">
        <ContentStatus
          loading={pageLoading}
          error={
            pageError ||
            (!pageLoading ? "This page has no published content yet." : "")
          }
        />
      </div>
    );
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
            Get in Touch
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {blocks.heading_5}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {blocks.paragraph_1}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="section-label mb-4" style={{ color: "#B8963E" }}>
                Our Office
              </p>
              <div className="gold-divider-left mb-6" />
            </div>

            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                label: "Address",
                content: settings?.address ?? "",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
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
                ),
                label: "General Enquiries",
                content: settings?.email ?? "",
                href: `mailto:${settings?.email ?? ""}`,
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
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
                ),
                label: "CEO",
                content: settings?.ceoEmail ?? "",
                href: `mailto:${settings?.ceoEmail ?? ""}`,
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
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
                ),
                label: "Telephone",
                content: settings?.phone ?? "",
                href: `tel:${(settings?.phone ?? "").replace(/[^+\d]/g, "")}`,
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(184,150,62,0.12)",
                    color: "#B8963E",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "#1B2A56" }}
                  >
                    {item.label}
                  </p>
                  {item.label === "Telephone" ? (
                    <div className="flex flex-col gap-1">
                      <PhoneLinks phone={settings?.phone} className="text-sm text-gray-600 hover:text-amber-700" />
                    </div>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-amber-700 whitespace-pre-line"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "#1B2A56" }}
              >
                Follow ASGC
              </p>
              <div className="flex gap-3">
                {(["twitter", "linkedin", "facebook", "instagram"] as const)
                  .filter((sn) => safeLink(settings?.[sn]))
                  .map((sn) => (
                    <a
                      key={sn}
                      href={safeLink(settings?.[sn])}
                      className="w-10 h-10 rounded-sm flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
                      style={{ backgroundColor: "#1B2A56", color: "#B8963E" }}
                      title={sn}
                      aria-label={sn}
                    >
                      {sn[0]}
                    </a>
                  ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-sm overflow-hidden h-48"
              style={{
                backgroundColor: "#EDE9E0",
                border: "1px solid #DDD9CE",
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <svg
                  className="w-8 h-8"
                  style={{ color: "#B8963E" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm text-gray-500">{blocks.paragraph_2}</p>
                <a
                  href={
                    settings?.address
                      ? "https://maps.google.com/?q=" +
                        encodeURIComponent(settings.address)
                      : undefined
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold"
                  style={{ color: "#1B2A56" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div
              className="p-8 rounded-sm"
              style={{ backgroundColor: "#fff", border: "1px solid #EDE9E0" }}
            >
              <h2
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
              >
                {blocks.heading_6}
              </h2>
              <p className="text-sm text-gray-500 mb-8">{blocks.paragraph_3}</p>

              {status === "success" ? (
                <div
                  className="text-center py-12 rounded-sm"
                  style={{ backgroundColor: "#F8F7F4" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                    style={{ backgroundColor: "rgba(184,150,62,0.15)" }}
                  >
                    ✅
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#1B2A56",
                    }}
                  >
                    {blocks.heading_7}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Thank you, {formData.name}
                    {blocks.paragraph_4}
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        org: "",
                        email: "",
                        phone: "",
                        dept: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-sm font-semibold"
                    style={{ color: "#1B2A56" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitError && (
                    <p role="alert" className="text-sm text-red-700">
                      {submitError}
                    </p>
                  )}
                  {sending && (
                    <p role="status" className="text-sm text-gray-500">
                      Sending…
                    </p>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      {
                        label: "Full Name",
                        key: "name",
                        type: "text",
                        required: true,
                      },
                      {
                        label: "Organisation",
                        key: "org",
                        type: "text",
                        required: false,
                      },
                      {
                        label: "Email Address",
                        key: "email",
                        type: "email",
                        required: true,
                      },
                      {
                        label: "Phone Number",
                        key: "phone",
                        type: "tel",
                        required: false,
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                          style={{ color: "#1B2A56" }}
                        >
                          {f.label}
                          {f.required && " *"}
                        </label>
                        <input
                          type={f.type}
                          required={f.required}
                          value={(formData as any)[f.key]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [f.key]: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500 transition-colors"
                          style={{ borderColor: "#EDE9E0" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: "#1B2A56" }}
                    >
                      Department / Purpose *
                    </label>
                    <select
                      required
                      value={formData.dept}
                      onChange={(e) =>
                        setFormData({ ...formData, dept: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500"
                      style={{
                        borderColor: "#EDE9E0",
                        color: formData.dept ? "#1B2A56" : "#9CA3AF",
                      }}
                    >
                      <option value="">Select a purpose...</option>
                      {departments.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: "#1B2A56" }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please write your message here..."
                      className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500 resize-none"
                      style={{ borderColor: "#EDE9E0" }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 font-semibold text-sm rounded transition-all hover:opacity-90"
                    style={{ backgroundColor: "#1B2A56", color: "#fff" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
