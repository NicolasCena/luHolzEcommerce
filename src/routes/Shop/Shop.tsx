import styles from './Shop.module.scss';
import iconShop from '../../assets/icon-shop.svg';


const Shop = () => {
  return (
    <div className={styles['container-shop']}>
      <button className={styles['btn-shop']}><img src={iconShop} alt="" /></button>
    </div>
  )
}

export  { Shop }