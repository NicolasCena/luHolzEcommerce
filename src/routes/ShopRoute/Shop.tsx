import React from 'react';
import styles from './Shop.module.scss';
import iconShop from '../../assets/icon-shop.svg';

export const Shop = () => {
  return (
    <div className={styles['container-shop']}>
      <button className={styles['btn-shop']}>
        <img src={iconShop} alt="Shop" />
      </button>
    </div>
  );
};
