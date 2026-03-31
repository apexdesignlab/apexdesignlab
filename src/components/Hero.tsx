import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">AI-Powered Web Design Studio</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
            AI-Powered Web Design That Actually{" "}
            <span className="text-gradient">Converts</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            We combine the speed of AI with expert strategy. Our designers and AI specialists build your website on paper first — mapping strategy, user flows, and conversion paths — then bring it to life with AI and refine every detail for maximum results.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <button
              onClick={() => scrollTo("contact")}
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Get Your Free AI Site Audit
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="px-8 py-4 text-muted-foreground hover:text-foreground font-medium transition-colors border border-border rounded-lg hover:border-muted-foreground"
            >
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
            {[
              { num: "50+", label: "Sites Launched" },
              { num: "3x", label: "Faster Delivery" },
              { num: "97%", label: "Client Satisfaction" },
              { num: "2.5x", label: "Avg. Conversion Lift" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default Hero;
