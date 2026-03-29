import { motion } from "framer-motion";
import { Palette, Cloud, Wrench } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    desc: "Fully bespoke websites designed from scratch to reflect your brand, attract your audience, and convert browsers into buyers. No templates — ever.",
    tags: ["UI/UX", "Responsive", "Brand-Aligned"],
    span: "lg:col-span-2",
  },
  {
    icon: Cloud,
    title: "Hosting & Deployment",
    desc: "We handle the entire technical stack — domain, SSL certificates, CDN, performance optimization, and uptime monitoring.",
    tags: ["SSL Included", "CDN", "99.9% Uptime"],
    span: "lg:col-span-1",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, security patches, and performance monitoring so you can focus on your business.",
    tags: ["Updates", "Security", "Monitoring"],
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
        <p className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.3em] mb-3">What We Build</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
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
            <div className="text-xs font-mono text-primary mb-4">0{i + 1}</div>
            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 border border-border text-muted-foreground">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
