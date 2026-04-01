import { motion } from "framer-motion";

const SeoIntroSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6"
        >
          Como os incentivos fiscais no Espírito Santo ajudam sua empresa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          A Bluestone é especializada em estruturar operações com incentivos fiscais no Espírito Santo, ajudando empresas a reduzir a carga de ICMS em operações interestaduais. Atuamos na análise estratégica e operacional para identificar oportunidades tributárias que aumentem a competitividade do negócio.
        </motion.p>
      </div>
    </section>
  );
};

export default SeoIntroSection;
