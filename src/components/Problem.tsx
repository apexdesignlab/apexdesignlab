import { motion } from "framer-motion";

const problems = [
  { label: "01", title: "Low Conversions", desc: "Beautiful templates that don't guide visitors toward action." },
  { label: "02", title: "Poor SEO", desc: "AI-generated code often misses critical SEO fundamentals." },
  { label: "03", title: "No Strategy", desc: "Jumping straight to design without understanding your audience." },
  { label: "04", title: "Not Scalable", desc: "Quick builds that break down as your business grows." },
];

const Problem = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">The Problem</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Why Most AI-Built Sites Fail
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Pure vibe-coded sites look okay on the surface but consistently fail at conversions, SEO, and scalability. Without human expertise guiding the AI, you're left with a pretty page that doesn't perform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 text-center"
          >
            <span className="inline-block w-12 h-12 leading-[3rem] mx-auto mb-4 rounded-lg bg-destructive/10 text-destructive font-display font-bold text-lg">
              {p.label}
            </span>
            <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-primary font-semibold text-lg"
      >
        We fix that with human expertise + AI speed.
      </motion.p>
    </div>
  </section>
);

export default Problem;
