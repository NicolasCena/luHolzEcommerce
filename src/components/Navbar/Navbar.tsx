<<<<<<< HEAD
import { useMemo, useState } from "react";
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import icono from "../../assets/logo-lh-modified.png";
import { Shop } from "../../routes/ShopRoute/Shop";
import styles from "./Navbar.module.scss";
>>>>>>> feature/home
import { useTranslation } from "react-i18next";
import icono from "../../assets/logo-lh-modified.png";
import { OptionMenu } from "./components/OptionMenu";
import styles from "./Navbar.module.scss";
import { useAppSelector } from "src/redux/hooks/useAppSelector";
<<<<<<< HEAD
=======
import { Sidebar } from "@components/Sidebar/Sidebar";
import profile from "../../assets/icon-profile.svg";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
>>>>>>> feature/home

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

<<<<<<< HEAD
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

      {/* Render the backdrop only when offcanvas is open */}
      {showOffcanvas && (
        <div
          className={styles.backdrop}
          onClick={() => setShowOffcanvas(false)}
        ></div>
      )}
    </>
=======
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerNavbarPrimary}>
        <Link to="/my-account" className={styles["container-btn-profile"]}>
          <button className={styles["btn-profile"]}>
            <img src={profile} alt="perfil" />
          </button>
        </Link>{" "}

        <Link to="/" className={styles["container-icon-link"]}>
          <div className={styles.containerIcon}>
            <img src={icono} alt="icono" className={styles.imageIcono} />
          </div>
        </Link>

        <div className={styles.btnsPrimaryNavbar}>
          <Shop onClick={toggleSidebar} />
        </div>
      </div>
      <div className={styles.containerNavbarSecondary}>
        <div className={styles.containerOptions}>
          <ul>
            {OPTIONS_MENU.map((option) => {
              if (option.show)
                return (
                  <OptionMenu
                    title={option.title}
                    path={option.path}
                    key={option.title}
                  />
                );
            })}
          </ul>
        </div>
      </div>
      {showSidebar && (
        <>
          <div
            className={styles["container-overlay"]}
            onClick={toggleSidebar}
          />
          <Sidebar onClose={toggleSidebar} />
        </>
      )}
    </div>
>>>>>>> feature/home
  );
};
