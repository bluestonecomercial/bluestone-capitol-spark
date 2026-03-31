import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-gradient-accent" />
              <span className="font-heading text-lg font-bold text-primary-foreground tracking-tight">
                Bluestone Consultoria
              </span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              Estruturação tributária e logística para empresas que buscam máxima eficiência operacional no Brasil.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                Av. Rio Branco, 1383, Loja 04/Pvto1<br />
                Praia do Canto — Vitória/ES<br />
                CEP: 29.055-970
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                +55 (27) 9 9291-5203
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} />
                contato@bluestoneconsultoria.com.br
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/bluestoneconsultoriadoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Instagram size={16} />
                @bluestoneconsultoriadoes
              </a>
              <a
                href="https://www.linkedin.com/in/blue-stone-consultoria-undefined-0bb11935b/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                <Linkedin size={16} />
                Bluestone Consultoria
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Bluestone Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/30">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
