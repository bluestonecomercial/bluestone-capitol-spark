import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Shuffle, DollarSign } from "lucide-react";
import containersImg from "@/assets/containers.jpg";

const problems = [
  {
    icon: DollarSign,
    title: "Carga tributária elevada",
    desc: "ICMS elevado nas operações interestaduais de importação e distribuição corroendo suas margens e dificultando a competitividade.",
  },
  {
    icon: AlertTriangle,
    title: "Complexidade fiscal",
    desc: "Legislação fragmentada entre estados gera insegurança jurídica e custos operacionais desnecessários.",
  },
  {
    icon: TrendingDown,
    title: "Margens comprimidas",
    desc: "Custos tributários e logísticos elevados reduzem o resultado e limitam o crescimento da operação.",
  },
  {
    icon: Shuffle,
    title: "Logística ineficiente",
    desc: "Rotas subótimas e falta de integração entre tributário e logístico geram desperdício de recursos.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-elevated"
          >
            <img src={containersImg} alt="Containers em terminal portuário" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground font-heading font-bold text-lg">
                Sua operação está pagando mais do que deveria?
              </p>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-semibold uppercase tracking-widest"
            >
              O Desafio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-10"
            >
              Empresas que importam e distribuem no Brasil enfrentam um cenário tributário hostil
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  className="bg-card rounded-xl p-5 shadow-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <p.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
