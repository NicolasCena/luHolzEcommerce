import styles from "./Footer.module.scss";
import icono from '../../assets/logo-lh-modified.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["container-footer"]}>
        <div className={styles["container-icono"]}>
          <img src={icono} alt="icono" className={styles["icono-marca"]} />
        </div>
        <div className={styles["container-contactos"]}>
          <h3>Contáctanos</h3>
          <p>+34 640799331</p>
          <p>lu.holz@gmail.com</p>
          <p>Valladolid, España</p>
        </div>
        <div className={styles["container-redes"]}>
          <h3>Síguenos en redes sociales</h3>
          <p>Instagram</p>
          <p>Tik Tok</p>
        </div>
      </div>
    </footer>
  );
}
