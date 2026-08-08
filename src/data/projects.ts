export interface Project {
  slug: string;
  title: string;
  role: string;
  company?: string;
  duration?: string;
  problem: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  /** "web" for browser-based apps, "mobile" for React Native / Expo apps */
  platform: "web" | "mobile";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  techStackDetails: { category: string; skills: string[] }[];
  codebaseHighlights?: { file: string; language: string; explanation: string; snippet?: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "yacht-crm",
    title: "Yacht CRM & Scheduling Platform",
    role: "Software Developer (Frontend Specialist)",
    company: "Selvi Software Technologies Pvt Ltd",
    duration: "Feb 2025 - Present",
    problem: "Yacht charter operators struggled to coordinate complex multi-day itineraries, manage overlapping schedules, and capture crew-wide comparisons of charter guest preferences.",
    shortDescription: "A production-grade Yacht CRM and Charter Management platform featuring an interactive multi-destination Trip Planner, a custom Guest Preference sheets Matrix view, and real-time notification hubs.",
    longDescription: "This Yacht CRM is a production-grade SaaS application designed to streamline the operations of yacht owners, captains, and charter managers. The platform manages booking lifecycles, itinerary logistics, and guest onboarding preference tracking. It handles complex client-side validations, real-time syncs, and high-density rendering loops in React, ensuring crews can coordinate efficiently even with massive data grids.",
    image: "/devflow.jpg",
    platform: "web",
    tags: ["React 19", "Tailwind CSS", "i18next", "Laravel 12 API", "Stripe"],
    features: [
      "Interactive Trip Planner & Timeline Builder: Developed a multi-destination calendar builder enabling operators to plot arrivals, departures, and preparation/recovery timeframes with rigid date boundary validations.",
      "High-Density Guest Preference Matrix: Designed a responsive crew review panel with sticky section headers, scroll-to-error validation triggers, and optimized rendering to support massive crew/guest comparison grids.",
      "Real-time Notification Center: Set up localized notification feeds using i18next supporting English and Chinese languages, integrated with Laravel preferences.",
      "Customizable Drag-and-Drop Home Dashboard: Engineered a widget layout system letting users add, resize, and drag-and-drop dashboard indicators, persisting settings to database models.",
      "Multi-tenant Subscription Admin: Managed Owner checkout workflows, plan validations, and Stripe checkout routes."
    ],
    techStackDetails: [
      { category: "Frontend Core", skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "State & Forms", skills: ["Zustand", "Context API", "Formik", "Yup Validation"] },
      { category: "Backend APIs", skills: ["Laravel 12", "Eloquent ORM", "Sanctum Auth"] },
      { category: "Localization & Utilities", skills: ["i18next (EN, ZH)", "Yajra DataTables", "Stripe Checkout"] }
    ]
  },
  {
    slug: "marine-saas",
    title: "Marine Operations & Regatta SaaS",
    role: "Software Developer (Frontend & Systems)",
    company: "Selvi Software Technologies Pvt Ltd",
    duration: "Feb 2025 - Present",
    problem: "Real-time communication and content coordination for water sports regattas were fragmented, while local development environments suffered from database collisions across git branches.",
    shortDescription: "A real-time sports and vessel management platform featuring Socket.io messaging, autocomplete user mentions (@username), drag-and-drop curation filters, and automated Docker database isolation.",
    longDescription: "A high-performance Marine Operations & Regatta Management platform designed to run real-time updates for spectators, competitors, and organizers. The application handles high-frequency communication gateways, content curation for active sailing events, and local developer flow automations to make team feature branches completely isolation-safe.",
    image: "/aether.jpg",
    platform: "web",
    tags: ["React 19", "Tailwind CSS 4", "NestJS 11", "Socket.io", "Prisma ORM", "Docker"],
    features: [
      "Real-Time Messaging Gateway: Built low-latency chat hubs using Socket.io WebSockets with NestJS controller endpoints.",
      "Prefix-Based Mentions Engine: Created a floating mentions selector triggered by '@' prefix text entries, utilizing regex match bounds and autocomplete components.",
      "Drag-and-Drop Content Curation: Programmed a drag-and-drop feed manager utilizing @dnd-kit/core to allow admins to order, ranked filter, or manually sequence content.",
      "Vessel Specifications & Fleet Tracking: Crafted specs forms with dynamic fields, danger zone warnings, and transactional log databases mapping coordinates.",
      "Docker Local Database Sync: Designed a Bash script utility (sync-db-branch.sh) that queries current Git branch structures, setting up custom Postgres containers per feature branch to prevent cross-developer collisions."
    ],
    techStackDetails: [
      { category: "Frontend Stack", skills: ["React 19", "Zustand", "Tailwind CSS 4", "React Router 7", "@dnd-kit/core"] },
      { category: "Backend Frameworks", skills: ["NestJS 11 (TypeScript)", "Socket.io WebSockets", "Class Validator"] },
      { category: "Database & Tooling", skills: ["PostgreSQL", "Prisma ORM", "Docker Engine", "Bash Scripting"] }
    ]
  },
  {
    slug: "kyc-suite",
    title: "KYC/AML Compliance & Admin Suite",
    role: "Frontend Developer",
    company: "Selvi Software Technologies Pvt Ltd",
    duration: "Feb 2025 - Present",
    problem: "Compliance departments required secure role-based workspaces to analyze AML watchlists, manage payout settings, and upload large files with zero system latency.",
    shortDescription: "A secure administration panel and watchlist screening dashboard featuring role-based session management, multi-tier financial payouts, and bulk CSV uploads/validation workflows.",
    longDescription: "An enterprise-grade KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance portal built to handle sensitive user verification pipelines. The system features multi-role security configurations, batch csv validators, and high-performance reporting dashboards to keep audit records clean and secure.",
    image: "/helix.jpg",
    platform: "web",
    tags: ["Next.js", "NextAuth.js", "Tailwind CSS", "Recharts", "Node.js", "Express"],
    features: [
      "Watchlist Screening & CSV Bulk Import: Engineered client-side CSV upload parsing and row validations, mapping fields to watchlist comparison endpoints.",
      "NextAuth.js Authentication: Configured role-based access checks, layout shields, and secure API routing to support multi-tenant structures.",
      "Analytics & Payout Dashboard: Structured reporting grids using @tanstack/react-table and transactional charts using Recharts SVG components."
    ],
    techStackDetails: [
      { category: "Frontend UI", skills: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "@tanstack/react-table"] },
      { category: "Security & Auth", skills: ["NextAuth.js", "Role-Based Routing", "JWT Session Management"] },
      { category: "API Services", skills: ["Node.js", "Express API", "REST Endpoints", "PostgreSQL"] }
    ]
  },
  {
    slug: "datatribe",
    title: "DataTribe (Shared Mobile Data Planner)",
    role: "Lead Mobile Developer",
    company: "Personal Project",
    duration: "2026",
    problem: "Families and teams struggle to coordinate and distribute shared mobile data caps, leading to unexpected overage fees or unused capacity rollover waste.",
    shortDescription: "A cross-platform React Native & Expo mobile application built on Expo SDK 54, featuring a predictive Daily Rollover Engine and a Virtual Rollover Vault to track data savings.",
    longDescription: "DataTribe is an intuitive cross-platform mobile application designed to help families, friends, and teams coordinate, split, and optimize shared mobile data pools. It solves mobile plan management problems by implementing a predictive daily rollover engine, simulated data trackers, and persistent Zustand caching stores to maintain offline capability.",
    image: "/aether.jpg",
    platform: "mobile",
    tags: ["React Native", "Expo SDK 54", "React 19", "Zustand 5", "Formik", "Yup"],
    liveUrl: "https://expo.dev/@anonymous/data-rollover",
    githubUrl: "https://github.com/ajaysathasivam/datatribe/tree/main",
    features: [
      "Multi-Step Tribe Setup Wizard: Configures total shared pool limit (GB), billing cycle starts, and member split values using Formik + Yup.",
      "Daily Rollover Engine: Tracks elapsed cycle days, daily allowance values, and predicts roll capacity dynamically.",
      "Virtual Rollover Vault: Accumulates and displays saved data units when members consume less than their daily split allowances.",
      "Dual Monitoring Modes: Supports Device Data Mode (live stats from network adapters) and Simulated Data Mode for custom configurations.",
      "Zustand State Persistence: Configures AsyncStorage integration to cache setup limits and UI dark/light configurations offline."
    ],
    techStackDetails: [
      { category: "Mobile Core", skills: ["React Native 0.81", "Expo SDK 54", "React 19", "Safe Area Context"] },
      { category: "State & Validation", skills: ["Zustand 5 (Persist)", "Formik Wizard", "Yup Validation"] },
      { category: "Offline & Layout", skills: ["AsyncStorage", "Vanilla StyleSheet API", "Feather Icons"] }
    ],
    codebaseHighlights: [
      {
        file: "src/store/useAppStore.js",
        language: "javascript",
        explanation: "Configures central state management with offline persistence using Zustand and Expo AsyncStorage.",
        snippet: `persist(
  (set) => ({
    themeMode: 'system',
    tribeLimit: 0,
    members: [],
    // ... State properties
  }),
  {
    name: 'datatribe-app-storage',
    storage: createJSONStorage(() => AsyncStorage)
  }
)`
      },
      {
        file: "src/theme/theme.js",
        language: "javascript",
        explanation: "Implements useTheme hook to evaluate manual settings or system light/dark scheme preferences dynamically.",
        snippet: `const themeMode = useAppStore((state) => state.themeMode);
const systemScheme = useColorScheme();
const activeMode = themeMode === 'system' ? (systemScheme || 'dark') : themeMode;`
      }
    ]
  },
  {
    slug: "stream-client",
    title: "Stream Client (Live Streaming App)",
    role: "Lead Mobile Developer",
    company: "Personal Project",
    duration: "2026",
    problem: "Standard mobile streaming applications are heavy, lack dual RTMP broadcaster/HLS viewer features, and don't support responsive WebSocket interactive elements inside unified Expo SDK builds.",
    shortDescription: "A feature-rich React Native & Expo application designed for real-time live video broadcasting (RTMP) and interactive HLS viewer playback, featuring WebSockets chat and floating reactions.",
    longDescription: "A high-performance live broadcasting client built on Expo SDK 54. It acts as the primary mobile interface for the Seaward Strike platform, allowing users to publish live camera feeds using RTMP and watch streams via HLS, with synchronized real-time chat feeds and floating animated reactions.",
    image: "/devflow.jpg",
    platform: "mobile",
    tags: ["React Native", "Expo SDK 54", "Zustand", "Socket.io Client", "Reanimated", "expo-video"],
    liveUrl: "https://expo.dev/@anonymous/stream-client",
    githubUrl: "https://github.com/ajaysathasivam/stream-client/tree/main",
    features: [
      "Broadcaster Mode (RTMP): Publishes high-performance camera/mic capture using react-native-nodemediaclient, with front/back camera toggling and mute options.",
      "Viewer Mode (HLS): Streams live HLS (.m3u8) feeds using expo-video, supporting fullscreen and picture-in-picture mode.",
      "Real-Time Chat & Counts: Connects to a NestJS WebSocket hub using Socket.io to sync chat messages and concurrent viewer counts.",
      "Floating Reactions Engine: Bubbles animated emojis (likes, fire, claps) up screen margins using react-native-reanimated vectors.",
      "Docker MediaMTX Connection: Ingests server settings dynamically using custom input panels."
    ],
    techStackDetails: [
      { category: "Mobile Stream Core", skills: ["React Native", "Expo SDK 54", "expo-video HLS Playback"] },
      { category: "RTMP & Broadcast", skills: ["react-native-nodemediaclient", "Native Device Camera Module"] },
      { category: "WebSockets & Animation", skills: ["socket.io-client", "react-native-reanimated", "Zustand Store"] }
    ]
  }
];
