import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyUs } from "@/components/home/WhyUs";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import ProblemSection from "@/components/home/ProblemSection";
import AboutSection from "@/components/home/About";
import BenefitsSection from "@/components/home/Benefits";
import ContactSection from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <Services />
      <HowItWorks />
      <Testimonials />
      <AboutSection />
      <BenefitsSection />
      <WhyUs />
      <ContactSection />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
