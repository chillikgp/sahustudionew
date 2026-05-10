"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  const image = images[currentIndex];
  const portalRoot = typeof document === "undefined" ? null : document.body;
  
  // Swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrevious();
    }
  };

  useEffect(() => {
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (!portalRoot) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[1000] flex flex-col bg-black/98 backdrop-blur-sm transition-opacity duration-300"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Immersive Header */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <span className="eyebrow text-[10px] tracking-[0.3em] text-white/40">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="group flex items-center gap-3 text-white/60 transition-colors hover:text-white"
          aria-label="Close gallery"
        >
          <span className="eyebrow text-[10px] uppercase tracking-[0.2em]">Close</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="relative flex h-full items-center justify-center">
        {/* Navigation - Tablet/Desktop */}
        <button
          type="button"
          onClick={onPrevious}
          className="absolute left-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white lg:flex"
          aria-label="Previous image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="site-container relative flex h-full items-center justify-center py-20 uppercase">
          <div className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white lg:flex"
          aria-label="Next image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Caption Bar */}
      {image.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pb-12 pt-20">
          <div className="site-container px-6 text-center">
            <p className="mx-auto max-w-2xl font-editorial text-lg leading-relaxed text-white/80">
              {image.caption}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Navigation Area (Tap Zones) */}
      <div className="absolute inset-0 grid grid-cols-2 lg:hidden">
        <div className="h-full w-full pointer-events-auto" onClick={onPrevious} />
        <div className="h-full w-full pointer-events-auto" onClick={onNext} />
      </div>
    </div>,
    portalRoot
  );
}
