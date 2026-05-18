import { HeartHandshake, Lightbulb, TrendingUp } from "lucide-react";
import { PageShell } from "../../components/layout/PageShell.jsx";

export function About() {
  return (
    <PageShell>
      <section className="content-page about-page">
        <div className="content-hero">
          <span>Sobre a Vittae</span>
          <h1>Tecnologia para profissionais do bem-estar.</h1>
          <p>
            A Vittae nasceu para transformar profissionais autônomas em negócios
            digitais mais organizados, visíveis e sustentáveis.
          </p>
        </div>

        <div className="about-grid">
          <article>
            <HeartHandshake aria-hidden="true" />
            <h2>Bem-estar com presença digital</h2>
            <p>
              Facilitamos a conexão entre clientes e profissionais qualificadas,
              sem perder o cuidado humano que esse mercado exige.
            </p>
          </article>
          <article>
            <Lightbulb aria-hidden="true" />
            <h2>Simplicidade para operar</h2>
            <p>
              Agenda, serviços, vouchers e clientes reunidos em uma experiência
              leve, visual e pronta para crescer.
            </p>
          </article>
          <article>
            <TrendingUp aria-hidden="true" />
            <h2>Potencial de mercado</h2>
            <p>
              A Vittae nasce como um MVP focado em massoterapeutas, com caminho
              para expandir para outros segmentos wellness.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
