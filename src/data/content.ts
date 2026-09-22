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

export const GITHUB_URL = "https://github.com/Raghav2012Code";
export const GITHUB_AVATAR_URL = "https://github.com/Raghav2012Code.png";
export const CONTACT_EMAIL = "raghavgamerz670@gmail.com";

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

export interface AboutFact {
  term: string;
  detail: string;
}

export const ABOUT_FACTS: AboutFact[] = [
  { term: "Age", detail: "14" },
  { term: "School", detail: "Velammal Academy Nolambur" },
  { term: "City", detail: "Chennai, India" },
  { term: "Into", detail: "Robotics · Hardware · Web" },
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
  sysline?: SignalStep[];
  syslineSmall?: boolean;
  contrib?: string;
  techline?: TechMention[];
  link?: ProjectLink;
}

export const PROJECTS: Project[] = [
  {
    name: "Door Hinge Safety System",
    badge: "Featured · Overall Winner · Gold",
    badgeAccent: true,
    featured: true,
    meta: "Robowunder International Robotics Championship 2026 · Malaysia",
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
    name: "Road Accident Safety Hub",
    badge: "Zonal Robotics Championship · SRM Chennai",
    result: "Qualified for NRC Technoxian through the zonal championship",
    description:
      "A robotics competition project that uses public accident data and XGBoost to predict where accidents may occur. It looks at parameters like time, day, junction information, and other relevant public-data parameters.",
    contrib:
      "Vibe-coding/software implementation and backend integration. The team handled frontend and testing.",
    techline: [
      { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      { label: "Python" },
      { label: "Public accident data" },
    ],
  },
  {
    name: "Vaccine Cold Chain Ledger",
    badge: "PEC Hacks 4.0 · Panimalar Engineering College · High School Track",
    result: "Consolation Prize",
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
    syslineSmall: true,
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
  },
  {
    name: "EPL Predictor",
    badge: "Personal project",
    result: "Work in progress · personal exploration",
    resultMuted: true,
    description:
      "A personal project using historical English football data and XGBoost to explore match-outcome prediction. An exercise in working with real datasets, testing simple prediction ideas, and learning what works (and what doesn’t).",
    techline: [
      { label: "Python" },
      { label: "XGBoost", tip: "Gradient-boosted trees library for tabular data" },
      { label: "Historical match data" },
    ],
    link: { label: "View on GitHub →", href: GITHUB_URL },
  },
  {
    name: "Urbania",
    badge: "Personal · Experimental",
    result: "Experimental · personal project",
    resultMuted: true,
    description:
      "A personal experimental project: a 2D city simulation I’m building to explore how simulated systems behave.",
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
  { title: "Sensors", text: "IR, laser, temperature — reading the physical world." },
  { title: "Actuators", text: "Servos, solenoids, displays — acting on the physical world." },
  { title: "Electronics", text: "Circuits, wiring, and making it all actually work together." },
  {
    title: "Hardware / software integration",
    text: "Connecting physical hardware to software — the whole point.",
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
    sub: "SRM Chennai · Road Accident Safety Hub",
    result: "Qualified for NRC Technoxian",
  },
  {
    year: "2026",
    title: "PEC Hacks 4.0",
    sub: "Panimalar Engineering College · High School Track · Vaccine Cold Chain Ledger",
    result: "Consolation Prize",
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
    title: "Hardware/software integration",
    sub: "Connecting code to the physical world.",
  },
  {
    title: "Web development",
    sub: "React, TypeScript — including this portfolio.",
  },
  {
    title: "AI-assisted development",
    sub: "Claude Code and OpenAI Codex in the loop.",
  },
  {
    title: "Experimental projects",
    sub: "Small builds and new ideas.",
  },
];
