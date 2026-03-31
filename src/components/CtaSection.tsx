import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

interface CtaSectionProps {
  onDiagnosticOpen: () => void;
}

const CtaSection = ({ onDiagnosticOpen }: CtaSectionProps) => {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-semibold uppercase tracking-widest"
          >
            Comece agora
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6"
          >
            Sua empresa pode estar pagando mais ICMS do que deveria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto"
          >
            Solicite um diagnóstico gratuito e descubra quanto sua operação pode economizar com os incentivos fiscais do Espírito Santo — com redução de até 90% da carga de ICMS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={onDiagnosticOpen}
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-foreground font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/60"
          >
            <span className="flex items-center gap-2">
              <Phone size={14} /> +55 (27) 9 9291-5203
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> bluestone.comercial@gmail.com
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
