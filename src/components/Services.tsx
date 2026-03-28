import { motion } from "framer-motion";
import { Palette, Cloud, Wrench } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    desc: "Bespoke designs tailored to your brand identity, audience, and business goals.",
    span: "lg:col-span-2",
  },
  {
    icon: Cloud,
    title: "Hosting & Deployment",
    desc: "Lightning-fast hosting with global CDN, automated backups, and zero-downtime deploys.",
    span: "lg:col-span-1",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, security patches, and performance monitoring so you can focus on your business.",
    span: "lg:col-span-3",
  },
];

const Services = () => (
  <section id="services" className="relative py-32">
    <div className="absolute inset-0 mesh-gradient opacity-50" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What We Do Best</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass-card-hover p-10 ${s.span}`}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
