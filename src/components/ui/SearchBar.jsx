import { MapPin, Search } from "lucide-react";
import { Button } from "./Button.jsx";

export function SearchBar() {
  return (
    <form action="/profissionais" className="search-bar" method="get">
      <label>
        <Search aria-hidden="true" />
        <input name="servico" placeholder="Que tipo de massagem você procura?" />
      </label>

      <label>
        <MapPin aria-hidden="true" />
        <input name="localizacao" placeholder="Sua localização" />
      </label>

      <Button type="submit">Buscar</Button>
    </form>
  );
}
