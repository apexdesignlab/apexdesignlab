import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-8">
            ── AI-Powered Web Design Studio
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            Design
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px hsl(0 0% 96%)" }}>
              Beyond
            </span>
            <br />
            <span className="text-primary">Limits.</span>
          </h1>

          <p className="max-w-lg text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            We're a team of AI experts and seasoned web designers who build high-performance websites that look stunning, load fast, and convert visitors into customers — all fully hosted and managed.
          </p>

          <div className="flex items-center gap-6 mb-20">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Get Your Site Built →
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              ↓ See Our Work
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex items-center gap-0 border-t border-border">
            {[
              { num: "AI", label: "Powered Design" },
              { num: "$80", label: "Starting / Month" },
              { num: "100%", label: "Custom Built" },
              { num: "∞", label: "Revisions Supported" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 py-6 border-r border-border last:border-r-0">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.num}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default Hero;
