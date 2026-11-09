import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSettings } from "../lib/useSettings";
export default function SiteMetadata() {
  const { settings } = useSettings();
  const location = useLocation();
  useEffect(() => {
    const canonicalUrl = new URL(
      location.pathname,
      "https://www.asgc.us.com",
    ).toString();
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", canonicalUrl);
  }, [location.pathname]);

  useEffect(() => {
    if (!settings) return;
    if (!location.pathname.startsWith("/news/"))
      document.title = `${settings.name} | Ahmed Sule Global Centre`;
    const set = (selector: string, attribute: string, value: string) =>
      document.querySelector(selector)?.setAttribute(attribute, value);
    set('meta[name="description"]', "content", settings.description);
    set(
      'meta[property="og:title"]',
      "content",
      `${settings.name} | Ahmed Sule Global Centre`,
    );
    set('meta[property="og:site_name"]', "content", settings.name);
    set(
      'meta[name="twitter:title"]',
      "content",
      `${settings.name} | Ahmed Sule Global Centre`,
    );
    const metadataImage = new URL(
      settings.metadataImage,
      window.location.origin,
    ).toString();
    set('meta[property="og:image"]', "content", metadataImage);
    set('meta[name="twitter:image"]', "content", metadataImage);
    set('link[rel="icon"]', "href", settings.primaryLogo);
  }, [settings, location.pathname]);
  return null;
}
