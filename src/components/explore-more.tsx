import Image from "next/image";
import Link from "next/link";

export interface ExploreCard {
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  image: string;
}

interface ExploreMoreProps {
  cards: [ExploreCard, ExploreCard];
}

export function ExploreMore({ cards }: ExploreMoreProps) {
  return (
    <section className="py-24 lg:py-32 bg-[var(--canvas)]">
      <div className="site-container">
        <div className="reveal-up mb-12">
          <h2 className="font-editorial text-4xl md:text-5xl text-[var(--ink)]">
            Continue <span className="italic text-[var(--ink-muted)]">Exploring</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Link 
              key={card.href} 
              href={card.href}
              className="group relative aspect-[16/9] w-full overflow-hidden block reveal-up"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                unoptimized
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                <p className="eyebrow text-[9px] uppercase tracking-[0.3em] text-white/70 mb-4 transition-opacity group-hover:opacity-100">
                  {card.eyebrow}
                </p>
                <h3 className="font-editorial text-3xl md:text-5xl leading-none mb-6">
                  {card.title}
                </h3>
                <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-medium group-hover:gap-5 transition-all">
                  {card.cta}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
