import styles from "./PostsRecomendados.module.css";
import Inicio from "paginas/Inicio";

export default function PostsRecomendados({ estePost }) {
  return (
    <div className={styles.PostsRecomendadosContainer}>
      <h2 className={styles.tituloSecao}>Outros posts que você pode gostar:</h2>
      <div className={styles.PostsRecomendados}>
        <Inicio postsRecomendados={true} limite={4} exceto={estePost} />
      </div>
    </div>
  );
}
