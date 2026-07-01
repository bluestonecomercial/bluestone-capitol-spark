import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CtaBarProps {
  label: string;
  subtitle?: string;
}

const WHATSAPP_URL =
  "https://wa.me/5527992915203?text=" +
  encodeURIComponent(
    "Vim do site da Bluestone. Gostaria de saber mais sobre os serviços de consultoria"
  );

const CtaBar = ({ label, subtitle }: CtaBarProps) => {
  return (
    <section className="bg-gradient-gold py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <p className="font-heading text-xl md:text-2xl font-bold text-foreground">
              {label}
            </p>
            {subtitle && (
              <p className="text-foreground/75 text-sm mt-1">{subtitle}</p>
            )}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-primary/90 transition-colors active:scale-[0.97] shadow-lg"
          >
            <MessageCircle size={20} />
            {label}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBar;
