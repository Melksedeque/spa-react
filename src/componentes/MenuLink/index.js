import { Link, useLocation } from "react-router-dom";
import "./MenuLink.css";

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();
  return (
    <Link
      to={to}
      className={`menu__item ${localizacao.pathname === to ? "destacado" : ""}`}
    >
      {children}
    </Link>
  );
}
