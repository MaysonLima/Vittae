import { useState } from "react";
import lotusLogo from "../../assets/icons/image.png";

const footerGroups = [
  {
    title: "Produto",
    links: [
      { label: "Buscar profissionais", href: "/profissionais" },
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Voucher presente", href: "/voucher" },
      { label: "Sobre a Vittae", href: "/sobre" }
    ]
  },
  {
    title: "Profissionais",
    links: [
      { label: "Para profissionais", href: "/para-profissionais" },
      { label: "Planos", href: "/planos" },
      { label: "Vantagens", href: "/vantagens" },
      { label: "Painel demo", href: "/dashboard" }
    ]
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de ajuda", href: "/ajuda" },
      { label: "FAQ", href: "/faq" },
      { label: "Segurança", href: "/seguranca" },
      { label: "Termos e privacidade", href: "/termos" }
    ]
  }
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <img alt="" src={lotusLogo} />
          <strong>Vittae</strong>
        </div>
        <p>Presença digital, agenda e gestão para profissionais do bem-estar.</p>
        <div className="social-links" aria-label="Redes sociais">
          <a href="https://instagram.com" rel="noreferrer" target="_blank">ig</a>
          <a href="https://facebook.com" rel="noreferrer" target="_blank">f</a>
          <a href="https://linkedin.com" rel="noreferrer" target="_blank">in</a>
        </div>
        <small>© 2026 Vittae. Todos os direitos reservados.</small>
      </div>

      {footerGroups.map(({ links, title }) => (
        <nav aria-label={title} className="footer-group" key={title}>
          <h2>{title}</h2>
          {links.map(({ href, label }) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
      ))}

      <div className="newsletter">
        <h2>Newsletter</h2>
        <p>Receba ideias para digitalizar seu atendimento.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubscribed(true);
          }}
        >
          <input placeholder="Digite seu e-mail" required type="email" />
          <button aria-label="Enviar e-mail" type="submit">
            →
          </button>
        </form>
        {subscribed && <small className="newsletter-feedback">Inscrição confirmada.</small>}
      </div>
    </footer>
  );
}
