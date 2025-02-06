import styles from "./NaoEncontrada.module.css";

export default function NaoEncontrada() {
  return (
    <div className={styles.container}>
      <h1>Erro 404</h1>
      <p>Página não encontrada</p>
    </div>
  );
}
