import React from 'react';
import styles from './Shop.module.scss';
import iconShop from '../../assets/icon-shop.svg';

interface ShopProps {
  onClick: () => void; 
}

const Shop: React.FC<ShopProps> = ({ onClick }) => {
  return (
    <div className={styles['container-shop']}>
      <button className={styles['btn-shop']} onClick={onClick}>
        <img src={iconShop} alt="Shop" />
      </button>
    </div>
  );
};

export { Shop };
