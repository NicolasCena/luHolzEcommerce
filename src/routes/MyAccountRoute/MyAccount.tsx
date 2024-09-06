import styles from "./MyAccount.module.scss";
import carrito from "../../assets/icon-shop.svg"

const MyAccount = () => {
  return (
    <div>

      <div>
        <p>Mi cuenta</p>
      </div>

      <div>
        <p>Datos</p>

        <div>
          <h4>Datos personales</h4>
          <button>Editar</button>

          <p>Luciana</p>
          <p>luciana@gmail.com</p>
        </div>

        <div>
          <h4>Mis compras</h4>
          <img src={carrito} alt="carrito" />
          <p>¡Hacé tu primera compra!</p>
          <button>Ir a la tienda</button>
        </div>
      </div>
    </div>
  );
};

export { MyAccount };
