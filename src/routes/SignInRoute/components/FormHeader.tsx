import { useTranslation } from "react-i18next";
import styles from "../SignIn.module.scss";

type Props = {
  handleSelectWay: (selectLogin: boolean) => void;
  isLogin: boolean;
};

export const FormHeader = ({ handleSelectWay, isLogin }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.headerUser}>
      <div className={styles.headerUserContainer}>
        <div className={styles.sliderContainer}>
          <div
            className={`${styles.slider} 
            ${
              isLogin ? styles.logInActive : styles.registerActive
            }`}
          />
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => handleSelectWay(true)}
            className={isLogin ? styles.active : ""}
          >
            {t("enter")}
          </button>
          <button
            onClick={() => handleSelectWay(false)}
            className={!isLogin ? styles.active : ""}
          >
            {t("register")}
          </button>
        </div>
      </div>
    </div>
  );
};
