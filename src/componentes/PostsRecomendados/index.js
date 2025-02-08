import styles from "./PostsRecomendados.module.css";
import Inicio from "paginas/Inicio";

export default function PostsRecomendados() {
  return (
    <div className={styles.PostsRecomendadosContainer}>
      <h2>Outros posts que você pode gostar</h2>
      <div className={styles.PostsRecomendados}>
        <Inicio />
      </div>
    </div>
  );
}
