import styles from "./MyAccount.module.scss";
import profile from '../../assets/icon-profile.svg';

const MyAccount = () => {
  return (
    <div className={styles["container-btn-profile"]}>
      <button className={styles["btn-profile"]}><img src={profile} alt="perfil" /></button>
    </div>

  )
}

export { MyAccount }