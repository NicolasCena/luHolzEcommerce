import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import icono from "../../assets/logo-lh-modified.png";
import { Shop } from "../../routes/ShopRoute/Shop";
import { MyAccount } from "../../routes";
import { OptionMenu } from "./components/OptionMenu";
import { Sidebar } from "@components/Sidebar/Sidebar";
import styles from "./Navbar.module.scss";
import { useAppSelector } from "src/redux/hooks/useAppSelector";

export const Navbar = () => {
  const { t } = useTranslation();
  const userState = useAppSelector((state) => state.user);  
  const [showSidebar, setShowSidebar] = useState(false);
  const optionsMenu = useMemo(() => [
    { path: "/", title: t("home"), show: true },
    { path: "/admin-products", title: t("admin_products"), show: userState.admin },
    { path: "/my-account", title: t("my_account"), show: userState.isAuthenticated },
    { path: "/sign-in", title: t("sign_in"), show: !userState.isAuthenticated },
    { path: "/upload-products", title: t("upload_products"), show: userState.admin },
    { path: "/carrito", title: t("shop"), show: true },
  ], [t, userState]);
  
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerNavbarPrimary}>
        <div className={styles.containerIcon}>
          <img src={icono} alt="icono" className={styles.imageIcono} />
        </div>

        <MyAccount />

        <div className={styles.btnsPrimaryNavbar}>
          <Shop onClick={toggleSidebar} />
        </div>
      </div>

      <div className={styles.containerNavbarSecondary}>
        <div className={styles.containerOptions}>
          <ul>
            {optionsMenu.map((option) =>
              option.show && (
                <OptionMenu
                  title={option.title}
                  path={option.path}
                  key={option.title}
                />
              )
            )}
          </ul>
        </div>
      </div>

      {showSidebar && (
        <>
          <div className={styles["container-overlay"]} onClick={toggleSidebar} />
          <Sidebar />
        </>
      )}
    </div>
  );
};
