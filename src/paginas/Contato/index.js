import PostModelo from "componentes/PostModelo";
import styles from "./Contato.module.css";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

export default function Contato() {
  return (
    <div className={styles.contato}>
      <PostModelo titulo="Contato" fotoCapa={fotoCapa}>
        <h3 className={styles.subtitulo}>Vamos bater um papo!</h3>
        <figure>
          <img src={fotoSobreMim} alt="Foto do Melk" width={150} />
          <figcaption hidden>Foto do Melk</figcaption>
        </figure>
        <p>
          <strong>
            Você pode entrar em contato comigo em qualquer um dos canais abaixo:
          </strong>
        </p>
        <p>
          Telefone: <Link to="tel:+5511976917114">(11) 97691-7114</Link>
        </p>
        <p>
          Email:{" "}
          <Link to="mailto:freelancer@melksedeque.com.br">
            freelancer@melksedeque.com.br
          </Link>
        </p>
        <div className={styles.redesSociaisContainer}>
          <p>
            <strong>Redes sociais:</strong>
          </p>
          <ul className={styles.midiasSociais}>
            <li>
              <Link to="https://www.github.com/Melksedeque/" target="_blank">
                <BsGithub size={24} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/melksedeque-silva/"
                target="_blank"
              >
                <BsLinkedin size={24} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/melksedeque.silva/"
                target="_blank"
              >
                <BsInstagram size={24} />
              </Link>
            </li>
            <li>
              <Link to="https://x.com/SouzaMelk" target="_blank">
                <BsTwitterX size={24} />
              </Link>
            </li>
            <li>
              <Link
                to="https://api.whatsapp.com/send?phone=5511976917114&text=Olá, vi seu SPA em React e gostaria de conversar com você sobre desenvolvimento."
                target="_blank"
              >
                <BsWhatsapp size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </PostModelo>
    </div>
  );
}
