import lotusLogo from "../../assets/icons/image.png";

const navItems = [
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Para profissionais", href: "/para-profissionais" },
  { label: "Buscar profissionais", href: "/profissionais" }
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vittae">
        <img alt="" className="brand-icon" src={lotusLogo} />
        <span>Vittae</span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navItems.map(({ href, label }) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="login-link" href="/login">
          Entrar
        </a>
        <a className="button" href="/cadastro">
          Cadastre-se
        </a>
      </div>
    </header>
  );
}
