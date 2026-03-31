import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Coaching",
    quote: "Apex Design Lab doubled our lead generation in the first month. The site is stunning and actually converts — something our previous three websites never managed.",
    metric: "2x leads in 30 days",
  },
  {
    name: "James Chen",
    role: "CEO, TechScale Solutions",
    quote: "We went from concept to a fully functional, high-converting website in just 10 days. The strategic planning phase made all the difference.",
    metric: "10-day launch",
  },
  {
    name: "Maria Rodriguez",
    role: "Owner, Luxe Interiors",
    quote: "Our e-commerce revenue increased by 180% after the redesign. The team truly understands conversion optimization and brand storytelling.",
    metric: "180% revenue increase",
  },
  {
    name: "David Park",
    role: "Marketing Director, Elevate Fitness",
    quote: "Finally, an agency that delivers on its promises. Our site is fast, beautiful, and ranks on page one for our key terms.",
    metric: "Page 1 rankings",
  },
];

const Testimonials = () => (
  <section className="relative py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Client Results Speak
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-8 flex flex-col"
          >
            <span className="text-4xl font-display font-bold text-primary/20 mb-4">"</span>
            <p className="text-foreground leading-relaxed mb-6 flex-1">{t.quote}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {t.metric}
              </span>
            </div>
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-accent text-sm">★</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
