import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Growth Lab",
    tier: "Starter",
    price: "$/£ 150 upfront cost"
    price: "$80",
    pricePound: "£80",
    features: ["3 Pages", "1 Domain", "Static / Booking Website", "Custom Design", "Managed Hosting", "Deposit cost after you see your demo"],
    popular: false,
  },
  {
    name: "The Essentials",
    tier: "Business",
    price: "$/£ 150 upfront cost"
    price: "$100",
    pricePound: "£100",
    features: ["8 Pages", "2 Domains", "Compatible Features", "Full SEO Suite", "Priority Support", "Deposit cost after you see your demo"],
    popular: true,
  },
  {
    name: "Apex Elite",
    tier: "Premium",
    price: "$/£ 150 upfront cost"
    price: "$140",
    pricePound: "£140",
    features: ["Payments & Custom Types", "Up to 15 Pages", "5 Domains Included", "Full E-commerce Suite", "Premium Hosting & CDN", "Advanced SEO Strategy", "Dedicated Support Line", "Deposit cost after you see your demo"],
    popular: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="relative py-16">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.3em] mb-3">The Triple Threat</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pricing Plans</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative glass-card-hover p-8 flex flex-col ${
              plan.popular ? "border-primary/40 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)]" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                Popular
              </div>
            )}

            <p className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-widest mb-1">{plan.tier}</p>
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>

            <div className="mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-muted-foreground text-sm"> / {plan.pricePound}</span>
              <div className="text-muted-foreground text-sm">/ month</div>
            </div>

            <div className="h-px bg-border mb-6" />

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`w-full py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:shadow-[0_0_25px_-3px_hsl(var(--primary)/0.5)]"
                  : "border border-border text-foreground hover:bg-secondary"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10">
        Not sure which plan fits? <span className="text-primary cursor-pointer" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Reach out</span> — we'll give you an exact quote at no cost.
      </p>
    </div>
  </section>
);

export default Pricing;
