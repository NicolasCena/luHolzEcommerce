import icono from "../../assets/icono-circle.png";
import profile from '../../assets/icon-profile.svg';
import { Shop } from "../Shop/Shop";
import { Input } from "../Input/Input";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerNavbarPrimary}>

        <div className={styles.containerIcon}>
          <img src={icono} alt="icono" className={styles.imageIcono} />
        </div>

        <Input />

        <img src={profile} alt="icono" className={styles.iconProfile} />
        <Shop />
      </div>

      <div className={styles.containerNavbarSecondary}>
          <div className={styles.containerOptions}>
            <p>Productos</p>
            <p>Como comprar</p>
            <p>Contacto</p>
          </div>
      </div>
    </div>
  );
};

export { Navbar };
