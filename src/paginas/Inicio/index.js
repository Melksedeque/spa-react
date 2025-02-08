import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCards from "componentes/PostCards";
import { useLocation } from "react-router-dom";

export default function Inicio({ limite = posts.length, exceto }) {
  const local = useLocation();
  const paginaDePost = local.pathname.includes("post");

  const postsParaExibir = paginaDePost
    ? posts.filter((post) => post.id !== exceto).slice(0, limite)
    : posts;

  if (!postsParaExibir.length) {
    return (
      <section className={styles.semPosts}>
        <p>Não há posts para exibir</p>
      </section>
    );
  }

  return (
    <ul className={styles.posts}>
      {postsParaExibir.map((post) => (
        <li key={post.id}>
          <PostCards post={post} />
        </li>
      ))}
    </ul>
  );
}
