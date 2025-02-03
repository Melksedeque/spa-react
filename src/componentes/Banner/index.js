import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_apresentacao}>
        <h1 className={styles.banner_titulo}>Melksedeque de Souza Silva</h1>
        <h2 className={styles.banner_subtitulo}>Desenvolvedor Front-End</h2>
        <p className={styles.banner_texto}>
          Boas vindas ao meu espaço pessoal! Eu sou Melksedeque de Souza Silva,
          desenvolvedor Front-End. Aqui trago meus projetos mais recentes e
          compartilho conhecimento.
        </p>
      </div>
      <div className={styles.banner_imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt=""
          aria-hidden="true"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Melksedeque sorrindo"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
