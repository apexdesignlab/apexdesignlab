import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn everything about your business, goals, and vision. No fluff — just an honest conversation about what you need." },
  { num: "02", title: "Design & Build", desc: "Our team designs and develops your site from scratch using AI-powered workflows — fast, precise, and aligned with your brand." },
  { num: "03", title: "Review & Refine", desc: "You review the site, we make changes until you're completely happy. No compromise — your sign-off is the only thing that matters." },
  { num: "04", title: "Launch & Maintain", desc: "We deploy your site, handle all hosting and domains, and stay on board month-to-month to keep everything updated and running fast." },
];

const Process = () => (
  <section id="process" className="relative py-16">
    <div className="absolute inset-0 mesh-gradient opacity-50" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.3em] mb-3">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our 4-Step Process</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card-hover p-8 relative"
          >
            <div className="w-3 h-3 bg-primary mb-6" />
            <span className="text-xs font-mono text-primary tracking-widest">Step {step.num}</span>
            <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
