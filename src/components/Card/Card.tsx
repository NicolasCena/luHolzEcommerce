import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import prueba from "../../assets/simulacionImg.webp";
import { useState } from "react";

const Card = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`${styles["container-card"]} ${
        isClicked ? styles["card-clicked"] : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles["container-img-desc"]}>
        <div className={styles["container-img"]}>
          <img src={prueba} alt="" />
        </div>

        <div
          className={`${styles["container-descriprion-card"]} ${
            isClicked ? styles["expanded"] : ""
          }`}
        >
          <div className={styles["container-descriprion"]}>
            <p className={styles["text-product"]}>
              ORGANIZADOR A4 MARIE TRANSPARENTE
            </p>
            <p className={styles["price-product"]}>$123,00</p>
          </div>

          {isClicked && (
            <div className={styles["container-buttons-card"]}>
              <div className={styles["container-btns"]}>
                <button className={styles["button-comprar"]}>COMPRAR</button>
              </div>
              
              <div className={styles["container-btns"]}>
                <Link to="/template-product">
                  <button className={styles["button-ver"]}>VER</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
