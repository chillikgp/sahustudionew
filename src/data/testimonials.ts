export type Testimonial = {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  isVerified: boolean;
};

export const testimonials: Testimonial[] = [
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
