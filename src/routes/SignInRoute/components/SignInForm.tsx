import { LoginForm } from "./LogInForm";
import { RegisterForm } from "./RegisterForm";
import { FormHeader } from './FormHeader';
import styles from "../SignIn.module.scss";
import { useState } from "react";

export const SignInForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSelectWay = (selectLogin: boolean) => {
    setIsLogin(selectLogin);
  };

  return (
    <>
      <FormHeader handleSelectWay={handleSelectWay} isLogin={isLogin} />
      <div className={styles.formsSingInComponent}>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </>
  );
};
