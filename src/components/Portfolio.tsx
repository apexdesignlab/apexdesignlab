import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hair Affairs Boutique",
    category: "Spa · Hair & Beauty",
    outcome: "Full brand website with booking system",
    url: "https://apexdesignlab.github.io/hairaffairsboutique/",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "IronForge Gym",
    category: "Fitness · Gym",
    outcome: "Membership-focused conversion site",
    url: "https://ironforge-gym.lovable.app/",
    gradient: "from-emerald-500/20 to-primary/20",
  },
  {
    title: "Ember Stone Dining",
    category: "Restaurant · Dining",
    outcome: "Reservation-optimized restaurant site",
    url: "https://ember-stone-dining.lovable.app/",
    gradient: "from-accent/20 to-orange-500/20",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Portfolio</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real projects with measurable results for businesses like yours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass-card-hover overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <iframe
                src={p.url}
                title={p.title}
                className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{p.category}</p>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5" />
                {p.outcome}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
