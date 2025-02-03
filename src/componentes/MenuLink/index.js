import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.menu_item} ${styles.active}` : styles.menu_item
      }
    >
      {children}
    </NavLink>
  );
}
