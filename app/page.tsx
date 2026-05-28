import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosAndStats from "@/components/LogosAndStats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosAndStats />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
