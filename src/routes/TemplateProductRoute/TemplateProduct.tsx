import { useState } from "react";
import styles from "./TemplateProduct.module.scss";
import producto from "../../assets/simulacionImg.webp";
import minus from "../../assets/minus_icon.svg";
import plus from "../../assets/Plus_icon.svg";

const TemplateProduct = () => {
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
    <div>
      <div className={styles["container-template-product"]}>

        {/* MAP DE TRES IMAGENES DEL PRODUCTO */}
        <div>
          <img
            src={producto}
            alt="prod1"
            className={styles["galeria-product"]}
          />
        </div>
        {/* // */}

        
        <div>
          <img
            src={producto}
            alt="producto"
            className={styles["img-producto"]}
          />
        </div>

        <div className={styles["contrainer-description-buttons"]}>
          <div>
            <div>
              <h3>ORGANIZADOR A4 TORNASOL ROSA</h3>
            </div>
            <div>
              <p className={styles["price-product"]}>$123,00</p>
            </div>
          </div>

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

            <button className={styles["button-agregar"]}>
              AGREGAR AL CARRITO
            </button>
          </div>

          <div className={styles["container-desciption"]}>
            <p>
              INFORMACION IMPORTANTE:
              <br />
              Demora en su confeccion 5 dias habiles. Nos comunicaremos por Wpp
              cuando este listo para coordinar envio.
              <br />
              DESCRIPCION DEL PRODUCTO:
              <br />
              Ideal para guardar apuntes ya qu eposee varias divisiones.
              Medidas: 27cm de ancho x 35cm de alto. No tiene fuelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TemplateProduct };
