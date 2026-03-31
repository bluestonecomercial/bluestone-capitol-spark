import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Reduzimos significativamente nossa carga tributária e ganhamos escala nacional com mais eficiência logística. A Bluestone foi essencial nessa transformação.",
    company: "Empresa do setor de eletrônicos",
    role: "Diretor Financeiro",
  },
  {
    quote: "A estruturação no Espírito Santo nos permitiu operar com margens que antes pareciam impossíveis. Hoje, temos uma operação sólida e competitiva.",
    company: "Distribuidora nacional de cosméticos",
    role: "CEO",
  },
  {
    quote: "O nível de expertise da equipe em incentivos fiscais do ES é incomparável. Tivemos retorno mensurável já no primeiro trimestre de operação.",
    company: "Importadora do setor farmacêutico",
    role: "Diretor de Operações",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-semibold uppercase tracking-widest"
          >
            Resultados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4"
          >
            Empresas que já transformaram sua operação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Resultados reais de empresas que escolheram o Espírito Santo como base estratégica.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              <Quote className="text-accent/20 absolute top-6 right-6" size={32} />
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
            Empresas de diversos segmentos confiam na Bluestone
          </p>
          <p className="font-heading text-lg font-semibold text-foreground mb-6">
            Principais Segmentos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Alimentos e Bebidas",
              "Alumínio",
              "Auto Peças",
              "Calçados",
              "EPI",
              "Equipamentos Hospitalares",
              "Máquinas e Equipamentos Pesados",
              "Material de Construção",
              "Medicamentos Veterinários",
              "Plástico",
              "Sucata",
              "Vestuário",
            ].map((seg) => (
              <span
                key={seg}
                className="px-5 py-2.5 bg-muted rounded-lg text-sm font-medium text-muted-foreground border border-border"
              >
                {seg}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
