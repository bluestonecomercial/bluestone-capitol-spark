import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-port.jpg";

interface HeroSectionProps {
  onDiagnosticOpen: () => void;
}

const HeroSection = ({ onDiagnosticOpen }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Porto moderno com navios de carga" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="inline-block bg-gold/20 text-gold-light border border-gold/30 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Consultoria Tributária & Logística — Espírito Santo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Reduza o ICMS da sua empresa com{" "}
            <span className="text-gold">incentivos fiscais</span> no Espírito Santo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl leading-relaxed"
          >
            Estruturamos operações de importação, distribuição e e-commerce com
            incentivos fiscais no Espírito Santo — gerando redução de ICMS real e eficiência
            tributária sustentável para operações interestaduais da sua empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onDiagnosticOpen}
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-foreground font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Solicite seu Diagnóstico Gratuito
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/5527992915203?text=Olá! Gostaria de falar com um especialista da Bluestone Consultoria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity active:scale-[0.97] shadow-lg"
            >
              <MessageCircle size={18} fill="white" />
              Fale com um especialista
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
