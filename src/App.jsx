import { About } from "./pages/About/About.jsx";
import { Login } from "./pages/Auth/Login.jsx";
import { RecoverPassword } from "./pages/Auth/RecoverPassword.jsx";
import { Register } from "./pages/Auth/Register.jsx";
import { Booking } from "./pages/Booking/Booking.jsx";
import { BookingConfirmation } from "./pages/Booking/BookingConfirmation.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { ExploreProfessionals } from "./pages/ExploreProfessionals/ExploreProfessionals.jsx";
import { ForProfessionals } from "./pages/ForProfessionals/ForProfessionals.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { InfoPage } from "./pages/Info/InfoPage.jsx";
import { ProfessionalProfile } from "./pages/ProfessionalProfile/ProfessionalProfile.jsx";
import { Voucher } from "./pages/Voucher/Voucher.jsx";

const routes = {
  "/": <Home />,
  "/profissionais": <ExploreProfessionals />,
  "/profissional/maria-de-lourdes": <ProfessionalProfile />,
  "/maria-de-lourdes": <ProfessionalProfile />,
  "/agendamento": <Booking />,
  "/agendamento/confirmado": <BookingConfirmation />,
  "/voucher": <Voucher />,
  "/para-profissionais": <ForProfessionals />,
  "/sobre": <About />,
  "/login": <Login />,
  "/cadastro": <Register />,
  "/recuperar-senha": <RecoverPassword />,
  "/carreiras": <InfoPage type="carreiras" />,
  "/contrato": <InfoPage type="contrato" />,
  "/planos": <InfoPage type="planos" />,
  "/vantagens": <InfoPage type="vantagens" />,
  "/faq": <InfoPage type="faq" />,
  "/ajuda": <InfoPage type="ajuda" />,
  "/seguranca": <InfoPage type="seguranca" />,
  "/privacidade": <InfoPage type="privacidade" />,
  "/termos": <InfoPage type="termos" />
};

function resolveRoute() {
  const { pathname } = window.location;

  if (pathname.startsWith("/dashboard")) {
    const section = pathname.split("/")[2] || "inicio";
    return <Dashboard section={section} />;
  }

  return routes[pathname] || <Home />;
}

export default function App() {
  return resolveRoute();
}
