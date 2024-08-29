import styles from "./Input.module.scss";
import { InputProps } from "./input.type";

export const Input = ({
  value,
  onChange,
  name,
  label,
  placeholder = "",
  type = "text",
  error,
  onFocus,
  onBlur,
  icon = "",
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${error ? styles.inputError : ""}` }
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {icon && <i className={icon} />}
      {error && <p className={styles.inputErrorMessage}>{error}</p>}
    </div>
  );
};
