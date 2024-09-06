import styles from "./BannerInformative.module.scss";
import atencion from "../../assets/alert_icon.svg";
import envio from "../../assets/envio_icon.svg";
import Wpp from "../../assets/whatsapp_icon.svg";

const BannerInformative = () => {
  return (
    <div className={styles["container-banner-informative"]}>

      <div className={styles["container-informative"]}>

        <div className={styles["icon-informative"]}>
          <img src={atencion} alt="atencion" className={styles["icon-banner"]}/>
          <p>Es importante que leas la descripción del producto antes de realizar la compra.</p>
        </div>

        <div className={styles["icon-informative"]}>
          <img src={envio} alt="envio" className={styles["icon-banner"]}/>
          <p>Envíos a todo el país</p>
        </div>

        <div className={styles["icon-informative"]}>
          <img src={Wpp} alt="Wpp" className={styles["icon-banner"]}/>
          <p>
            Si tenés alguna duda nos podés contactar rapidamente por WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export { BannerInformative };
