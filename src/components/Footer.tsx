import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 border-t border-border">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to<br /><span className="text-muted-foreground">Build</span> Something?
            </h2>
            <p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
              Tell us about your project and we'll get back to you with a plan and exact pricing — completely free, no commitment.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <span className="text-lg">✉</span>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</div>
                  <div className="text-sm font-semibold">apexdesignlab10@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Response Time</div>
                  <div className="text-sm font-semibold">We'll be in touch soon</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg">◎</span>
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Free Consultation</div>
                  <div className="text-sm font-semibold">No cost, no commitment</div>
                </div>
              </div>
            </div>

            {/* Footer links */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider mb-3">Navigation</h4>
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
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span></li>
                  <li><span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span></li>
                </ul>
              </div>
            </div>

            <div className="glow-line mb-4" />
            <p className="text-xs text-muted-foreground">© 2026 ApexDesignLab. All rights reserved.</p>
          </motion.div>

          {/* Right side - Google Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeYkQMR_vd8ha9FmlaIyv6705ByTCYv2_7O-SxtRw56QU3lKQ/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="border border-border bg-card"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
