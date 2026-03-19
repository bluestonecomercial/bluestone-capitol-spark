import { motion } from "framer-motion";
import { TrendingUp, Percent, MapPin, Zap } from "lucide-react";

const benefits = [
  {
    icon: Percent,
    metric: "Até 90%",
    title: "Redução de ICMS",
    desc: "Incentivos fiscais do ES aplicados legalmente à sua operação de importação e distribuição.",
  },
  {
    icon: TrendingUp,
    metric: "+30%",
    title: "Aumento de Margem",
    desc: "Economia tributária convertida diretamente em resultado operacional mensurável.",
  },
  {
    icon: MapPin,
    metric: "Posição Estratégica",
    title: "Ganho Logístico",
    desc: "Portos do ES com acesso direto ao corredor Sudeste-Nordeste, reduzindo tempo e custo de frete.",
  },
  {
    icon: Zap,
    metric: "Escala Nacional",
    title: "Escalabilidade",
    desc: "Estrutura preparada para crescer — atenda todo o Brasil a partir de uma base tributariamente otimizada.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-semibold uppercase tracking-widest"
          >
            Benefícios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4"
          >
            Resultados concretos para a sua operação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Cada benefício é estruturado sob medida, com base na realidade da sua empresa.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-card rounded-2xl p-7 shadow-card border border-border text-center group hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <b.icon className="text-accent" size={26} />
              </div>
              <p className="font-heading text-2xl font-bold text-accent mb-1">{b.metric}</p>
              <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
