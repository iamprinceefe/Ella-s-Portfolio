import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eli — Creative Director, Content Strategist & Visual Storyteller" },
      {
        name: "description",
        content:
          "Portfolio of a Creative Director and Visual Storyteller building brands, campaigns, and short-form content that drive measurable growth.",
      },
      { property: "og:title", content: "Eli — Creative Director & Visual Storyteller" },
      {
        property: "og:description",
        content:
          "Brand identity, content strategy, and storytelling systems that move audiences.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <a href="#top" className="font-display text-xl text-cream tracking-tight">
        Eli<span className="text-accent-amber">.</span>
      </a>
      <div className="hidden md:flex items-center gap-10 text-sm text-cream/80 uppercase tracking-[0.2em]">
        <a href="#about" className="hover:text-cream transition-colors">About</a>
        <a href="#work" className="hover:text-cream transition-colors">Work</a>
        <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden bg-olive-deep">
      {/* Background image, weighted right */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt="Creative Director portrait against an olive backdrop"
          className="h-full w-full object-cover object-[70%_center] md:object-[75%_center]"
        />
        {/* Olive overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--olive-deep) 88%, transparent) 0%, color-mix(in oklab, var(--olive-deep) 60%, transparent) 45%, color-mix(in oklab, var(--olive-deep) 25%, transparent) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.25)_100%)]" />
      </div>

      <Nav />

      {/* Left text */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12">
        <div className="max-w-xl animate-fade-up">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent-amber">
            Portfolio · 2026
          </p>
          <p className="text-cream text-lg md:text-xl leading-relaxed font-light">
            I build brands and digital experiences from the ground up — transforming vision
            into compelling campaigns, short-form content, and storytelling systems that
            motivate audiences and promote measurable growth.
          </p>
          <a
            href="#about"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent-amber/80 px-7 py-3 text-sm uppercase tracking-[0.2em] text-accent-amber transition-all duration-300 hover:bg-accent-amber hover:text-olive-deep hover:gap-5"
          >
            Learn More
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-20 overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {["Creative Director", "Content Strategist", "Visual Storyteller"].map((word, j) => (
                <span
                  key={`${i}-${j}`}
                  className="font-display text-[16vw] md:text-[12vw] leading-[0.95] font-semibold text-cream/15 px-8"
                >
                  {word}
                  <span className="text-accent-amber/40"> · </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 right-6 md:right-12 z-20 hidden md:flex items-center gap-3 text-cream/60 text-xs uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <span className="h-px w-10 bg-cream/40" />
      </div>
    </section>
  );
}

function About() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="bg-background py-28 md:py-40">
      <div
        ref={ref}
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12 transition-all duration-1000 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="md:col-span-4">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (01) About
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-foreground">
            About<br />
            <span className="italic text-olive">Me</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
          <p>
            I'm a Creative Director and Visual Storyteller focused on building impactful
            brand identities and content systems that drive real connection. I specialize in
            turning ideas into compelling narratives — combining strategy with creativity to
            help brands stand out and grow.
          </p>
          <p>
            Beyond branding, I also work as a film director, using visual storytelling to
            create emotionally engaging and visually striking narratives. Whether shaping a
            brand's voice or directing on screen, I focus on delivering experiences that
            resonate and leave a lasting impression.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <p className="font-display text-3xl text-foreground">05+</p>
              <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">
                Years of craft
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-foreground">20+</p>
              <p className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">
                Brands shaped
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  outcomes: string[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "Celebration Church International — Hamilton",
    category: "Brand · Content Strategy",
    description:
      "Led the creation of a digital presence from the ground up — transforming a non-existent social footprint into a growing online community. Developed a content strategy and visual identity that captured the spirit of the church, driving engagement, increasing visibility, and building a connected audience.",
    outcomes: [
      "Grew audience to 1.9K followers",
      "Created viral short-form content",
      "Built a consistent, engaging brand presence",
    ],
  },
  {
    index: "02",
    title: "JAPA",
    category: "Lifestyle · Editorial Content",
    description:
      "Produced and edited lifestyle content reflecting the real experiences of living abroad — focused on storytelling that is both authentic and engaging. Helped shape a strong visual identity while creating relatable content that resonates with a global diaspora audience.",
    outcomes: [
      "Strengthened brand identity",
      "Increased audience engagement",
      "Delivered consistent, high-quality storytelling",
    ],
  },
];

function ProjectCard({ project, image }: { project: Project; image: string }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 py-16 md:py-24 border-t border-border transition-all duration-1000 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="md:col-span-5 relative overflow-hidden rounded-md bg-muted">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 left-4 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink">
          {project.index}
        </div>
      </div>

      <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.3em] text-olive mb-3">
          {project.category}
        </p>
        <h3 className="font-display text-3xl md:text-4xl leading-tight text-foreground mb-5">
          {project.title}
        </h3>
        <p className="text-foreground/75 text-base md:text-lg leading-relaxed font-light">
          {project.description}
        </p>
        <ul className="mt-8 space-y-2">
          {project.outcomes.map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 text-sm text-foreground/80"
            >
              <span className="mt-2 h-1 w-4 shrink-0 bg-accent-amber" />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-end justify-between pb-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              (02) Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">
              Recent <span className="italic text-olive">projects</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-muted-foreground">
            A selection of brand, content, and storytelling work — built to move audiences.
          </p>
        </div>
        <ProjectCard project={projects[0]} image={heroPortrait} />
        <ProjectCard project={projects[1]} image={heroPortrait} />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-olive-deep text-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent-amber">
          (03) Let's Build
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Have a story worth telling? <span className="italic text-cream/70">Let's create it together.</span>
        </h2>
        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 rounded-full bg-accent-amber px-8 py-4 text-sm uppercase tracking-[0.2em] text-olive-deep transition-all duration-300 hover:gap-5"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-cream/80 hover:text-cream underline-offset-4 hover:underline transition"
          >
            hello@example.com
          </a>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between gap-6 border-t border-cream/15 pt-8 text-sm text-cream/60">
          <span>© {new Date().getFullYear()} Eli. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Instagram</a>
            <a href="#" className="hover:text-cream transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cream transition-colors">Vimeo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
