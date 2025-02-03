import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const localizacao = useLocation();

  console.log(localizacao);
  return (
    <nav className="menu">
      <Link to="/" className="menu__item">
        Home
      </Link>
      <Link to="/sobremim" className="menu__item">
        Sobre mim
      </Link>
      <Link to="/contato" className="menu__item">
        Contato
      </Link>
    </nav>
  );
}
