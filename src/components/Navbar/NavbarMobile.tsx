import { useNavigate } from "react-router-dom";
import icono from "../../assets/logo-lh-modified.png";
import styles from "./Navbar.module.scss";
import { OptionMenu } from "./components/OptionMenu";
import { Options } from "./types/options.type";

type Props = {
  showOffcanvas: boolean;
  optionsMenu: Options[];
  setShowOffcanvas: (val: boolean) => void;
};

export const NavbarMobile = ({
  optionsMenu,
  showOffcanvas,
  setShowOffcanvas,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarBrand}>
            <img src={icono} alt="icono" className={styles.imageIcono} />
          </div>
        </div>

        <button
          className={styles.toggleButton}
          onClick={() => setShowOffcanvas(!showOffcanvas)}
        >
          &#9776;
        </button>

        {/* SIDEBAR */}
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
            {optionsMenu.map((option) => {
              if (!option.show) return null;

              const handleClick = () => {
                if (typeof option.path === "string") {
                  setShowOffcanvas(false);
                  navigate(option.path);
                } else if (typeof option.onAction === "function") {
                  setShowOffcanvas(false);
                  option.onAction();
                }
              };

              return (
                <OptionMenu
                  key={option.title}
                  title={option.title}
                  action={handleClick}
                />
              );
            })}
          </div>
        </div>

        {showOffcanvas && (
          <div
            className={styles.backdrop}
            onClick={() => setShowOffcanvas(false)}
          ></div>
        )}
      </nav>
    </>
  );
};
