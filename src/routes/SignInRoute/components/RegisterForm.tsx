import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@components/Form/Input/Input";
import styles from "../SignIn.module.scss";

export const RegisterForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formState;

    // Aquí puedes agregar la lógica de registro
    console.log("Form Submitted", {
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit} >
        <h2>Signup</h2>
        <Input
          name="nombre"
          label="Nombre de usuario"
          value={formState.username}
          onChange={handleInputChange}
          type="text"
        />
        <Input
          name="apellidos"
          label="Apellidos"
          value={formState.username}
          onChange={handleInputChange}
          type="text"
        />
        <Input
          name="username"
          label="Nombre de usuario"
          value={formState.username}
          onChange={handleInputChange}
          type="text"
        />
        <Input
          name="email"
          label="E-Mail"
          value={formState.email}
          onChange={handleInputChange}
          type="email"
        />
        <Input
          name="password"
          label="Passwort"
          value={formState.password}
          onChange={handleInputChange}
          type="password"
        />
        <Input
          name="confirmPassword"
          label="Passwort bestätigen"
          value={formState.confirmPassword}
          onChange={handleInputChange}
          type="password"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
