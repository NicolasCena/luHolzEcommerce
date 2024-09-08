import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import prueba from "../../../../assets/simulacionImg.webp";
import { useState } from "react";

const Card = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`${styles.containerCard} ${
        isClicked ? styles["card-clicked"] : ""
      }`}
      onClick={handleClick}
    >
      <div className={styles.containerImgDesc}>
        <div className={styles.containerImg}>
          <img src={prueba} alt="" />
        </div>

        <div
          className={`${styles.containerDescriprionCard} ${
            isClicked ? styles["expanded"] : ""
          }`}
        >
          <div className={styles.containerDescriprion}>
            <p className={styles.textProduct}>
              ORGANIZADOR A4 MARIE TRANSPARENTE
            </p>
            <p className={styles.priceProduct}>$123,00</p>
          </div>

          {isClicked && (
            <div className={styles.containerButtonsCard}>
              <div className={styles.containerBtns}>
                <button className={styles.buttonComprar}>COMPRAR</button>
              </div>
              
              <div className={styles.containerBtns}>
                <Link to="/template-product">
                  <button className={styles.buttonVer}>VER</button>
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
