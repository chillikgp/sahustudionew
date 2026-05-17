export type Story = {
  slug: string;
  coupleNames: string;
  venue: string;
  city: string;
  teaser: string;
  summary: string;
  narrative: string;
  seoDescription: string;
  tags: string[];
  category: "Wedding" | "Pre Wedding" | "Destination";
  featured?: boolean;
  functionsCovered: string[];
  coverImage: {
    src: string;
    alt: string;
  };
  filmTitle: string;
  filmSummary: string;
  filmSrc: string;
  filmPoster: string;
  testimonial?: {
    quote: string;
    author: string;
  };
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
};

export const stories: Story[] = [
  {
  slug: "ayush-anchal-itc-grand-bharat",
  coupleNames: "Ayush & Anchal",
  venue: "ITC Grand Bharat",
  city: "Delhi NCR",
  teaser:
    "A royal destination wedding at ITC Grand Bharat where timeless elegance, vibrant celebrations, and heartfelt emotions came together beautifully.",
  summary:
    "Ayush and Anchal celebrated their forever at ITC Grand Bharat with a grand wedding experience that balanced regal luxury, family warmth, and modern style.",
  narrative:
    "Their story was shaped by love, patience, and togetherness. While the setting felt majestic and luxurious, the heart of the wedding remained deeply personal. From quiet emotional moments to energetic celebrations, every frame reflected a bond built to last.",
  seoDescription:
    "A destination wedding at ITC Grand Bharat near Delhi NCR, captured by Sahu Studio with cinematic wedding films, candid photography, royal portraits, and heartfelt family moments.",
  tags: ["Delhi NCR", "Destination Wedding", "Luxury Wedding"],
  category: "Wedding",
  featured: true,
  functionsCovered: ["Haldi", "Mehendi", "Sagan", "Wedding"],
  coverImage: {
    src: "/images/stories/story-01-cover.jpg",
    alt: "Bride and groom during a royal wedding celebration at ITC Grand Bharat.",
  },
  filmTitle: "Ayush & Anchal: The Palace Vows",
  filmSummary:
    "A cinematic palace wedding film capturing elegant rituals, heartfelt vows, and timeless celebration moments.",
  filmSrc: "https://www.youtube.com/watch?v=2DmUvBwv1vE",
  filmPoster: "/images/video/video-thumb-01.jpg",
  testimonial: {
    quote:
      "They beautifully captured the scale of the celebration while preserving the intimate emotional moments we treasured most.",
    author: "Ayush & Anchal",
  },
  sections: [
    {
      heading: "The story",
      paragraphs: [
        "Every wedding has a story, and Ayush & Anchal’s was one of love, patience, and growing stronger together. Their celebration was not only grand in scale but deeply emotional in spirit.",
        "From heartfelt glances to joyful laughter, every moment reflected the warmth they share with each other and with their families.",
      ],
    },
    {
      heading: "The setting",
      paragraphs: [
        "With majestic architecture, lush landscapes, and timeless luxury, ITC Grand Bharat offered the perfect canvas for this destination wedding near Delhi NCR.",
        "The venue balanced royal heritage with modern elegance, allowing every ceremony to feel intimate while still larger than life.",
      ],
    },
    {
      heading: "The celebrations",
      paragraphs: [
        "From vibrant Haldi moments to colourful Mehendi festivities, emotional Sagan rituals, and a spectacular wedding ceremony, each event carried its own energy and charm.",
        "There was laughter, dancing, traditions, happy tears, and countless memories that made the celebration feel alive in every frame.",
      ],
    },
    {
      heading: "Why it stood out",
      paragraphs: [
        "This wedding stood out because it perfectly balanced tradition with a fresh modern sensibility.",
        "It felt elegant without being overwhelming, grand without losing warmth, and stylish while staying deeply personal. The result was a celebration remembered not only for its beauty, but for its emotion.",
      ],
    },
  ],
  gallery: [
    {
      src: "/images/stories/story-detail-01.jpg",
      alt: "Bride and groom portrait during a royal wedding moment at ITC Grand Bharat.",
      caption: "A timeless portrait shaped by grandeur, warmth, and celebration.",
    },
    {
      src: "/images/showcase/showcase-03.jpg",
      alt: "Bride with family during colourful Mehendi celebrations.",
      caption: "The Mehendi celebrations were vibrant, playful, and full of joy.",
    },
    {
      src: "/images/showcase/showcase-04.jpg",
      alt: "Wedding ceremony decor at ITC Grand Bharat.",
      caption: "Every ceremony space carried elegance with royal detail.",
    },
    {
      src: "/images/showcase/showcase-10.jpg",
      alt: "Family surrounding the couple during wedding rituals.",
      caption: "Family moments brought heart and intimacy to the larger celebration.",
    },
    {
      src: "/images/showcase/showcase-05.jpg",
      alt: "Couple portrait during golden hour after wedding rituals.",
      caption: "Soft romantic portraits balanced the grandeur of the day.",
    },
    {
      src: "/images/showcase/showcase-09.jpg",
      alt: "Bride portrait captured in a quiet elegant moment.",
      caption: "The quieter frames gave the full story emotional depth.",
    },
  ],
},
  {
  slug: "hemant-kritika-mathura-wedding",
  coupleNames: "Hemant & Kritika",
  venue: "Mathura",
  city: "Mathura",
  teaser:
    "A soulful wedding in Mathura where timeless rituals, family warmth, and the spirit of eternal love shaped every moment.",
  summary:
    "Hemant and Kritika began their forever in Mathura with a celebration filled with devotion, elegance, and deeply personal moments shared with loved ones.",
  narrative:
    "In a city where love is woven into every street and story, Hemant and Kritika’s wedding felt beautifully meaningful. Their celebration was warm, natural, and full of emotion. From sacred rituals to joyful festivities, every frame reflected sincerity, togetherness, and a love meant to last forever.",
  seoDescription:
    "A romantic wedding story in Mathura, captured by Sahu Studio with cinematic wedding films, candid photography, emotional family moments, and timeless rituals.",
  tags: ["Mathura Wedding", "Traditional Wedding", "Emotional Wedding"],
  category: "Wedding",
  featured: false,
  functionsCovered: ["Home Rituals", "Haldi", "Mehendi", "Wedding"],
  coverImage: {
    src: "/images/stories/story-02-cover.jpg",
    alt: "Bride and groom during a heartfelt wedding celebration in Mathura.",
  },
  filmTitle: "Beyond the Vows",
  filmSummary:
    "A cinematic wedding film capturing heartfelt moments, elegant details, and timeless emotions. Crafted for couples who value authentic memories and beautifully preserved celebrations.",
  filmSrc: "https://www.youtube.com/watch?v=612zIagB65M",
  filmPoster: "/images/video/feature-video.jpg",
  testimonial: {
    quote:
      "They captured every emotion so naturally and beautifully. Watching the film feels like reliving our wedding again.",
    author: "Hemant & Kritika",
  },
  sections: [
    {
      heading: "The story",
      paragraphs: [
        "Hemant and Kritika began their forever in Mathura, the land of eternal love. In a city known for devotion and timeless romance, their union felt blessed with warmth and meaning.",
        "This was not just a wedding, but a story of love that felt cherished, honest, and destined to last forever.",
      ],
    },
    {
      heading: "The backdrop",
      paragraphs: [
        "The sacred surroundings, gentle textures, and natural beauty of Mathura created an atmosphere that felt peaceful and deeply personal.",
        "Every detail blended effortlessly, from traditional rituals to quiet family moments, giving the celebration a magic that stayed long after the day ended.",
      ],
    },
    {
      heading: "The moments",
      paragraphs: [
        "The celebration carried a warm and effortless charm. Nothing felt forced. Every smile, every glance, and every gesture held meaning.",
        "From intimate home ceremonies to joyful wedding festivities, both families came together in a celebration full of love, laughter, and blessings.",
      ],
    },
    {
      heading: "What made it unforgettable",
      paragraphs: [
        "What made this wedding special was the feeling it left behind. In Mathura, where love holds deeper significance, their union became more than an event.",
        "It became an experience filled with emotion, sincerity, and beautiful simplicity. A reminder that the most meaningful celebrations are often the most genuine.",
      ],
    },
  ],
  gallery: [
    {
      src: "/images/stories/story-02-cover.jpg",
      alt: "Bride and groom portrait during wedding celebrations in Mathura.",
      caption: "A timeless portrait shaped by warmth, tradition, and love.",
    },
    {
      src: "/images/showcase/showcase-06.jpg",
      alt: "Haldi ceremony with joyful family moments.",
      caption: "The Haldi was vibrant, playful, and full of laughter.",
    },
    {
      src: "/images/showcase/showcase-07.jpg",
      alt: "Bride during Mehendi function with elegant decor.",
      caption: "The Mehendi celebration blended colour, grace, and joy.",
    },
    {
      src: "/images/showcase/showcase-08.jpg",
      alt: "Family gathered during wedding rituals.",
      caption: "Family moments brought intimacy and meaning to every ritual.",
    },
    {
      src: "/images/showcase/showcase-11.jpg",
      alt: "Couple portrait captured in soft evening light.",
      caption: "Quiet portraits balanced the energy of the celebrations.",
    },
    {
      src: "/images/showcase/showcase-12.jpg",
      alt: "Bride in a candid emotional moment during ceremonies.",
      caption: "The candid frames told the story with honesty and emotion.",
    },
  ],
},
  {
  slug: "kedar-vijeyata-delhi-6-prewedding",
  coupleNames: "Kedar & Vijeyata",
  venue: "Chandni Chowk & Sunder Nursery",
  city: "Delhi",
  teaser:
    "A rain-kissed pre-wedding in the heart of Delhi where old city charm, monsoon romance, and spontaneous moments created a story full of life.",
  summary:
    "Kedar and Vijeyata’s pre-wedding shoot turned magical when an unexpected summer drizzle transformed Delhi’s streets into the perfect backdrop for romance.",
  narrative:
    "What began as a routine planning discussion changed overnight when the weather shifted from intense summer heat to cloudy skies and gentle rain. With no elaborate styling or heavy preparation, the shoot became beautifully spontaneous. From the timeless lanes of Chandni Chowk to the calm elegance of Sunder Nursery, every frame carried the charm of old-school love and the energy of Delhi after rain.",
  seoDescription:
    "A romantic pre-wedding shoot in Chandni Chowk and Sunder Nursery, Delhi, captured by Sahu Studio with cinematic storytelling, candid moments, monsoon romance, and old Delhi charm.",
  tags: ["Pre Wedding", "Delhi 6", "Rain Shoot"],
  category: "Pre Wedding",
  featured: false,
  functionsCovered: ["Pre-Wedding Shoot"],
  coverImage: {
    src: "/images/stories/story-03-cover.jpg",
    alt: "Couple during a romantic rainy pre-wedding shoot in Old Delhi.",
  },
  filmTitle: "Kedar & Vijeyata: Dilli 6",
  filmSummary:
    "A romantic pre-wedding film featuring candid moments, rain romance, and old Delhi charm.",
  filmSrc: "https://www.youtube.com/watch?v=in4RMPlieJc",
  filmPoster: "/images/video/video-thumb-02.jpg",
  testimonial: {
    quote:
      "They turned an unexpected rainy day into the most magical memory of our pre-wedding journey.",
    author: "Kedar & Vijeyata",
  },
  sections: [
    {
      heading: "The story",
      paragraphs: [
        "Just a day before the shoot, we were discussing locations, dates, and styling when Delhi’s weather changed dramatically. The heat gave way to drizzle, cool winds, and beautiful cloudy skies.",
        "Instead of postponing, we embraced the unexpected. With quick shopping, spontaneous planning, and excitement in the air, we were ready to create something unforgettable the very next morning.",
      ],
    },
    {
      heading: "Delhi 6 romance",
      paragraphs: [
        "Rainy lanes of Chandni Chowk, the aroma of chai, pigeons taking flight, old haveli textures, and the soft movement of Vijeyata’s dupatta in the breeze created pure cinematic magic.",
        "There was something timeless about the energy of the old city. Every corner felt alive, every frame carried nostalgia, and every smile looked effortless.",
      ],
    },
    {
      heading: "The moments",
      paragraphs: [
        "From playful laughter in narrow gullies to quiet glances shared between the crowds, the shoot felt natural and full of chemistry.",
        "The drizzle slowed the city just enough for the romance to stand still in every frame.",
      ],
    },
    {
      heading: "Why it stood out",
      paragraphs: [
        "What made this shoot special was its spontaneity. Nothing was overplanned, nothing felt forced, and that gave the story honesty.",
        "The mix of monsoon weather, old Delhi charm, and genuine connection turned it into the perfect pre-wedding film.",
      ],
    },
  ],
  gallery: [
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/1.jpeg",
      alt: "Couple walking through heritage lanes during pre-wedding shoot in Delhi.",
      caption: "A timeless walk through the old streets where the story began.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/2.jpeg",
      alt: "Romantic portrait of couple in rainy weather during pre-wedding shoot.",
      caption: "Soft rain and quiet smiles created a naturally romantic frame.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/3.jpeg",
      alt: "Couple candid moment captured in Chandni Chowk.",
      caption: "Among the bustle of Delhi, their chemistry stayed effortless.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/4.jpeg",
      alt: "Bride smiling during outdoor pre-wedding session.",
      caption: "Joyful expressions made every frame feel alive and honest.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/5.jpeg",
      alt: "Couple portrait with architectural backdrop at Sunder Nursery.",
      caption: "Classic architecture added elegance to their modern love story.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/6.jpeg",
      alt: "Close portrait of couple during cloudy day pre-wedding shoot.",
      caption: "The cloudy skies became the perfect mood for intimate portraits.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/7.jpeg",
      alt: "Couple laughing together in candid pre-wedding moment.",
      caption: "The best moments were the ones they never posed for.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/8.jpeg",
      alt: "Romantic frame of couple with heritage Delhi background.",
      caption: "Old Delhi textures gave every image timeless character.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/9.jpeg",
      alt: "Couple portrait in garden setting at Sunder Nursery.",
      caption: "Green spaces balanced the energy of the old city beautifully.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/10.jpeg",
      alt: "Couple sharing a playful moment during pre-wedding shoot.",
      caption: "Playful laughter brought warmth and movement to the story.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/11.jpeg",
      alt: "Elegant couple portrait with soft natural light.",
      caption: "Natural light and genuine connection made this frame shine.",
    },
    {
      src: "/images/showcase/kedar-vijeyata-delhi-6-prewedding/12.jpeg",
      alt: "Final portrait of couple during Delhi pre-wedding session.",
      caption: "A graceful ending to a shoot full of spontaneity and charm.",
    },
  ],
},

];

export const storiesBySlug = Object.fromEntries(
  stories.map((story) => [story.slug, story]),
) as Record<string, Story>;

export const storySlugs = stories.map((story) => story.slug);
