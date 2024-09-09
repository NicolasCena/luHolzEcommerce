import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input } from "@components/Form/Input/Input";
import styles from "../SignIn.module.scss";
import { useTranslation } from "react-i18next";
import { useSignInGoogle } from "src/hooks/SignIn/useSignInGoogle";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  UserCredential,
} from "firebase/auth";
import { useSignInStandar } from "src/hooks/SignIn/useSignInStandar";

export const LoginForm = () => {
  const { t } = useTranslation();
  const {
    getUserGoogle,
    isLoadingGetUserGoogle,
    statusGetUserGoogle,
    errorGetUserGoogle,
  } = useSignInGoogle();
  const { errorGetUser, getUser, isLoadingGetUser } = useSignInStandar();

  const initialState = {
    email: "",
    password: "",
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getUser({email: formState.email, password: formState.password});
  };

  const formFields: Array<{
    name: keyof typeof formState;
    label: string;
    type: string;
  }> = [
    { name: "email", label: t("email"), type: "email" },
    { name: "password", label: t("password"), type: "password" },
  ];

  return (
    <>
      <div className={styles.loginFormComponent}>
        <h2>{t("login")}</h2>
        <form onSubmit={handleSubmit} className={styles.formActive}>
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
          <button type="submit">{t("enter")}</button>
        </form>
        <button onClick={getUserGoogle}>Entrar con google</button>
      </div>
    </>
  );
};
