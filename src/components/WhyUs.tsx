import { motion } from "framer-motion";

const reasons = [
  {
    num: "01",
    title: "Speed of AI + Strategy of Experts",
    desc: "Get a website in days, not months — built on a foundation of proven conversion strategy.",
  },
  {
    num: "02",
    title: "Revenue-Focused Designs",
    desc: "Every design decision is backed by data and optimized to drive real business results — not just pretty pixels.",
  },
  {
    num: "03",
    title: "Full-Service Growth Partnership",
    desc: "We're not one-and-done. We stay on as your digital partner, continuously optimizing and growing your online presence.",
  },
  {
    num: "04",
    title: "Transparent, Fixed-Price Packages",
    desc: "No hidden fees. Clear pricing with optional monthly growth retainers that scale with your business.",
  },
];

const WhyUs = () => (
  <section id="why-us" className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Why Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why Choose Apex Design Lab
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're the bridge between AI efficiency and human craftsmanship. Your website deserves both.
          </p>
        </motion.div>

        <div className="space-y-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 glass-card-hover p-6"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                {r.num}
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
