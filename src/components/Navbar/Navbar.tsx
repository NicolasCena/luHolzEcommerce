import icono from "../../assets/logo-lh-modified.png";
import { Shop } from "../../routes/ShopRoute/Shop";
import styles from "./Navbar.module.scss";
import { MyAccount } from "../../routes";
import { useTranslation } from 'react-i18next';
import { OptionMenu } from "./components/OptionMenu";
import { useAppSelector } from "src/redux/hooks/useAppSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const userState = useAppSelector((state) => state.user);
  console.log("userState", userState)
  
  const OPTIONS_MENU = [
    { path: "/", title: t("home"), show: true },
    { path: "/admin-products", title: t("admin_products"), show: userState.admin },
    { path: "/my-account", title: t("my_account"), show: true },
    { path: "/sign-in", title: t("sign_in"), show: !userState.isAuthenticated },
    { path: "/upload-products", title: t("upload_products"), show: userState.admin },
    { path: "/carrito", title: t("shop"), show: true },
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
                if(option.show) return <OptionMenu title={option.title} path={option.path} key={option.title}/>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
