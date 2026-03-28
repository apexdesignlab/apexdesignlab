import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Web Design Agency
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Web Design
            <br />
            <span className="text-gradient">Beyond Limits.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-balance">
            We build high-performance, AI-powered websites—fully hosted, managed, and optimized.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("pricing")}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300 animate-pulse-glow"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-8 py-4 rounded-full border border-border text-foreground font-semibold text-base hover:bg-secondary transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default Hero;
