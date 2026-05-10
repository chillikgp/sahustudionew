import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { reviewListSchema } from "@/lib/schema";

export function Testimonials() {
  return (
    <section className="bg-[var(--paper)] py-24 lg:py-32 overflow-hidden">
      <JsonLd data={reviewListSchema(testimonials)} />
      
      <div className="site-container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 reveal-up">
          <div className="max-w-xl">
            <p className="eyebrow text-[10px] uppercase tracking-[0.4em] text-[var(--accent-deep)] mb-4">
              Kind Words
            </p>
            <h2 className="font-editorial text-4xl md:text-6xl leading-[1.1] text-[var(--ink)]">
              Real experiences from <br />
              <span className="italic">couples we’ve worked with</span>
            </h2>
          </div>
          
          <a 
            href={siteConfig.socials.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors pb-1 border-b border-transparent hover:border-[var(--ink-muted)]"
          >
            Read all reviews on Google
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-x-24">
          {testimonials.map((review) => (
            <article 
              key={review.id} 
              className="relative flex flex-col items-start reveal-up"
            >
              {/* Decorative Quote Mark */}
              <span className="absolute -left-6 -top-10 font-editorial text-[140px] text-[var(--accent-deep)] opacity-[0.07] leading-none pointer-events-none">
                “
              </span>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className={i < review.rating ? "text-[var(--accent-deep)]" : "text-gray-200"}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <div className="relative pl-0 md:pl-4 border-l-0 md:border-l border-[var(--line-deep)]">
                <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed mb-8 italic">
                  &quot;{review.text}&quot;
                </p>
                
                <div className="flex flex-col gap-1">
                  <h4 className="font-editorial text-2xl text-[var(--ink)]">
                    {review.author}
                  </h4>
                  {review.isVerified && (
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                      Verified Google Review
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
