import { siteImage } from "../lib/siteImage";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ContentStatus from "../components/ContentStatus";
import EventRegistration from "../components/EventRegistration";
import { useContent } from "../lib/useContent";
import type { Event } from "../types/content";

export default function EventPage() {
  const { slug } = useParams();
  const { items, loading, error } = useContent<Event>("event");
  const event = items.find((item) => item.slug === slug || item.id === slug);
  const [registering, setRegistering] = useState(false);
  useEffect(() => {
    setRegistering(false);
  }, [slug]);

  if (!event)
    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[50vh]">
        {loading || error ? (
          <ContentStatus loading={loading} error={error} />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-[#1B2A56] mb-6">
              Event not found
            </h1>
            <p className="mb-6">This event is no longer available.</p>
          </>
        )}
        <Link to="/events" className="text-[#1B2A56] underline">
          Back to events
        </Link>
      </div>
    );

  const canRegister = !event.past && event.registration;
  return (
    <div className="pt-20">
      <header className="bg-[#1B2A56] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/events"
            className="inline-block text-sm text-white/80 mb-8 hover:underline"
          >
            ← Back to events
          </Link>
          <p className="section-label text-[#B8963E] mb-3">{event.type}</p>
          <h1
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/80">
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        </div>
      </header>
      <article className="max-w-5xl mx-auto py-12 px-6">
        {event.img && (
          <img
            src={siteImage(event.id)}
            alt={event.title}
            className="w-full max-h-[32rem] object-cover rounded-sm mb-10"
          />
        )}
        <div className="grid md:grid-cols-[1fr_18rem] gap-12">
          <div>
            <h2
              className="text-2xl font-bold text-[#1B2A56] mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About this event
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {event.desc}
            </p>
            {!!event.speakers?.length && (
              <section className="mt-10">
                <h2
                  className="text-2xl font-bold text-[#1B2A56] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Featured speakers
                </h2>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                  {event.speakers.map((speaker, index) => (
                    <li key={index}>{speaker}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <aside className="bg-[#F8F7F4] border border-[#EDE9E0] p-6 self-start rounded-sm">
            <h2 className="font-bold text-xl text-[#1B2A56] mb-5">
              Attend this event
            </h2>
            <dl className="text-sm space-y-4 mb-6">
              <div>
                <dt className="font-semibold text-[#1B2A56]">Date</dt>
                <dd className="mt-1 text-gray-600">{event.date}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#1B2A56]">Location</dt>
                <dd className="mt-1 text-gray-600">{event.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#1B2A56]">Event type</dt>
                <dd className="mt-1 text-gray-600">{event.type}</dd>
              </div>
            </dl>
            {canRegister ? (
              <button
                onClick={() => setRegistering(true)}
                className="w-full bg-[#1B2A56] text-white font-semibold text-sm px-6 py-3 rounded hover:opacity-90"
              >
                Register to Attend
              </button>
            ) : (
              <p className="text-sm text-gray-600">
                {event.past
                  ? "This event has ended."
                  : "Registration is currently closed."}
              </p>
            )}
          </aside>
        </div>
      </article>
      {registering && canRegister && (
        <EventRegistration
          key={event.id}
          event={event}
          onClose={() => setRegistering(false)}
        />
      )}
    </div>
  );
}
