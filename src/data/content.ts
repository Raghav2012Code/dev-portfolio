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

export const PROJECTS_PAGE_PATH = "/project";

export const HERO_COPY = {
  name: PROFILE_NAME,
  role: "Student, developer and robotics builder",
  facts: "Grade 9 at Velammal Academy Nolambur, Chennai, India",
  description:
    "14-year-old builder exploring software, AI-assisted development, and hardware projects with ESP32, Arduino, sensors, and more.",
  avatarAlt: `Profile image of ${PROFILE_NAME}`,
  projectsLink: "View projects",
  githubLink: "GitHub",
} as const;

/** One stage of the hero build-loop figure. */
export interface BuildStage {
  stage: string;
  part: string;
  examples: string;
}

export const BUILD_LOOP: { caption: string; stages: BuildStage[] } = {
  caption: "Sense, process, actuate: the loop behind my hardware builds.",
  stages: [
    { stage: "Sense", part: "Sensors", examples: "IR, laser, temperature" },
    { stage: "Process", part: "Microcontroller", examples: "ESP32, Arduino" },
    { stage: "Actuate", part: "Actuators", examples: "Servos, solenoids, displays" },
  ],
};

export const SECTION_COPY = {
  record: {
    title: "Results",
  },
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
    viewAll: "Read every project in full",
  },
  projectsPage: {
    title: "Projects",
    lead: "Hardware-first projects, built for real competitions, plus the personal experiments in between.",
  },
  contributions: {
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
    title: "Building and exploring now",
  },
  contact: {
    title: "Say hello.",
    lead: "Always happy to talk robotics, hardware, or builds in progress.",
  },
} as const;

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export const CONTACT_ITEMS: ContactItem[] = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "GitHub", value: "github.com/Raghav2012Code", href: GITHUB_URL, external: true },
  {
    label: "Discord",
    value: "thegamer3559",
    href: "https://discord.com/users/980399356148609045",
    external: true,
  },
];

export const FOOTER_COPY = {
  place: "Chennai, 2026",
  backToTop: "Back to top",
} as const;

export const CONTRIBUTION_TEASER = {
  lead: "public GitHub contributions in the past year",
} as const;

/** Awarded or qualifying results only. Participation stays in the timeline. */
export interface Achievement {
  result: string;
  event: string;
  detail: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    result: "Overall Winner",
    event: "Robowunder International Robotics Championship 2026",
    detail: "Malaysia",
  },
  {
    result: "Consolation Prize",
    event: "PEC Hacks 4.0",
    detail: "High School Track, Panimalar Engineering College",
  },
  {
    result: "Qualified",
    event: "NRC Technoxian",
    detail: "Through the Zonal Robotics Championship, SRM Chennai",
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

/** `win` = awarded or qualified, `muted` = participated or personal. */
export type ResultTone = "win" | "muted";

export interface Project {
  slug: string;
  name: string;
  featured?: boolean;
  event: string;
  result: string;
  resultTone: ResultTone;
  description: string;
  sysline?: SignalStep[];
  contrib?: string;
  techline?: TechMention[];
  links?: ProjectLink[];
}

export const PROJECT_SPEC_LABELS = {
  event: "Built for",
  result: "Result",
  contrib: "My part",
  tech: "Built with",
  flow: "Signal chain",
} as const;

export const PROJECTS: Project[] = [
  {
    slug: "door-hinge-safety-system",
    name: "Door Hinge Safety System",
    featured: true,
    event: "Robowunder International Robotics Championship 2026, Malaysia",
    result: "Overall Winner, Gold",
    resultTone: "win",
    description:
      "A hardware safety system designed to help prevent finger injuries around door hinges. Laser and IR sensors watch the hinge danger zone, and when something is detected inside it, the servo and solenoid actuators respond.",
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
    slug: "crash",
    name: "CRASH (Chennai Road Accident Safety Hub)",
    event: "Zonal Robotics Championship, SRM Chennai",
    result: "Qualified for NRC Technoxian",
    resultTone: "win",
    description:
      "A robotics competition project that uses public accident data and XGBoost to predict where accidents may occur. It looks at parameters like time, day, junction information, and other relevant public-data parameters.",
    contrib:
      "Built the full frontend using Claude Code and integrated it with the backend. The team handled testing.",
    techline: [
      { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      { label: "Python" },
      { label: "Public accident data" },
    ],
    links: [{ label: "View repository", href: "https://github.com/abivan100-stack/C.R.A.S.H" }],
  },
  {
    slug: "vaccine-cold-chain-ledger",
    name: "Vaccine Cold Chain Ledger",
    event: "PEC Hacks 4.0, High School Track, Panimalar Engineering College",
    result: "Consolation Prize",
    resultTone: "win",
    description:
      "A hardware-integrated cold-chain monitoring system: a DHT22 sensor tracks vaccine storage temperature via Arduino/ESP32, shows readings on an LCD, and records SHA-256-hashed data to Supabase for display in a web application.",
    sysline: [
      { text: { label: "DHT22 sensor" } },
      { text: { label: "Arduino / ESP32" } },
      { text: { label: "LCD" } },
      { text: { label: "SHA-256 hashing" } },
      { text: { label: "Supabase" } },
      { text: { label: "Web app" } },
    ],
    contrib:
      "Complete full-stack software implementation, including hardware/software integration.",
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
    links: [{ label: "View repository", href: "https://github.com/abivan100-stack/vault" }],
  },
  {
    slug: "volt-ledger",
    name: "Volt Ledger",
    event: "Shark Tank Challenge, Velammal",
    result: "Participated, 2026",
    resultTone: "muted",
    description:
      "A transparent, tamper-evident ledger for peer-to-peer rooftop solar energy trading. Neighbours trade surplus at a community rate, and every trade is sealed into a SHA-256 hash chain computed in the browser. All data simulated.",
    contrib: "Frontend development and the competition pitch.",
    techline: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "SHA-256", tip: "Cryptographic hash for tamper-evident records" },
    ],
    links: [
      { label: "View repository", href: "https://github.com/abivan100-stack/volt-ledger" },
      { label: "Open live site", href: "https://volt-ledger.vercel.app" },
    ],
  },
  {
    slug: "epl-predictor",
    name: "EPL Predictor",
    event: "Personal project",
    result: "Work in progress",
    resultTone: "muted",
    description:
      "A personal project using historical English football data and XGBoost to explore match-outcome prediction. An exercise in working with real datasets, testing simple prediction ideas, and learning what works (and what doesn’t).",
    techline: [
      { label: "Python" },
      { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      { label: "Historical match data" },
    ],
    links: [{ label: "View repository", href: "https://github.com/Raghav2012Code/epl-predictor" }],
  },
  {
    slug: "urbania",
    name: "Urbania",
    event: "Personal project",
    result: "Experimental",
    resultTone: "muted",
    description:
      "A personal experimental project: a 2D city simulation I’m building to explore how simulated systems behave.",
    links: [{ label: "View repository", href: "https://github.com/Raghav2012Code/urbania" }],
  },
];

export interface StackRow {
  label: string;
  items: string[];
}

export const STACK_ROWS: StackRow[] = [
  {
    label: "Robotics and hardware",
    items: [
      "Arduino",
      "ESP32",
      "DHT22",
      "IR sensors",
      "Laser sensors",
      "Servos",
      "Solenoids",
      "LCDs",
      "Sensors",
      "Actuators",
    ],
  },
  { label: "Web", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { label: "Backend and data", items: ["Supabase", "REST APIs", "SHA-256"] },
  { label: "Programming", items: ["Python"] },
  { label: "Tools", items: ["Git", "GitHub", "Claude Code", "OpenAI Codex"] },
];

export interface RoboItem {
  title: string;
  text: string;
}

export const ROBOTICS_ITEMS: RoboItem[] = [
  { title: "ESP32 and Arduino", text: "Microcontrollers at the centre of every hardware build." },
  { title: "Sensors", text: "IR, laser, temperature: reading the physical world." },
  { title: "Actuators", text: "Servos, solenoids, displays: acting on the physical world." },
  { title: "Electronics", text: "Circuits, wiring, and making it all actually work together." },
  {
    title: "Hardware and software integration",
    text: "Connecting physical hardware to software. That's the whole point.",
  },
  { title: "Physical computing", text: "Building things that interact with the physical world." },
];

export interface TimelineItem {
  year: string;
  title: string;
  place: string;
  project?: string;
  result: string;
  minor?: boolean;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "Robowunder International Robotics Championship",
    place: "Malaysia",
    project: "Door Hinge Safety System",
    result: "Overall Winner",
  },
  {
    year: "2026",
    title: "Zonal Robotics Championship",
    place: "SRM Chennai",
    project: "CRASH",
    result: "Qualified for NRC Technoxian",
  },
  {
    year: "2026",
    title: "PEC Hacks 4.0",
    place: "Panimalar Engineering College, High School Track",
    project: "Vaccine Cold Chain Ledger",
    result: "Consolation Prize",
  },
  {
    year: "2026",
    title: "Shark Tank Challenge",
    place: "Velammal",
    project: "Volt Ledger",
    result: "Participated",
    minor: true,
  },
  {
    year: "2025",
    title: "Technoviz 2025",
    place: "SRM Ramapuram, School Category",
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
