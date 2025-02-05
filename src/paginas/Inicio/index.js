import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCards from "componentes/PostCards";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCards post={post} />
        </li>
      ))}
    </ul>
  );
}
