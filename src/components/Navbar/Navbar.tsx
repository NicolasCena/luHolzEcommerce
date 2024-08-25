import icono from "../../assets/icono-circle.png";
import profile from '../../assets/icon-profile.svg';
import { Shop } from "../Shop/Shop";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles["container-navbar"]}>
      <div className={styles["container-navbar-primary"]}>

        <div className={styles["container-icon"]}>
          <img src={icono} alt="icono" className={styles["image-icono"]} />
        </div>

        <Input />

        <img src={profile} alt="icono" className={styles["icon-profile"]} />
        <Shop />
      </div>

      <div className={styles["container-navbar-secondary"]}>
          <div className={styles["container-options"]}>
            <p>Productos</p>
            <p>Como comprar</p>
            <p>Contacto</p>
          </div>
      </div>
    </div>
  );
};

export { Navbar };
