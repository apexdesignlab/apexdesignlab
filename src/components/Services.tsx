import { motion } from "framer-motion";

const services = [
  {
    marker: "A",
    title: "AI-Powered Custom Websites",
    desc: "Bespoke websites built with AI speed and human precision. Optimized for conversions, SEO, and performance from day one.",
  },
  {
    marker: "B",
    title: "Shopify & E-commerce Setup",
    desc: "Conversion-focused online stores that turn browsers into buyers. Complete with payment processing, inventory, and analytics.",
  },
  {
    marker: "C",
    title: "Digital Marketing & SEO",
    desc: "Data-driven marketing strategies that drive organic traffic and qualified leads to your business.",
  },
  {
    marker: "D",
    title: "Social Media & Content",
    desc: "Strategic social media management and content creation that builds brand authority and engages your audience.",
  },
  {
    marker: "E",
    title: "All-In-One Business Buildout",
    desc: "Website + store + marketing + social — everything you need to launch and grow, delivered as one cohesive package.",
  },
];

const Services = () => (
  <section id="services" className="relative py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We deliver faster than traditional agencies and better results than pure AI tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card-hover p-8 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-display font-bold text-lg mb-5">
              {s.marker}
            </span>
            <h3 className="font-display text-lg font-bold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
