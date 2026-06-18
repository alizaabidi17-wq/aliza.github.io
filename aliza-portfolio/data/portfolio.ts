import {
  BadgeCheck,
  BarChart3,
  Binary,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Database,
  FileSearch,
  Globe2,
  HeartHandshake,
  LineChart,
  Network,
  Presentation,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";

export const rotatingPhrases = [
  "Product Strategy",
  "Fintech",
  "AI + Automation",
  "Consulting",
  "Nonprofit Systems",
  "Data-Driven Growth"
];

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Cases", href: "#cases" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const timeline = [
  {
    role: "Strategy Intern",
    organization: "CharityStack",
    dates: "2026",
    problem: "Nonprofits needed stronger donor engagement and clearer donation workflows inside a fintech platform.",
    tools: ["Product strategy", "Revenue forecasting", "UX analysis", "Donor engagement"],
    impact: "Contributed to product strategy and a 35% usability improvement."
  },
  {
    role: "HR Lead",
    organization: "BCS Free Health Clinic",
    dates: "2025 - Present",
    problem: "Volunteer tracking and onboarding needed more consistency across scheduling, processing, and records.",
    tools: ["Onboarding systems", "Scheduling", "Data organization", "Operations"],
    impact: "Helped transfer 500+ volunteer records into an automated platform and onboarded 30+ new members."
  },
  {
    role: "Research Assistant",
    organization: "Texas A&M Department of Educational Psychology",
    dates: "2025",
    problem: "Research workflows needed cleaner data handling and less repetitive manual outreach.",
    tools: ["Python", "Data cleaning", "Coding", "Automation"],
    impact: "Automated outreach workflows and improved efficiency by 20%."
  },
  {
    role: "Web Development Intern",
    organization: "INFOQUEST Solutions",
    dates: "2024",
    problem: "E-learning course uploads were inefficient, inconsistent, and difficult to scale.",
    tools: ["HTML", "SEO", "Content strategy", "Workflow redesign"],
    impact: "Reduced course upload effort by 40% through redesigned workflows."
  },
  {
    role: "Strategy Consultant and Team Lead",
    organization: "TASK Consulting",
    dates: "2024 - Present",
    problem: "Clients needed market-backed recommendations and financial analysis they could actually use.",
    tools: ["Market research", "Financial forecasting", "Client communication", "Team leadership"],
    impact: "Led a 7-member team and delivered client-ready growth recommendations on schedule."
  }
];

export const impactMetrics = [
  { value: 35, suffix: "%", label: "Donation tool usability improvement", source: "CharityStack", icon: LineChart },
  { value: 500, suffix: "+", label: "Volunteer records transferred", source: "BCS Free Health Clinic", icon: Database },
  { value: 20, suffix: "%", label: "Research workflow efficiency lift", source: "Texas A&M Research", icon: Binary },
  { value: 40, suffix: "%", label: "Course upload effort reduction", source: "INFOQUEST", icon: Workflow },
  { value: 200, suffix: "+", label: "Event attendees reached", source: "Aggie Amal", icon: UsersRound },
  { value: 1, suffix: "st", label: "Place out of 40+ teams", source: "A&M Case Competition", icon: BadgeCheck }
];

export const caseStudies = [
  {
    key: "charitystack",
    title: "CharityStack",
    subtitle: "Nonprofit Fintech Growth Strategy",
    problem: "Nonprofits need better donor engagement and donation workflows.",
    work: "Analyzed donor behavior, fundraising workflows, platform usage, and UX opportunities.",
    impact: "Helped improve product strategy and contributed to a 35% usability improvement.",
    tags: ["Fintech", "Product Strategy", "Revenue Forecasting", "UX"],
    visual: "dashboard"
  },
  {
    key: "clinic",
    title: "BCS Free Health Clinic",
    subtitle: "Volunteer Onboarding System",
    problem: "Manual volunteer tracking and inconsistent onboarding slowed operations.",
    work: "Supported scheduling, processing, onboarding, and transfer of 500+ records.",
    impact: "Created more consistent intake and better data organization.",
    tags: ["Operations", "Nonprofit", "Data Systems", "Onboarding"],
    visual: "workflow"
  },
  {
    key: "infoquest",
    title: "INFOQUEST",
    subtitle: "E-Learning Platform Redesign",
    problem: "Course uploads were inefficient and inconsistent.",
    work: "Redesigned content structure, user flow, and course workflows.",
    impact: "Reduced course upload effort by 40%.",
    tags: ["Web", "SEO", "Process Design", "Content Strategy"],
    visual: "process"
  },
  {
    key: "task",
    title: "TASK Consulting",
    subtitle: "Client Strategy and Forecasting",
    problem: "Local businesses needed actionable growth recommendations.",
    work: "Led financial forecasting, market research, team management, and client communication.",
    impact: "Delivered client-ready recommendations on schedule.",
    tags: ["Consulting", "Forecasting", "Market Research", "Leadership"],
    visual: "matrix"
  }
];

export const skillGroups = [
  {
    title: "Strategy",
    icon: Presentation,
    color: "electric",
    skills: [
      ["Market research", "Used in consulting and case work to translate market signals into strategic recommendations."],
      ["Revenue forecasting", "Applied to fintech and client strategy work where growth needed to be modeled clearly."],
      ["Product strategy", "Used at CharityStack to connect donor needs, platform behavior, and UX opportunities."],
      ["Client recommendations", "Delivered in TASK Consulting through analysis, synthesis, and client-facing communication."]
    ]
  },
  {
    title: "Technical",
    icon: Code2,
    color: "emerald",
    skills: [
      ["Python", "Used for data cleaning, coding, and workflow automation in research settings."],
      ["SQL", "Part of her MIS toolkit for structured data analysis and systems thinking."],
      ["HTML", "Used during INFOQUEST web development and e-learning workflow redesign."],
      ["Java, C#, AWS Cloud Practitioner", "Technical foundation across programming, cloud concepts, and enterprise systems."]
    ]
  },
  {
    title: "Operations",
    icon: Workflow,
    color: "gold",
    skills: [
      ["Workflow automation", "Used to reduce manual work and make operational processes easier to repeat."],
      ["Onboarding systems", "Supported volunteer scheduling, intake, processing, and records transfer at BCS Free Health Clinic."],
      ["Data organization", "Central to volunteer records, research cleaning, and process improvement work."],
      ["Process improvement", "Seen across INFOQUEST, research automation, and nonprofit operations."]
    ]
  },
  {
    title: "Creative + Leadership",
    icon: Sparkles,
    color: "electric",
    skills: [
      ["Brand strategy", "Built Aggie Amal's brand and content engine around mentorship, events, and community trust."],
      ["Event planning", "Led programs and career fairs with 200+ attendees."],
      ["Team leadership", "Led student organizations and a 7-member consulting team."],
      ["Content engine", "Created systems that averaged 4K+ engagements per post for Aggie Amal."]
    ]
  },
  {
    title: "Languages",
    icon: Globe2,
    color: "emerald",
    skills: [
      ["English", "Professional communication across client, research, and leadership contexts."],
      ["Hindi, Urdu, Arabic, Punjabi", "Multilingual background useful for community work and cross-cultural collaboration."],
      ["Spanish", "Additional language capability for broader communication reach."]
    ]
  }
];

export const leadership = [
  {
    title: "Aggie Amal",
    label: "President and Co-Founder",
    icon: HeartHandshake,
    story:
      "Aliza founded and led a community built around mentorship, career readiness, and student belonging. She shaped the organization like a system: programs, career fairs, brand voice, content rhythm, and member experience working together.",
    proof: "200+ event attendees and 4K+ average engagements per post."
  },
  {
    title: "TASK Consulting",
    label: "Strategy Consultant and Team Lead",
    icon: Building2,
    story:
      "As a team lead, she translated ambiguous client needs into research plans, forecasts, and practical recommendations while keeping a 7-member team aligned through delivery.",
    proof: "Client-facing growth recommendations delivered on schedule."
  },
  {
    title: "Alvarez & Marsal Case Competition",
    label: "1st Place Winner",
    icon: FileSearch,
    story:
      "She competed through global market entry strategy, financial analysis, and market analysis under pressure, turning a complex business problem into a clear winning recommendation.",
    proof: "1st out of 40+ teams and 100+ participants."
  }
];

export const resumeHighlights = [
  { tag: "Strategy", title: "CharityStack product strategy", detail: "Revenue forecasting, donor engagement analysis, and UX improvement in nonprofit fintech." },
  { tag: "Technical", title: "Research automation", detail: "Python-supported data cleaning, coding, and outreach workflows with a 20% efficiency improvement." },
  { tag: "Leadership", title: "Aggie Amal founder", detail: "Built mentorship programs, career events, and a content engine with strong engagement." },
  { tag: "Consulting", title: "TASK team lead", detail: "Market research, financial forecasting, client communication, and team delivery." },
  { tag: "AI/Automation", title: "Business AI minor", detail: "Academic focus on AI-enabled business systems and automation opportunities." },
  { tag: "Nonprofit", title: "Clinic operations", detail: "Volunteer scheduling, onboarding, and transfer of 500+ records into an automated platform." }
];

export const dashboardLinks = [
  { label: "Strategy", icon: BarChart3 },
  { label: "Technology", icon: Cloud },
  { label: "AI", icon: BrainCircuit },
  { label: "Consulting", icon: ShieldCheck },
  { label: "Nonprofit Impact", icon: Network }
];
