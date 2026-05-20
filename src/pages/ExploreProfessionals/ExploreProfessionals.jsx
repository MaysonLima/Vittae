import {
  Calendar,
  ChevronDown,
  CircleDollarSign,
  Heart,
  MapPin,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  UserRound
} from "lucide-react";
import { useState } from "react";
import { PageShell } from "../../components/layout/PageShell.jsx";
import professionalImage from "../../assets/images/image2.png";
import searchHeroImage from "../../assets/images/vaso_2.png";
import { professionals } from "../../data/vittaeMock.js";
import { formatCurrency } from "../../utils/formatCurrency.js";

const serviceOptions = ["Massagem", "Drenagem", "Terapêutica", "Pedras quentes"];
const locationOptions = ["São Paulo, SP", "Belo Horizonte, MG", "Salvador, BA", "Jacaraí, BA"];

export function ExploreProfessionals() {
  const [activeFilters, setActiveFilters] = useState(["Todos os filtros"]);
  const [savedCards, setSavedCards] = useState([]);
  const [service, setService] = useState("Massagem");
  const [location, setLocation] = useState("São Paulo, SP");
  const [openSearchField, setOpenSearchField] = useState("");
  const [openFilter, setOpenFilter] = useState("");
  const [filterValues, setFilterValues] = useState({});
  const cards = [...professionals, ...professionals].slice(0, 4);
  const filters = [
    { label: "Todos os filtros", icon: SlidersHorizontal, options: ["Todos", "Hoje", "Até R$150", "Melhor avaliadas"] },
    { label: "Tipos de serviço", icon: UserRound, options: ["Massagem", "Drenagem", "Terapêutica", "Pedras quentes"] },
    { label: "Faixa de preço", icon: CircleDollarSign, options: ["Até R$120", "Até R$150", "Até R$180", "Qualquer preço"] },
    { label: "Avaliação", icon: Star, options: ["4,5+", "4,8+", "5,0", "Todas"] },
    { label: "Disponibilidade", icon: Calendar, options: ["Hoje", "Amanhã", "Esta semana", "Qualquer dia"] }
  ];

  const toggleSearchField = (field) => {
    setOpenFilter("");
    setOpenSearchField((current) => (current === field ? "" : field));
  };

  const chooseSearchOption = (field, value) => {
    if (field === "service") {
      setService(value);
    } else {
      setLocation(value);
    }
    setOpenSearchField("");
  };

  return (
    <PageShell>
      <section className="explore-marketplace">
        <div className="explore-search-hero" style={{ "--explore-hero-image": `url(${searchHeroImage})` }}>
          <div>
            <h1>Encontre bem-estar perto de você</h1>
            <p>Massagens, terapias e cuidados para mente, corpo e alma.</p>
          </div>

          <form action="/profissionais" className="explore-search-box" method="get">
            <input name="servico" type="hidden" value={service} />
            <input name="localizacao" type="hidden" value={location} />

            <div className="search-select-field">
              <button
                aria-expanded={openSearchField === "service"}
                className="search-select-trigger"
                onClick={() => toggleSearchField("service")}
                type="button"
              >
                <span>
                  <Sparkles aria-hidden="true" />
                </span>
                <div>
                  <small>Serviço</small>
                  <strong>{service}</strong>
                </div>
                <ChevronDown aria-hidden="true" />
              </button>
              {openSearchField === "service" && (
                <div className="search-select-menu">
                  {serviceOptions.map((option) => (
                    <button key={option} onClick={() => chooseSearchOption("service", option)} type="button">
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="search-select-field">
              <button
                aria-expanded={openSearchField === "location"}
                className="search-select-trigger"
                onClick={() => toggleSearchField("location")}
                type="button"
              >
                <span>
                  <MapPin aria-hidden="true" />
                </span>
                <div>
                  <small>Localização</small>
                  <strong>{location}</strong>
                </div>
                <ChevronDown aria-hidden="true" />
              </button>
              {openSearchField === "location" && (
                <div className="search-select-menu">
                  {locationOptions.map((option) => (
                    <button key={option} onClick={() => chooseSearchOption("location", option)} type="button">
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button type="submit">
              <Search aria-hidden="true" />
              Buscar
            </button>
          </form>
        </div>

        <div className="explore-filter-row">
          <div className="explore-filter-chips">
            {filters.map(({ icon: Icon, label, options }) => (
              <div className="filter-dropdown" key={label}>
                <button
                  className={activeFilters.includes(label) ? "active" : ""}
                  onClick={() => {
                    setOpenSearchField("");
                    setOpenFilter((current) => (current === label ? "" : label));
                  }}
                  type="button"
                >
                  <Icon aria-hidden="true" />
                  {filterValues[label] || label}
                  <ChevronDown aria-hidden="true" />
                </button>
                {openFilter === label && (
                  <div className="filter-menu">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setFilterValues((current) => ({ ...current, [label]: option }));
                          setActiveFilters((current) => [
                            ...current.filter((item) => item !== "Todos os filtros" && item !== label),
                            label
                          ]);
                          setOpenFilter("");
                        }}
                        type="button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              className="clear-filters"
              onClick={() => {
                setActiveFilters(["Todos os filtros"]);
                setFilterValues({});
                setOpenFilter("");
              }}
              type="button"
            >
              <RotateCcw aria-hidden="true" />
              Limpar filtros
            </button>
          </div>
        </div>

        <div className="explore-results-head">
          <p>
            <strong>124</strong> profissionais encontrados
          </p>
          <label>
            Ordenar por
            <select defaultValue="relevancia">
              <option value="relevancia">Relevância</option>
              <option value="avaliacao">Melhor avaliação</option>
              <option value="preco">Menor preço</option>
              <option value="horario">Próximo horário</option>
            </select>
          </label>
        </div>

        <div className="professionals-grid explore-card-grid">
          {cards.map((item, index) => (
            <article className="professional-result professional-card" key={`${item.name}-${index}`}>
              <div className="professional-avatar professional-card-image">
                <img alt="" src={professionalImage} />
                <button
                  aria-label="Salvar profissional"
                  className={savedCards.includes(`${item.name}-${index}`) ? "saved" : ""}
                  onClick={() =>
                    setSavedCards((current) =>
                      current.includes(`${item.name}-${index}`)
                        ? current.filter((saved) => saved !== `${item.name}-${index}`)
                        : [...current, `${item.name}-${index}`]
                    )
                  }
                  type="button"
                >
                  <Heart aria-hidden="true" />
                </button>
              </div>
              <div className="professional-info">
                <div>
                  <h2>{item.name} - {item.role}</h2>
                </div>
                <span>
                  <Star aria-hidden="true" />
                  {item.rating.toFixed(1)} ({item.reviews})
                </span>
                <small>
                  <MapPin aria-hidden="true" />
                  {item.location} - 1 km
                </small>
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
                <a href="/agendamento">Agendar agora</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
