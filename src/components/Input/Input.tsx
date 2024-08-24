import styles from "./styles.module.scss";
import { InputProps } from "./input.type";

export const Input = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  type = "text",
  error,
  onFocus,
  onBlur,
}: InputProps) => {
  return (
    <div className={styles["input-container"]}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${error ? styles["input-error"] : ""}`}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <p className={styles["input-error-message"]}>{error}</p>}
    </div>
  );
};
