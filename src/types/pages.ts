export interface HomePageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {
    mandateItems?: { icon: string; title: string; desc: string }[];
    items_1?: { val: string; label: string }[];
    items_2?: { title: string; img: string; desc: string; to: string }[];
  };
}
export interface AboutPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {
    coreValues?: { icon: string; title: string; desc: string }[];
    items_1?: { label: string; val: string }[];
  };
}
export interface OurWorkPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {
    mandateAreas?: {
      num: string;
      icon: string;
      title: string;
      desc: string;
      activities: string[];
      img: string;
    }[];
  };
}
export interface FounderPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {
    timelineItems?: { period: string; title: string; items: string[] }[];
    achievementCards?: { title: string; sub: string; desc: string }[];
  };
}
export interface ProgrammesPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {};
}
export interface EventsPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {};
}
export interface NewsPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {};
}
export interface PublicationsPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {};
}
export interface MediaPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {};
}
export interface ContactPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: { departments?: string[] };
}
export interface PartnershipsPageData {
  blocks: Record<string, string>;
  values: Record<string, string>;
  arrays: {
    partnerTypes?: { icon: string; title: string; desc: string }[];
    opportunities?: string[];
    items_1?: string[];
  };
}
