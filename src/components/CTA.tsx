import { motion } from "framer-motion";

const CTA = () => (
  <section id="contact" className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Ready to turn your vision into a{" "}
          <span className="text-gradient">high-converting</span> digital asset?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Book a free strategy call or start with a complimentary AI site audit. No pressure, no obligations — just clarity on how to grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYkQMR_vd8ha9FmlaIyv6705ByTCYv2_7O-SxtRw56QU3lKQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
          >
            Start Your Free AI Site Audit
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYkQMR_vd8ha9FmlaIyv6705ByTCYv2_7O-SxtRw56QU3lKQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-muted-foreground hover:text-foreground font-medium transition-colors border border-border rounded-lg hover:border-muted-foreground"
          >
            Book a Free Strategy Call
          </a>
        </div>

        <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYkQMR_vd8ha9FmlaIyv6705ByTCYv2_7O-SxtRw56QU3lKQ/viewform?embedded=true"
            width="100%"
            height="600"
            className="border-0"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
