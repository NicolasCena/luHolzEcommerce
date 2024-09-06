import { useMemo, useState } from "react";
import icono from "../../assets/logo-lh-modified.png";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { OptionMenu } from "./components/OptionMenu";
import { useAppSelector } from "src/redux/hooks/useAppSelector";

export const Navbar = () => {
  const { t } = useTranslation();
  const userState = useAppSelector((state) => state.user);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const optionsMenu = useMemo(
    () => [
      { path: "/", title: t("home"), show: true },
      {
        path: "/admin-products",
        title: t("admin_products"),
        show: userState.admin,
      },
      {
        path: "/my-account",
        title: t("my_account"),
        show: userState.isAuthenticated,
      },
      {
        path: "/sign-in",
        title: t("sign_in"),
        show: !userState.isAuthenticated,
      },
      {
        path: "/upload-products",
        title: t("upload_products"),
        show: userState.admin,
      },
      { path: "/carrito", title: t("shop"), show: true },
    ],
    [t, userState]
  );

  const handleOptionClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarBrand}>
            <img src={icono} alt="icono" className={styles.imageIcono} />
          </div>
          <button
            className={styles.toggleButton}
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          >
            &#9776;
          </button>
        </div>
        <div className={styles.menu}>
          {optionsMenu.map(
            (option) =>
              option.show && (
                <OptionMenu
                  title={option.title}
                  path={option.path}
                  key={option.title}
                  onClick={handleOptionClick}
                />
              )
          )}
        </div>
      </nav>

      <div
        className={`${styles.offcanvas} ${showOffcanvas ? styles.show : ""}`}
      >
        <button
          className={styles.closeButton}
          onClick={() => setShowOffcanvas(false)}
        >
          &times;
        </button>
        <div className={styles.menu}>
          {optionsMenu.map(
            (option) =>
              option.show && (
                <OptionMenu
                  title={option.title}
                  path={option.path}
                  key={option.title}
                  onClick={handleOptionClick}
                />
              )
          )}
        </div>
      </div>

      {showOffcanvas && (
        <div
          className={styles.backdrop}
          onClick={() => setShowOffcanvas(false)}
        ></div>
      )}
    </>
  );
};
