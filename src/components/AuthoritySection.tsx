import { motion } from "framer-motion";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import consultingImg from "@/assets/consulting.jpg";

const stats = [
  { icon: Clock, value: "+10 anos", label: "de experiência em incentivos fiscais do ES" },
  { icon: Users, value: "+200", label: "empresas atendidas em todo o Brasil" },
  { icon: Award, value: "100%", label: "de compliance fiscal em todas as operações" },
  { icon: CheckCircle, value: "R$ 500M+", label: "em economia tributária gerada para clientes" },
];

const AuthoritySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-semibold uppercase tracking-widest"
            >
              Por que a Bluestone
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6"
            >
              Referência em estruturação fiscal e logística no Espírito Santo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-10"
            >
              A Bluestone Consultoria nasceu da interseção entre conhecimento tributário profundo e visão estratégica de negócios. Nossa equipe multidisciplinar atua lado a lado com empresas importadoras, distribuidoras e e-commerces que buscam operar com máxima eficiência fiscal no Brasil.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                    <s.icon className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-elevated"
          >
            <img src={consultingImg} alt="Equipe Bluestone em reunião estratégica" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
