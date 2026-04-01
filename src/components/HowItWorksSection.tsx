import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    desc: "Analisamos sua operação atual — tributária, logística e operacional — para identificar oportunidades de redução de ICMS com incentivos fiscais.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Estruturação",
    desc: "Desenhamos a estratégia fiscal ideal, incluindo enquadramento nos incentivos do ES e planejamento logístico.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implementação",
    desc: "Executamos toda a migração e ativação da operação no Espírito Santo, com suporte jurídico e operacional.",
  },
  {
    icon: Settings,
    step: "04",
    title: "Operação",
    desc: "Acompanhamos os resultados mensalmente, garantindo compliance e otimização contínua da sua operação.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-semibold uppercase tracking-widest"
          >
            Metodologia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4"
          >
            Como funciona na prática
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Um processo claro e estruturado — do diagnóstico à operação contínua.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-[2px] bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-7 shadow-card border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-5">
                  <s.icon className="text-accent-foreground" size={28} />
                </div>
                <span className="font-heading text-xs font-bold text-accent tracking-widest">{s.step}</span>
                <h3 className="font-heading font-bold text-foreground text-lg mt-1 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
