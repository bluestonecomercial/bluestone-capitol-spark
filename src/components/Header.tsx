import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#problema" },
  { label: "Solução", href: "#solucao" },
  { label: "Incentivos", href: "#incentivos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Especialistas", href: "#especialistas" },
];

interface HeaderProps {
  onDiagnosticOpen: () => void;
}

const Header = ({ onDiagnosticOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-accent" />
          <span className={`font-heading text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Bluestone
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onDiagnosticOpen}
            className="bg-gradient-gold text-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Diagnóstico Gratuito
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onDiagnosticOpen();
            }}
            className="block w-full mt-2 bg-gradient-gold text-foreground font-semibold text-sm px-5 py-2.5 rounded-lg text-center"
          >
            Diagnóstico Gratuito
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
