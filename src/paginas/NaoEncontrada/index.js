import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import imagemErro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>Erro 404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada!</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <BotaoPrincipal size="lg">Voltar</BotaoPrincipal>
        </div>
        <figure>
          <img
            className={styles.imagemCachorro}
            src={imagemErro404}
            alt="Cachorro de óculos vestido como humano"
          />
        </figure>
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
