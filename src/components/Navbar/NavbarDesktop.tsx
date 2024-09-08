import { useNavigate } from "react-router-dom";
import icono from "../../assets/logo-lh-modified.png";
import { OptionMenu } from "./components/OptionMenu";
import styles from "./Navbar.module.scss";
import { Options } from "./types/options.type";

export const NavbarDesktop = ({ optionsMenu }: { optionsMenu: Options[] }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarBrand}>
            <img src={icono} alt="icono" className={styles.imageIcono} />
          </div>
          <div className={styles.menu}>
            {optionsMenu.map((option: Options) => {
              if (!option.show) return null;

              const handleClick = () => {
                if (typeof option.path === "string") {
                  navigate(option.path);
                } else if (typeof option.onAction === "function") {
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
      </nav>
    </>
  );
};
