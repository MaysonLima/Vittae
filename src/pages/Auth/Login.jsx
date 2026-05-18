import { Eye, Lock, Mail } from "lucide-react";
import lotusLogo from "../../assets/icons/image.png";

export function Login() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <a className="auth-brand" href="/">
          <img alt="" src={lotusLogo} />
          <span>Vittae</span>
        </a>
        <div className="auth-heading">
          <span>Bem-vinda de volta</span>
          <h1>Entrar na sua conta</h1>
          <p>Acesse sua agenda, clientes, vouchers e resultados.</p>
        </div>
        <form className="auth-form">
          <label>
            E-mail
            <span>
              <Mail aria-hidden="true" />
              <input placeholder="seu@email.com" type="email" />
            </span>
          </label>
          <label>
            Senha
            <span>
              <Lock aria-hidden="true" />
              <input placeholder="Sua senha" type="password" />
              <Eye aria-hidden="true" />
            </span>
          </label>
          <div className="auth-row">
            <label>
              <input type="checkbox" />
              Lembrar de mim
            </label>
            <a href="/recuperar-senha">Esqueci minha senha</a>
          </div>
          <a className="button" href="/dashboard">
            Entrar
          </a>
        </form>
        <p className="auth-switch">
          Ainda não tem conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </section>
      <aside className="auth-side">
        <h2>Organize sua rotina de bem-estar em poucos minutos.</h2>
        <p>
          Uma presença profissional clara, agenda online e gestão simples para
          crescer com mais tranquilidade.
        </p>
      </aside>
    </main>
  );
}
