import {
  BarChart3,
  CalendarCheck,
  Gift,
  Link2,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { PageShell } from "../../components/layout/PageShell.jsx";
import professionalImage from "../../assets/images/image.png";

const features = [
  {
    icon: Link2,
    title: "Página profissional",
    text: "Um link bonito para apresentar serviços, avaliações e horários."
  },
  {
    icon: CalendarCheck,
    title: "Agenda online",
    text: "Receba agendamentos sem depender de conversas longas no WhatsApp."
  },
  {
    icon: Gift,
    title: "Vouchers",
    text: "Venda experiências digitais para presentes e datas especiais."
  },
  {
    icon: BarChart3,
    title: "Gestão simples",
    text: "Acompanhe clientes, faturamento e desempenho em uma rotina clara."
  }
];

export function ForProfessionals() {
  return (
    <PageShell>
      <section className="content-page pro-page">
        <div className="pro-hero">
          <div>
            <span>Para profissionais</span>
            <h1>Transforme seu atendimento em um negócio digital organizado.</h1>
            <p>
              A Vittae ajuda profissionais do bem-estar a criarem presença
              digital, venderem melhor e manterem a agenda sob controle.
            </p>
            <div className="pro-actions">
              <a className="button" href="/cadastro">
                Criar minha página
              </a>
              <a href="/dashboard">Ver painel demo</a>
            </div>
          </div>
          <img alt="" src={professionalImage} />
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, text, title }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <section className="pro-proof">
          <div>
            <ShieldCheck aria-hidden="true" />
            <h2>Feito para transmitir confiança.</h2>
            <p>
              Perfis claros, horários visíveis e uma experiência de compra que
              ajuda o cliente a decidir com segurança.
            </p>
          </div>
          <div>
            <MessageCircle aria-hidden="true" />
            <h2>WhatsApp continua junto.</h2>
            <p>
              A plataforma organiza a jornada e mantém o contato humano quando
              ele realmente importa.
            </p>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
