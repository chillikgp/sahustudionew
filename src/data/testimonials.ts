export type Testimonial = {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  isVerified: boolean;
};

export const weddingTestimonials: Testimonial[] = [
  {
    id: "1",
    author: "Tanvi Vijh",
    text: "Sahu Studio captured our wedding with such grace and professionalism. The cinematic film feels like a piece of art that we will cherish forever. Their team is incredibly talented and patient.",
    rating: 5,
    date: "2023-11-15",
    isVerified: true,
  },
  {
    id: "2",
    author: "Shakshi Poddar",
    text: "The best decision we made for our big day. Gaurav and his team are true storytellers. Every time we watch our wedding film, it feels like we're reliving those emotions all over again.",
    rating: 5,
    date: "2023-12-10",
    isVerified: true,
  },
  {
    id: "3",
    author: "Premchand Singh",
    text: "A heritage studio that truly understands the value of family traditions. Their candid photography is exceptional—they captured moments we didn't even notice were happening.",
    rating: 5,
    date: "2024-01-20",
    isVerified: true,
  },
  {
    id: "4",
    author: "Swati Mishra",
    text: "Incredible attention to detail. From our pre-wedding shoot in Delhi 6 to the main ceremony, everything was handled with such creative flair. Highly recommended for luxury weddings.",
    rating: 5,
    date: "2023-10-05",
    isVerified: true,
  },
  {
    id: "5",
    author: "Subhashini Patel",
    text: "Elegant, timeless, and royal. That's how I would describe the photography by Sahu Studio. They managed to capture the scale of our celebration while keeping the focus on intimacy.",
    rating: 5,
    date: "2024-02-14",
    isVerified: true,
  },
  {
    id: "6",
    author: "Palak Sharma",
    text: "Professionalism at its best. The team was discreet during the rituals but always there for the perfect shot. The quality of the final album and films is world-class.",
    rating: 5,
    date: "2023-09-28",
    isVerified: true,
  },
];

export const testimonials = weddingTestimonials;

export const passportTestimonials: Testimonial[] = [
  {
    id: "pp1",
    author: "Rohan Malhotra",
    text: "Shared my photo on WhatsApp in the morning for a Schengen visa photo. Sahu Studio cleaned up the background, adjusted it to exact specs, and sent the prints to my office in Noida through a local delivery partner the same afternoon.",
    rating: 5,
    date: "2024-03-12",
    isVerified: true,
  },
  {
    id: "pp2",
    author: "Deepika K.",
    text: "Needed urgent passport photos for a last-minute submission. Visited their Karkardooma studio late in the evening. They were extremely helpful, prepared the prints immediately, and emailed the digital JPEG right away.",
    rating: 5,
    date: "2024-04-05",
    isVerified: true,
  },
  {
    id: "pp3",
    author: "Arjun Mehta",
    text: "Sent a casual photo via WhatsApp to see if it could be used for a visa form. They did an excellent background cleanup, cropped it to the exact passport dimensions, and shared a high-res digital copy that got approved in the portal instantly.",
    rating: 5,
    date: "2024-04-20",
    isVerified: true,
  },
  {
    id: "pp4",
    author: "Priya Chawla",
    text: "Getting passport photos of an infant is so stressful, but the team at their East Delhi studio was incredibly patient. They took multiple shots until they got the perfect one and quickly shared both the printed sheet and digital file.",
    rating: 5,
    date: "2024-05-02",
    isVerified: true,
  },
];
