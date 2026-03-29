import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["About", "Services", "Work", "Pricing", "Process", "Contact"];

const sectionMap: Record<string, string> = {
  About: "features",
  Services: "services",
  Work: "portfolio",
  Pricing: "pricing",
  Process: "process",
  Contact: "contact",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (label: string) => {
    const id = sectionMap[label] || label.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        <span className="text-lg font-bold uppercase tracking-wider">
          Apex.<span className="text-muted-foreground">Design</span><span className="text-primary">Lab</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("Contact")}
          className="hidden md:block text-xs font-semibold uppercase tracking-wider px-5 py-2.5 border border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          Start a Project
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
