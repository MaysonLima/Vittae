import { PageShell } from "../../components/layout/PageShell.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { SearchBar } from "../../components/ui/SearchBar.jsx";
import heroImage from "../../assets/images/image2.png";
import professionalImage from "../../assets/images/image.png";
import { BarChart3, CalendarCheck, Rocket, SunMedium } from "lucide-react";

const benefits = [
  {
    icon: SunMedium,
    title: "Mais visibilidade",
    description: "Destaque seus serviços para mais clientes"
  },
  {
    icon: CalendarCheck,
    title: "Agenda inteligente",
    description: "Gerencie horários e agendamentos com facilidade"
  },
  {
    icon: Rocket,
    title: "Desenvolva seu negócio",
    description: "Ferramentas completas para profissionalizar o seu atendimento"
  },
  {
    icon: BarChart3,
    title: "Acompanhe seus resultados",
    description: "Veja faturamento, clientes e desempenho da sua agenda."
  }
];

export function Home() {
  return (
    <PageShell>
      <div className="home-page">
        <section className="home-hero">
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

        <section className="professional-strip" id="para-profissionais">
          <div className="professional-intro">
            <div className="professional-copy">
              <h2>Para profissionais</h2>
              <p>
                Tenha sua página profissional, gerencie sua agenda e conquiste
                mais clientes todos os dias
              </p>
            </div>

            <img
              alt="Profissional de bem-estar segurando um tablet"
              className="professional-photo"
              src={professionalImage}
            />

            <Button variant="outline">Quero me cadastrar</Button>
          </div>

          <div className="benefits-grid">
            {benefits.map(({ description, icon: Icon, title }) => (
              <article className="benefit-item" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
