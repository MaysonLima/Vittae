import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  FileText,
  LifeBuoy,
  LockKeyhole,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { PageShell } from "../../components/layout/PageShell.jsx";

const infoPages = {
  carreiras: {
    layout: "editorial",
    eyebrow: "Carreiras",
    title: "Construa tecnologia para uma vida mais leve.",
    text: "A Vittae ainda está em fase MVP, mas já nasce com cultura de produto, cuidado e execução.",
    icon: BriefcaseBusiness,
    cards: ["Produto e UX", "Desenvolvimento", "Parcerias e comunidade"]
  },
  contrato: {
    layout: "legal",
    eyebrow: "Contrato",
    title: "Condições claras para profissionais e clientes.",
    text: "Acordos simples para criação de perfil, agendamentos, vouchers digitais e responsabilidades de cada parte.",
    icon: FileText,
    cards: ["Uso da plataforma", "Serviços profissionais", "Cancelamentos"]
  },
  planos: {
    layout: "pricing",
    eyebrow: "Planos",
    title: "Comece grátis e evolua quando seu negócio crescer.",
    text: "Entrada gratuita para o MVP, com visão futura de assinatura premium, destaque e recursos avançados.",
    icon: Sparkles,
    cards: ["Gratuito", "Premium", "Destaque"]
  },
  vantagens: {
    layout: "feature",
    eyebrow: "Vantagens",
    title: "Menos improviso, mais presença profissional.",
    text: "Página profissional, agenda online, vouchers, clientes e métricas em uma experiência simples e elegante.",
    icon: ShieldCheck,
    cards: ["Mais confiança", "Agenda organizada", "Venda de vouchers"]
  },
  faq: {
    layout: "faq",
    eyebrow: "FAQ",
    title: "Perguntas frequentes sobre a Vittae.",
    text: "Respostas rápidas sobre cadastro, agenda, vouchers, pagamentos e painel profissional.",
    icon: CircleHelp,
    cards: ["Como cadastro meu perfil?", "Como funcionam vouchers?", "Preciso pagar agora?"]
  },
  ajuda: {
    layout: "support",
    eyebrow: "Central de ajuda",
    title: "Suporte simples para cada etapa.",
    text: "Orientação para criar página, ajustar serviços, configurar horários e acompanhar resultados.",
    icon: LifeBuoy,
    cards: ["Conta e acesso", "Agenda", "Vouchers e clientes"]
  },
  seguranca: {
    layout: "legal",
    eyebrow: "Segurança",
    title: "Confiança para clientes e profissionais.",
    text: "Organização de informações importantes com clareza, boas práticas de privacidade e experiência confiável.",
    icon: LockKeyhole,
    cards: ["Acesso seguro", "Dados organizados", "Transparência"]
  },
  privacidade: {
    layout: "legal",
    eyebrow: "Privacidade",
    title: "Privacidade tratada como parte do cuidado.",
    text: "Dados de contato, agenda e preferências usados apenas para melhorar atendimento e gestão.",
    icon: ShieldCheck,
    cards: ["Dados essenciais", "Controle do usuário", "Uso transparente"]
  },
  termos: {
    layout: "legal",
    eyebrow: "Termos de uso",
    title: "Regras simples para usar a Vittae.",
    text: "Uso da plataforma, responsabilidades, conteúdo de perfis, agendamentos e vouchers digitais.",
    icon: FileText,
    cards: ["Conta", "Agendamentos", "Privacidade"]
  }
};

function PricingLayout({ page }) {
  return (
    <div className="pricing-grid">
      {page.cards.map((card, index) => (
        <article className={index === 1 ? "featured" : ""} key={card}>
          <span>{card}</span>
          <h2>{index === 0 ? "R$0" : index === 1 ? "Premium" : "Destaque"}</h2>
          <p>
            {index === 0
              ? "Perfil profissional, serviços e agenda visual para validar o MVP."
              : index === 1
                ? "Recursos avançados de gestão, métricas e personalização."
                : "Mais visibilidade em buscas e campanhas sazonais."}
          </p>
          <a href="/cadastro">{index === 0 ? "Começar grátis" : "Entrar na lista"}</a>
        </article>
      ))}
    </div>
  );
}

function FaqLayout({ page }) {
  return (
    <div className="faq-list">
      {page.cards.map((card, index) => (
        <details key={card} open={index === 0}>
          <summary>{card}</summary>
          <p>
            No MVP, esta etapa é simulada visualmente para demonstrar o fluxo de
            produto. A versão futura conectará autenticação, agenda real e pagamentos.
          </p>
        </details>
      ))}
    </div>
  );
}

function DefaultLayout({ page }) {
  return (
    <div className={`info-card-grid layout-${page.layout}`}>
      {page.cards.map((card, index) => (
        <article key={card}>
          <CheckCircle2 aria-hidden="true" />
          <strong>{card}</strong>
          <p>
            {index === 0
              ? "Uma experiência clara para apresentar valor sem parecer um sistema genérico."
              : index === 1
                ? "Fluxos pensados para reduzir fricção e aumentar confiança."
                : "Base preparada para evoluir com validação real de profissionais."}
          </p>
        </article>
      ))}
    </div>
  );
}

export function InfoPage({ type = "faq" }) {
  const page = infoPages[type] || infoPages.faq;
  const Icon = page.icon;

  return (
    <PageShell>
      <section className={`content-page info-page info-${page.layout}`}>
        <div className="info-hero">
          <div className="info-icon">
            <Icon aria-hidden="true" />
          </div>
          <span>{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
          <div className="info-actions">
            <a className="button" href="/cadastro">
              Começar agora
            </a>
            <a href="/profissionais">
              Explorar profissionais
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        {page.layout === "pricing" ? <PricingLayout page={page} /> : null}
        {page.layout === "faq" || page.layout === "support" ? <FaqLayout page={page} /> : null}
        {page.layout !== "pricing" && page.layout !== "faq" && page.layout !== "support" ? (
          <DefaultLayout page={page} />
        ) : null}
      </section>
    </PageShell>
  );
}
