"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const galleryImages = [
  {
    src: "/images/1.png",
    alt: "Cloud Kitchen Interior"
  },
  {
    src: "/images/2.png",
    alt: "Kitchen Equipment"
  },
  {
    src: "/images/site-info.pdf-image-014.png",
    alt: "Professional Kitchen"
  },
  {
    src: "/images/site-info.pdf-image-016.png",
    alt: "Kitchen Workspace"
  },
  {
    src: "/images/site-info.pdf-image-018.png",
    alt: "Storage Area"
  },
  {
    src: "/images/site-info.pdf-image-020.png",
    alt: "Kitchen Facility"
  }
];

export default function GallerySection() {
  const t = useTranslations("IndexPage.gallery");

  return (
    <section className="bg-brand-cream relative overflow-hidden py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <span className="bg-primary h-2 w-2 rounded-full" />
            {t("badge")}
          </div>
          <h2 className="text-secondary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-secondary/70 mx-auto max-w-2xl text-lg">
            {t("description")}
          </p>
        </m.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${index === 0 ? "h-[400px] md:h-full" : "h-[250px]"}`}
              >
                <ExportedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="bg-linear-to-t from-secondary/60 absolute inset-0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="rounded-xl bg-white/90 px-4 py-2 backdrop-blur-sm">
                    <p className="text-secondary font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
