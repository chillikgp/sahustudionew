"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { showcasePhotos } from "@/data/site";
import { Lightbox } from "./lightbox";
import { SectionIntro } from "./section-intro";

export function PhotoShowcase() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const photos = useMemo(() => showcasePhotos.slice(0, 14), []);
  
  // Define 15 tiles (14 photos + 1 quote card at index 7)
  const gridItems = useMemo(() => {
    const items = [...photos];
    const quoteCard = { isQuote: true };
    items.splice(7, 0, quoteCard as any);
    return items;
  }, [photos]);

  const lightboxImages = useMemo(
    () =>
      photos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption,
      })),
    [photos],
  );

  const openLightbox = (gridIndex: number) => {
    if (gridIndex === 7) return; 
    const photoIndex = gridIndex < 7 ? gridIndex : gridIndex - 1;
    setCurrentIndex(photoIndex);
  };

  return (
    <section id="photos" className="relative z-10 overflow-hidden bg-[var(--paper)] py-0">
      {/* Full-width Viewport Escape */}
      <div 
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
        className="px-0"
      >
        <div className="grid grid-cols-2 gap-[2px] md:grid-cols-3 lg:grid-cols-5">
          {gridItems.map((item, index) => {
            if ('isQuote' in item) {
              return (
                <div 
                  key="quote-card"
                  className="reveal-up flex aspect-square flex-col items-center justify-center bg-[var(--paper)] px-8 text-center"
                >
                  <p className="font-editorial text-2xl leading-[1.3] text-[var(--ink)] lg:text-3xl">
                    Celebrating love<br />
                    with every frame
                  </p>
                </div>
              );
            }

            return (
              <div 
                key={item.src}
                className="reveal-up aspect-square overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="relative h-full w-full overflow-hidden outline-none block"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={item.blurDataURL}
                    loading="lazy"
                  />
                </button>
              </div>
            );
          })}
        </div>
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
              (currentIndex - 1 + lightboxImages.length) % lightboxImages.length,
            )
          }
        />
      )}
    </section>
  );
}
