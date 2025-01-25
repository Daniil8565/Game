import React, {
  ChangeEventHandler,
  useCallback,
  useState,
  useEffect,
} from 'react'

import { AuthInput } from '@/components/AuthInput'
import { AuthButton } from '@/components/AuthButton'
import { ErrorMessage } from '@/components/ProfileErrorMessage/ErrorMessage'
import { AuthForm } from '../components/AuthForm'

import styles from './SingupPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { SignupService } from '@/services/SignupService'

export const SignupPage: React.FC = () => {
  const reg = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
    nameChat: '',
    name: /^[A-Za-zА-Яа-я]{1}[a-zA-Zа-яА-Я-]*$/,
    password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    phone: /^\+?\d{10,15}$/,
  }
  const [loginValue, setLoginValue] = useState('')
  const [loginDirty, setLoginDirty] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<string>(
    'Логин не может быть пустым'
  )

  const [firstNameValue, setFirstNameValue] = useState<string>('')
  const [firstNameDirty, setFirstNameDirty] = useState<boolean>(false)
  const [firstNameError, setFirstNameError] = useState<string>(
    'Имя не может быть пустым'
  )
  const [secondNameValue, setSecondNameValue] = useState<string>('')
  const [secondNameDirty, setSecondNameDirty] = useState<boolean>(false)
  const [secondNameError, setSecondNameError] = useState<string>(
    'Фамилия не может быть пустой'
  )

  const [emailValue, setEmailValue] = useState<string>('')
  const [emailDirty, setEmailDirty] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>(
    'Email не может быть пустым'
  )
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>(
    'Пароль не может быть пустым'
  )
  const [phoneValue, setPhoneValue] = useState<string>('')
  const [phoneDirty, setPhoneDirty] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<string>(
    'Номер телефона не может быть пустым'
  )

  const [networkError, setNetworkError] = useState<string>('')

  const navigate = useNavigate()

  const handleOnChangeLoginInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        setLoginValue(event.target.value)
        if (reg.login.test(event.target.value)) {
          setLoginError('')
        } else {
          setLoginError('Некорректный login')
        }
      },
      [loginValue]
    )

  const handleOnChangePasswordInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const value = event.target.value
        setPasswordValue(value)

        if (reg.password.test(value)) {
          setPasswordError('')
        } else {
          setPasswordError('Добавьте заглавную букву или цифру.')
        }
      },
      [passwordValue]
    )

  const handleOnChangeFirstNameInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const value = event.target.value
        setFirstNameValue(value)

        if (reg.name.test(value)) {
          setFirstNameError('')
        } else {
          setFirstNameError('Неккоректное имя')
        }
      },
      [firstNameValue]
    )

  const handleOnChangeSecondNameInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const value = event.target.value
        setSecondNameValue(value)

        if (reg.name.test(value)) {
          setSecondNameError('')
        } else {
          setSecondNameError('Неккоректная фамилия')
        }
      },
      [secondNameValue]
    )

  const handleOnChangeEmailInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const value = event.target.value
        setEmailValue(value)

        if (reg.email.test(value)) {
          setEmailError('')
        } else {
          setEmailError('Неккоректный email')
        }
      },
      [emailValue]
    )

  const handleOnChangePhoneInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const value = event.target.value
        setPhoneValue(value)

        if (reg.phone.test(value)) {
          setPhoneError('')
        } else {
          setPhoneError('Неккоректный телефон')
        }
      },
      [phoneValue]
    )

  const handleAuthError = useCallback((errorMsg: string) => {
    setNetworkError(errorMsg)
  }, [])

  const handleAuthSuccess = useCallback(() => {
    navigate('/')
  }, [])

  const handleClickAuthButton = useCallback(() => {
    const signupService = new SignupService()
    signupService
      .requestData({
        requestData: {
          login: loginValue,
          password: passwordValue,
          phone: phoneValue,
          first_name: firstNameValue,
          second_name: secondNameValue,
          email: emailValue,
        },
        errorCallback: handleAuthError,
        successCallback: handleAuthSuccess,
      })
      .catch(handleAuthError)
  }, [
    loginValue,
    passwordValue,
    firstNameValue,
    secondNameValue,
    emailValue,
    phoneValue,
  ])

  const blurLogin = () => {
    setLoginDirty(true)
  }

  const blurPassword = () => {
    setPasswordDirty(true)
  }

  const blurfirstName = () => {
    setFirstNameDirty(true)
  }

  const blurSecondName = () => {
    setSecondNameDirty(true)
  }

  const blurEmail = () => {
    setEmailDirty(true)
  }

  const blurPhone = () => {
    setPhoneDirty(true)
  }

  const [formValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    if (
      loginError ||
      passwordError ||
      firstNameError ||
      secondNameError ||
      emailError ||
      phoneError
    ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [
    loginError,
    passwordError,
    firstNameError,
    secondNameError,
    emailError,
    phoneError,
  ])

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Регистрация</h1>
      <AuthForm>
        <AuthInput
          name="first_name"
          value={firstNameValue}
          onBlur={blurfirstName}
          onChange={handleOnChangeFirstNameInput}
          placeholder="Имя"
          type={'text'}
        />
        {firstNameDirty && firstNameError && (
          <ErrorMessage message={firstNameError} />
        )}
        <AuthInput
          name="second_name"
          value={secondNameValue}
          onBlur={blurSecondName}
          onChange={handleOnChangeSecondNameInput}
          placeholder="Фамилия"
          type={'text'}
        />
        {secondNameDirty && secondNameError && (
          <ErrorMessage message={secondNameError} />
        )}
        <AuthInput
          name="login"
          value={loginValue}
          onBlur={blurLogin}
          onChange={handleOnChangeLoginInput}
          placeholder="Логин"
          type={'text'}
        />
        {loginDirty && loginError && <ErrorMessage message={loginError} />}
        <AuthInput
          name="email"
          value={emailValue}
          onBlur={blurEmail}
          onChange={handleOnChangeEmailInput}
          placeholder="Почта"
          type={'email'}
        />
        {emailDirty && emailError && <ErrorMessage message={emailError} />}
        <AuthInput
          name="password"
          value={passwordValue}
          onBlur={blurPassword}
          onChange={handleOnChangePasswordInput}
          placeholder="Пароль"
          type={'password'}
        />
        {passwordDirty && passwordError && (
          <ErrorMessage message={passwordError} />
        )}
        <AuthInput
          name="phone"
          value={phoneValue}
          onBlur={blurPhone}
          onChange={handleOnChangePhoneInput}
          placeholder="Телефон"
          type={'tel'}
        />
        {phoneDirty && phoneError && <ErrorMessage message={phoneError} />}
        <AuthButton
          disabled={!formValid}
          text="Зарегистрироваться"
          onClick={handleClickAuthButton}
        />
        <span className={styles.container__hint}>
          Уже есть аккаунт? <Link to="/signin">Авторизуйтесь!</Link>
        </span>
      </AuthForm>
    </div>
  )
}
