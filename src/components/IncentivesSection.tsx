import { motion } from "framer-motion";
import { BadgePercent, ArrowDownToLine } from "lucide-react";

const incentives = [
  {
    icon: BadgePercent,
    name: "COMPETE-ES",
    tagline: "Operações interestaduais com carga mínima",
    highlights: [
      "Redução de até 90% da carga tributária de ICMS",
      "ICMS efetivo de exatamente 1,14% nas vendas interestaduais para todo o Brasil",
      "Aplicável a importação, distribuição e e-commerce",
      "Enquadramento legal com segurança jurídica total",
    ],
  },
  {
    icon: ArrowDownToLine,
    name: "INVEST-ES",
    tagline: "Diferimento integral na importação",
    highlights: [
      "100% de ICMS diferido na entrada da mercadoria",
      "Apenas 1,035% na transferência para CD homologado",
      "Ideal para operações com alto volume de importação",
      "Redução drástica do custo de internação de mercadorias",
    ],
  },
];

const IncentivesSection = () => {
  return (
    <section id="incentivos" className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-semibold uppercase tracking-widest"
          >
            Incentivos Fiscais
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4"
          >
            Incentivos fiscais que tornam sua operação mais competitiva no Espírito Santo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg"
          >
            O Espírito Santo oferece programas fiscais robustos para empresas que operam com importação e distribuição. Conheça os principais:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {incentives.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                <item.icon className="text-gold" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-1">{item.name}</h3>
              <p className="text-gold text-sm font-medium mb-5">{item.tagline}</p>
              <ul className="space-y-3">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-primary-foreground/75 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncentivesSection;
