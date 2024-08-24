import styles from "./input.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
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

export default Input;
