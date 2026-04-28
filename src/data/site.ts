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
  { value: "1000+", label: "Weddings covered" },
  { value: "44", label: "Years in business" },
] as const;

const BLUR_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMDI2MjAiLz48L3N2Zz4=";

export const showcasePhotos = [
  {
    src: "/images/showcase/showcase-01.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Candid wedding moment",
    caption: "Capturing the raw emotions of the celebration.",
    label: "Ceremony",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-02.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Wedding celebration",
    caption: "Joyous moments shared with family.",
    label: "Celebration",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-03.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Editorial couple portrait",
    caption: "Timeless portraits in a classic setting.",
    label: "Portrait",
    location: "New Delhi",
  },
  {
    src: "/images/showcase/showcase-04.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Ceremony rituals",
    caption: "The beauty of Indian wedding traditions.",
    label: "Rituals",
    location: "Gurugram",
  },
  {
    src: "/images/showcase/showcase-05.jpg",
    width: 853,
    height: 1280,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Bride portrait",
    caption: "Elegant bridal shots with a cinematic feel.",
    label: "Bridal",
    location: "Noida",
  },
  {
    src: "/images/showcase/showcase-06.jpg",
    width: 853,
    height: 1280,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Wedding energy",
    caption: "Vibrant energy and colors of the day.",
    label: "Energy",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-07.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Candid smiles",
    caption: "Finding beauty in the small, quiet moments.",
    label: "Candid",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-08.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Grand celebration",
    caption: "Luxurious wedding setups and atmosphere.",
    label: "Luxury",
    location: "The Roseate",
  },
  {
    src: "/images/showcase/showcase-09.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Groom portrait",
    caption: "Refined and classic groom portraiture.",
    label: "Groom",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-10.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Wedding details",
    caption: "Focusing on the intricate details that matter.",
    label: "Details",
    location: "Delhi",
  },
  {
    src: "/images/showcase/showcase-11.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Luxurious reception",
    caption: "The grandeur of the evening reception.",
    label: "Reception",
    location: "New Delhi",
  },
  {
    src: "/images/showcase/showcase-12.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Family portraits",
    caption: "Timeless shots with loved ones.",
    label: "Family",
    location: "Noida",
  },
  {
    src: "/images/showcase/showcase-13.jpg",
    width: 853,
    height: 1280,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Candid laughter",
    caption: "Capturing the joy of the couple.",
    label: "Joy",
    location: "Gurugram",
  },
  {
    src: "/images/showcase/showcase-14.jpg",
    width: 1280,
    height: 853,
    blurDataURL: BLUR_PLACEHOLDER,
    alt: "Twilight ceremony",
    caption: "The magical hour of the vows.",
    label: "Twilight",
    location: "Delhi",
  },
] as const;

export const featuredFilm = {
  title: "Beyond the Vows",
  summary:
    "A cinematic wedding film capturing heartfelt moments, elegant details, and timeless emotions. Crafted for couples who value authentic memories and beautifully preserved celebrations.",
  poster: "/images/video/feature-video.jpg",
  videoSrc: "/videos/hero1.mp4",
  youtubeId: "612zIagB65M?t=6",
} as const;

export const filmCollection = [
  {
    id: "ayush-anchal-wedding",
    title: "Ayush & Anchal: The Palace Vows",
    collection: "Wedding",
    summary:
      "A cinematic palace wedding film capturing elegant rituals, heartfelt vows, and timeless celebration moments.",
    poster: "/images/video/video-thumb-01.jpg",
    posterAlt:
      "Bride and groom portrait during a palace wedding ceremony with regal decor.",
    youtubeId: "2DmUvBwv1vE?t=10",
    duration: "6:41",
  },
  {
    id: "kedar-vijeyata-prewedding",
    title: "Kedar & Vijeyata: Dilli 6",
    collection: "Pre Wedding",
    summary:
      "A romantic pre-wedding film featuring candid moments, rain romance, and old Delhi charm.",
    poster: "/images/video/video-thumb-02.jpg",
    posterAlt:
      "Couple sharing a romantic pre-wedding moment under an umbrella in the rain.",
    youtubeId: "in4RMPlieJc?t=11",
    duration: "6:06",
  },
  {
    id: "akshay-diksha-prewedding",
    title: "Akshay & Diksha: Madly in Love",
    collection: "Pre Wedding",
    summary:
      "A stylish pre-wedding film blending romance, editorial frames, and modern studio storytelling.",
    poster: "/images/video/video-thumb-03.jpg",
    posterAlt:
      "Couple posing during a luxury pre-wedding shoot in an elegant European-style studio.",
    youtubeId: "LbFpZOKD_Vc",
    duration: "4:36",
  },
  {
    id: "abhishek-purvi-wedding",
    title: "Abhishek & Purvi: The Beginning",
    collection: "Wedding",
    summary:
      "A heartfelt wedding film capturing joyful ceremonies, family emotions, and unforgettable moments.",
    poster: "/images/video/video-thumb-04.jpg",
    posterAlt:
      "Bride and groom during a grand wedding celebration inside a banquet venue.",
    youtubeId: "DU4Rl8iRfMc",
    duration: "3:02",
  },
] as const;