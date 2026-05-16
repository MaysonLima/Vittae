import { Button } from "../ui/Button.jsx";
import lotusLogo from "../../assets/icons/image.png";

const navItems = ["Como funciona", "Para profissionais", "Buscar profissionais"];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vittae">
        <img alt="" className="brand-icon" src={lotusLogo} />
        <span>Vittae</span>
      </a>

      <nav className="main-nav" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a href="#entrar">Entrar</a>
        <Button>Cadastre-se</Button>
      </div>
    </header>
  );
}
