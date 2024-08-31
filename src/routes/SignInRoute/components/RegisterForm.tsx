import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@components/Form/Input/Input";
import styles from "../SignIn.module.scss";
import { useNewUser } from "src/hooks/SignIn/useNewUser";
import { useTranslation } from "react-i18next";
import { validatePassword } from "@utils/utils";

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { newUser, isLoadingNewUser, errorNewUser, responseNewUser } = useNewUser();

  const initialState = {
    names: "",
    surnames: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { names, surnames, email, password, confirmPassword } = formState;

    return {
      names: names.trim().length !== 0 ? "" : t("name_required"),
      surnames: surnames.trim().length !== 0 ? "" : t("surnames_required"),
      email: email.trim().length !== 0 ? "" : t("email_required"),
      password: validatePassword(password),
      confirmPassword: password !== confirmPassword ? t("no_coincident_password") : "",
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((error) => error !== "");

    if (!hasErrors) {
      newUser({
        displayName: `${formState.names} ${formState.surnames}`,
        email: formState.email,
        password: formState.password,
      });
      setFormState(initialState);
    } else {
      alert(t("form_error"));
    }
  };

  const formFields: Array<{
    name: keyof typeof formState;
    label: string;
    type: string;
  }> = [
    { name: "names", label: t("names"), type: "text" },
    { name: "surnames", label: t("surnames"), type: "text" },
    { name: "email", label: t("email"), type: "email" },
    { name: "password", label: t("password"), type: "password" },
    { name: "confirmPassword", label: t("confirm_password"), type: "password" },
  ];

  return (
    <div className={styles.registerFormComponent}>
      <h2>{t("register")}</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ name, label, type }) => (
          <Input
            key={name}
            name={name}
            label={label}
            value={formState[name]}
            onChange={handleInputChange}
            type={type}
            error={errors[name]}
          />
        ))}
        <button type="submit">{t("check_in")}</button>
      </form>
    </div>
  );
};
