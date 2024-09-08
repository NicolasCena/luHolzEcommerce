import styles from "./BannerInformative.module.scss";
import atencion from "../../assets/alert_icon.svg";
import envio from "../../assets/envio_icon.svg";
import Wpp from "../../assets/whatsapp_icon.svg";

const BannerInformative = () => {
  return (
    <div className={styles.containerBannerInformative}>

      <div className={styles.containerInformative}>

        <div className={styles.iconInformative}>
          <img src={atencion} alt="atencion" className={styles.iconBanner}/>
          <p>Es importante que leas la descripción del producto antes de realizar la compra.</p>
        </div>

        <div className={styles.iconInformative}>
          <img src={envio} alt="envio" className={styles.iconBanner}/>
          <p>Envíos a todo el país</p>
        </div>

        <div className={styles.iconInformative}>
          <img src={Wpp} alt="Wpp" className={styles.iconBanner}/>
          <p>
            Si tenés alguna duda nos podés contactar rapidamente por WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export { BannerInformative };
