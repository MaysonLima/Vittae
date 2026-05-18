import { Mail } from "lucide-react";
import { useState } from "react";
import lotusLogo from "../../assets/icons/image.png";

export function RecoverPassword() {
  const [sent, setSent] = useState(false);

  return (
    <main className="auth-page">
      <section className="auth-card">
        <a className="auth-brand" href="/">
          <img alt="" src={lotusLogo} />
          <span>Vittae</span>
        </a>
        <div className="auth-heading">
          <span>Recuperar acesso</span>
          <h1>Redefina sua senha</h1>
          <p>
            Informe seu e-mail e enviaremos as instruções para você voltar ao
            painel.
          </p>
        </div>
        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            E-mail
            <span>
              <Mail aria-hidden="true" />
              <input placeholder="seu@email.com" required type="email" />
            </span>
          </label>
          <button className="button" type="submit">
            Enviar instruções
          </button>
        </form>
        {sent && (
          <p className="action-feedback">
            Pronto. Enviamos um link de recuperação para o e-mail informado.
          </p>
        )}
        <p className="auth-switch">
          Lembrou a senha? <a href="/login">Entrar</a>
        </p>
      </section>
      <aside className="auth-side">
        <h2>Segurança simples, sem atrapalhar sua rotina.</h2>
        <p>
          Este fluxo simula a recuperação de senha para o MVP visual da Vittae.
        </p>
      </aside>
    </main>
  );
}
