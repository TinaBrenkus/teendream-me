export interface Project {
  name: string;
  url: string;
  tag: string;
  desc: string;
  stack: string;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Favor.gifts",
    url: "https://favor.gifts",
    tag: "Full-Stack App",
    desc: "Gift exchange platform with Supabase backend, user authentication, wishlists, purchase tracking, and real-time updates. Multiple feature releases shipped.",
    stack: "Next.js · Supabase · Vercel",
    color: "#C43B52",
  },
  {
    name: "Hey Farmer",
    url: "https://www.heyfarmer.farm",
    tag: "Marketplace",
    desc: "Texas Triangle farming marketplace connecting local farmers with their communities. Full application with concept, copy, UX, and build.",
    stack: "Next.js · Vercel",
    color: "#3D7C47",
  },
  {
    name: "AgentConnect",
    url: "https://www.agentconnect.agency",
    tag: "Platform",
    desc: "Real estate referral network disrupting the traditional fee model. Agent profiles, search, and networking — built to replace the 25-35% referral cut with flat fees.",
    stack: "Next.js · Vercel",
    color: "#2E6B8A",
  },
  {
    name: "Tao Life Lodge",
    url: "https://tao-retreat-v2.vercel.app",
    tag: "Booking Platform",
    desc: "Full-stack retreat and lodging booking platform for a Wisconsin wellness center. PayPal payment processing, room selection, event calendar, waitlist system, and admin dashboard. Built for a non-technical client. Pre-launch.",
    stack: "Next.js · PayPal · Vercel",
    color: "#8B6914",
  },
  {
    name: "Rooted in Relationship",
    url: "https://rooted-in-relationship.vercel.app",
    tag: "AI-Powered",
    desc: "Early childhood special ed consulting platform with an AI-powered custom resource generator. Users describe their challenge, get personalized strategies.",
    stack: "Next.js · AI Integration · Vercel",
    color: "#7B5EA7",
  },
  {
    name: "Renolite Plus",
    url: "https://www.renoliteplus.com",
    tag: "Client Site",
    desc: "Residential remodeling contractor site with custom neon logo, project portfolio, SEO blog, and lead generation. Full spec, design direction, copy, and deployment.",
    stack: "Next.js · Vercel",
    color: "#B87333",
  },
  {
    name: "Patricia Lenz",
    url: "https://patricia-lenz-website.vercel.app",
    tag: "Artist Portfolio",
    desc: "Mixed media artist portfolio with gallery and shop. Clean, gallery-forward design built for an 80-year-old artist in Superior, Wisconsin.",
    stack: "Next.js · Vercel",
    color: "#2A8F7A",
  },
];
