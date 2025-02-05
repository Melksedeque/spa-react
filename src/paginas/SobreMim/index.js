import PostModelo from "componentes/PostModelo";
import styles from "./SobreMim.module.css";

import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <div className={styles.sobre}>
      <PostModelo titulo="Sobre mim" fotoCapa={fotoCapa}>
        <h3 className={styles.subtitulo}>Olá, eu sou o Melk!</h3>
        <figure className={styles.figureSobreMim}>
          <img
            src={fotoSobreMim}
            alt="Foto do Melk"
            className={styles.fotoSobreMim}
          />
          <figcaption className={styles.captionFotoSobreMim}>
            Foto do Melk
          </figcaption>
        </figure>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
          pretium metus. Suspendisse potenti. Aenean vitae ligula luctus,
          posuere tellus vitae, ultrices eros. Curabitur quis tellus eget metus
          molestie posuere. Praesent id erat ultrices, dapibus sapien non,
          venenatis velit. Etiam viverra metus metus, et rhoncus nunc
          pellentesque tincidunt. Phasellus euismod tortor sollicitudin ligula
          aliquam, nec laoreet ipsum porta.
        </p>
        <p className={styles.paragrafo}>
          Nulla eleifend orci odio. Integer maximus nibh scelerisque egestas
          elementum. Duis lacinia eu magna facilisis pretium. Vestibulum
          ultrices lobortis dignissim. Nunc in sodales tortor, a euismod tellus.
          Aliquam pretium sed quam in rhoncus. Phasellus eget ipsum et augue
          tempus molestie. Nulla convallis elementum sagittis. Fusce pulvinar,
          velit vitae fringilla lobortis, quam quam vestibulum tellus, a
          fringilla magna dui lacinia nunc. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Phasellus
          interdum volutpat erat, ac viverra ex consectetur vel.
        </p>
        <p className={styles.paragrafo}>
          Curabitur non interdum est. Nulla ultrices non nibh egestas porta.
          Etiam pellentesque quis metus ac vehicula. Nunc quis dolor id lacus
          mollis maximus. Curabitur tristique, orci vitae aliquam posuere, leo
          mi interdum neque, non semper justo felis ac magna. Nulla sodales ex
          id fermentum convallis. Proin euismod lacus id nisl elementum, vel
          suscipit odio vulputate. Vivamus nec eros sit amet justo dictum mollis
          in sit amet ex. Ut euismod mi eu feugiat euismod. Proin hendrerit
          sagittis dolor, vitae sollicitudin nisl. Vivamus eleifend, augue
          commodo lobortis molestie, libero erat accumsan quam, a finibus mauris
          metus id mi.
        </p>
        <p className={styles.paragrafo}>
          Aliquam dui est, dictum quis elementum nec, viverra at nisl. Sed
          ornare ipsum nulla, sit amet tempus augue vehicula at. Suspendisse
          potenti. Vivamus nec malesuada velit. Mauris ornare condimentum
          consequat. Mauris posuere, lacus quis vehicula blandit, ipsum mi
          bibendum arcu, ac vestibulum eros augue vel libero. Quisque et orci
          sapien. Fusce cursus mi nec mattis consectetur. Integer vitae purus
          hendrerit nunc feugiat vehicula. Donec nec congue mi, semper volutpat
          nunc. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <p className={styles.paragrafo}>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam feugiat leo ac enim scelerisque, nec
          placerat mi egestas. Quisque et sagittis enim. Nullam eget porttitor
          magna. Duis tincidunt justo quam, vel posuere nunc feugiat sit amet.
          Fusce in sagittis mauris. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Morbi facilisis maximus faucibus. Vivamus neque
          dolor, venenatis quis enim at, posuere mattis metus. Integer
          pellentesque, lacus sit amet vestibulum interdum, nulla metus
          vulputate purus, ac accumsan nisl sapien quis ex.
        </p>
        <p className={styles.paragrafo}>
          Praesent ornare est id dictum iaculis. Mauris dapibus fringilla sem,
          at volutpat libero consectetur vel. Duis pharetra, quam volutpat
          vestibulum interdum, nibh nisi aliquam mauris, ut consectetur quam
          turpis eget lacus. Nunc fermentum, arcu at aliquet imperdiet, sapien
          dui egestas est, at varius enim ligula eget justo. Pellentesque
          ultricies dolor et augue commodo, eget euismod ipsum pretium.
          Pellentesque ac orci nec nisl bibendum accumsan ac nec lacus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Etiam posuere mi porttitor justo lobortis
          vulputate. Fusce nec blandit nisi. Donec tincidunt diam neque, vel
          commodo metus faucibus vel. Vivamus porttitor sit amet justo vitae
          gravida. Cras laoreet vitae lorem pellentesque iaculis. Aliquam
          aliquet metus ornare feugiat facilisis. Duis id enim tellus. Donec
          efficitur condimentum erat et ultrices. Suspendisse vitae nibh ligula.
        </p>
      </PostModelo>
    </div>
  );
}
