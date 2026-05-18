import { CalendarDays, CheckCircle2, Clock, MessageCircle, Sparkles } from "lucide-react";
import { professional, services } from "../../data/vittaeMock.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export function BookingConfirmation() {
  const service = services[0];

  return (
    <main className="booking-page confirmation-page">
      <a className="mini-brand" href="/">
        Vittae
      </a>

      <section className="confirmation-shell">
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <CheckCircle2 aria-hidden="true" />
          </div>
          <span>Agendamento confirmado</span>
          <h1>Seu horário com {professional.name} está reservado.</h1>
          <p>
            Enviamos os detalhes para o seu e-mail. Você também pode falar com a
            profissional pelo WhatsApp se precisar combinar algum detalhe.
          </p>

          <div className="confirmation-details">
            <div>
              <CalendarDays aria-hidden="true" />
              <span>Hoje, 13/05 às 15:30</span>
            </div>
            <div>
              <Clock aria-hidden="true" />
              <span>{service.title}, {service.duration}</span>
            </div>
            <div>
              <Sparkles aria-hidden="true" />
              <span>Total: {formatCurrency(service.price)}</span>
            </div>
          </div>

          <div className="confirmation-actions">
            <a className="button" href="/profissional/maria-de-lourdes">
              Voltar ao perfil
            </a>
            <a
              className="whatsapp-button"
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20confirmarei%20meu%20agendamento%20pela%20Vittae."
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <aside className="gift-aside">
          <span>Opção de presente</span>
          <h2>Quer presentear alguém com uma experiência de bem-estar?</h2>
          <p>
            Crie um voucher separado, com mensagem e QR Code. Ele não interfere
            neste agendamento.
          </p>
          <a href="/voucher">Criar voucher presente</a>
        </aside>
      </section>
    </main>
  );
}
