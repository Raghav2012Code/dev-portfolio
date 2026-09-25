// Typed portfolio content. Single source of truth for sections;
// components render it without rewriting copy.

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#technologies" },
  { label: "Robotics", href: "#robotics" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export const GITHUB_USERNAME = "Raghav2012Code";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
export const GITHUB_AVATAR_URL = `${GITHUB_URL}.png`;
export const CONTACT_EMAIL = "raghavgamerz670@gmail.com";
export const PROFILE_NAME = "Raghav Krishna";
export const NAV_GITHUB_LABEL = "GitHub";
export const ACHIEVEMENTS_LABEL = "Achievements";

export const PROJECTS_PAGE_PATH = "/project";

export const PROJECTS_PAGE_COPY = {
  viewAll: "View all projects",
} as const;

export const HERO_COPY = {
  name: PROFILE_NAME,
  eyebrow: "Chennai, India · Grade 9 · Velammal Academy Nolambur",
  role: "Student · Developer · Robotics Builder",
  description:
    "14-year-old builder exploring software, AI-assisted development, and hardware projects with ESP32, Arduino, sensors, and more.",
  avatarAlt: `Profile image of ${PROFILE_NAME}`,
  buildLink: "See the winning build",
} as const;

/** Sections whose titles are self-sufficient drop their redundant kicker. */
export const SECTION_COPY = {
  about: {
    title: "I learn by building things.",
    paragraphs: [
      "Most of what I’ve learned has come from building. I’m especially interested in hardware projects with ESP32s, sensors, and actuators, and in connecting them to software.",
      "I use AI coding tools such as Claude Code and OpenAI Codex to prototype, implement, and debug projects.",
    ],
  },
  projects: {
    title: "Selected work",
    lead: "Hardware-first projects, built for real competitions.",
  },
  contributions: {
    eyebrow: "GitHub activity",
    title: "Public contributions",
    scrollHint: "Scroll to see the full year.",
    less: "Less",
    more: "More",
  },
  stack: {
    title: "Technologies I build with",
  },
  robotics: {
    title: "Builds that touch the real world.",
    lead:
      "Software is great, but my favourite moment is when code moves something physical: a servo turns, a sensor fires, a mechanism responds.",
  },
  timeline: {
    title: "Competition timeline",
  },
  currently: {
    title: "Building / exploring now",
  },
  contact: {
    title: "Say hello.",
    lead: "Always happy to talk robotics, hardware, or builds in progress.",
  },
} as const;

/** Icon identity is keyed on this, never on the human-readable label. */
export type ContactIconName = "github" | "email" | "discord";

export interface ContactItem {
  label: string;
  value: string;
  icon: ContactIconName;
  href?: string;
  external?: boolean;
}

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "GitHub",
    value: "github.com/Raghav2012Code",
    icon: "github",
    href: GITHUB_URL,
    external: true,
  },
  { label: "Email", value: CONTACT_EMAIL, icon: "email", href: `mailto:${CONTACT_EMAIL}` },
  {
    label: "Discord",
    value: "thegamer3559",
    icon: "discord",
    href: "https://discord.com/users/980399356148609045",
    external: true,
  },
];

export const FOOTER_COPY = {
  tagline: "Student · Developer · Robotics Builder · Chennai 2026 ·",
  backToTop: "Back to top",
} as const;

export const UI_COPY = {
  contributionLabel: "Contribution",
} as const;

export const CONTRIBUTION_TEASER = {
  lead: "public contributions in the past year",
} as const;

/** Outcome-led achievement: the result leads, the event and venue support. */
export interface Achievement {
  outcome: string;
  event: string;
  venue?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    outcome: "Overall Winner",
    event: "Robowunder International Robotics Championship 2026",
    venue: "Malaysia",
  },
  {
    outcome: "Consolation Prize",
    event: "PEC Hacks 4.0",
    venue: "High School Track · Panimalar Engineering College",
  },
  {
    outcome: "Qualified for NRC Technoxian",
    event: "Zonal Robotics Championship",
    venue: "SRM Chennai",
  },
];

/** A technology mention; `tip` adds the hover/focus tooltip gloss. */
export interface TechMention {
  label: string;
  tip?: string;
}

export interface SignalStep {
  strong?: string;
  text: TechMention;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  badge: string;
  badgeAccent?: boolean;
  featured?: boolean;
  /** One outcome fact, shown under the title in the home preview. */
  gist?: string;
  /** Structured context facts: venue and event, rendered as a fact line. */
  meta?: string[];
  result?: string;
  resultMuted?: boolean;
  description: string;
  details?: string[];
  sysline?: SignalStep[];
  contrib?: string;
  techline?: TechMention[];
  link?: ProjectLink;
  demo?: ProjectLink;
  media?: { src: string; alt: string; caption: string };
}

export const PROJECTS: Project[] = [
  {
    name: "Door Hinge Safety System",
    badge: "Overall winner · Gold",
    badgeAccent: true,
    featured: true,
    gist: "Overall Winner · Gold",
    meta: ["Robowunder International Robotics Championship 2026", "Malaysia"],
    description:
      "A hardware safety system designed to help prevent finger injuries around door hinges. Laser and IR sensors watch the hinge danger zone, and when something is detected inside it, the servo and solenoid actuators respond.",
    details: [
      "The response chain is sense, process, actuate: laser and infrared sensing tuned to a hand near the hinge, an ESP32 with Wi-Fi and Bluetooth doing the thinking, and a servo plus solenoid doing the moving.",
      "It was built for the Robowunder International Robotics Championship 2026 in Malaysia, where it took Overall Winner and Gold.",
    ],
    sysline: [
      { strong: "Sense", text: { label: "Laser + IR sensor", tip: "Detects a hand near the hinge" } },
      { strong: "Process", text: { label: "ESP32", tip: "Wi-Fi + Bluetooth microcontroller" } },
      { strong: "Actuate", text: { label: "Servo + Solenoid" } },
    ],
  },
  {
    name: "CRASH (Chennai Road Accident Safety Hub)",
    badge: "Zonal Robotics Championship · SRM Chennai",
    gist: "Qualified for NRC Technoxian",
    result: "Qualified for NRC Technoxian through the zonal championship",
    description:
      "A robotics competition project that uses public accident data and XGBoost to predict where accidents may occur. It looks at parameters like time, day, junction information, and other relevant public-data parameters.",
    details: [
      "The model is gradient-boosted trees over tabular public data: time of day, day of the week, junction information and other relevant parameters, predicting where accidents may occur.",
      "My part was the complete frontend, built with Claude Code and integrated with the backend, while the team handled testing.",
    ],
    sysline: [
      {
        strong: "Data",
        text: { label: "Public accident data", tip: "Time, day, junction and other public parameters" },
      },
      {
        strong: "Model",
        text: { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      },
      { strong: "Readout", text: { label: "Accident-risk predictions" } },
    ],
    contrib:
      "Built the full frontend using Claude Code and integrated it with the backend. The team handled testing.",
    techline: [{ label: "Python" }],
    link: { label: "View repository", href: "https://github.com/abivan100-stack/C.R.A.S.H" },
  },
  {
    name: "Vaccine Cold Chain Ledger",
    badge: "PEC Hacks 4.0 · Panimalar Engineering College · High School Track",
    gist: "Consolation Prize",
    result: "Consolation Prize",
    description:
      "A hardware-integrated cold-chain monitoring system: a DHT22 sensor tracks vaccine storage temperature via Arduino/ESP32, shows readings on an LCD, and records SHA-256-hashed data to Supabase for display in a web application.",
    details: [
      "A DHT22 temperature sensor feeds readings through Arduino or ESP32 to an on-device LCD, while SHA-256-hashed records land in Supabase for display in the web application.",
      "I did the complete full-stack software implementation, including the hardware/software integration.",
    ],
    sysline: [
      { text: { label: "DHT22 sensor", tip: "Digital temperature + humidity sensor" } },
      { text: { label: "Arduino / ESP32", tip: "Wi-Fi + Bluetooth microcontroller" } },
      { text: { label: "LCD" } },
      { text: { label: "SHA-256 hashing", tip: "Cryptographic hash for tamper-evident records" } },
      { text: { label: "Supabase" } },
      { text: { label: "Web app" } },
    ],
    contrib:
      "Complete full-stack software implementation, including hardware/software integration.",
    link: { label: "View repository", href: "https://github.com/abivan100-stack/vault" },
    techline: [
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "REST API" },
    ],
  },
  {
    name: "Volt Ledger",
    badge: "Shark Tank Challenge · Velammal",
    result: "Participated · 2026",
    resultMuted: true,
    description:
      "A transparent, tamper-evident ledger for peer-to-peer rooftop solar energy trading. Neighbours trade surplus at a community rate, and every trade is sealed into a SHA-256 hash chain computed in the browser. All data simulated.",
    details: [
      "Neighbours trade rooftop surplus at a community rate, and every trade is sealed into a tamper-evident SHA-256 hash chain computed in the browser; all data is simulated.",
      "My contribution was the frontend development and the competition pitch.",
    ],
    sysline: [
      { strong: "Data", text: { label: "Peer-to-peer solar trades" } },
      {
        strong: "Seal",
        text: { label: "SHA-256 hash chain", tip: "Cryptographic hash for tamper-evident records" },
      },
      { strong: "Readout", text: { label: "Tamper-evident ledger in the browser" } },
    ],
    contrib: "Frontend development and the competition pitch.",
    techline: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
    ],
    link: { label: "View repository", href: "https://github.com/abivan100-stack/volt-ledger" },
    demo: { label: "Open live site", href: "https://volt-ledger.vercel.app" },
  },
  {
    name: "EPL Predictor",
    badge: "Personal project",
    result: "Work in progress · personal exploration",
    resultMuted: true,
    description:
      "A personal project using historical English football data and XGBoost to explore match-outcome prediction. An exercise in working with real datasets, testing simple prediction ideas, and learning what works (and what doesn’t).",
    details: [
      "Historical English football data goes into gradient-boosted trees exploring match-outcome prediction: an exercise in working with real datasets, testing simple prediction ideas, and learning what works and what doesn’t.",
    ],
    sysline: [
      { strong: "Data", text: { label: "Historical English football data" } },
      {
        strong: "Model",
        text: { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      },
      { strong: "Readout", text: { label: "Match-outcome predictions" } },
    ],
    techline: [{ label: "Python" }],
    link: { label: "View repository", href: "https://github.com/Raghav2012Code/epl-predictor" },
  },
  {
    name: "Urbania",
    badge: "Personal · Experimental",
    result: "Experimental · personal project",
    resultMuted: true,
    description:
      "A personal experimental project: a 2D city simulation I’m building to explore how simulated systems behave.",
    link: { label: "View repository", href: "https://github.com/Raghav2012Code/urbania" },
  },
];

/** The featured winning build: the hero's single proof point. */
export const FEATURED_PROJECT = PROJECTS[0];

/** Short display name for a build, for places where the full name is too long. */
export function shortProjectName(name: string): string {
  return name.split(" (")[0];
}

export interface StackRow {
  label: string;
  items: string;
}

export const STACK_ROWS: StackRow[] = [
  {
    label: "Robotics / Hardware",
    items:
      "Arduino · ESP32 · DHT22 · IR Sensors · Laser Sensors · Servos · Solenoids · LCDs · Sensors · Actuators",
  },
  { label: "Web", items: "HTML · CSS · JavaScript · TypeScript · React · Next.js" },
  { label: "Backend / Data", items: "Supabase · REST APIs · SHA-256" },
  { label: "Programming", items: "Python" },
  { label: "Tools", items: "Git · GitHub · Claude Code · OpenAI Codex" },
];

export interface RoboItem {
  title: string;
  text: string;
}

export const ROBOTICS_ITEMS: RoboItem[] = [
  { title: "ESP32 & Arduino", text: "Microcontrollers at the centre of every hardware build." },
  { title: "Sensors", text: "IR, laser, temperature: reading the physical world." },
  { title: "Actuators", text: "Servos, solenoids, displays: acting on the physical world." },
  { title: "Electronics", text: "Circuits, wiring, and making it all actually work together." },
  {
    title: "Hardware / software integration",
    text: "Connecting physical hardware to software. That's the whole point.",
  },
  { title: "Physical computing", text: "Building things that interact with the physical world." },
];

/** Sequence-led timeline entry: the year structures it, the build links out. */
export interface TimelineItem {
  year: string;
  title: string;
  venue: string;
  build?: string;
  result?: string;
  minor?: boolean;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "Robowunder International Robotics Championship",
    venue: "Malaysia",
    build: "Door Hinge Safety System",
    result: "Overall Winner",
  },
  {
    year: "2026",
    title: "Zonal Robotics Championship",
    venue: "SRM Chennai",
    build: "CRASH (Chennai Road Accident Safety Hub)",
    result: "Qualified for NRC Technoxian",
  },
  {
    year: "2026",
    title: "PEC Hacks 4.0",
    venue: "Panimalar Engineering College · High School Track",
    build: "Vaccine Cold Chain Ledger",
    result: "Consolation Prize",
  },
  {
    year: "2026",
    title: "Shark Tank Challenge",
    venue: "Velammal",
    build: "Volt Ledger",
    result: "Participated",
    minor: true,
  },
  {
    year: "2025",
    title: "Technoviz 2025",
    venue: "SRM Ramapuram · School Category",
    result: "Participated",
    minor: true,
  },
];

export interface CurrentlyItem {
  title: string;
  sub: string;
}

export const CURRENTLY: CurrentlyItem[] = [
  {
    title: "Robotics and ESP32 projects",
    sub: "Sensors, servos, solenoids and microcontrollers.",
  },
  {
    title: "Web development",
    sub: "React, TypeScript, including this portfolio.",
  },
  {
    title: "AI-assisted development",
    sub: "Claude Code and OpenAI Codex in the loop.",
  },
];
