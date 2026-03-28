import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [form, setForm] = useState({ name: "", business: "", website: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <footer id="contact" className="relative py-32 border-t border-border">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-2">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">Tell us about your project and we'll get back within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <input
                  placeholder="Business Name"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
              </div>
              <input
                placeholder="Current Website (if any)"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_25px_-3px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl font-bold text-gradient mb-6 block">ApexDesignLab</span>
              <p className="text-muted-foreground max-w-sm mb-8">
                High-performance, AI-powered web design. Fully hosted, managed, and optimized for growth.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3">Navigation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Features", "Services", "Portfolio", "Process", "Pricing"].map((l) => (
                      <li key={l}>
                        <button
                          onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                          className="hover:text-foreground transition-colors"
                        >
                          {l}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-3">Legal</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span></li>
                    <li><span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glow-line mt-10 mb-4" />
            <p className="text-xs text-muted-foreground">© 2026 ApexDesignLab. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
