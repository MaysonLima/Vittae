import { Button } from "../ui/Button.jsx";

const navItems = ["Como funciona", "Para profissionais", "Buscar profissionais"];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vittae">
        <svg
          aria-hidden="true"
          viewBox="0 0 80 58"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40 55C28 45 24 30 31 15C35 23 39 31 40 44C41 31 45 23 49 15C56 30 52 45 40 55Z" />
          <path d="M23 52C12 49 4 40 4 27C14 30 22 38 32 51" />
          <path d="M57 52C68 49 76 40 76 27C66 30 58 38 48 51" />
          <path d="M31 48C21 41 15 29 17 16C27 20 33 31 38 49" />
          <path d="M49 48C59 41 65 29 63 16C53 20 47 31 42 49" />
        </svg>
        <span>Vittae</span>
      </a>

      <nav className="main-nav" aria-label="Navegacao principal">
        {navItems.map((item) => (
          <a
            className={item === "Para profissionais" ? "active" : undefined}
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
