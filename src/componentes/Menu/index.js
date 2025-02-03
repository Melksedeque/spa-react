import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/sobremim">Sobre mim</MenuLink>
      <MenuLink to="/contato">Contato</MenuLink>
    </nav>
  );
}
