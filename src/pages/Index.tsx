import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import IncentivesSection from "@/components/IncentivesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SpecialistsSection from "@/components/SpecialistsSection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <IncentivesSection />
      <HowItWorksSection />
      <SpecialistsSection />
      <AuthoritySection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
