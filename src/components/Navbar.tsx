import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "Services", "Process", "Work", "About", "Contact"];

const sectionMap: Record<string, string> = {
  Home: "hero",
  Services: "services",
  Process: "process",
  Work: "portfolio",
  About: "why-us",
  Contact: "contact",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (label: string) => {
    const id = sectionMap[label] || label.toLowerCase();
    if (id === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-b border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-lg font-display font-bold tracking-tight">
          Apex<span className="text-primary">.</span>Design Lab
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:block text-sm font-semibold px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300"
        >
          Book a Call
        </button>

        <button
          className="md:hidden text-foreground w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card border-t border-border px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="w-full text-sm font-semibold px-5 py-2.5 bg-primary text-primary-foreground rounded-lg"
          >
            Book a Call
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
