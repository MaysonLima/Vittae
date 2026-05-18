import { Download, Send } from "lucide-react";
import { useState } from "react";
import lotusLogo from "../../assets/icons/image.png";
import qrCodeImage from "../../assets/images/Qr_code_test.png";
import ribbonImage from "../../assets/images/Vouncher_fita.png";

export function Voucher() {
  const [feedback, setFeedback] = useState("");

  return (
    <main className="voucher-page">
      <section className="voucher-shell">
        <div className="voucher-ticket">
          <div className="ticket-brand">
            <img alt="" src={lotusLogo} />
            Vittae
          </div>
          <span>Com carinho para você</span>
          <div className="ticket-content">
            <h1>Massagem Relaxante</h1>
            <strong>60 minutos</strong>
            <p>De: Carolina</p>
            <p>Para: Juliana</p>
            <small>ABC123456</small>
            <em>Válido até 18/05/2026</em>
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
              window.location.href =
                "mailto:?subject=Seu voucher Vittae&body=Você recebeu um voucher Vittae para Massagem Relaxante. Acesse: vittae.com.br/voucher";
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
