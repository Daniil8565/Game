import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { AuthButton } from '@/components/AuthButton'
import { AuthInput } from '@/components/AuthInput'
import { ErrorMessage } from '@/components/ProfileErrorMessage/ErrorMessage'
import { AuthForm } from '../components/AuthForm'

import { registerUser, resetRegistration } from '@/slices/registrationSlice'
import { AppDispatch, RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SingupPage.module.scss'

/**
 * Кастомный хук для управления состоянием поля ввода с валидацией.
 * Принимает:
 * - initialValue: начальное значение поля,
 * - initialError: сообщение об ошибке по умолчанию (например, "Поле не может быть пустым"),
 * - regex: регулярное выражение для проверки корректности значения,
 * - invalidMessage: сообщение об ошибке, если значение не проходит проверку.
 */
const useInput = (
  initialValue: string,
  initialError: string,
  regex: RegExp,
  invalidMessage: string
) => {
  const [value, setValue] = useState(initialValue)
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState(initialError)

  // Обработчик изменения поля ввода
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      const newValue = event.target.value
      setValue(newValue)
      // Если значение проходит проверку регуляркой — сбрасываем ошибку,
      // иначе устанавливаем сообщение об ошибке.
      if (regex.test(newValue)) {
        setError('')
      } else {
        setError(invalidMessage)
      }
    },
    [regex, invalidMessage]
  )

  // Обработчик потери фокуса — отмечаем, что поле было затронуто (dirty)
  const onBlur = useCallback(() => {
    setDirty(true)
  }, [])

  return { value, setValue, dirty, error, onChange, onBlur }
}

export const SignupPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading } = useSelector((state: RootState) => state.registration)
  const navigate = useNavigate()

  // Регулярные выражения для валидации полей
  const reg = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
    name: /^[A-Za-zА-Яа-я]{1}[a-zA-Zа-яА-Я-]*$/,
    password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    phone: /^\+?\d{10,15}$/,
  }

  // Используем кастомный хук для каждого поля ввода
  const login = useInput(
    '',
    'Логин не может быть пустым',
    reg.login,
    'Некорректный login'
  )
  const firstName = useInput(
    '',
    'Имя не может быть пустым',
    reg.name,
    'Неккоректное имя'
  )
  const secondName = useInput(
    '',
    'Фамилия не может быть пустой',
    reg.name,
    'Неккоректная фамилия'
  )
  const email = useInput(
    '',
    'Email не может быть пустым',
    reg.email,
    'Неккоректный email'
  )
  const password = useInput(
    '',
    'Пароль не может быть пустым',
    reg.password,
    'Добавьте заглавную букву или цифру.'
  )
  const phone = useInput(
    '',
    'Номер телефона не может быть пустым',
    reg.phone,
    'Неккоректный телефон'
  )

  // Локальное состояние для отображения ошибок, полученных из запроса
  const [networkError, setNetworkError] = useState<string>('')

  // Обработчик успешной регистрации — переадресовываем пользователя на главную страницу
  const handleAuthSuccess = useCallback(() => {
    navigate('/game')
  }, [navigate])

  // Обработчик ошибки регистрации
  const handleAuthError = useCallback(
    (errorMsg: string) => {
      // Если ошибка содержит "400", переадресовываем на главную
      if (errorMsg.includes('400')) {
        navigate('/')
        return
      }
      setNetworkError(errorMsg)
    },
    [navigate]
  )

  const handleClickAuthButton = useCallback(() => {
    const requestData = {
      login: login.value,
      password: password.value,
      phone: phone.value,
      first_name: firstName.value,
      second_name: secondName.value,
      email: email.value,
    }
    dispatch(registerUser(requestData))
      .unwrap()
      .then(handleAuthSuccess) // при успешной регистрации вызываем handleAuthSuccess
      .catch(handleAuthError) // при ошибке — handleAuthError
  }, [
    dispatch,
    login.value,
    password.value,
    phone.value,
    firstName.value,
    secondName.value,
    email.value,
    handleAuthSuccess,
    handleAuthError,
  ])

  // Состояние валидности всей формы
  const [formValid, setFormValid] = useState<boolean>(false)

  // Эффект для проверки валидности формы: если хотя бы в одном поле есть ошибка, форма невалидна
  useEffect(() => {
    if (
      login.error ||
      firstName.error ||
      secondName.error ||
      email.error ||
      password.error ||
      phone.error
    ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [
    login.error,
    firstName.error,
    secondName.error,
    email.error,
    password.error,
    phone.error,
  ])

  // Сбрасываем состояние регистрации при монтировании компонента
  useEffect(() => {
    dispatch(resetRegistration())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Регистрация</h1>
      <AuthForm>
        {/* Поле "Имя" */}
        <AuthInput
          name="first_name"
          value={firstName.value}
          onBlur={firstName.onBlur}
          onChange={firstName.onChange}
          placeholder="Имя"
          type="text"
        />
        {firstName.dirty && firstName.error && (
          <ErrorMessage message={firstName.error} />
        )}

        {/* Поле "Фамилия" */}
        <AuthInput
          name="second_name"
          value={secondName.value}
          onBlur={secondName.onBlur}
          onChange={secondName.onChange}
          placeholder="Фамилия"
          type="text"
        />
        {secondName.dirty && secondName.error && (
          <ErrorMessage message={secondName.error} />
        )}

        {/* Поле "Логин" */}
        <AuthInput
          name="login"
          value={login.value}
          onBlur={login.onBlur}
          onChange={login.onChange}
          placeholder="Логин"
          type="text"
        />
        {login.dirty && login.error && <ErrorMessage message={login.error} />}

        {/* Поле "Email" */}
        <AuthInput
          name="email"
          value={email.value}
          onBlur={email.onBlur}
          onChange={email.onChange}
          placeholder="Почта"
          type="email"
        />
        {email.dirty && email.error && <ErrorMessage message={email.error} />}

        {/* Поле "Пароль" */}
        <AuthInput
          name="password"
          value={password.value}
          onBlur={password.onBlur}
          onChange={password.onChange}
          placeholder="Пароль"
          type="password"
        />
        {password.dirty && password.error && (
          <ErrorMessage message={password.error} />
        )}

        {/* Поле "Телефон" */}
        <AuthInput
          name="phone"
          value={phone.value}
          onBlur={phone.onBlur}
          onChange={phone.onChange}
          placeholder="Телефон"
          type="tel"
        />
        {phone.dirty && phone.error && <ErrorMessage message={phone.error} />}

        {/* Кнопка регистрации: отключена, если форма невалидна или идёт загрузка */}
        <AuthButton
          disabled={!formValid || loading}
          text="Зарегистрироваться"
          onClick={handleClickAuthButton}
        />

        {/* Отображаем ошибку, если она возникла при запросе */}
        {networkError && <ErrorMessage message={networkError} />}

        <span className={styles.container__hint}>
          Уже есть аккаунт?{' '}
          <span className={styles.link}>
            <Link to="/signin">Авторизуйтесь!</Link>
          </span>
        </span>
      </AuthForm>
    </div>
  )
}
