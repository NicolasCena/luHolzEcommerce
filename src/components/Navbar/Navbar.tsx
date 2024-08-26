import icono from "../../assets/icono-circle.png";
import { Shop } from "../../routes/ShopRoute/Shop";
import { Input } from "../Input/Input";
import styles from "./Navbar.module.scss";
import { MyAccount } from "../../routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerNavbarPrimary}>
        <div className={styles.containerIcon}>
          <img src={icono} alt="icono" className={styles.imageIcono} />
        </div>

        {/* <Input /> */}

        <div className={styles["btns-primary-navbar"]}>
          <MyAccount />
          <Shop />
        </div>
      </div>

      <div className={styles.containerNavbarSecondary}>
        <div className={styles.containerOptions}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin-products">Admin Products</Link>
            </li>
            <li>
              <Link to="/my-account">My Account</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/upload-products">Upload Products</Link>
            </li>
            <li>
              <Link to="/carrito">Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
