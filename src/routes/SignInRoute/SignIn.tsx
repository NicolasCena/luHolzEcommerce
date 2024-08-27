import { useState } from "react";
import { Login } from "../../components/User/LogIn/LogIn";
import { Register } from "../../components/User/Register/Register";
import styles from "./SigIn.module.scss";
import { HeaderUser } from "../../components/User/components/HeaderUser";

export const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSelectWay = (selectLogin: boolean) => {
    setIsLogin(selectLogin);
  };

  return (
    <div className={styles.sigInSection}>
      <div className={styles.sigInContent}>
        <HeaderUser handleSelectWay={handleSelectWay} isLogin={isLogin} />

        <div className={styles.formWrapper}>
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};
