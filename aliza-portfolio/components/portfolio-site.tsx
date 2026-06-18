"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Command,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Search,
  Send,
  Sun
} from "lucide-react";
import {
  caseStudies,
  dashboardLinks,
  impactMetrics,
  leadership,
  navItems,
  resumeHighlights,
  rotatingPhrases,
  skillGroups,
  timeline
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button, Pill, SectionHeader } from "@/components/ui";
import { useTheme } from "@/components/theme-provider";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export function PortfolioSite() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink transition-colors duration-500 dark:bg-ink dark:text-white">
      <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
      <AmbientBackground />
      <Navigation />
      <Hero />
      <ExperienceTimeline />
      <ImpactDashboard />
      <CaseStudies />
      <CapabilityMap />
      <Leadership />
      <ResumeViewer />
      <Contact />
    </main>
  );
}

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-5 h-16 w-16 rounded-2xl border border-electric/40 bg-white/8 shadow-glow"
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.08, 1] }}
          transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="font-display text-sm uppercase tracking-[0.35em] text-electric">Where strategy meets systems</p>
      </div>
    </motion.div>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-signal-grid bg-[size:42px_42px] opacity-45 dark:opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(76,201,255,.24),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(66,240,161,.18),transparent_30%),radial-gradient(circle_at_40%_90%,rgba(247,198,106,.16),transparent_34%)]" />
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-electric/60"
          style={{ left: `${(index * 23) % 97}%`, top: `${(index * 31) % 89}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.25, 0.85, 0.25] }}
          transition={{ duration: 4 + (index % 5), repeat: Infinity, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-ink/70 px-4 py-3 shadow-glow backdrop-blur-xl dark:bg-ink/70 light-nav">
          <a href="#top" className="flex items-center gap-3" aria-label="Aliza Abidi home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-electric font-display text-sm font-bold text-ink">AA</span>
            <span className="hidden font-display text-sm font-semibold text-white sm:inline light-title">Aliza Abidi</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-steel transition hover:bg-white/8 hover:text-white light-muted">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open command menu">
              <Command className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle light and dark mode">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </header>
      <CommandMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const items = useMemo(
    () =>
      navItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).concat(
        query ? [] : [{ label: "Email Aliza", href: "mailto:Aliza.abidi17@gmail.com" }]
      ),
    [query]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] bg-ink/70 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="mx-auto mt-24 max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-ink/95 shadow-glow"
            initial={{ y: -18, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -18, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-electric" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to a section..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-steel"
              />
              <kbd className="rounded border border-white/10 px-2 py-1 text-[10px] text-steel">Esc</kbd>
            </div>
            <div className="p-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-steel" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setPhraseIndex((index) => (index + 1) % rotatingPhrases.length), 1800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.7 }}>
          <Pill className="mb-6 border-electric/30 text-electric">Where strategy meets systems</Pill>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white dark:text-white sm:text-7xl lg:text-8xl light-title">
            Aliza Abidi
          </h1>
          <p className="mt-5 max-w-2xl font-display text-2xl font-medium text-white/90 dark:text-white/90 sm:text-3xl light-title">
            MIS student, strategy builder, and technology operator.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-steel dark:text-steel light-muted">
            I build systems, analyze markets, and turn messy workflows into scalable products and processes.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-steel light-muted">
            <MapPin className="h-4 w-4 text-emerald" />
            Dallas, Texas · Texas A&M MIS · Business AI + Cybersecurity
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#work">View Work <ArrowDown className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/resume/Aliza-Abidi-Resume.pdf" download>Download Resume <Download className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact">Contact Me <Mail className="h-4 w-4" /></a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-12 bg-electric" />
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingPhrases[phraseIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-display text-sm uppercase tracking-[0.28em] text-electric"
              >
                {rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
        <HeroSystemVisual />
      </div>
    </section>
  );
}

function HeroSystemVisual() {
  return (
    <motion.div
      className="relative min-h-[520px] rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-glow backdrop-blur-xl light-panel"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="absolute inset-4 rounded-[1.5rem] border border-electric/15 bg-ink/55 dark:bg-ink/55 light-visual" />
      <div className="relative grid h-full min-h-[488px] grid-rows-[auto_1fr_auto] gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-steel">Impact OS</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-white light-title">Strategy system map</h3>
          </div>
          <Pill>Live signals</Pill>
        </div>
        <NetworkGraph />
        <div className="grid grid-cols-3 gap-3">
          {[
            ["35%", "Usability"],
            ["500+", "Records"],
            ["40%", "Upload effort"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-4 light-panel">
              <p className="font-display text-2xl font-semibold text-white light-title">{value}</p>
              <p className="mt-1 text-xs text-steel light-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function NetworkGraph() {
  return (
    <div className="relative grid place-items-center overflow-hidden rounded-3xl border border-white/10 bg-signal-grid bg-[size:34px_34px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 340" aria-hidden>
        <motion.path d="M90 170 C170 70 350 80 430 170 C340 260 180 250 90 170Z" fill="none" stroke="rgba(76,201,255,.45)" strokeWidth="1.5" animate={{ pathLength: [0.2, 1, 0.2] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.path d="M260 50 L430 170 L260 290 L90 170 Z" fill="none" stroke="rgba(66,240,161,.38)" strokeWidth="1.5" animate={{ pathLength: [1, 0.35, 1] }} transition={{ duration: 6, repeat: Infinity }} />
      </svg>
      <div className="relative h-[320px] w-full max-w-[520px]">
        {dashboardLinks.map((item, index) => {
          const positions = [
            "left-[39%] top-[39%]",
            "left-[8%] top-[43%]",
            "right-[8%] top-[43%]",
            "left-[22%] top-[10%]",
            "right-[18%] bottom-[12%]"
          ];
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className={cn("absolute flex items-center gap-2 rounded-full border border-white/12 bg-ink/75 px-4 py-3 text-sm text-white shadow-glow backdrop-blur light-node", positions[index])}
              animate={{ y: [0, index % 2 ? 10 : -10, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity }}
            >
              <Icon className="h-4 w-4 text-electric" />
              {item.label}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  return (
    <section id="work" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Experience Timeline" title="From business problem to operating system">
          Each role shows the same pattern: clarify the problem, map the system, then improve the workflow with measurable results.
        </SectionHeader>
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-3">
            {timeline.map((item, index) => (
              <button
                key={`${item.organization}-${item.role}`}
                onClick={() => setActive(index)}
                className={cn(
                  "w-full rounded-2xl border p-4 text-left transition",
                  active === index ? "border-electric/60 bg-electric/10 shadow-glow" : "border-white/10 bg-white/6 hover:bg-white/10 light-panel"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-white light-title">{item.role}</p>
                    <p className="text-sm text-steel light-muted">{item.organization}</p>
                  </div>
                  <span className="text-xs text-electric">{item.dates}</span>
                </div>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-emerald backdrop-blur-xl light-panel"
            >
              <Pill>{timeline[active].dates}</Pill>
              <h3 className="mt-5 font-display text-3xl font-semibold text-white light-title">{timeline[active].role}</h3>
              <p className="mt-1 text-lg text-electric">{timeline[active].organization}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <InfoBlock label="Problem solved" text={timeline[active].problem} />
                <InfoBlock label="Tools used" text={timeline[active].tools.join(" · ")} />
                <InfoBlock label="Impact" text={timeline[active].impact} />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink/30 p-4 light-panel">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{label}</p>
      <p className="mt-3 text-sm leading-6 text-steel light-muted">{text}</p>
    </div>
  );
}

function ImpactDashboard() {
  return (
    <section id="impact" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Impact Dashboard" title="Metrics with context, not decoration">
          A compact dashboard of quantified outcomes across fintech, nonprofits, research, web systems, leadership, and competition work.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {impactMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: (typeof impactMetrics)[number]; index: number }) {
  const Icon = metric.icon;
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-electric/50 hover:shadow-glow light-panel"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/15 text-electric">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-steel transition group-hover:text-electric" />
      </div>
      <p className="mt-8 font-display text-5xl font-semibold text-white light-title">
        <Counter to={metric.value} />
        {metric.suffix}
      </p>
      <p className="mt-3 text-lg font-medium text-white/90 light-title">{metric.label}</p>
      <p className="mt-2 text-sm text-steel light-muted">{metric.source}</p>
    </motion.article>
  );
}

function Counter({ to }: { to: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 44;
    const timer = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((to * frame) / total));
      if (frame >= total) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}

function CaseStudies() {
  return (
    <section id="cases" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Case Studies" title="Portfolio work shown like boardroom-ready narratives">
          Each case is framed as a business problem, systems work, measured impact, and a custom visual model.
        </SectionHeader>
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.key}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl light-panel lg:grid-cols-[.95fr_1.05fr]"
            >
              <div className="p-2 sm:p-5">
                <Pill>Case {index + 1}</Pill>
                <h3 className="mt-5 font-display text-3xl font-semibold text-white light-title">{study.title}</h3>
                <p className="mt-2 text-xl text-electric">{study.subtitle}</p>
                <div className="mt-8 space-y-4">
                  <InfoBlock label="Problem" text={study.problem} />
                  <InfoBlock label="Work" text={study.work} />
                  <InfoBlock label="Impact" text={study.impact} />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
                </div>
              </div>
              <CaseVisual type={study.visual} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseVisual({ type }: { type: string }) {
  if (type === "dashboard") return <MockDashboard />;
  if (type === "workflow") return <WorkflowDiagram />;
  if (type === "process") return <ProcessMap />;
  return <StrategyMatrix />;
}

function MockDashboard() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-ink/60 p-5 light-visual">
      <div className="flex items-center justify-between">
        <p className="font-display text-lg text-white light-title">Donor engagement cockpit</p>
        <Pill>Fintech UX</Pill>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {["Retention", "Gift Flow", "Forecast"].map((label, index) => (
          <div key={label} className="rounded-2xl bg-white/8 p-4">
            <p className="text-xs text-steel">{label}</p>
            <p className="mt-2 font-display text-2xl text-white">{[82, 35, 94][index]}{index === 1 ? "%" : ""}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex h-48 items-end gap-3">
        {[42, 76, 55, 92, 63, 88, 70, 96].map((height, index) => (
          <motion.div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-electric to-emerald" initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} />
        ))}
      </div>
    </div>
  );
}

function WorkflowDiagram() {
  const steps = ["Applicant", "Schedule", "Process", "Onboard", "Records"];
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-ink/60 p-5 light-visual">
      <p className="font-display text-lg text-white light-title">Volunteer onboarding system</p>
      <div className="mt-8 grid gap-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald/15 text-sm font-bold text-emerald">{index + 1}</span>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/8 p-4 text-white">{step}</div>
            {index < steps.length - 1 && <ChevronRight className="hidden h-5 w-5 text-electric sm:block" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessMap() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-ink/60 p-5 light-visual">
      <p className="font-display text-lg text-white light-title">Before and after process map</p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {[
          ["Before", "Manual uploads", "Inconsistent course structure", "Repeated content edits"],
          ["After", "Standardized flow", "Cleaner content architecture", "40% lower upload effort"]
        ].map(([title, ...rows]) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/8 p-4">
            <p className="mb-4 font-display text-xl text-white">{title}</p>
            {rows.map((row) => (
              <p key={row} className="mb-3 flex items-center gap-2 text-sm text-steel">
                <Check className="h-4 w-4 text-emerald" /> {row}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyMatrix() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-ink/60 p-5 light-visual">
      <p className="font-display text-lg text-white light-title">Client strategy matrix</p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {["Market Size", "Revenue Model", "Customer Fit", "Execution Risk"].map((item, index) => (
          <motion.div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-5" whileHover={{ scale: 1.03 }}>
            <p className="text-sm text-steel">{item}</p>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <motion.div className="h-2 rounded-full bg-gold" initial={{ width: 0 }} whileInView={{ width: `${[78, 66, 84, 48][index]}%` }} viewport={{ once: true }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CapabilityMap() {
  const [open, setOpen] = useState("Strategy");
  const active = skillGroups.find((group) => group.title === open) ?? skillGroups[0];
  const ActiveIcon = active.icon;
  return (
    <section id="skills" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills System" title="A capability map for strategy, systems, and leadership">
          Skills are grouped by how Aliza uses them: to understand markets, build technical fluency, improve operations, and lead communities.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <button
                  key={group.title}
                  onClick={() => setOpen(group.title)}
                  className={cn("flex items-center justify-between rounded-2xl border p-4 text-left transition", open === group.title ? "border-electric/60 bg-electric/10" : "border-white/10 bg-white/6 hover:bg-white/10 light-panel")}
                >
                  <span className="flex items-center gap-3 font-display text-lg text-white light-title">
                    <Icon className="h-5 w-5 text-electric" />
                    {group.title}
                  </span>
                  <ChevronRight className="h-4 w-4 text-steel" />
                </button>
              );
            })}
          </div>
          <motion.div key={active.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl light-panel">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-electric/15 text-electric">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-3xl font-semibold text-white light-title">{active.title}</h3>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {active.skills.map(([skill, detail]) => (
                <details key={skill} className="group rounded-2xl border border-white/10 bg-ink/30 p-4 open:border-electric/40 light-panel">
                  <summary className="cursor-pointer list-none font-display text-lg text-white light-title">{skill}</summary>
                  <p className="mt-3 text-sm leading-6 text-steel light-muted">{detail}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Leadership" title="Building Communities and Systems">
          Aliza leads by creating structure: teams, programs, content engines, recommendations, and repeatable ways for people to move.
        </SectionHeader>
        <div className="grid gap-5 lg:grid-cols-3">
          {leadership.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} whileHover={{ y: -8 }} className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl light-panel">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald/15 text-emerald">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold">{item.label}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white light-title">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-steel light-muted">{item.story}</p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm font-semibold text-white light-title">{item.proof}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResumeViewer() {
  const filters = ["All", "Strategy", "Technical", "Leadership", "Consulting", "AI/Automation", "Nonprofit"];
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? resumeHighlights : resumeHighlights.filter((item) => item.tag === filter);
  return (
    <section id="resume" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Interactive Resume" title="Filter the signal by recruiter lens">
          Strategy, technical, leadership, consulting, AI automation, and nonprofit highlights in one sleek resume interface.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl light-panel">
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={cn("rounded-full border px-4 py-2 text-sm transition", filter === item ? "border-electric bg-electric text-ink" : "border-white/10 bg-white/6 text-steel hover:text-white")}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map((item) => (
                <motion.article key={item.title} layout className="rounded-2xl border border-white/10 bg-ink/30 p-4 light-panel">
                  <Pill>{item.tag}</Pill>
                  <h3 className="mt-3 font-display text-xl text-white light-title">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel light-muted">{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl light-panel">
            <div className="aspect-[8.5/11] rounded-2xl border border-white/12 bg-paper p-6 text-ink shadow-2xl">
              <p className="font-display text-3xl font-semibold">Aliza Abidi</p>
              <p className="mt-2 text-sm text-slate-600">Texas A&M MIS · Business AI · Cybersecurity</p>
              <div className="mt-6 h-2 rounded bg-slate-200"><div className="h-2 w-3/4 rounded bg-electric" /></div>
              {["Education", "Experience", "Leadership", "Skills"].map((line, index) => (
                <div key={line} className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{line}</p>
                  <div className="mt-3 space-y-2">
                    <div className={cn("h-2 rounded bg-slate-200", index === 0 ? "w-11/12" : "w-full")} />
                    <div className="h-2 w-4/5 rounded bg-slate-200" />
                    <div className="h-2 w-2/3 rounded bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-5 w-full">
              <a href="/resume/Aliza-Abidi-Resume.pdf" download>Download Resume PDF <Download className="h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl light-panel lg:grid-cols-[.9fr_1.1fr]">
        <div className="p-2 sm:p-6">
          <Pill>Contact</Pill>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white light-title">Let&apos;s build something strategic, technical, and useful.</h2>
          <div className="mt-8 space-y-4 text-steel light-muted">
            <a className="flex items-center gap-3 transition hover:text-electric" href="mailto:Aliza.abidi17@gmail.com"><Mail className="h-5 w-5" /> Aliza.abidi17@gmail.com</a>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald" /> Dallas, Texas / College Station, Texas</p>
            <a className="flex items-center gap-3 transition hover:text-electric" href="#" aria-label="LinkedIn placeholder"><Linkedin className="h-5 w-5" /> LinkedIn placeholder</a>
            <a className="flex items-center gap-3 transition hover:text-electric" href="#" aria-label="GitHub placeholder"><Github className="h-5 w-5" /> GitHub placeholder</a>
          </div>
        </div>
        <form className="rounded-[1.5rem] border border-white/10 bg-ink/40 p-5 light-panel" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-steel">Name<input className="mt-2 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none focus:border-electric light-input" /></label>
            <label className="text-sm text-steel">Email<input type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none focus:border-electric light-input" /></label>
          </div>
          <label className="mt-4 block text-sm text-steel">Message<textarea rows={7} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none focus:border-electric light-input" /></label>
          <Button type="submit" className="mt-5 w-full">Send Message <Send className="h-4 w-4" /></Button>
          <p className="mt-3 text-xs text-steel">Form is a front-end placeholder ready to connect to Formspree, Resend, or a Next.js route handler.</p>
        </form>
      </div>
    </section>
  );
}
