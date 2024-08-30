import { TextareaProps } from "./textarea.type";
import styles from "./Textarea.module.scss";

export const Textarea = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  error,
  onFocus,
  onBlur,
}: TextareaProps) => {
  return (
    <div className={styles.textareaContainer}>
      <label htmlFor={name} className={styles.textareaLabel}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.textarea} ${error ? styles.textareaError : ""}`}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <p className={styles.textareaErrorMessage}>{error}</p>}
    </div>
  );
};
