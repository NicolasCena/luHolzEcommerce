import styles from "./SignIn.module.scss";
import { SignInForm } from "./components/SignInForm";

export const SignIn = () => {
  return (
    <div className={styles.sigInSection}>
      <div className={styles.sigInContent}>
        <SignInForm />
      </div>
    </div>
  );
};
