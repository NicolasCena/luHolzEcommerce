import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/Input/Input";
import styles from "./styles.module.scss";

export const AdminProducts = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: formState.name.trim() ? "" : "Name is required",
      email: formState.email.trim() ? "" : "Email is required",
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      console.log("Form submitted:", formState);
      setFormState({ name: "", email: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles["form-container"]}>
        <Input
          name="name"
          label="Name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.name}
        />
        <Input
          name="email"
          label="Email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter your email"
          type="email"
          error={errors.email}
        />
        <button type="submit" className={styles["button"]}>
          Submit
        </button>
      </form>
    </div>
  );
};
