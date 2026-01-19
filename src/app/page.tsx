import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <FadeIn>
        <Hero />
      </FadeIn>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={0.5}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={0.5}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <ContactForm />
      </ScrollReveal>

    </main>
  );
}
