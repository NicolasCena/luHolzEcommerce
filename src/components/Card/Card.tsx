import styles from './Card.module.scss';
import prueba from '../../assets/simulacionImg.webp';

const Card = () => {
  return (
    <div className={styles['container-card']}>
      <div className={styles['container-img-desc']}>
        <div className={styles['container-img']}>
          <img src={prueba} alt="" />
        </div>

        <div className={styles['container-descriprion-card']}>
            <div className={styles['container-descriprion']}>
                <p className={styles['text-product']}>ORGANIZADOR A4 MARIE TRANSPARENTE</p>
                <p className={styles['price-product']}>$123,00</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export {Card}