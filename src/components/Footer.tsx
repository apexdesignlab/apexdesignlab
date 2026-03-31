const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <span className="text-lg font-display font-bold tracking-tight">
            Apex<span className="text-primary">.</span>Design Lab
          </span>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            AI-powered web design and digital growth, built with strategy-first thinking.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Process", "Portfolio", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document.getElementById(link.toLowerCase() === "contact" ? "contact" : link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Get in Touch</h4>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYkQMR_vd8ha9FmlaIyv6705ByTCYv2_7O-SxtRw56QU3lKQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Contact Form →
          </a>
          <p className="text-sm text-muted-foreground mt-2">apexdesignlab10@gmail.com</p>
        </div>
      </div>

      <div className="glow-line mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Apex Design Lab. All rights reserved.</p>
        <p>Built with craft using Lovable + human expertise</p>
      </div>
    </div>
  </footer>
);

export default Footer;
