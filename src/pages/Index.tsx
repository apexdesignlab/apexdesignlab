import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Problem />
    <Process />
    <Services />
    <WhyUs />
    <Testimonials />
    <Portfolio />
    <CTA />
    <Footer />
  </div>
);

export default Index;
