"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Lightbox } from "./lightbox";

type StoryGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type StoryGalleryProps = {
  images: StoryGalleryImage[];
};

export function StoryGallery({ images }: StoryGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const lightboxImages = useMemo(() => images, [images]);

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {images.map((image, index) => {
          // Asymmetrical logic: 
          // 0 mod 3 -> Span 7 (Feature)
          // 1 mod 3 -> Span 5 (Side)
          // 2 mod 3 -> Span 12 (Full Wide)
          const patternIndex = index % 3;
          let colSpan = "lg:col-span-6"; // Default
          let aspect = "aspect-[3/2]";

          if (patternIndex === 0) {
            colSpan = "lg:col-span-7";
            aspect = "aspect-[3/4]";
          } else if (patternIndex === 1) {
            colSpan = "lg:col-span-5 flex flex-col justify-center";
            aspect = "aspect-[4/5]";
          } else if (patternIndex === 2) {
            colSpan = "lg:col-span-12";
            aspect = "aspect-[16/9]";
          }

          return (
            <div
              key={`${image.src}-${index}`}
              className={`reveal-up ${colSpan}`}
            >
              <button
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="group relative w-full overflow-hidden bg-[var(--paper)] text-left outline-none"
              >
                <div className={`relative w-full ${aspect} overflow-hidden`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </div>
                
                {/* Subtle Caption */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)] opacity-60 transition-opacity group-hover:opacity-100">
                    {image.caption}
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
          onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
          onPrevious={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        />
      )}
    </>
  );
}
