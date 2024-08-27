import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../../Form/Input/Input';
import styles from '../User.module.scss';
import { useTranslation } from 'react-i18next';

export const Login = () => {

  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formActive}>
      <h2>{t('login')}</h2>
      <Input
        name="loginEmail"
        label={t('username')}
        value={formState.username}
        onChange={handleInputChange}
        type="email"
        icon=''
      />
      <Input
        name="loginPassword"
        label={t('password')}
        value={formState.password}
        onChange={handleInputChange}
        type="password"
        icon=''
      />
      <button type="submit">{t('enter')}</button>
    </form>
  );
};
