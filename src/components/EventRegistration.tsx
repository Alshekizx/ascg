import { useState } from "react";
import { submitEnquiry } from "../lib/supabase";
import { usePageData } from "../lib/usePageData";
import type { EventsPageData } from "../types/pages";
import type { Event } from "../types/content";

export default function EventRegistration({
  event,
  onClose,
}: {
  event: Event;
  onClose: () => void;
}) {
  const { page } = usePageData<EventsPageData>("events");
  const blocks = page?.blocks ?? {};
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    role: "",
  });

  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending || !event) return;
    setSending(true);
    setSubmitError("");
    try {
      await submitEnquiry("registration", {
        ...formData,
        event_id: event.id,
      });
      setRegistered(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(17,27,58,0.85)" }}
      onClick={() => onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Event registration"
        className="bg-white rounded-sm w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "#B8963E" }}
              >
                Event Registration
              </p>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#1B2A56",
                }}
              >
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {event.date} · {event.location}
              </p>
            </div>
            <button
              onClick={() => onClose()}
              aria-label="Close registration"
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {registered ? (
            <div className="text-center py-8">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{ backgroundColor: "rgba(184,150,62,0.15)" }}
              >
                ✅
              </div>
              <h4
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#1B2A56",
                }}
              >
                {blocks.heading_2}
              </h4>
              <p className="text-sm text-gray-600">
                Thank you, {formData.name}
                {blocks.paragraph_3} {formData.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              {submitError && (
                <p role="alert" className="text-red-700 text-sm">
                  {submitError}
                </p>
              )}
              {[
                {
                  label: "Full Name",
                  key: "name",
                  type: "text",
                  required: true,
                },
                {
                  label: "Organisation / Institution",
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
                {
                  label: "Your Role / Title",
                  key: "role",
                  type: "text",
                  required: false,
                },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`registration-${field.key}`}
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: "#1B2A56" }}
                  >
                    {field.label}
                    {field.required && " *"}
                  </label>
                  <input
                    id={`registration-${field.key}`}
                    type={field.type}
                    required={field.required}
                    value={(formData as any)[field.key]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.key]: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 text-sm border rounded-sm outline-none focus:border-amber-500 transition-colors"
                    style={{ borderColor: "#EDE9E0" }}
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 text-sm font-semibold rounded transition-all hover:opacity-90"
                style={{ backgroundColor: "#1B2A56", color: "#fff" }}
              >
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
