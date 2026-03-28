import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your brand, goals, and audience to craft the perfect strategy." },
  { num: "02", title: "Build", desc: "Our AI-powered workflow brings your vision to life with precision and speed." },
  { num: "03", title: "Refine", desc: "Iterative feedback loops ensure every detail is polished to perfection." },
  { num: "04", title: "Launch", desc: "We deploy, optimize, and ensure a flawless launch day experience." },
];

const Process = () => (
  <section id="process" className="relative py-32">
    <div className="absolute inset-0 mesh-gradient opacity-50" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Process</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We Work</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-20 pb-16 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <span className="text-xs font-bold text-primary tracking-widest">{step.num}</span>
            <h3 className="text-2xl font-bold mt-1 mb-2">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
