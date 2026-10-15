import { useContent } from "../lib/useContent";
import { safeLink } from "../lib/safeLink";
import type { Leader, Partner } from "../types/content";
export function LeadershipDirectory() {
  const { items } = useContent<Leader>("leadership");
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#1B2A56] mb-8">Leadership</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <article key={item.id} className="bg-white border rounded p-6">
            {safeLink(item.img) && (
              <img
                src={safeLink(item.img)}
                alt={item.name}
                className="h-64 w-full object-cover object-top rounded mb-4"
              />
            )}
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-sm text-[#96790f] mt-1">{item.position}</p>
            <p className="text-sm text-gray-600 whitespace-pre-line mt-4">
              {item.biography}
            </p>
          </article>
        ))}
      </div>
      {!items.length && (
        <p className="text-sm text-gray-500">
          No leadership profiles published yet.
        </p>
      )}
    </section>
  );
}
export function PartnerDirectory() {
  const { items } = useContent<Partner>("partner");
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#1B2A56] mb-8">Our Partners</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.id} className="bg-white border rounded p-6">
            {safeLink(item.img) && (
              <img
                src={safeLink(item.img)}
                alt={item.name}
                className="h-20 max-w-full object-contain mb-4"
              />
            )}
            <h3 className="font-bold mb-3">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{item.description}</p>
            {safeLink(item.url) && (
              <a
                href={safeLink(item.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#96790f]"
              >
                Visit Website →
              </a>
            )}
          </article>
        ))}
      </div>
      {!items.length && (
        <p className="text-sm text-gray-500">No partners published yet.</p>
      )}
    </section>
  );
}
