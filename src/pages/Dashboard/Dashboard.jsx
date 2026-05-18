import {
  BarChart3,
  CalendarDays,
  CalendarPlus,
  CreditCard,
  DollarSign,
  LogOut,
  MessageSquare,
  PackageOpen,
  Scissors,
  Settings,
  Star,
  Ticket,
  UsersRound
} from "lucide-react";
import { useState } from "react";
import lotusLogo from "../../assets/icons/image.png";
import professionalImage from "../../assets/images/image_Dinha.png";
import { nextAppointments, professional, reviews, services } from "../../data/vittaeMock.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

const navItems = [
  { id: "inicio", label: "Dashboard", icon: BarChart3, href: "/dashboard" },
  { id: "agendamentos", label: "Agendamentos", icon: CalendarDays, href: "/dashboard/agendamentos" },
  { id: "servicos", label: "Serviços", icon: Scissors, href: "/dashboard/servicos" },
  { id: "clientes", label: "Clientes", icon: UsersRound, href: "/dashboard/clientes" },
  { id: "vouchers", label: "Vouchers", icon: Ticket, href: "/dashboard/vouchers" },
  { id: "financeiro", label: "Financeiro", icon: DollarSign, href: "/dashboard/financeiro" },
  { id: "avaliacoes", label: "Avaliações", icon: Star, href: "/dashboard/avaliacoes" },
  { id: "configuracoes", label: "Configurações", icon: Settings, href: "/dashboard/configuracoes" }
];

const stats = [
  { label: "Agendamentos", value: "25", detail: "este mês", icon: CalendarDays },
  { label: "Faturamento", value: "R$ 3.467,21", detail: "este mês", icon: CreditCard },
  { label: "Novos clientes", value: "18", detail: "este mês", icon: UsersRound },
  { label: "Avaliações médias", value: "5,0", detail: "(71 avaliações)", icon: Star }
];

const clients = ["Carla Lima", "Juliana Costa", "Maria Silva", "Beatriz Rocha"];
const revenue = ["R$ 0k", "R$ 1k", "R$ 1,4k", "R$ 2,4k", "R$ 2,5k", "R$ 3,4k"];

function DashboardHome() {
  const [copied, setCopied] = useState(false);
  const [period, setPeriod] = useState("Este mês");

  return (
    <>
      <div className="dashboard-stats">
        {stats.map(({ detail, icon: Icon, label, value }) => (
          <article key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{detail}</small>
          </article>
        ))}
      </div>

      <div className="dashboard-grid">
        <section className="dash-card">
          <h2>Próximos agendamentos</h2>
          <div className="dash-list">
            {nextAppointments.map((item) => (
              <div key={`${item.date}-${item.client}`}>
                <time>
                  {item.date}
                  <small>{item.time}</small>
                </time>
                <span>
                  <strong>{item.client}</strong>
                  <small>{item.service}</small>
                </span>
                <em>{item.status}</em>
              </div>
            ))}
          </div>
          <a href="/dashboard/agendamentos">Ver todos os agendamentos</a>
        </section>

        <section className="dash-card revenue-card">
          <div className="panel-title-row">
            <h2>Faturamento</h2>
            <button
              onClick={() => setPeriod((value) => (value === "Este mês" ? "Últimos 90 dias" : "Este mês"))}
              type="button"
            >
              {period}
            </button>
          </div>
          <div className="line-chart" aria-label="Gráfico de faturamento">
            {revenue.map((item, index) => (
              <span style={{ "--point": index }} key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="public-link-card">
        <input readOnly value={professional.link} />
        <button
          onClick={async () => {
            await navigator.clipboard?.writeText(professional.link);
            setCopied(true);
          }}
          type="button"
        >
          {copied ? "Copiado" : "Copiar link"}
        </button>
      </section>
    </>
  );
}

function DashboardSection({ section }) {
  const [feedback, setFeedback] = useState("");

  if (section === "agendamentos") {
    return (
      <section className="dash-card full">
        <div className="panel-title-row">
          <h2>Agenda da semana</h2>
          <button onClick={() => setFeedback("Novo horário adicionado à agenda demo.")} type="button">
            <CalendarPlus aria-hidden="true" />
            Novo horário
          </button>
        </div>
        {feedback && <p className="action-feedback">{feedback}</p>}
        <div className="appointment-board">
          {nextAppointments.concat(nextAppointments.slice(0, 2)).map((item, index) => (
            <article key={`${item.client}-${index}`}>
              <time>{item.date}</time>
              <strong>{item.time}</strong>
              <span>{item.client}</span>
              <p>{item.service}</p>
              <em>{item.status}</em>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section === "servicos") {
    return (
      <section className="dash-card full">
        <div className="panel-title-row">
          <h2>Serviços cadastrados</h2>
          <button onClick={() => setFeedback("Serviço demo adicionado à lista.")} type="button">Adicionar serviço</button>
        </div>
        {feedback && <p className="action-feedback">{feedback}</p>}
        <div className="service-admin-grid">
          {services.map((service) => (
            <article key={service.title}>
              <PackageOpen aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{formatCurrency(service.price)}</strong>
              <span>{service.duration}</span>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section === "clientes") {
    return (
      <section className="dash-card full">
        <h2>Clientes</h2>
        <div className="client-table">
          {clients.map((client, index) => (
            <article key={client}>
              <span>{client.slice(0, 1)}</span>
              <strong>{client}</strong>
              <p>{index + 2} atendimentos</p>
              <small>Última visita há {index + 1} dias</small>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section === "vouchers") {
    return (
      <section className="dash-card full">
        <div className="panel-title-row">
          <h2>Vouchers</h2>
          <a className="button" href="/voucher">Criar voucher</a>
        </div>
        <div className="voucher-admin-grid">
          {["Dia das Mães", "Massagem relaxante", "Pacote bem-estar"].map((title, index) => (
            <article key={title}>
              <Ticket aria-hidden="true" />
              <h3>{title}</h3>
              <p>{index + 4} vendidos este mês</p>
              <strong>{formatCurrency(150 + index * 45)}</strong>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section === "financeiro") {
    return (
      <section className="dash-card full finance-panel">
        <h2>Financeiro</h2>
        <div className="finance-grid">
          {["Receita do mês", "Recebido", "A receber", "Ticket médio"].map((label, index) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{formatCurrency([3467.21, 2600, 867.21, 156][index])}</strong>
            </article>
          ))}
        </div>
        <div className="finance-lines">
          {nextAppointments.map((item, index) => (
            <p key={item.client}>
              <span>{item.client}</span>
              <strong>{formatCurrency(150 + index * 15)}</strong>
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (section === "avaliacoes") {
    return (
      <section className="dash-card full">
        <h2>Avaliações</h2>
        <div className="review-grid">
          {reviews.map((review) => (
            <article key={review.client}>
              <Star aria-hidden="true" />
              <strong>{review.client}</strong>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (section === "configuracoes") {
    return (
      <section className="dash-card full settings-panel">
        <h2>Configurações do perfil</h2>
        <form>
          <label>
            Nome profissional
            <input defaultValue={professional.name} />
          </label>
          <label>
            Especialidade
            <input defaultValue={professional.role} />
          </label>
          <label>
            Descrição
            <textarea defaultValue={professional.specialty} />
          </label>
          <button onClick={() => setFeedback("Alterações salvas no perfil demo.")} type="button">Salvar alterações</button>
        </form>
        {feedback && <p className="action-feedback">{feedback}</p>}
      </section>
    );
  }

  return <DashboardHome />;
}

export function Dashboard({ section = "inicio" }) {
  const current = navItems.find((item) => item.id === section) || navItems[0];

  return (
    <main className="dashboard-page">
      <aside className="dashboard-sidebar">
        <a className="dashboard-brand" href="/">
          <img alt="" src={lotusLogo} />
          Vittae
        </a>
        <nav aria-label="Painel profissional">
          {navItems.map(({ href, icon: Icon, id, label }) => (
            <a className={current.id === id ? "active" : ""} href={href} key={id}>
              <Icon aria-hidden="true" />
              {label}
              {id === "avaliacoes" && <small>1</small>}
            </a>
          ))}
        </nav>
        <a className="logout-link" href="/">
          <LogOut aria-hidden="true" />
          Sair
        </a>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-topbar">
          <div>
            <h1>
              {current.id === "inicio" ? `Olá, ${professional.name}!` : current.label}
            </h1>
            <p>Bem-vinda de volta ao seu painel.</p>
          </div>
          <div className="dash-profile">
            <MessageSquare aria-hidden="true" />
            <img alt="" src={professionalImage} />
            <span>
              <strong>{professional.name}</strong>
              <a href="/profissional/maria-de-lourdes">Ver perfil</a>
            </span>
          </div>
        </header>

        <DashboardSection section={current.id} />
      </section>
    </main>
  );
}
