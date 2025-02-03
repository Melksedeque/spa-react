import { NavLink } from "react-router-dom";
import "./MenuLink.css";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "menu__item active" : "menu__item"
      }
    >
      {children}
    </NavLink>
  );
}
