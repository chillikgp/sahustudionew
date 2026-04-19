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
    slug: "ira-kabir-the-roseate",
    coupleNames: "Ira & Kabir",
    venue: "The Roseate",
    city: "New Delhi",
    teaser:
      "A polished multi-function wedding at The Roseate where quiet luxury, gentle candlelight, and close family chemistry shaped every frame.",
    summary:
      "Ira and Kabir chose The Roseate for its calm architecture and evening mood, and the celebration unfolded with an intimacy that felt both elevated and deeply personal.",
    narrative:
      "This story was built around restraint: soft palette choices, measured styling, and a family that never needed the camera to work too hard for emotion. That made it the kind of wedding where the editorial moments and the candid ones belonged to the same visual world.",
    seoDescription:
      "A luxury wedding story from The Roseate in New Delhi, captured by Sahu Studio with editorial portraits, cinematic film coverage, and detail-rich family storytelling.",
    tags: ["Delhi NCR", "Editorial", "Luxury Wedding"],
    functionsCovered: ["Welcome dinner", "Mehendi", "Wedding day", "Reception"],
    coverImage: {
      src: "/images/stories/story-01-cover.jpg",
      alt: "Outdoor wedding ceremony glowing under warm light at The Roseate.",
    },
    filmTitle: "The Roseate wedding highlight",
    filmSummary:
      "An understated highlight film that moves from atmosphere to emotion without losing the calm elegance of the venue.",
    filmSrc: "/videos/featured-film-teaser.mp4",
    filmPoster: "/images/video/video-thumb-01.jpg",
    testimonial: {
      quote:
        "They captured the scale of the celebration without ever losing the tiny emotional moments we cared about most.",
      author: "Ira & Kabir",
    },
    sections: [
      {
        heading: "The setting",
        paragraphs: [
          "The Roseate gave the wedding its visual spine: warm stone, open courtyards, and just enough architectural drama to hold the editorial frames without overwhelming them.",
          "That let us keep the compositions clean, leaning into negative space, evening light, and measured movement instead of filling every frame with excess.",
        ],
      },
      {
        heading: "The celebration",
        paragraphs: [
          "The family energy was affectionate, relaxed, and beautifully paced. It meant the rituals never felt performative, and the documentary moments landed with ease.",
          "From the mehendi to the final dance floor frames, the wedding moved with a quiet confidence that translated naturally into both stills and film.",
        ],
      },
      {
        heading: "Why it stayed memorable",
        paragraphs: [
          "The wedding felt luxurious because it was intentional. Every choice, from styling to music to guest flow, left room for intimacy.",
          "That is exactly where Sahu Studio does its best work: giving polished celebrations a sense of warmth and emotional permanence.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/stories/story-detail-01.jpg",
        alt: "A portrait of the couple during a marigold-filled wedding moment.",
        caption: "A joyful ritual frame anchored by texture, movement, and marigold tones.",
      },
      {
        src: "/images/showcase/showcase-03.jpg",
        alt: "Bride with bridal party in coordinated blue outfits.",
        caption: "The bridal party portraits balanced playfulness with a fashion editorial feel.",
      },
      {
        src: "/images/showcase/showcase-04.jpg",
        alt: "Outdoor wedding ceremony lit by sunset and floral decor.",
        caption: "Ceremony coverage focused on atmosphere as much as ritual detail.",
      },
      {
        src: "/images/showcase/showcase-10.jpg",
        alt: "Family surrounding the couple during a wedding ceremony.",
        caption: "Wide family-led frames kept the celebration feeling expansive and human.",
      },
      {
        src: "/images/showcase/showcase-05.jpg",
        alt: "Couple portrait near the sea during golden light.",
        caption: "The post-ceremony couple portraits leaned softer and more romantic.",
      },
      {
        src: "/images/showcase/showcase-09.jpg",
        alt: "Portrait of the bride under a thatched canopy.",
        caption: "The quieter frames gave the full story breathing room.",
      },
    ],
  },
  {
    slug: "meher-abeer-amaara-farms",
    coupleNames: "Meher & Abeer",
    venue: "Amaara Farms",
    city: "Chattarpur, Delhi",
    teaser:
      "A sun-washed farm wedding in Chattarpur that mixed fashion-forward portraits with the uninhibited joy of a family-led haldi and ceremony.",
    summary:
      "Meher and Abeer’s wedding at Amaara Farms felt expansive, bright, and full of movement, giving us room to blend editorial portraits with high-energy documentary frames.",
    narrative:
      "This was a wedding built around color, sunlight, and togetherness. Rather than reducing that energy, we leaned into it and kept the compositions clean enough that the emotion stayed front and center.",
    seoDescription:
      "A vibrant wedding story from Amaara Farms in Chattarpur, Delhi, featuring editorial portraits, family-led rituals, and cinematic wedding storytelling by Sahu Studio.",
    tags: ["Chattarpur", "Farm Wedding", "Haldi"],
    functionsCovered: ["Haldi", "Mehendi", "Wedding ceremony", "Cocktail"],
    coverImage: {
      src: "/images/stories/story-02-cover.jpg",
      alt: "Marigold-filled haldi celebration portrait at Amaara Farms.",
    },
    filmTitle: "Amaara Farms celebration reel",
    filmSummary:
      "A brighter, more energetic film cut centred around sunlight, ceremony movement, and family warmth.",
    filmSrc: "/videos/hero.mp4",
    filmPoster: "/images/video/video-thumb-02.jpg",
    testimonial: {
      quote:
        "The entire team felt calm and composed, but the final work still looks alive and full of energy.",
      author: "Meher & Abeer",
    },
    sections: [
      {
        heading: "A farm wedding with texture",
        paragraphs: [
          "Amaara Farms naturally lends itself to layered storytelling. There is openness, there is greenery, and there is enough texture in the decor and pathways to make every frame feel lived-in rather than staged.",
          "For this wedding, that setting became the perfect canvas for playful portraits and ceremony images with real dimensionality.",
        ],
      },
      {
        heading: "Rituals with momentum",
        paragraphs: [
          "The haldi carried the emotional center of the celebration. It was full of laughter, movement, and affectionate chaos in the best possible way.",
          "Instead of interrupting it, we worked around the flow of the family and built frames that could hold both energy and clarity.",
        ],
      },
      {
        heading: "Where elegance came from",
        paragraphs: [
          "The elegance in this story came from rhythm and selection. Even in the busiest moments, we held on to the strongest lines, gestures, and expressions.",
          "That balance is what allowed the final story to feel polished without losing the personality of the day.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/showcase/showcase-08.jpg",
        alt: "The couple during a marigold shower at haldi.",
        caption: "A haldi frame built on movement, texture, and genuine laughter.",
      },
      {
        src: "/images/showcase/showcase-02.jpg",
        alt: "Couple portrait in mustard clothing smiling closely.",
        caption: "The portrait language stayed intimate even when the celebrations became exuberant.",
      },
      {
        src: "/images/showcase/showcase-10.jpg",
        alt: "Family gathered around the couple during ceremony rituals.",
        caption: "Family presence remained central to the visual story.",
      },
      {
        src: "/images/showcase/showcase-06.jpg",
        alt: "In-between moment during the ceremony rituals.",
        caption: "Quieter frames added editorial rhythm to the story.",
      },
      {
        src: "/images/showcase/showcase-09.jpg",
        alt: "Bride portrait under a rustic canopy.",
        caption: "The in-between pauses made the brighter moments feel even richer.",
      },
      {
        src: "/images/showcase/showcase-05.jpg",
        alt: "Couple portrait by the sea in flowing yellow styling.",
        caption: "A quieter portrait set gave the story a softer emotional finish.",
      },
    ],
  },
  {
    slug: "aashi-vir-taj-cidade-de-goa",
    coupleNames: "Aashi & Vir",
    venue: "Taj Cidade de Goa",
    city: "Goa",
    teaser:
      "A destination wedding by the sea where warm light, resort architecture, and unhurried portraits shaped a polished, transportive visual story.",
    summary:
      "Aashi and Vir wanted the weekend to feel expansive yet intimate, and the Goa coastline gave the wedding exactly that sense of softness, light, and breathing room.",
    narrative:
      "This story leaned into destination calm. Rather than chasing constant spectacle, we built a visual language around sea air, quiet corners, and portraits that felt editorial without becoming distant.",
    seoDescription:
      "A destination wedding story from Taj Cidade de Goa, photographed and filmed by Sahu Studio with polished portraits, cinematic details, and refined seaside storytelling.",
    tags: ["Goa", "Destination Wedding", "Seaside Portraits"],
    functionsCovered: ["Welcome dinner", "Wedding day", "Sunset portraits", "Reception"],
    coverImage: {
      src: "/images/stories/story-03-cover.jpg",
      alt: "Romantic editorial-style couple portrait with sea and breeze.",
    },
    filmTitle: "The Oberoi evening film",
    filmSummary:
      "A detail-led film edit that favours atmosphere, fashion, and emotional pacing over noise.",
    filmSrc: "/videos/featured-film-teaser.mp4",
    filmPoster: "/images/video/video-thumb-03.jpg",
    testimonial: {
      quote:
        "The photographs feel sophisticated, but they still feel unmistakably like us and our families.",
      author: "Aashi & Vir",
    },
    sections: [
      {
        heading: "A destination setting with calm",
        paragraphs: [
          "Taj Cidade de Goa gave the story its gentle luxury. The sea-facing viewpoints, open terraces, and restrained interiors meant the wedding never needed heavy-handed treatment to feel elevated.",
          "That allowed the couple to stay relaxed, which is often the real difference between merely beautiful frames and believable ones.",
        ],
      },
      {
        heading: "Balancing grandeur and intimacy",
        paragraphs: [
          "Weddings at luxury hotels can easily tip into spectacle. The goal here was to retain the grandeur while protecting softness and familiarity.",
          "We focused on touch, pauses, and small interactions so the story stayed emotionally grounded.",
        ],
      },
      {
        heading: "The final edit",
        paragraphs: [
          "In the final sequence of stills and film, the celebration feels cohesive because every frame serves the same tone: warm, elegant, composed.",
          "That consistency is what makes a wedding story feel premium long after the day itself has ended.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/showcase/showcase-05.jpg",
        alt: "Couple portrait in golden light with ocean backdrop.",
        caption: "The portrait language leaned elegant, airy, and unhurried.",
      },
      {
        src: "/images/showcase/showcase-07.jpg",
        alt: "Couple on a city canal bridge during a styled session.",
        caption: "Editorial after-session imagery added a cosmopolitan note to the story.",
      },
      {
        src: "/images/showcase/showcase-04.jpg",
        alt: "Ceremony scene under floral decor and sunset light.",
        caption: "The wedding ceremony frames held onto warmth and architectural shape.",
      },
      {
        src: "/images/showcase/showcase-03.jpg",
        alt: "Bride with wedding party in celebratory portrait.",
        caption: "Group portraits stayed high-energy while still feeling polished.",
      },
      {
        src: "/images/showcase/showcase-11.jpg",
        alt: "Detailed moments from the celebration.",
        caption: "The focus on texture and atmosphere completed the visual arc.",
      },
      {
        src: "/images/showcase/showcase-10.jpg",
        alt: "Couple surrounded by family in a floral ceremony frame.",
        caption: "Wider family frames completed the emotional arc of the weekend.",
      },
    ],
  },

];

export const storiesBySlug = Object.fromEntries(
  stories.map((story) => [story.slug, story]),
) as Record<string, Story>;

export const storySlugs = stories.map((story) => story.slug);
