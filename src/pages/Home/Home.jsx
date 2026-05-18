import { PageShell } from "../../components/layout/PageShell.jsx";
import { SearchBar } from "../../components/ui/SearchBar.jsx";
import stepOneImage from "../../assets/images/1.png";
import stepTwoImage from "../../assets/images/2.png";
import stepThreeImage from "../../assets/images/3.png";
import heroImage from "../../assets/images/image2.png";
import stillLifeImage from "../../assets/images/vaso.png";
import {
  BarChart3,
  CalendarCheck,
  Eye,
  Tag,
  UsersRound
} from "lucide-react";

const valueItems = [
  {
    icon: UsersRound,
    title: "Página profissional",
    description: "Um perfil elegante para apresentar seus serviços com confiança."
  },
  {
    icon: CalendarCheck,
    title: "Agenda online",
    description: "Horários organizados e menos troca de mensagens no WhatsApp."
  },
  {
    icon: Tag,
    title: "Vouchers digitais",
    description: "Experiências presenteáveis para vender além do atendimento avulso."
  },
  {
    icon: BarChart3,
    title: "Visão do negócio",
    description: "Acompanhe agenda, clientes e faturamento com mais clareza."
  }
];

const steps = [
  {
    image: stepOneImage,
    title: "Descubra profissionais",
    description: "Busque por profissionais perto de você."
  },
  {
    image: stepTwoImage,
    title: "Agende com facilidade",
    description: "Escolha o melhor horário e faça seu agendamento."
  },
  {
    image: stepThreeImage,
    title: "Aproveite",
    description: "Viva sua experiência de bem-estar e sinta a diferença."
  }
];

export function Home() {
  return (
    <PageShell>
      <section className="hero-section" id="buscar-profissionais">
        <div className="hero-copy">
          <h1>
            Conecte-se com <span>quem cuida de você.</span>
          </h1>
          <p>
            Encontre profissionais qualificados, agende atendimentos e
            presenteie experiências de bem-estar.
          </p>
          <SearchBar />
        </div>

        <div
          aria-label="Atendimento de bem-estar"
          className="hero-visual"
          style={{ "--hero-image": `url(${heroImage})` }}
        />
      </section>

      <section className="value-section">
        <div className="section-heading">
          <span>Plataforma Vittae</span>
          <h2>Uma experiência simples para cuidar, agendar e crescer.</h2>
          <p>
            A Vittae reúne presença digital, agenda, vouchers e gestão em uma
            experiência simples para profissionais do bem-estar.
          </p>
        </div>

        <div className="value-card">
          {valueItems.map(({ description, icon: Icon, title }) => (
            <article className="value-item" key={title}>
              <div className="value-icon">
                <Icon aria-hidden="true" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-pill">Crie sua conta</div>
        <h2>Comece agora mesmo</h2>

        <div className="steps-row">
          {steps.map(({ description, image, title }) => (
            <article className="step-card" key={title}>
              <div className="step-illustration">
                <img alt="" src={image} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="signup-section" id="para-profissionais">
          <div className="signup-copy">
            <img alt="" className="still-life" src={stillLifeImage} />
            <span>Para profissionais</span>
            <h2>Junte-se ao Vittae e alavanque seu negócio</h2>
            <p>
              Crie seu perfil de forma gratuita e conecte-se com clientes que
              valorizam suas habilidades.
            </p>
          </div>

          <form className="signup-card">
            <h2>Crie o seu perfil gratuitamente</h2>
            <label>
              Nome Completo
              <input placeholder="Como deseja ser reconhecido(a)" />
            </label>
            <label>
              Seu endereço e-mail
              <input placeholder="Seu@email.com" />
            </label>
            <label>
              Escolha uma senha
              <span className="password-field">
                <input placeholder="Crie uma senha segura" type="password" />
                <Eye aria-hidden="true" />
              </span>
            </label>
            <a className="signup-submit" href="/cadastro">Criar minha página gratuita</a>
            <small>
              Ao cadastrar-se, você concorda com nossos Termos de Uso e nossa
              Política de Privacidade.
            </small>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
