import { motion } from "framer-motion";
import { Bot, Smartphone, Server, Search } from "lucide-react";

const features = [
  { icon: Bot, title: "AI-Builds", desc: "Intelligent design systems powered by cutting-edge AI for rapid, beautiful builds." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect on every device—mobile, tablet, and desktop." },
  { icon: Server, title: "Managed Hosting", desc: "Enterprise-grade hosting with 99.9% uptime, SSL, and CDN included." },
  { icon: Search, title: "SEO Optimized", desc: "Built-in search engine optimization to drive organic traffic from day one." },
];

const Features = () => (
  <section id="features" className="relative py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.3em] mb-3">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Built for Performance</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-8 group"
          >
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
