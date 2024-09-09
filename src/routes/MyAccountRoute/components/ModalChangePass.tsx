import { Input } from "@components/Form/Input/Input";
import { validatePassword } from "@utils/utils";
import { ChangeEvent, FormEvent, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useResetPass } from "src/hooks/useResetPass";

type Props = {
  onClose: () => void;
  show: boolean;
};

export const ModalChangePass = ({ show, onClose }: Props) => {
  const { t } = useTranslation();
  const { resetPassProfile } = useResetPass();

  const initialState = {
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
    const { password, confirmPassword } = formState;

    return {
      password: validatePassword(password),
      confirmPassword:
        password !== confirmPassword ? t("no_coincident_password") : "",
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );

    if (!hasErrors) {
      resetPassProfile(formState.password);
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
    { name: "password", label: t("password"), type: "password" },
    { name: "confirmPassword", label: t("confirm_password"), type: "password" },
  ];

  return (
    <Modal show={show}>
      <ModalHeader>
        <button onClick={onClose}>
          <i className="icon-xmark" />
        </button>
      </ModalHeader>
      <ModalBody>
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
      </ModalBody>
    </Modal>
  );
};
