import React, { ChangeEventHandler, useCallback, useState } from 'react'

import { AuthInput } from '@/components/AuthInput'
import { AuthButton } from '@/components/AuthButton'

import { AuthForm } from '../components/AuthForm'

import styles from './SingupPage.module.scss'

export const SignupPage: React.FC = () => {
  const [firstNameValue, setFirstNameValue] = useState<string>('')
  const [secondNameValue, setSecondNameValue] = useState<string>('')
  const [loginValue, setLoginValue] = useState<string>('')
  const [emailValue, setEmailValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [phoneValue, setPhoneValue] = useState<string>('')

  const handleOnChangeLoginInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      setLoginValue(event.target.value)
    }, [])

  const handleOnChangePasswordInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      setPasswordValue(event.target.value)
    }, [])

  const handleOnChangeFirstNameInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      setFirstNameValue(event.target.value)
    }, [])

  const handleOnChangeSecondNameInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      setSecondNameValue(event.target.value)
    }, [])

  const handleOnChangeEmailInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      setEmailValue(event.target.value)
    }, [])

  const handleOnChangePhoneInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(event => {
      setPhoneValue(event.target.value)
    }, [])

  const handleClickAuthButton = useCallback(() => {
    // TODO add authorization
    console.log('login value: ', loginValue)
    console.log('password value: ', passwordValue)
    console.log('first name value: ', firstNameValue)
    console.log('second name value: ', secondNameValue)
    console.log('email value: ', emailValue)
    console.log('phone value: ', phoneValue)
  }, [
    loginValue,
    passwordValue,
    firstNameValue,
    secondNameValue,
    emailValue,
    phoneValue,
  ])

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Регистрация</h1>
      <AuthForm>
        <AuthInput
          name="first_name"
          value={firstNameValue}
          onChange={handleOnChangeFirstNameInput}
          placeholder="Имя"
          type={'text'}
        />
        <AuthInput
          name="second_name"
          value={secondNameValue}
          onChange={handleOnChangeSecondNameInput}
          placeholder="Фамилия"
          type={'text'}
        />
        <AuthInput
          name="login"
          value={loginValue}
          onChange={handleOnChangeLoginInput}
          placeholder="Логин"
          type={'text'}
        />
        <AuthInput
          name="email"
          value={emailValue}
          onChange={handleOnChangeEmailInput}
          placeholder="Почта"
          type={'email'}
        />
        <AuthInput
          name="password"
          value={passwordValue}
          onChange={handleOnChangePasswordInput}
          placeholder="Пароль"
          type={'password'}
        />
        <AuthInput
          name="phone"
          value={phoneValue}
          onChange={handleOnChangePhoneInput}
          placeholder="Телефон"
          type={'number'}
        />
        <AuthButton text="Зарегистрироваться" onClick={handleClickAuthButton} />
      </AuthForm>
    </div>
  )
}
