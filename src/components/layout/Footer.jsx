export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Vittae</strong>
          <p>Tecnologia para profissionais do bem-estar.</p>
        </div>

        <nav className="footer-nav" aria-label="Links do rodape">
          <a href="#como-funciona">Como funciona</a>
          <a href="#para-profissionais">Para profissionais</a>
          <a href="#buscar-profissionais">Buscar profissionais</a>
        </nav>

        <div className="footer-note">
          <span>PUCTEC 2026</span>
          <small>Plataforma SaaS wellness tech</small>
        </div>
      </div>
    </footer>
  );
}
