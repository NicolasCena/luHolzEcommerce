import styles from './styles.module.scss';
import iconShop from '../../assets/icon-shop.svg';


const Shop = () => {
  return (
    <div className={styles['icon-shop']}>
        <img src={iconShop} alt="" />
    </div>
  )
}

export  { Shop }