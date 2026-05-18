import { MapPin, Search, SlidersHorizontal, Star } from "lucide-react";
import { useState } from "react";
import { PageShell } from "../../components/layout/PageShell.jsx";
import professionalImage from "../../assets/images/image_Dinha.png";
import { professionals } from "../../data/vittaeMock.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

export function ExploreProfessionals() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <PageShell>
      <section className="content-page explore-page">
        <div className="content-hero compact">
          <span>Buscar profissionais</span>
          <h1>Encontre profissionais de bem-estar perto de você.</h1>
          <p>
            Compare serviços, horários, avaliações e escolha a experiência que
            combina melhor com o seu momento.
          </p>
        </div>

        <div className="explore-toolbar">
          <label>
            <Search aria-hidden="true" />
            <input placeholder="Massagem relaxante, drenagem, terapêutica..." />
          </label>
          <label>
            <MapPin aria-hidden="true" />
            <input placeholder="Sua localização" />
          </label>
          <button onClick={() => setShowFilters((value) => !value)} type="button">
            <SlidersHorizontal aria-hidden="true" />
            Filtros
          </button>
        </div>

        {showFilters && (
          <div className="filter-panel">
            {["Todos", "Hoje", "Até R$150", "Melhor avaliadas", "Com vouchers"].map((filter) => (
              <button
                className={activeFilter === filter ? "active" : ""}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        <div className="professionals-grid">
          {professionals.map((item) => (
            <article className="professional-result" key={item.name}>
              <div className="professional-avatar">
                <img alt="" src={professionalImage} />
              </div>
              <div className="professional-info">
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                </div>
                <span>
                  <Star aria-hidden="true" />
                  {item.rating.toFixed(1)} ({item.reviews})
                </span>
                <small>{item.location}</small>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <em key={tag}>{tag}</em>
                  ))}
                </div>
              </div>
              <div className="result-action">
                <small>A partir de</small>
                <strong>{formatCurrency(item.price)}</strong>
                <p>{item.next}</p>
                <a href="/profissional/maria-de-lourdes">Ver perfil</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
