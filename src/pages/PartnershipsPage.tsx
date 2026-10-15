import { PartnerDirectory } from "../components/Directory";
import { usePageData } from "../lib/usePageData";
import type { PartnershipsPageData } from "../types/pages";
import ContentStatus from "../components/ContentStatus";
import { submitEnquiry } from "../lib/supabase";
import { useState } from "react";

export default function PartnershipsPage() {
  const {
    page,
    loading: pageLoading,
    error: pageError,
  } = usePageData<PartnershipsPageData>("partnerships");
  const blocks = page?.blocks ?? {};
  const arrays = page?.arrays ?? {};
  const values = page?.values ?? {};
  const partnerTypes = arrays.partnerTypes ?? [];
  const opportunities = arrays.opportunities ?? [];

  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSubmitError("");
    try {
      await submitEnquiry("partnership", formData);
      setSubmitted(true);
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
            Collaboration
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {blocks.heading_1}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            {blocks.paragraph_2}
          </p>
        </div>
      </div>
      <PartnerDirectory />

      {/* Partner types */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Who We Partner With</p>
            <div className="gold-divider mb-5" />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
            >
              {blocks.heading_11}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3">
              {blocks.paragraph_3}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((pt) => (
              <div
                key={pt.title}
                className="p-7 rounded-sm"
                style={{
                  backgroundColor: "#F8F7F4",
                  border: "1px solid #EDE9E0",
                }}
              >
                <div className="text-3xl mb-4">{pt.icon}</div>
                <div className="gold-divider-left mb-4" />
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#1B2A56",
                  }}
                >
                  {pt.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration opportunities */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1B2A56" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3" style={{ color: "#B8963E" }}>
                {blocks.paragraph_4}
              </p>
              <div className="gold-divider-left mb-6" />
              <h2
                className="text-3xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {blocks.heading_5}
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                {blocks.paragraph_6}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {opportunities.map((op) => (
                  <div key={op} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: "#B8963E" }}
                    />
                    <p className="text-sm text-white/70">{op}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-10 rounded-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(184,150,62,0.2)",
              }}
            >
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {blocks.heading_7}
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {blocks.paragraph_8}
              </p>
              <div className="space-y-4">
                {(arrays.items_1 ?? []).map((item) => (
                  <div key={item} className="flex items-start gap-3">
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
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-24 px-6 bg-white" id="partner-form">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Get in Touch</p>
            <div className="gold-divider mb-5" />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
            >
              {blocks.heading_12}
            </h2>
            <p className="text-gray-500 mt-3">{blocks.paragraph_9}</p>
          </div>
          {submitted ? (
            <div
              className="text-center py-14 rounded-sm"
              style={{
                backgroundColor: "#F8F7F4",
                border: "1px solid #EDE9E0",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: "rgba(184,150,62,0.15)" }}
              >
                ✅
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "#1B2A56" }}
              >
                {blocks.heading_13}
              </h3>
              <p className="text-gray-600 text-sm">{blocks.paragraph_10}</p>
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
                    label: "Your Name",
                    key: "name",
                    type: "text",
                    required: true,
                    full: false,
                  },
                  {
                    label: "Organisation / Institution",
                    key: "org",
                    type: "text",
                    required: true,
                    full: false,
                  },
                  {
                    label: "Email Address",
                    key: "email",
                    type: "email",
                    required: true,
                    full: false,
                  },
                  {
                    label: "Phone Number",
                    key: "phone",
                    type: "tel",
                    required: false,
                    full: false,
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
                        setFormData({ ...formData, [f.key]: e.target.value })
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
                  Type of Partnership Interest
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500"
                  style={{
                    borderColor: "#EDE9E0",
                    color: formData.type ? "#1B2A56" : "#9CA3AF",
                  }}
                >
                  <option value="">Select a category...</option>
                  {partnerTypes.map((pt) => (
                    <option key={pt.title}>{pt.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: "#1B2A56" }}
                >
                  Partnership Proposal / Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Please describe your organisation and the nature of the partnership you are proposing..."
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
                Submit Partnership Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
