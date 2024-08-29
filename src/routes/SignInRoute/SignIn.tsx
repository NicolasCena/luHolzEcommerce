import styles from "./SignIn.module.scss";
import { FormSignIn } from './components/FormsSignIn';

export const SignIn = () => {

  return (
    <div className={styles.sigInSection}>
      <div className={styles.sigInContent}>
        <FormSignIn />
      </div>
    </div>
  );
};
