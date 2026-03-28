import { motion } from "framer-motion";

const projects = [
  { title: "Hair Affairs Boutique", url: "https://apexdesignlab.github.io/hairaffairsboutique/" },
  { title: "IronForge Gym", url: "https://ironforge-gym.lovable.app/" },
  { title: "Ember Stone Dining", url: "https://ember-stone-dining.lovable.app/" },
];

const Portfolio = () => (
  <section id="portfolio" className="relative py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Recent Work</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <iframe
                src={p.url}
                title={p.title}
                className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-lg font-bold">{p.title}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
