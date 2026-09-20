import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LeadEngine from "@/components/sections/LeadEngine";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <LeadEngine />
      <WhyChooseUs />
      <ServicesPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
