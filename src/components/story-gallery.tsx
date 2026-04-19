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
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className="group overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--paper)] text-left"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="text-sm leading-7 text-[var(--ink-soft)]">
                {image.caption}
              </p>
            </div>
          </button>
        ))}
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
