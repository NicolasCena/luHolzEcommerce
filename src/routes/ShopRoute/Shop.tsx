import styles from './Shop.module.scss';
import { Card } from 'src/routes/ShopRoute/components/Card/Card';

export const Shop = () => {
  return (
    <div className={styles.containerShop}>
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
