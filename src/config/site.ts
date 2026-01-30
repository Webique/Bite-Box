export const siteConfig = {
  links: {
    instagram: "#",
    snapchat: "#",
    tiktok: "#",
    whatsapp:
      "https://wa.me/966582124313?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%20%D8%A8%D9%83%20%D9%81%D9%8A%20Bite%20Box%20Cloud%20Kitchens!"
  },

  support: {
    phone: "+966 58 212 4313",
    email: "biteboxkitchens@gmail.com",
    whatsapp: "+966582124313",
    landline: ""
  },

  location: {
    city: "Tabuk",
    district: "",
    country: "Saudi Arabia"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
