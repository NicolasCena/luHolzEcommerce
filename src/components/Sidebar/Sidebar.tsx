// Sidebar.js
import { useState } from "react";
import styles from "./Sidebar.module.scss";
import trash from "../../assets/trash_icon.svg";
import close from "../../assets/close-icon.svg";
import producto from "../../assets/simulacionImg.webp";
import minus from "../../assets/minus_icon.svg";
import plus from "../../assets/Plus_icon.svg";

const Sidebar = ({ isOpen, onClose }) => {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={`${styles.containerSidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarContent}>
        <p className={styles.sidebarTitle}>Carrito de compras</p>
        <p className={styles.sidebarPriceProduct}>$123,00</p>
        <button className={styles.sidebarBtnClose} onClick={onClose}>
          <img
            src={close}
            alt="close icon"
            className={styles.iconBtnClose}
          />
        </button>
      </div>

      <div className={styles.containerProduct}>
        <div>
          <img
            src={producto}
            alt="producto"
            className={styles.imgProduct}
          />
          <p className={styles.textProduct}>Organizador A4 transparente</p>
          <button className={styles.sidebarBtnTrash}>
            <img src={trash} alt="trash" className={styles.iconTrash} />
          </button>

          <div className={styles.containerContador}>
            <div className={styles.containerBotones}>
              <div className={styles.containerBtnsContador}>
                <button
                  className={styles.btnsContador}
                  onClick={decrementCounter}
                >
                  <img
                    src={minus}
                    alt="minus icon"
                    className={styles.iconMinusPlus}
                  />
                </button>

                <p>{counter}</p>

                <button
                  className={styles.btnsContador}
                  onClick={incrementCounter}
                >
                  <img
                    src={plus}
                    alt="plus icon"
                    className={styles.iconMinusPlus}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className={styles.textTotal}>Total:</p>
          <p className={styles.textTotal}>$123,00</p>
        </div>

        <button className={styles.btnInicarCompra}>INICIAR COMPRA</button>
      </div>
    </div>
  );
};

export { Sidebar };
