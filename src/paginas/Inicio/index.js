import Banner from "componentes/Banner";
import styles from "./Inicio.module.css";

export default function Inicio() {
  return (
    <main className={styles.home}>
      <Banner />
      <h1>Inicio</h1>
    </main>
  );
}
