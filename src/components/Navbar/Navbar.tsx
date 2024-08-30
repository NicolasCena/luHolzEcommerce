import icono from "../../assets/logo-lh-modified.png";
import { Shop } from "../../routes/ShopRoute/Shop";
import styles from "./Navbar.module.scss";
import { MyAccount } from "../../routes";
import { useTranslation } from 'react-i18next';
import { OptionMenu } from "./components/OptionMenu";

const Navbar = () => {
  const { t } = useTranslation();

  const OPTIONS_MENU = [
    { path: "/", title: t("home"), hasPermission: true },
    { path: "/admin-products", title: t("admin_products"), hasPermission: true },
    { path: "/my-account", title: t("my_account"), hasPermission: true },
    { path: "/sign-in", title: t("sign_in"), hasPermission: true },
    { path: "/upload-products", title: t("upload_products"), hasPermission: true },
    { path: "/carrito", title: t("shop"), hasPermission: true },
  ];

  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerNavbarPrimary}>
        <div className={styles.containerIcon}>
          <img src={icono} alt="icono" className={styles.imageIcono} />
        </div>

        {/* <Input /> */}

        <div className={styles.btnsPrimaryNavbar}>
          <MyAccount />
          <Shop />
        </div>
      </div>      
      <div className={styles.containerNavbarSecondary}>
        <div className={styles.containerOptions}>
          <ul>
            {
              OPTIONS_MENU.map((option) => {
                if(option.hasPermission) return <OptionMenu title={option.title} path={option.path} key={option.title}/>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
