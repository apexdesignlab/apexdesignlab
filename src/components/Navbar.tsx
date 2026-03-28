import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["Features", "Services", "Portfolio", "Process", "Pricing", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-b border-x-0 border-t-0 rounded-none" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-xl font-bold text-gradient tracking-tight">ApexDesignLab</span>
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
          onClick={() => scrollTo("contact")}
          className="hidden md:block text-sm font-semibold px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_25px_-3px_hsl(var(--primary)/0.5)] transition-all duration-300"
        >
          Get in Touch
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
