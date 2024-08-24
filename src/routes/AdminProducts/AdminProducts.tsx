import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import styles from "./styles.module.scss";
import { useSaveProduct } from "../../hooks/useSaveProduct";

export const AdminProducts = () => {
  const { errorSendProduct, isLoadingSendProduct, sendProduct, responseSendProduct } = useSaveProduct();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    isNew: false,
    price: 0,
    images: [""],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    images: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "images") {
      // Si es el campo de imágenes, actualiza el array de imágenes
      setFormState((prevState) => ({
        ...prevState,
        images: value.split(",").map((img) => img.trim()), // Convertir la cadena a array
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    // Validación genérica
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
      description: formState.description.trim()
        ? ""
        : "Description is required",
      price: formState.price > 0 ? "" : "Price must be greater than zero",
      images: formState.images.every((img) => img.trim() !== "")
        ? ""
        : "At least one image URL is required",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      sendProduct({name: formState.name, price: formState.price, isNew: formState.isNew, images: formState.images, description: formState.description})
      console.log("Form submitted:", formState);
      setFormState({
        name: "",
        description: "",
        isNew: false,
        price: 0,
        images: [""],
      });
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
          name="price"
          label="Price"
          value={formState.price.toString()}
          onChange={handleChange}
          placeholder="Enter the price"
          type="number"
          error={errors.price}
        />
        <Textarea
          name="description"
          label="Description"
          value={formState.description}
          onChange={handleChange}
          placeholder="Enter a description"
          error={errors.description}
        />
        <Input
          name="images"
          label="Images"
          value={formState.images.join(", ")} // Convertir array a cadena para mostrar en input
          onChange={handleChange}
          placeholder="Enter image URLs separated by commas"
          error={errors.images}
        />
        <button type="submit" className={styles["button"]}>
          Submit
        </button>
      </form>
    </div>
  );
};
