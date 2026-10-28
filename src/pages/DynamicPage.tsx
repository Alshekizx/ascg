import { siteImage } from "../lib/siteImage";
import { useParams, Link } from "react-router-dom";
import { useContent } from "../lib/useContent";
import { safeLink } from "../lib/safeLink";
import ContentStatus from "../components/ContentStatus";
interface Page {
  slug: string;
  title: string;
  blocks: Record<string, string>;
  values: Record<string, string>;
}
export default function DynamicPage() {
  const params = useParams();
  const { items, loading, error } = useContent<Page>("page");
  const page = items.find((item) => item.slug === params["*"]);
  if (loading || error)
    return <ContentStatus loading={loading} error={error} />;
  if (!page)
    return (
      <section className="px-6 pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold mb-5">Page not found</h1>
        <Link to="/">Return home</Link>
      </section>
    );
  return (
    <article className="max-w-5xl mx-auto px-6 pt-40 pb-20">
      <h1 className="text-4xl font-bold text-[#1B2A56] mb-6">
        {page.blocks.heading || page.title}
      </h1>
      {page.blocks.description && (
        <p className="text-lg text-gray-600 mb-8">{page.blocks.description}</p>
      )}
      {safeLink(page.values?.img) && (
        <img
          src={siteImage(page.slug)}
          alt=""
          className="w-full rounded mb-8"
        />
      )}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {page.blocks.body}
      </div>
    </article>
  );
}
