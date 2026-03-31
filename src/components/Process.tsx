import { motion } from "framer-motion";
import { FileText, Cpu, Paintbrush } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Strategy & Planning",
    desc: "Expert designers and strategists build your site on paper — wireframes, user journeys, conversion funnels, and brand messaging. Every decision is intentional.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Acceleration",
    desc: "We use advanced AI tools (Lovable, v0, Claude) to turn the strategic plan into a real, functional website in record time. Speed without sacrificing quality.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Human Refinement",
    desc: "Our team polishes every detail — flawless UX, performance optimization, accessibility compliance, and conversion fine-tuning. The result is pixel-perfect.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

const Process = () => (
  <section id="process" className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Process</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Paper to Pixel</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A proven three-step methodology that combines strategic thinking with AI execution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-8 relative"
          >
            <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center mb-6`}>
              <s.icon className={`w-7 h-7 ${s.color}`} />
            </div>
            <span className={`text-sm font-semibold ${s.color} mb-2 block`}>Step {s.step}</span>
            <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
