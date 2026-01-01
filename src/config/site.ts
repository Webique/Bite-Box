export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/Aljawdahco1",
    snapchat: "https://www.snapchat.com/add/Aljawdah_sa",
    tiktok: "https://www.tiktok.com/@Aljawdahco",
    whatsapp: "https://wa.me/966504719927"
  },

  support: {
    phone: "+966 50 471 9927",
    email: "info@aljawdah.sa",
    whatsapp: "+966504719927",
    landline: "920020960"
  },

  location: {
    city: "Taif",
    district: "Al-Wissam",
    country: "Saudi Arabia"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
