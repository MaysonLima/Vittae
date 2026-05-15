import { PageShell } from "../../components/layout/PageShell.jsx";
import { SearchBar } from "../../components/ui/SearchBar.jsx";

export function Home() {
  return (
    <PageShell>
      <section className="home-hero">
        <div>
          <h1>
            Conecte-se com <span>quem cuida de voce.</span>
          </h1>
          <p>
            Encontre profissionais qualificados, agende atendimentos e presenteie
            experiencias de bem-estar.
          </p>
          <SearchBar />
        </div>
      </section>
    </PageShell>
  );
}
