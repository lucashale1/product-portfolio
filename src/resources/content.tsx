import { About, BasePageConfig, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Lucas",
  lastName: "Hale",
  name: "Lucas Hale",
  role: "Product Manager & Co-founder at Meritt",
  avatar: "/images/avatar.svg",
  email: "lucas.hale10@gmail.com",
  // IANA time zone identifier used for the optional time widget in the header.
  location: "Europe/London",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe</>,
  description: <>Get updates</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lucas-hale/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent(`${person.name} - Product Manager Portfolio`)}`,
  label: "Home",
  title: `${person.name} - Product Manager Portfolio`,
  description: `AI and data-first Product Manager portfolio: strategy, discovery, UX, and measurable outcomes.`,
  headline: <>AI and data-first product leadership</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">{person.firstName}</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured case studies
        </Text>
      </Row>
    ),
    href: "/work/ai-video-coach",
  },
  subline: (
    <>
      I’m {person.name}, a Product Manager & co-founder at <Text as="span" size="xl" weight="strong">Meritt</Text>.
      <br />
      I combine AI + data depth with user research, experimentation, and UI/UX craft to ship products that move metrics.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a data and AI-first Product Manager. Built across sales, marketing, and SaaS delivery.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "PM Journey",
    description: (
      <>
        I started in sales and marketing, then moved into product with an obsessive focus on discovery, experimentation, and measurable outcomes.
        My work blends technical depth (APIs, event tracking, embeddings) with UX craft and strong user research.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Meritt",
        timeframe: "Mar 2024 - Present",
        role: "Product Manager & Co-founder",
        achievements: [
          <>
            Led 0-1 product development from concept to 8,000+ monthly active users, defining product vision and roadmap through continuous discovery, backlog prioritisation, and quarterly roadmap buy-in.
          </>,
          <>
            Shipped the AI Video Coach feature, improving interview acceptance rates by 20% and achieving 92% positive candidate feedback.
          </>,
          <>
            Reduced candidate journey drop-off via funnel analysis and behavioural session data in PostHog; structured A/B tests improved activation from 30% to 45% across 10,000+ candidates.
          </>,
          <>
            Collaborated with engineering to scope and deliver REST API integrations including an AI video analysis microservice, dual email systems (employer vs candidate login), Upstash serverless queue infrastructure for long jobs, and custom PostHog event tracking from scratch.
          </>,
          <>
            Delivered AI-powered semantic search using vector embeddings (OpenAI) + Pinecone, enabling matching across 3m+ data points with sub-200ms query times while optimizing backend performance and infrastructure costs.
          </>,
        ],
        images: [],
      },
      {
        company: "eola",
        timeframe: "May 2023 - Jul 2024",
        role: "Account Executive",
        achievements: [
          <>
            Achieved 120% of sales quota by selling to non-technical small business owners, translating features into simple business value through consultative discovery.
          </>,
          <>
            Conducted 20+ discovery calls to identify recurring product gaps; turned feedback into 10 prioritised feature proposals (impact-effort), with 8 adopted into the product roadmap.
          </>,
        ],
        images: [],
      },
      {
        company: "Hygraph",
        timeframe: "Jul 2022 - May 2023",
        role: "Senior Business Development Representative",
        achievements: [
          <>
            Achieved 160% of quota booking enterprise meetings, learning and selling complex topics (headless CMS, GraphQL APIs, content federation) into leaders at Ticketmaster, FOX, NBC Universal, Arsenal FC, and Amazon.
          </>,
        ],
        images: [],
      },
      {
        company: "Jaguar Land Rover",
        timeframe: "Jun 2017 - Jun 2018",
        role: "Product Analyst - Range Rover",
        achievements: [
          <>
            Produced data-driven reports and presentations that shaped future product mix and feature decisions for the 20 model year All-New Range Rover Evoque.
          </>,
          <>
            Managed product configuration and specification data across 30+ vehicle variants, coordinating with engineering, marketing, and sales teams to ensure accuracy and 100% regulatory compliance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Hartpury University",
        description: <>MSc. Strength & Conditioning (Graduated 2022).</>,
      },
      {
        name: "University of Plymouth",
        description: <>BSc. Marketing (1st Class Hons) (Graduated 2019).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Key Skills",
    skills: [
      {
        title: "Product Analytics & Experimentation",
        description: <>PostHog, funnel analysis, and structured A/B testing to improve activation and reduce drop-off.</>,
      },
      {
        title: "AI & Data-First Product",
        description: <>Vector embeddings, semantic matching, and measurable AI outcomes (OpenAI + Pinecone), with cost-aware delivery.</>,
      },
      {
        title: "UX, Prototyping & User Research",
        description: <>Figma-based rapid prototypes, user research, and iterative discovery cycles that de-risk build handoffs.</>,
        tags: [{ name: "Figma", icon: "figma" }],
      },
      {
        title: "Engineering Collaboration",
        description: <>REST API integrations, GraphQL, event tracking, and scoping work with engineers to ship reliably.</>,
      },
      {
        title: "Frontend Craft",
        description: <>React + Next.js, modern JavaScript, and UI/UX polish for candidate-facing product flows.</>,
        tags: [
          { name: "React", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
        ],
      },
      {
        title: "Product Operating System",
        description: <>RICE prioritisation, backlog management, and cross-functional execution (Linear, Notion, Slack, spreadsheets, dashboards).</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Case Studies – ${person.name}`,
  description: `Metric-driven PM case studies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const contact: BasePageConfig = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Reach out to ${person.name} about AI + data-first product work.`,
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
