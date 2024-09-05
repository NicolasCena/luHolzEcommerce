import styles from "./BannerInformative.module.scss";
import atencion from "../../assets/alert_icon.svg";
import envio from "../../assets/envio_icon.svg";
import Wpp from "../../assets/whatsapp_icon.svg";

const BannerInformative = () => {
  return (
    <div className={styles["container-banner-informative"]}>
      <div>
        <div>
          <img src={atencion} alt="atencion" />
          <p>Leé la descripción del producto antes de realizar la compra.</p>
        </div>

        <div>
          <img src={envio} alt="envio" />
          <p>Envíos a todo el país</p>
        </div>

        <div>
          <img src={Wpp} alt="Wpp" />
          <p>
            Si tenés alguna duda nos podés contactar rapidamente por WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export { BannerInformative };
