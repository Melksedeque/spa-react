import Banner from "componentes/Banner";
import styles from "./PaginaPadrao.module.css";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({ children }) {
  return (
    <main className={styles.home}>
      <Banner />
      <div className={styles["pagina-padrao"]}>
        <Outlet />
        {children}
      </div>
    </main>
  );
}
