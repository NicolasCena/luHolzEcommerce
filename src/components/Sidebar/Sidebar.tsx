import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import trash from "../../assets/trash_icon.svg";
import close from "../../assets/close-icon.svg";
import producto from "../../assets/simulacionImg.webp";
import minus from "../../assets/minus_icon.svg";
import plus from "../../assets/Plus_icon.svg";

const Sidebar = ({ onClose }) => {
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
        <button className={styles["sidebar-btn-close"]} onClick={onClose}>
          <img
            src={close}
            alt="close icon"
            className={styles["icon-btn-close"]}
          />
        </button>
      </div>

      <div className={styles["container-product"]}>
        <div className={styles["container-product-order"]}>
          <div className={styles["container-img-counter"]}>
            <img
              src={producto}
              alt="producto"
              className={styles["img-product"]}
            />

            <div className={styles["container-name-counter"]}>
              <p className={styles["text-product"]}>
                Organizador A4 transparente
              </p>
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
          </div>

          <div className={styles["container-trash-price"]}>
            <button className={styles["sidebar-btn-trash"]}>
              <img
                src={trash}
                alt="trash"
                className={styles["sidebar-icon-trash"]}
              />
            </button>

            <p className={styles["sidebar-price-product"]}>$123,00</p>
          </div>
        </div>

        <div className={styles["container-total"]}>
          <p className={styles["text-total"]}>Total:</p>
          <p className={styles["text-total"]}>$123,00</p>
        </div>

        <button className={styles["btn-inicarCompra"]}>INICIAR COMPRA</button>
      </div>
    </div>
  );
};

export { Sidebar };
