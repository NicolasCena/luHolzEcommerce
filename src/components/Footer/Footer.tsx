import styles from "./Footer.module.scss";
import icono from '../../assets/logo-lh-modified.png';
import instagram from '../../assets/INSTAGRAM_icon.svg';
import tikTok from '../../assets/tiktok_icon.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>

        <div className={styles.containerIcono}>
          <img src={icono} alt="icono" className={styles.iconoMarca} />
        </div>

        <div className={styles.containerContactos}>
          <h3>Contáctanos</h3>
          <p>+34 640799331</p>
          <p>lu.holz@gmail.com</p>
          <p>Valladolid, España</p>
        </div>

        <div className={styles.containerRedes}>
          <h3>Síguenos en redes sociales</h3>
          <img src={instagram} alt="instagram" className={styles.iconRedes}/>
          <img src={tikTok} alt="tiktok" className={styles.iconRedes}/>
        </div>
        
      </div>
    </footer>
  );
}
