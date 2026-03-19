import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import thiagoImg from "@/assets/thiago-santos.png";
import carlosImg from "@/assets/carlos-martins.png";
import fabianaImg from "@/assets/fabiana-cecim.png";

const specialists = [
  {
    name: "Thiago Santos",
    role: "CEO & Founder",
    image: thiagoImg,
    bio: "Executivo com mais de 20 anos de experiência em estratégia comercial, relacionamento institucional e desenvolvimento de negócios. Reconhecido pela estruturação e atração de mais de 300 empresas para o Espírito Santo, com forte domínio em incentivos fiscais de ICMS e articulação entre setor público e privado. Atualmente também atua como Presidente do LIDE Espírito Santo.",
  },
  {
    name: "Carlos Eduardo Martins",
    role: "Head Comercial",
    image: carlosImg,
    bio: "Liderança estratégica na atração de empresas e estruturação de operações no Espírito Santo. Atua diretamente na construção de parcerias, desenvolvimento de mercado e desenho de soluções que aumentam a competitividade tributária e logística dos clientes.",
  },
  {
    name: "Fabiana Cecim",
    role: "Head Financeiro & Contratos",
    image: fabianaImg,
    bio: "Executiva com forte atuação em gestão financeira, estruturação de contratos e operações BPO. Especialista em organização financeira, performance empresarial e suporte estratégico para tomada de decisão.",
  },
];

const SpecialistsSection = () => {
  return (
    <section id="especialistas" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-semibold uppercase tracking-widest"
          >
            Equipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4"
          >
            Conheça nossos especialistas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Profissionais com trajetória comprovada em estratégia fiscal, logística e desenvolvimento de negócios.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialists.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i }}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border group hover:shadow-elevated transition-shadow"
            >
              <div className="aspect-[4/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <h3 className="font-heading text-xl font-bold text-foreground">{s.name}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{s.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
