import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSettings } from "../lib/useSettings";
export default function SiteMetadata() {
  const { settings } = useSettings();
  const location = useLocation();
  useEffect(() => {
    if (!settings) return;
    if (!location.pathname.startsWith("/news/")) document.title = settings.name;
    const set = (selector: string, attribute: string, value: string) =>
      document.querySelector(selector)?.setAttribute(attribute, value);
    set('meta[name="description"]', "content", settings.description);
    set('meta[property="og:title"]', "content", settings.name);
    set('meta[property="og:site_name"]', "content", settings.name);
    set('meta[name="twitter:title"]', "content", settings.name);
    set('meta[property="og:image"]', "content", settings.metadataImage);
    set('meta[name="twitter:image"]', "content", settings.metadataImage);
    set('link[rel="icon"]', "href", settings.primaryLogo);
  }, [settings, location.pathname]);
  return null;
}
