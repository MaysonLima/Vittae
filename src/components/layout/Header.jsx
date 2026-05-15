import { Flower2 } from "lucide-react";
import { Button } from "../ui/Button.jsx";

const navItems = ["Como funciona", "Para profissionais", "Buscar profissionais"];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vittae">
        <Flower2 aria-hidden="true" />
        <span>Vittae</span>
      </a>

      <nav className="main-nav" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
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
