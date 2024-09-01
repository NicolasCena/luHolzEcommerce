import { useState } from "react";
import styles from "./Sidebar.module.scss";
import trash from "../../assets/trash_icon.svg";
import close from "../../assets/close-icon.svg";
import producto from "../../assets/simulacionImg.webp";
import minus from "../../assets/minus_icon.svg";
import plus from "../../assets/Plus_icon.svg";

const Sidebar = () => {
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
    <div className={styles["container-sidebar"]}>
      <div className={styles["sidebar-content"]}>
        <p className={styles["sidebar-title"]}>Carrito de compras</p>
        <button className={styles["sidebar-btn-close"]}>
          <img
            src={close}
            alt="trash icon"
            className={styles["icon-btn-close"]}
          />
        </button>
      </div>

      <div className={styles["container-product"]}>
        <div>
          <img
            src={producto}
            alt="producto"
            className={styles["img-product"]}
          />
          <p className={styles["text-product"]}>Organizador A4 transparente</p>
          <button className={styles["sidebar-btn-trash"]}>
            <img src={trash} alt="trash" className={styles["sidebar-icon-trash"]}/>
          </button>

          <div className={styles["container-contador"]}>
            <div className={styles["container-botones"]}>
              <div className={styles["container-btns-contador"]}>
                <button
                  className={styles["btns-contador"]}
                  onClick={decrementCounter}
                >
                  <img
                    src={minus}
                    alt="minus icon"
                    className={styles["icon-minus-plus"]}
                  />
                </button>

                <p>{counter}</p>

                <button
                  className={styles["btns-contador"]}
                  onClick={incrementCounter}
                >
                  <img
                    src={plus}
                    alt="plus icon"
                    className={styles["icon-minus-plus"]}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className={styles["text-total"]}>Total:</p>
          <p className={styles["text-total"]}>$123,00</p>
        </div>

        <button className={styles["btn-inicarCompra"]}>INICIAR COMPRA</button>
      </div>

      {/* CARRITO VACIO */}

      {/* <div>
        <p>Carrito vacio</p>
      </div> */}
    </div>
  );
};

export { Sidebar };
