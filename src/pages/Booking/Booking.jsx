import {
  CalendarDays,
  Check,
  Clock,
  CreditCard,
  Gift,
  MapPin,
  UserRound
} from "lucide-react";
import { useState } from "react";
import { professional, services } from "../../data/vittaeMock.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

const days = [
  { label: "Hoje", date: "13/05" },
  { label: "Amanhã", date: "14/05" },
  { label: "Sex, 15", date: "15/05" },
  { label: "Sáb, 16", date: "16/05" }
];
const times = ["09:00", "10:30", "14:00", "15:30", "17:00", "18:30"];

export function Booking() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedTime, setSelectedTime] = useState("15:30");

  return (
    <main className="booking-page">
      <a className="mini-brand" href="/">
        Vittae
      </a>
      <section className="booking-shell refined-booking">
        <div className="booking-main">
          <div className="booking-progress" aria-label="Etapas do agendamento">
            <span className="active">1. Serviço</span>
            <span className="active">2. Horário</span>
            <span>3. Confirmação</span>
          </div>

          <span className="eyebrow">Agendamento online</span>
          <h1>Reserve seu atendimento com {professional.name}.</h1>
          <p>
            Escolha o serviço, selecione um horário disponível e revise as
            informações antes de confirmar. O pagamento é combinado no
            atendimento.
          </p>

          <div className="booking-card">
            <div className="booking-card-title">
              <span>01</span>
              <div>
                <h2>Escolha o serviço</h2>
                <p>Todos os atendimentos têm duração e preço definidos pela profissional.</p>
              </div>
            </div>
            <div className="booking-services">
              {services.map((service) => (
                <label
                  className={selectedService.title === service.title ? "selected-option" : ""}
                  key={service.title}
                >
                  <input
                    checked={selectedService.title === service.title}
                    name="service"
                    onChange={() => setSelectedService(service)}
                    type="radio"
                  />
                  <div>
                    <strong>{service.title}</strong>
                    <p>{service.description}</p>
                    <span>
                      <Clock aria-hidden="true" />
                      {service.duration}
                    </span>
                  </div>
                  <b>{formatCurrency(service.price)}</b>
                </label>
              ))}
            </div>
          </div>

          <div className="booking-card">
            <div className="booking-card-title">
              <span>02</span>
              <div>
                <h2>Selecione data e horário</h2>
                <p>Os horários abaixo são mockados para demonstração do MVP.</p>
              </div>
            </div>
            <div className="day-tabs">
              {days.map((day) => (
                <button
                  className={selectedDay.label === day.label ? "active" : ""}
                  key={day.label}
                  onClick={() => setSelectedDay(day)}
                  type="button"
                >
                  <strong>{day.label}</strong>
                  <small>{day.date}</small>
                </button>
              ))}
            </div>
            <div className="time-grid">
              {times.map((time) => (
                <button
                  className={selectedTime === time ? "active" : ""}
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  type="button"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="booking-card client-card">
            <div className="booking-card-title">
              <span>03</span>
              <div>
                <h2>Seus dados</h2>
                <p>Informações básicas para a profissional confirmar o contato.</p>
              </div>
            </div>
            <div className="client-fields">
              <label>
                <UserRound aria-hidden="true" />
                <input placeholder="Seu nome completo" />
              </label>
              <label>
                <CreditCard aria-hidden="true" />
                <input placeholder="Telefone ou WhatsApp" />
              </label>
            </div>
          </div>
        </div>

        <aside className="booking-summary">
          <h2>Resumo do agendamento</h2>
          <div className="summary-professional">
            <strong>{professional.name}</strong>
            <span>{professional.role}</span>
            <p>
              <MapPin aria-hidden="true" />
              {professional.location}
            </p>
          </div>
          <ul>
            <li>
              <CalendarDays aria-hidden="true" />
              {selectedDay.label}, {selectedDay.date} às {selectedTime}
            </li>
            <li>
              <Clock aria-hidden="true" />
              {selectedService.title}, {selectedService.duration}
            </li>
            <li>
              <CreditCard aria-hidden="true" />
              Pagamento no atendimento
            </li>
          </ul>
          <div className="summary-total">
            <span>Total</span>
            <strong>{formatCurrency(selectedService.price)}</strong>
          </div>
          <a
            className="button"
            href={`/agendamento/confirmado?servico=${encodeURIComponent(selectedService.title)}&horario=${encodeURIComponent(selectedTime)}`}
          >
            <Check aria-hidden="true" />
            Confirmar agendamento
          </a>
          <a className="gift-link" href="/voucher">
            <Gift aria-hidden="true" />
            Comprar como presente
          </a>
        </aside>
      </section>
    </main>
  );
}
