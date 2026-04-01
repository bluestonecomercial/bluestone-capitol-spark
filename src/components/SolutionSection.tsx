import { motion } from "framer-motion";
import { Shield, Truck, BarChart3, Target } from "lucide-react";
import brazilMapImg from "@/assets/brazil-map.jpg";

const solutions = [
  {
    icon: Shield,
    title: "Estruturação Fiscal no ES",
    desc: "Utilizamos os incentivos de ICMS do Espírito Santo para criar uma estrutura tributária legal, segura e altamente vantajosa.",
  },
  {
    icon: Truck,
    title: "Otimização Logística",
    desc: "Planejamento integrado de rotas e operações, aproveitando a posição estratégica dos portos capixabas.",
  },
  {
    icon: BarChart3,
    title: "Redução Real de Custos",
    desc: "Economia mensurável desde o primeiro mês de operação — com acompanhamento contínuo dos resultados.",
  },
  {
    icon: Target,
    title: "Ganho de Competitividade",
    desc: "Margens maiores permitem precificação mais agressiva e reinvestimento no crescimento da sua operação.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold text-sm font-semibold uppercase tracking-widest"
            >
              A Solução
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6"
            >
              Transformamos o Espírito Santo na vantagem competitiva que sua empresa precisa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 text-lg leading-relaxed mb-10"
            >
              A Bluestone estrutura toda a operação — dos incentivos fiscais à logística — para que sua empresa reduza o ICMS ao máximo, de forma legal e sustentável no Espírito Santo.
            </motion.p>

            <div className="space-y-5">
              {solutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <s.icon className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-md lg:max-w-full aspect-square rounded-2xl shadow-elevated overflow-hidden bg-[hsl(var(--navy))]">
              <img
                src={brazilMapImg}
                alt="Mapa do Brasil com rotas logísticas saindo do Espírito Santo"
                className="w-full h-full object-contain p-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
