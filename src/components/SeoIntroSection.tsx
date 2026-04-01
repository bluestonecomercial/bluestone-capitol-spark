import { motion } from "framer-motion";

const SeoIntroSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-4"
        >
          Sua empresa pode estar pagando até{" "}
          <span className="text-primary font-bold">10x mais ICMS</span>{" "}
          do que deveria — veja como operações no Espírito Santo estão reduzindo para até{" "}
          <span className="text-primary font-bold">1,14%</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-foreground text-lg md:text-xl font-medium leading-relaxed"
        >
          Avalie sua operação e descubra o potencial de economia tributária.
        </motion.p>
      </div>
    </section>
  );
};

export default SeoIntroSection;
