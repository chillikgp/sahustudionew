export const siteConfig = {
  name: "Sahu Studio",
  tagline: "Shaping Memories Since 1982",
  location: "Delhi NCR wedding photography & cinematography",
  description:
    "Sahu Studio creates royal, elegant, cinematic wedding photography and films for Delhi NCR celebrations with the confidence of a family legacy studio.",
  url: "https://sahustudio.in",
  email: "hello@sahustudio.in",
  copyright: `© ${new Date().getFullYear()} Sahu Studio`,
  serviceAreas: [
    "Delhi",
    "Gurugram",
    "Noida",
    "Faridabad",
    "Ghaziabad",
  ],
} as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Photos", href: "/#photos" },
  { label: "Stories", href: "/#stories" },
  { label: "Films", href: "/#films" },
  { label: "Say Hello", href: `mailto:${siteConfig.email}` },
] as const;

export const stats = [
  { value: "900+", label: "Weddings covered" },
  { value: "42", label: "Years in business" },
  { value: "18", label: "Cities covered" },
  { value: "1,250+", label: "Films delivered" },
] as const;

const BLUR_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMDI2MjAiLz48L3N2Zz4=";

export const showcasePhotos = [
  {
    src: "/images/showcase/showcase-02.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Candid wedding moment",
    caption: "Capturing the raw emotions of the celebration.",
    label: "Ceremony",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-03.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Wedding celebration",
    caption: "Joyous moments shared with family.",
    label: "Celebration",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-04.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Editorial couple portrait",
    caption: "Timeless portraits in a classic setting.",
    label: "Portrait",
    location: "New Delhi",
  },
  {
    src: "/images/showcase/showcase-05.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Ceremony rituals",
    caption: "The beauty of Indian wedding traditions.",
    label: "Rituals",
    location: "Gurugram",
  },
  {
    src: "/images/showcase/showcase-06.jpg",
    width: 853,
    height: 1280,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Bride portrait",
    caption: "Elegant bridal shots with a cinematic feel.",
    label: "Bridal",
    location: "Noida",
  },
  {
    src: "/images/showcase/showcase-07.jpg",
    width: 853,
    height: 1280,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Wedding energy",
    caption: "Vibrant energy and colors of the day.",
    label: "Energy",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-08.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Candid smiles",
    caption: "Finding beauty in the small, quiet moments.",
    label: "Candid",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-09.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Grand celebration",
    caption: "Luxurious wedding setups and atmosphere.",
    label: "Luxury",
    location: "The Roseate",
  },
  {
    src: "/images/showcase/showcase-10.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Groom portrait",
    caption: "Refined and classic groom portraiture.",
    label: "Groom",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-11.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Wedding details",
    caption: "Focusing on the intricate details that matter.",
    label: "Details",
    location: "Delhi",
  },
] as const;

export const featuredFilm = {
  title: "The Oberoi Afterglow",
  summary:
    "A refined, detail-led short film that leans into fashion, texture, and restrained emotional pacing. Crafted for those who value the quiet, powerful moments.",
  poster: "/images/video/video-thumb-01.jpg",
  videoSrc: "/videos/hero1.mp4",
  youtubeId: "DU4Rl8iRfMc",
} as const;

export const filmCollection = [
  {
    id: "roseate-teaser",
    title: "Aria & Kabir: The Teaser",
    collection: "Cinematic edit",
    summary:
      "A warm, intimate teaser edit designed for elegant Delhi celebrations and twilight ceremonies.",
    poster: "/images/video/video-thumb-01.jpg",
    posterAlt: "Wedding film cover featuring a bride and groom.",
    youtubeId: "7h6H5mqZ1Dk",
    duration: "02:14",
  },
  {
    id: "amaara-teaser",
    title: "Amaara Farms: Celebration Cut",
    collection: "Story reel",
    summary:
      "A more energetic cut built around rituals, community, and the playful pace of a two-day celebration.",
    poster: "/images/video/video-thumb-02.jpg",
    posterAlt: "Close portrait poster of a bride and groom.",
    youtubeId: "YYcvbmRaGb8",
    duration: "01:48",
  },
  {
    id: "oberoi-teaser",
    title: "The Oberoi: Midnight Vows",
    collection: "Editorial short",
    summary:
      "A refined, detail-led short film that leans into fashion, texture, and restrained emotional pacing.",
    poster: "/images/video/video-thumb-03.jpg",
    posterAlt: "A family portrait used as a wedding film poster.",
    youtubeId: "0t4rp-3tLUg",
    duration: "02:02",
  },
  {
    id: "intimate-vows",
    title: "Intimate Vows, Modern Finish",
    collection: "Highlight reel",
    summary:
      "An intimate highlight reel for smaller gatherings that still deserve the same luxury visual treatment.",
    poster: "/images/video/video-thumb-04.jpg",
    posterAlt: "A tabletop detail frame used as a supporting video card poster.",
    youtubeId: "DU4Rl8iRfMc",
    duration: "01:36",
  },
] as const;
