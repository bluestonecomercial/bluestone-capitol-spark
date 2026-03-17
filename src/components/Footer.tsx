const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-accent" />
            <span className="font-heading text-sm font-bold text-primary-foreground tracking-tight">
              Bluestone Consultoria
            </span>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Bluestone Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
