import { MapPin, Search } from "lucide-react";
import { Button } from "./Button.jsx";

export function SearchBar() {
  return (
    <form className="search-bar">
      <label>
        <Search aria-hidden="true" />
        <input placeholder="Que tipo de massagem você procura?" />
      </label>

      <label>
        <MapPin aria-hidden="true" />
        <input placeholder="Sua localização" />
      </label>

      <Button type="submit">Buscar</Button>
    </form>
  );
}
