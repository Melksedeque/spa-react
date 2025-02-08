import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostsRecomendados from "componentes/PostsRecomendados";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return (
      <div className="post">
        <NaoEncontrada />
      </div>
    );
  }

  return (
    <PaginaPadrao>
      <div className="post">
        <PostModelo
          fotoCapa={`/assets/posts/${post.id}/capa.png`}
          titulo={post.titulo}
        >
          <div className="post-markdown-container">
            <ReactMarkdown>{post.texto}</ReactMarkdown>
          </div>
        </PostModelo>
      </div>
      <PostsRecomendados posts={posts} />
    </PaginaPadrao>
  );
}
