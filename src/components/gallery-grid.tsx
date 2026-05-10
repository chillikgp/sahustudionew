"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { showcasePhotos } from "@/data/site";
import { Lightbox } from "./lightbox";
import { trackEvent } from "@/lib/gtag";

export function GalleryGrid() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(
    () =>
      showcasePhotos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption,
      })),
    []
  );

  return (
    <section className="site-container py-12">
      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
        {showcasePhotos.map((photo, index) => (
          <div key={photo.src} className="mb-3 break-inside-avoid overflow-hidden reveal-up">
            <button
              type="button"
              onClick={() => {
                setCurrentIndex(index);
                trackEvent("image_view", "engagement", photo.alt || `gallery_image_${index}`);
              }}
              className="relative w-full cursor-zoom-in outline-none group"
            >
              <Image
                src={photo.src}
                alt={`Wedding photography in Delhi NCR by Sahu Studio capturing candid wedding moments (Image ${index + 1})`}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onNext={() =>
            setCurrentIndex((currentIndex + 1) % lightboxImages.length)
          }
          onPrevious={() =>
            setCurrentIndex(
              (currentIndex - 1 + lightboxImages.length) % lightboxImages.length
            )
          }
        />
      )}
    </section>
  );
}
