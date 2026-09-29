import { createFileRoute } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Octo — Intelligence that scales",
    meta: [
      {
        name: "description",
        content:
          "Octo connects the dots others miss. AI inference at the scale your problems demand.",
      },
      { property: "og:title", content: "Octo — Intelligence that scales" },
      {
        property: "og:description",
        content: "AI inference built for what's next.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <ScrollScrub
        scenes={scrollScrubScenes}
        theme={scrollScrubTheme}
      />
      <CapabilitiesSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem clamp(1.25rem, 5vw, 4rem)",
        background: "linear-gradient(to bottom, var(--octo-bg) 60%, transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "var(--octo-ink)",
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <OctoMark />
        <span>Octo</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <NavLink href="#capabilities">Capabilities</NavLink>
        <NavLink href="#philosophy">About</NavLink>
        <PrimaryCTA href="#contact">Request Access</PrimaryCTA>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        color: "var(--octo-muted)",
        textDecoration: "none",
        fontSize: "0.85rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.target as HTMLElement).style.color = "var(--octo-ink)")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLElement).style.color = "var(--octo-muted)")
      }
    >
      {children}
    </a>
  );
}

function PrimaryCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      id="contact"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.65rem 1.25rem",
        border: "1px solid var(--octo-muted)",
        color: "var(--octo-ink)",
        textDecoration: "none",
        fontSize: "0.8rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--octo-ink)";
        el.style.background = "var(--octo-ink)";
        el.style.color = "var(--octo-bg)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--octo-muted)";
        el.style.background = "transparent";
        el.style.color = "var(--octo-ink)";
      }}
    >
      {children}
    </a>
  );
}

function OctoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="2.5" fill="var(--octo-ink)" />
      <circle cx="14" cy="3.5" r="1.8" fill="var(--octo-ink)" />
      <circle cx="14" cy="24.5" r="1.8" fill="var(--octo-ink)" />
      <circle cx="3.5" cy="14" r="1.8" fill="var(--octo-ink)" />
      <circle cx="24.5" cy="14" r="1.8" fill="var(--octo-ink)" />
      <circle cx="6.1" cy="6.1" r="1.8" fill="var(--octo-ink)" />
      <circle cx="21.9" cy="6.1" r="1.8" fill="var(--octo-ink)" />
      <circle cx="6.1" cy="21.9" r="1.8" fill="var(--octo-ink)" />
      <circle cx="21.9" cy="21.9" r="1.8" fill="var(--octo-ink)" />
      <line x1="14" y1="11.5" x2="14" y2="5.3" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="14" y1="16.5" x2="14" y2="22.7" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="11.5" y1="14" x2="5.3" y2="14" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="16.5" y1="14" x2="22.7" y2="14" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="12.3" y1="12.3" x2="7.9" y2="7.9" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="15.7" y1="15.7" x2="20.1" y2="20.1" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="15.7" y1="12.3" x2="20.1" y2="7.9" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="12.3" y1="15.7" x2="7.9" y2="20.1" stroke="var(--octo-ink)" strokeWidth="1.2" />
    </svg>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <NeuralIcon />,
      label: "Neural Inference",
      desc: "Sub-10ms latency at any scale. Octo routes, prioritizes, and resolves across billions of signals per second.",
    },
    {
      icon: <GraphIcon />,
      label: "Graph Architecture",
      desc: "Contextual relationships built into the model layer. Not just what you asked, but what it means.",
    },
    {
      icon: <BoltIcon />,
      label: "Real-time Processing",
      desc: "Streaming outputs from first token. No batch delays, no polling. Results arrive as they form.",
    },
  ];

  return (
    <section
      id="capabilities"
      style={{
        background: "var(--octo-bg)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 6rem)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {capabilities.map((cap, i) => (
          <CapabilityCard key={cap.label} {...cap} alignRight={i === 2} />
        ))}
      </div>
    </section>
  );
}

function CapabilityCard({
  icon,
  label,
  desc,
  alignRight,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  alignRight?: boolean;
}) {
  return (
    <article
      style={{
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        borderTop: "1px solid var(--octo-border)",
        textAlign: alignRight ? "right" : "left",
      }}
    >
      <div
        style={{
          marginBottom: "1.5rem",
          color: "var(--octo-ink)",
          display: "flex",
          justifyContent: alignRight ? "flex-end" : "flex-start",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          margin: "0 0 0.75rem",
          color: "var(--octo-ink)",
          fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {label}
      </h3>
      <p
        style={{
          margin: 0,
          color: "var(--octo-muted)",
          fontSize: "0.95rem",
          lineHeight: 1.65,
          maxWidth: "38ch",
          marginLeft: alignRight ? "auto" : "0",
        }}
      >
        {desc}
      </p>
    </article>
  );
}

function NeuralIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="3" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="6" cy="8" r="2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="26" cy="8" r="2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="6" cy="24" r="2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="26" cy="24" r="2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <line x1="8.5" y1="9.5" x2="13.5" y2="14" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="23.5" y1="9.5" x2="18.5" y2="14" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="8.5" y1="22.5" x2="13.5" y2="18" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="23.5" y1="22.5" x2="18.5" y2="18" stroke="var(--octo-ink)" strokeWidth="1.2" />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="6" r="2.2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2.2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="26" cy="18" r="2.2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="10" cy="27" r="2.2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <circle cx="22" cy="27" r="2.2" stroke="var(--octo-ink)" strokeWidth="1.5" />
      <line x1="16" y1="8.2" x2="7.5" y2="16.2" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="16" y1="8.2" x2="24.5" y2="16.2" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="8" y1="20" x2="9.8" y2="25" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="24" y1="20" x2="22.2" y2="25" stroke="var(--octo-ink)" strokeWidth="1.2" />
      <line x1="12.2" y1="27" x2="19.8" y2="27" stroke="var(--octo-ink)" strokeWidth="1.2" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M18 4L8 18H16L14 28L24 14H16L18 4Z"
        stroke="var(--octo-ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhilosophySection() {
  return (
    <section
      id="philosophy"
      style={{
        background: "var(--octo-bg)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 6rem)",
        borderTop: "1px solid var(--octo-border)",
      }}
    >
      <blockquote
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          border: "none",
          padding: 0,
        }}
      >
        <p
          style={{
            color: "var(--octo-ink)",
            fontSize: "clamp(1.8rem, 4.5vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            margin: "0 0 2rem",
          }}
        >
          The best intelligence is the kind you never notice.
        </p>
        <footer
          style={{
            color: "var(--octo-muted)",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Octo, 2024
        </footer>
      </blockquote>
    </section>
  );
}

function CTASection() {
  return (
    <section
      style={{
        background: "var(--octo-bg)",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 6rem)",
        borderTop: "1px solid var(--octo-border)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "var(--octo-muted)",
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          margin: "0 0 1.5rem",
        }}
      >
        Early Access
      </p>
      <h2
        style={{
          color: "var(--octo-ink)",
          fontSize: "clamp(2rem, 5vw, 4.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          margin: "0 0 2.5rem",
        }}
      >
        Ready to see what
        <br />
        others cannot?
      </h2>
      <PrimaryCTA href="mailto:hello@octo.ai">Request Access</PrimaryCTA>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "var(--octo-bg)",
        borderTop: "1px solid var(--octo-border)",
        padding: "2rem clamp(1.25rem, 5vw, 4rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "var(--octo-muted)",
          fontSize: "0.8rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="2.5" fill="var(--octo-muted)" />
          <circle cx="14" cy="3.5" r="1.8" fill="var(--octo-muted)" />
          <circle cx="14" cy="24.5" r="1.8" fill="var(--octo-muted)" />
          <circle cx="3.5" cy="14" r="1.8" fill="var(--octo-muted)" />
          <circle cx="24.5" cy="14" r="1.8" fill="var(--octo-muted)" />
          <circle cx="6.1" cy="6.1" r="1.8" fill="var(--octo-muted)" />
          <circle cx="21.9" cy="6.1" r="1.8" fill="var(--octo-muted)" />
          <circle cx="6.1" cy="21.9" r="1.8" fill="var(--octo-muted)" />
          <circle cx="21.9" cy="21.9" r="1.8" fill="var(--octo-muted)" />
          <line x1="14" y1="11.5" x2="14" y2="5.3" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="14" y1="16.5" x2="14" y2="22.7" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="11.5" y1="14" x2="5.3" y2="14" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="16.5" y1="14" x2="22.7" y2="14" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="12.3" y1="12.3" x2="7.9" y2="7.9" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="15.7" y1="15.7" x2="20.1" y2="20.1" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="15.7" y1="12.3" x2="20.1" y2="7.9" stroke="var(--octo-muted)" strokeWidth="1.2" />
          <line x1="12.3" y1="15.7" x2="7.9" y2="20.1" stroke="var(--octo-muted)" strokeWidth="1.2" />
        </svg>
        <span>Octo</span>
      </div>
      <p
        style={{
          color: "var(--octo-muted)",
          fontSize: "0.75rem",
          margin: 0,
          letterSpacing: "0.04em",
        }}
      >
        2024 Octo Inc. All rights reserved.
      </p>
    </footer>
  );
}
