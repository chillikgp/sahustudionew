"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { stats } from "@/data/site";

function StatCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  // Parse numeric value from string (e.g., "900+" -> 900)
  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps roughly

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={countRef} className="group">
      <div className="font-editorial text-4xl text-[var(--ink)] sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[var(--paper)] pt-0 pb-20 lg:pb-32">
      {/* Top Header Strip */}
      <div className="border-y border-[var(--line)] py-5 mb-6 lg:mb-10">
        <div className="site-container text-center">
          <p className="eyebrow text-[11px] uppercase tracking-[0.3em] text-[var(--ink-muted)] leading-relaxed">
            Delhi NCR Wedding Photographer&ensp;·&ensp;Sahu Studio&ensp;·&ensp;
            <a
              href="https://maps.app.goo.gl/79BzCzy5AdCBw7sf9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[var(--ink-muted)] transition-opacity duration-200 hover:opacity-60"
              style={{ textDecoration: "none" }}
            >
              4.6★ Google Rating
            </a>
          </p>
        </div>
      </div>

      <div className="site-container">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-24">
          {/* Left Column: Portrait */}
          <div className="reveal-up h-full">
            <div className="relative aspect-[3/4] h-full overflow-hidden bg-[var(--paper)]">
              <Image
                src="/images/about/studio-portrait-new.jpg"
                alt="The founding duo behind a family-led wedding storytelling studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="reveal-up flex flex-col justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--accent-deep)]">
                About Sahu Studio
              </p>
              <h2 className="font-editorial mt-3 text-4xl leading-[1.1] text-[var(--ink)] sm:text-5xl lg:text-4xl">
                Elegant, Timeless & Story-Driven
              </h2>

              <p className="mt-8 text-xl font-medium leading-relaxed text-[var(--ink)]">
                Capturing real emotions, beautiful details, and unforgettable moments 
                that will be cherished for generations.
              </p>

              <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--ink-soft)] lg:text-lg">
                <p className="font-medium text-[var(--ink)] opacity-90">
                  Every great story begins with a vision. Ours began in 1982.
                </p>
                
                <p>
                  Hi, I’m Gaurav Sahu, owner of Sahu Studio in Karkardooma, East Delhi. What started 
                  as a traditional photography studio has grown into a trusted wedding photography 
                  and cinematography brand serving families across Delhi NCR.
                </p>

                <p>
                  We specialise in candid wedding photography, cinematic films, pre-wedding shoots, 
                  engagement coverage, and family celebrations. By combining decades of experience 
                  with modern creativity, we create timeless images and films filled with emotion.
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              {/* Subtle Stats Section */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[var(--line)] pt-10">
                {stats.map((stat) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12">
                <Link
                  href="https://wa.me/919999999999" // Placeholder for WhatsApp
                  target="_blank"
                  className="shimmer-button inline-flex items-center bg-[var(--ink)] px-10 py-4 text-[11px] uppercase tracking-[0.3em] text-[var(--paper)] transition-all hover:bg-[var(--accent-deep)]"
                >
                  Connect with me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
