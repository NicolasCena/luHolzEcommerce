import { Card } from '../../components/Card/Card';
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.cardGrid}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </div>
  );
};

export { Home };
