import React, { ChangeEventHandler, useCallback, useState } from 'react'

import { AuthInput } from '@/components/AuthInput';
import { AuthButton } from '@/components/AuthButton';

import { AuthForm } from '../components/AuthForm';

import styles from './SinginPage.module.scss';

export const SigninPage: React.FC = () => {
  const [loginValue, setLoginValue] = useState('');

  const handleOnChangeLoginInput: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setLoginValue(event.target.value);
  }, []);

  const [passwordValue, setPasswordValue] = useState('');

  const handleOnChangePasswordInput: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setPasswordValue(event.target.value);
  }, []);

  const handleClickAuthButton = useCallback(() => {
    // TODO add authorization
    console.log('login value: ', loginValue);
    console.log('password value: ', passwordValue);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Авторизация</h1>
      <AuthForm>
        <AuthInput name="login" value={loginValue} onChange={handleOnChangeLoginInput} placeholder="Логин" type={'email'} />
        <AuthInput name="password" value={passwordValue} onChange={handleOnChangePasswordInput} placeholder="Пароль" type={'password'} />
        <AuthButton text="Войти" onClick={handleClickAuthButton} />
      </AuthForm>
    </div>
  )
};
