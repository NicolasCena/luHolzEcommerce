import { TextareaProps } from "./textarea.type";
import styles from './styles.module.scss';

export const Textarea = ({
    value,
    onChange,
    name,
    label,
    placeholder,
    error,
    onFocus,
    onBlur
  }: TextareaProps) => {
    return (
      <div className={styles['textarea-container']}>
        <label htmlFor={name} className={styles['textarea-label']}>
          {label}
        </label>
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles['textarea']} ${error ? styles['textarea-error'] : ''}`}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {error && <p className={styles['textarea-error-message']}>{error}</p>}
      </div>
    );
  };
  