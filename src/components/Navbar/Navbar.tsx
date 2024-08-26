import icono from "../../assets/icono-circle.png";
import { Shop } from "../../routes/Shop/Shop";
import { Input } from "../Input/Input";
import styles from "./Navbar.module.scss";
import { MyAccount } from "../../routes";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerNavbarPrimary}>

        <div className={styles.containerIcon}>
          <img src={icono} alt="icono" className={styles.imageIcono} />
        </div>

        <Input />

        <div className={styles["btns-primary-navbar"]}>
          <MyAccount/>
          <Shop />
        </div>

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
