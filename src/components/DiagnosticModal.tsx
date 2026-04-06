import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

interface DiagnosticModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Question {
  id: string;
  label: string;
  options: string[];
  allowOther?: boolean;
}

const questions: Question[] = [
  {
    id: "icms_compra",
    label: "Qual a alíquota de ICMS do Estado que mais compram?",
    options: ["7%", "12%", "18%"],
    allowOther: true,
  },
  {
    id: "icms_venda",
    label: "Qual a alíquota de ICMS na venda para estes Estados?",
    options: ["7%", "12%", "18%"],
    allowOther: true,
  },
  {
    id: "st",
    label: "Tem ST (Substituição Tributária)?",
    options: ["Sim", "Não"],
  },
  {
    id: "tipo_cliente",
    label: "Vende para PF ou PJ?",
    options: ["PJ", "PF"],
  },
  {
    id: "faturamento",
    label: "Faturamento anual:",
    options: ["Menor que R$10MM", "Entre R$10MM e R$20MM", "Maior que R$20MM"],
  },
];

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const DiagnosticModal = ({ open, onOpenChange }: DiagnosticModalProps) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [showValidation, setShowValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (value !== "__other__") {
      setOtherValues((prev) => {
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
    }
  };

  const phoneDigits = telefone.replace(/\D/g, "");
  const contactFilled = nome.trim().length > 0 && phoneDigits.length >= 10;

  const allAnswered = contactFilled && questions.every((q) => {
    const answer = answers[q.id];
    if (!answer) return false;
    if (answer === "__other__" && !otherValues[q.id]?.trim()) return false;
    return true;
  });

  const getAnswerText = (q: Question) => {
    const raw = answers[q.id];
    if (raw === "__other__") return otherValues[q.id] || "";
    return raw || "";
  };

  const handleSubmit = () => {
    if (!allAnswered) {
      setShowValidation(true);
      return;
    }

    const lines = questions.map((q) => {
      const shortLabel = q.id === "icms_compra"
        ? "ICMS Compra"
        : q.id === "icms_venda"
        ? "ICMS Venda"
        : q.id === "st"
        ? "ST"
        : q.id === "tipo_cliente"
        ? "Vende para"
        : "Faturamento";
      return `- ${shortLabel}: ${getAnswerText(q)}`;
    });

    setSubmitted(true);

    // Dispara evento no Google Tag Manager
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'form_submit' });
    }

    // Envia e-mail via EmailJS
    const templateParams = {
      nome: nome.trim(),
      telefone,
      icms_compra: getAnswerText(questions[0]),
      icms_venda: getAnswerText(questions[1]),
      st: getAnswerText(questions[2]),
      tipo_cliente: getAnswerText(questions[3]),
      faturamento: getAnswerText(questions[4]),
    };

    emailjs.init("_OGwBeDRRiCyReUMc");
    emailjs.send("service_l58lt7h", "template_0bybmpi", templateParams)
      .then(() => console.log("Enviado com sucesso"))
      .catch((err) => console.error("Erro:", err));
  };

  const isUnanswered = (id: string) =>
    showValidation && (!answers[id] || (answers[id] === "__other__" && !otherValues[id]?.trim()));

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      setNome("");
      setTelefone("");
      setAnswers({});
      setOtherValues({});
      setShowValidation(false);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[hsl(var(--navy))] border-gold/20 p-0 gap-0">
        {submitted ? (
          <div className="p-10 flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
              <CheckCircle2 size={32} className="text-foreground" />
            </div>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground leading-snug">
              Obrigado! Recebemos suas respostas.
            </h2>
            <p className="text-primary-foreground/70 text-base max-w-md">
              Nosso especialista entrará em contato em breve com sua planilha de pré-viabilidade personalizada.
            </p>
            <button
              type="button"
              onClick={() => handleClose(false)}
              className="mt-2 px-8 py-3 rounded-lg bg-gradient-gold text-foreground font-bold hover:opacity-90 transition-opacity"
            >
              Fechar
            </button>
          </div>
        ) : (
        <>
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gold/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <CheckCircle2 size={16} className="text-foreground" />
            </div>
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Diagnóstico Express
            </span>
          </div>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground leading-snug">
            Responda 5 perguntas rápidas e receba uma planilha de pré-viabilidade personalizada
          </h2>
          <p className="text-primary-foreground/50 text-sm mt-2">
            Nosso especialista irá analisar sua operação e desenhar um cenário sob medida.
          </p>
        </div>

        {/* Contact fields */}
        <div className="px-6 pt-6 space-y-4">
          <div>
            <label className={`block text-sm font-semibold mb-2 ${
              showValidation && !nome.trim() ? "text-red-400" : "text-primary-foreground/90"
            }`}>
              Nome completo *
              {showValidation && !nome.trim() && (
                <span className="text-red-400 text-xs ml-2">— obrigatório</span>
              )}
            </label>
            <Input
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-gold/50"
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold mb-2 ${
              showValidation && telefone.replace(/\D/g, "").length < 10 ? "text-red-400" : "text-primary-foreground/90"
            }`}>
              Telefone *
              {showValidation && telefone.replace(/\D/g, "").length < 10 && (
                <span className="text-red-400 text-xs ml-2">— obrigatório (mín. 10 dígitos)</span>
              )}
            </label>
            <Input
              placeholder="(27) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(formatPhone(e.target.value))}
              className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-gold/50"
            />
          </div>
        </div>

        {/* Questions */}
        <div className="p-6 space-y-6">
          <AnimatePresence mode="sync">
            {questions.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <label className={`block text-sm font-semibold mb-3 ${
                  isUnanswered(q.id) ? "text-red-400" : "text-primary-foreground/90"
                }`}>
                  <span className="text-gold mr-2">{i + 1}.</span>
                  {q.label}
                  {isUnanswered(q.id) && (
                    <span className="text-red-400 text-xs ml-2">— obrigatório</span>
                  )}
                </label>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => selectAnswer(q.id, opt)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                          selected
                            ? "bg-gold/20 border-gold text-gold shadow-[0_0_12px_hsl(var(--gold)/0.15)]"
                            : "bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground/70 hover:border-primary-foreground/30 hover:bg-primary-foreground/10"
                        }`}
                        style={{ minWidth: "fit-content" }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                  {q.allowOther && (
                    <button
                      type="button"
                      onClick={() => selectAnswer(q.id, "__other__")}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                        answers[q.id] === "__other__"
                          ? "bg-gold/20 border-gold text-gold shadow-[0_0_12px_hsl(var(--gold)/0.15)]"
                          : "bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground/70 hover:border-primary-foreground/30 hover:bg-primary-foreground/10"
                      }`}
                    >
                      Outra
                    </button>
                  )}
                </div>
                {q.allowOther && answers[q.id] === "__other__" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2"
                  >
                    <Input
                      placeholder="Digite a alíquota..."
                      value={otherValues[q.id] || ""}
                      onChange={(e) =>
                        setOtherValues((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                      className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-gold/50"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Submit */}
        <div className="p-6 pt-2 border-t border-gold/10">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-gold text-foreground font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            <MessageCircle size={20} />
            Falar com Especialista
            <ArrowRight size={18} />
          </button>
          <p className="text-primary-foreground/40 text-xs text-center mt-3">
            Você será direcionado ao WhatsApp para conversar com nosso especialista.
          </p>
        </div>
        </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticModal;
