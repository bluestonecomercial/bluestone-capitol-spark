import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SeoIntroSection from "@/components/SeoIntroSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import IncentivesSection from "@/components/IncentivesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SpecialistsSection from "@/components/SpecialistsSection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import DiagnosticModal from "@/components/DiagnosticModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const openDiagnostic = () => setDiagnosticOpen(true);

  return (
    <div className="min-h-screen">
      <Header onDiagnosticOpen={openDiagnostic} />
      <HeroSection onDiagnosticOpen={openDiagnostic} />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection onDiagnosticOpen={openDiagnostic} />
      <IncentivesSection />
      <HowItWorksSection />
      <SpecialistsSection />
      <AuthoritySection />
      <TestimonialsSection />
      <CtaSection onDiagnosticOpen={openDiagnostic} />
      <Footer />
      <DiagnosticModal open={diagnosticOpen} onOpenChange={setDiagnosticOpen} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
