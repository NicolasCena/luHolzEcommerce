import { Card } from "src/routes/ShopRoute/components/Card/Card";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles["container-notFound"]}>
      <p className={styles["title-notFound"]}>PÁGINA NO ENCONTRADA</p>

      <p className={styles["text-notFound"]}>
        La página que estás buscando no existe.
        <br />
        Quizás te interesen los siguientes productos:
      </p>

      {/* //hacer map de 3 productos, card de ejemplo */}
      <div>
        <Card />
      </div>
    </div>
  );
};

export { NotFound };
