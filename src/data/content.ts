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
  projectsLink: "View Projects",
  githubLink: "GitHub",
} as const;

export const SECTION_COPY = {
  about: {
    eyebrow: "About",
    title: "I learn by building things.",
    paragraphs: [
      "Most of what I’ve learned has come from building. I’m especially interested in hardware projects with ESP32s, sensors, and actuators, and in connecting them to software.",
      "I use AI coding tools such as Claude Code and OpenAI Codex to prototype, implement, and debug projects.",
    ],
  },
  projects: {
    eyebrow: "Projects",
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
    eyebrow: "Technologies",
    title: "Technologies I build with",
  },
  robotics: {
    eyebrow: "Robotics",
    title: "Builds that touch the real world.",
    lead:
      "Software is great, but my favourite moment is when code moves something physical: a servo turns, a sensor fires, a mechanism responds.",
  },
  timeline: {
    eyebrow: "Competitions",
    title: "Competition timeline",
  },
  currently: {
    eyebrow: "Currently",
    title: "Building / exploring now",
  },
  contact: {
    eyebrow: "Contact",
    title: "Say hello.",
    lead: "Always happy to talk robotics, hardware, or builds in progress.",
  },
} as const;

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export const CONTACT_ITEMS: ContactItem[] = [
  { label: "GitHub", value: "github.com/Raghav2012Code", href: GITHUB_URL, external: true },
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    label: "Discord",
    value: "thegamer3559",
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

export interface Achievement {
  title: string;
  sub: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Robowunder International Robotics Championship 2026",
    sub: "Overall Winner · Malaysia",
  },
  {
    title: "PEC Hacks 4.0",
    sub: "Consolation Prize · High School Track · Panimalar Engineering College",
  },
  {
    title: "NRC Technoxian",
    sub: "Qualified through Zonal Robotics Championship · SRM Chennai",
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
  meta?: string;
  result?: string;
  resultMuted?: boolean;
  description: string;
  details?: string[];
  sysline?: SignalStep[];
  syslineSmall?: boolean;
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
    meta: "Robowunder International Robotics Championship 2026 · Malaysia",
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
    techline: [
      { label: "ESP32" },
      { label: "Laser sensor" },
      { label: "IR sensor" },
      { label: "Servo" },
      { label: "Solenoid" },
    ],
  },
  {
    name: "CRASH (Chennai Road Accident Safety Hub)",
    badge: "Zonal Robotics Championship · SRM Chennai",
    result: "Qualified for NRC Technoxian through the zonal championship",
    description:
      "A robotics competition project that uses public accident data and XGBoost to predict where accidents may occur. It looks at parameters like time, day, junction information, and other relevant public-data parameters.",
    details: [
      "The model is gradient-boosted trees over tabular public data: time of day, day of the week, junction information and other relevant parameters, predicting where accidents may occur.",
      "My part was the complete frontend, built with Claude Code and integrated with the backend, while the team handled testing.",
    ],
    contrib:
      "Built the full frontend using Claude Code and integrated it with the backend. The team handled testing.",
    techline: [
      { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      { label: "Python" },
      { label: "Public accident data" },
    ],
    link: { label: "View repository", href: "https://github.com/abivan100-stack/C.R.A.S.H" },
  },
  {
    name: "Vaccine Cold Chain Ledger",
    badge: "PEC Hacks 4.0 · Panimalar Engineering College · High School Track",
    result: "Consolation Prize",
    description:
      "A hardware-integrated cold-chain monitoring system: a DHT22 sensor tracks vaccine storage temperature via Arduino/ESP32, shows readings on an LCD, and records SHA-256-hashed data to Supabase for display in a web application.",
    details: [
      "A DHT22 temperature sensor feeds readings through Arduino or ESP32 to an on-device LCD, while SHA-256-hashed records land in Supabase for display in the web application.",
      "I did the complete full-stack software implementation, including the hardware/software integration.",
    ],
    sysline: [
      { text: { label: "DHT22 sensor" } },
      { text: { label: "Arduino / ESP32" } },
      { text: { label: "LCD" } },
      { text: { label: "SHA-256 hashing" } },
      { text: { label: "Supabase" } },
      { text: { label: "Web app" } },
    ],
    syslineSmall: true,
    contrib:
      "Complete full-stack software implementation, including hardware/software integration.",
    link: { label: "View repository", href: "https://github.com/abivan100-stack/vault" },
    techline: [
      { label: "Arduino" },
      { label: "ESP32", tip: "Wi-Fi + Bluetooth microcontroller" },
      { label: "DHT22", tip: "Digital temperature + humidity sensor" },
      { label: "LCD" },
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Supabase" },
      { label: "REST API" },
      { label: "SHA-256", tip: "Cryptographic hash for tamper-evident records" },
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
    contrib: "Frontend development and the competition pitch.",
    techline: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "SHA-256", tip: "Cryptographic hash for tamper-evident records" },
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
    techline: [
      { label: "Python" },
      { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      { label: "Historical match data" },
    ],
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

export interface TimelineItem {
  year: string;
  title: string;
  sub: string;
  result?: string;
  minor?: boolean;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "Robowunder International Robotics Championship",
    sub: "Malaysia · Door Hinge Safety System",
    result: "Overall Winner",
  },
  {
    year: "2026",
    title: "Zonal Robotics Championship",
    sub: "SRM Chennai · CRASH",
    result: "Qualified for NRC Technoxian",
  },
  {
    year: "2026",
    title: "PEC Hacks 4.0",
    sub: "Panimalar Engineering College · High School Track · Vaccine Cold Chain Ledger",
    result: "Consolation Prize",
  },
  {
    year: "2026",
    title: "Shark Tank Challenge",
    sub: "Velammal · Volt Ledger",
    result: "Participated",
    minor: true,
  },
  {
    year: "2025",
    title: "Technoviz 2025",
    sub: "SRM Ramapuram · School Category · Participated",
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
