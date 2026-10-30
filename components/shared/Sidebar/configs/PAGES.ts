export const PAGES = {
  AUTOMATIONS: "automations",
  SOCIALS: "socials",
  CONTENT: "content",
  ANALYTICS: "analytics",
  TEMPLATES: "templates",
  PROFILE: "profile",
  SETTINGS: "settings",
} as const;

export type PageClass = (typeof PAGES)[keyof typeof PAGES];
