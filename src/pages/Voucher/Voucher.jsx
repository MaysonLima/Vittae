import { Download, Send } from "lucide-react";
import { useState } from "react";
import lotusLogo from "../../assets/icons/image.png";
import qrCodeImage from "../../assets/images/Qr_code_test.png";
import ribbonImage from "../../assets/images/Vouncher_fita.png";

export function Voucher() {
  const [feedback, setFeedback] = useState("");
  const [voucher, setVoucher] = useState({
    service: "Massagem Relaxante",
    duration: "60 minutos",
    from: "Carolina",
    to: "Juliana",
    validUntil: "18/05/2026"
  });

  function updateVoucher(field, value) {
    setVoucher((current) => ({ ...current, [field]: value }));
  }

  return (
    <main className="voucher-page">
      <section className="voucher-shell">
        <form className="voucher-editor">
          <div className="voucher-editor-head">
            <span>Personalize o presente</span>
            <p>Escolha o serviço e deixe o voucher pronto para presentear.</p>
          </div>
          <div className="voucher-editor-fields">
            <label>
              Tipo de massagem
              <select
                onChange={(event) => updateVoucher("service", event.target.value)}
                value={voucher.service}
              >
                <option>Massagem Relaxante</option>
                <option>Massagem Terapêutica</option>
                <option>Massagem Linfática</option>
                <option>Pedras quentes</option>
                <option>Reflexologia</option>
              </select>
            </label>
            <label>
              Duração
              <select
                onChange={(event) => updateVoucher("duration", event.target.value)}
                value={voucher.duration}
              >
                <option>30 minutos</option>
                <option>45 minutos</option>
                <option>60 minutos</option>
                <option>90 minutos</option>
              </select>
            </label>
            <label>
              De
              <input
                onChange={(event) => updateVoucher("from", event.target.value)}
                value={voucher.from}
              />
            </label>
            <label>
              Para
              <input
                onChange={(event) => updateVoucher("to", event.target.value)}
                value={voucher.to}
              />
            </label>
            <label>
              Validade
              <input
                onChange={(event) => updateVoucher("validUntil", event.target.value)}
                value={voucher.validUntil}
              />
            </label>
          </div>
        </form>

        <div className="voucher-ticket">
          <div className="ticket-brand">
            <img alt="" src={lotusLogo} />
            Vittae
          </div>
          <span>Com carinho para você</span>
          <div className="ticket-content">
            <div>
              <h1>{voucher.service || "Massagem Relaxante"}</h1>
              <strong>{voucher.duration || "60 minutos"}</strong>
              <p>De: {voucher.from || "Carolina"}</p>
              <p>Para: {voucher.to || "Juliana"}</p>
            </div>
            <div className="ticket-meta">
              <small>ABC123456</small>
              <em>Válido até {voucher.validUntil || "18/05/2026"}</em>
            </div>
          </div>
          <img alt="" className="voucher-ribbon" src={ribbonImage} />
          <div className="qr-card">
            <img alt="QR Code para agendar voucher" className="real-qr" src={qrCodeImage} />
            <p>Agende agora pelo QR Code</p>
          </div>
        </div>

        <div className="voucher-actions">
          <button
            onClick={() => {
              setFeedback("Abrimos seu aplicativo de e-mail para enviar o voucher.");
              window.location.href = `mailto:?subject=Seu voucher Vittae&body=${encodeURIComponent(
                `${voucher.to} recebeu um voucher Vittae de ${voucher.from} para ${voucher.service}. Acesse: vittae.com.br/voucher`
              )}`;
            }}
            type="button"
          >
            <Send aria-hidden="true" />
            Enviar como presente
          </button>
          <button
            className="secondary"
            onClick={() => {
              setFeedback("Voucher pronto para salvar. Use a impressão como PDF do navegador.");
              window.print();
            }}
            type="button"
          >
            <Download aria-hidden="true" />
            Salvar Voucher
          </button>
          {feedback && <p className="action-feedback">{feedback}</p>}
        </div>
      </section>
    </main>
  );
}
