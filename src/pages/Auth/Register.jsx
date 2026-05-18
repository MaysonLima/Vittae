import { Eye, Lock, Mail, UserRound } from "lucide-react";
import lotusLogo from "../../assets/icons/image.png";

export function Register() {
  return (
    <main className="auth-page register-page">
      <section className="auth-card">
        <a className="auth-brand" href="/">
          <img alt="" src={lotusLogo} />
          <span>Vittae</span>
        </a>
        <div className="auth-heading">
          <span>Comece grátis</span>
          <h1>Crie sua página profissional</h1>
          <p>Monte seu perfil, organize serviços e comece a receber agendamentos.</p>
        </div>
        <form className="auth-form">
          <label>
            Nome completo
            <span>
              <UserRound aria-hidden="true" />
              <input placeholder="Como deseja ser reconhecida" />
            </span>
          </label>
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
              <input placeholder="Crie uma senha segura" type="password" />
              <Eye aria-hidden="true" />
            </span>
          </label>
          <label className="select-like">
            Área de atuação
            <select defaultValue="massoterapia">
              <option value="massoterapia">Massoterapia</option>
              <option value="estetica">Estética</option>
              <option value="terapias">Terapias integrativas</option>
            </select>
          </label>
          <a className="button" href="/dashboard">
            Criar minha página gratuita
          </a>
        </form>
        <p className="auth-switch">
          Já tem conta? <a href="/login">Entrar</a>
        </p>
      </section>
      <aside className="auth-side">
        <h2>Sua Vittae fica pronta para apresentar serviços e vender melhor.</h2>
        <p>
          Depois do cadastro, você pode personalizar perfil, horários, vouchers
          e acompanhar seus resultados no painel.
        </p>
      </aside>
    </main>
  );
}
