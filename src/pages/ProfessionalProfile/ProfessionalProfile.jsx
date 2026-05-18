import {
  CalendarDays,
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star
} from "lucide-react";
import { useState } from "react";
import officeImage from "../../assets/images/Dinha_consulltorio.png";
import professionalImage from "../../assets/images/image_Dinha.png";
import { appointmentDays, professional, services } from "../../data/vittaeMock.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export function ProfessionalProfile() {
  const [showMoreDays, setShowMoreDays] = useState(false);
  const days = showMoreDays
    ? [
        ...appointmentDays,
        { label: "Quinta - 15/05", slots: ["08:30", "11:00", "13:30", "17:30"] },
        { label: "Sexta - 16/05", slots: ["09:30", "12:00", "15:00", "18:00"] }
      ]
    : appointmentDays;

  return (
    <main className="profile-page">
      <nav className="breadcrumb" aria-label="Caminho">
        <a href="/">Início</a>
        <ChevronRight aria-hidden="true" />
        <a href="/profissionais">Profissionais</a>
        <ChevronRight aria-hidden="true" />
        <span>{professional.name}</span>
      </nav>

      <section className="profile-layout">
        <div className="profile-left">
          <article className="profile-card">
            <img alt="" className="profile-photo" src={professionalImage} />
            <div className="profile-summary">
              <h1>
                {professional.name} <span>- {professional.role}</span>
                <ShieldCheck aria-label="Perfil verificado" />
              </h1>
              <div className="rating-line">
                <Star aria-hidden="true" />
                <strong>{professional.rating.toFixed(1)}</strong>
                <span>({professional.reviews} avaliações)</span>
              </div>
              <p className="location-line">
                <MapPin aria-hidden="true" />
                {professional.location}
              </p>
              <p>{professional.specialty}</p>
              <div className="tag-row">
                {professional.tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
            </div>
            <div className="profile-actions">
              <a className="button" href="/agendamento">
                <CalendarDays aria-hidden="true" />
                Agendar agora
              </a>
              <a
                className="whatsapp-button"
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pela%20Vittae%20e%20quero%20saber%20mais%20sobre%20seus%20atendimentos."
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" />
                Conversar no Whatsapp
              </a>
            </div>
          </article>

          <article className="profile-panel">
            <h2>Serviços</h2>
            <div className="service-list">
              {services.map((service) => (
                <div className="service-row" key={service.title}>
                  <div>
                    <strong>{service.title}</strong>
                    <p>{service.description}</p>
                  </div>
                  <span>
                    <Clock aria-hidden="true" />
                    {service.duration}
                  </span>
                  <b>{formatCurrency(service.price)}</b>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="profile-right">
          <div
            aria-label="Ambiente de massoterapia"
            className="profile-cover"
            style={{ "--cover-image": `url(${officeImage})` }}
          />

          <article className="profile-panel schedule-panel">
            <div className="panel-title-row">
              <h2>Próximos horários</h2>
              <a href="/agendamento">Ver agenda completa</a>
            </div>
            {days.map((day) => (
              <div className="slot-day" key={day.label}>
                <strong>{day.label}</strong>
                <div>
                  {day.slots.map((slot, index) => (
                    <a className={index % 2 === 0 ? "slot muted" : "slot"} href="/agendamento" key={slot}>
                      {slot}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <button className="more-days" onClick={() => setShowMoreDays((value) => !value)} type="button">
              {showMoreDays ? "Ver menos dias" : "Ver mais dias"}
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}
