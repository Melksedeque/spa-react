import "./Menu.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <nav className="menu">
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/sobremim">Sobre mim</MenuLink>
      <MenuLink to="/contato">Contato</MenuLink>
    </nav>
  );
}
