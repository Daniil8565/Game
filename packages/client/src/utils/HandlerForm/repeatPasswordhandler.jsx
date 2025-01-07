const repeatPasswordHandler = (
  e,
  setRepeatPassword,
  setRepeatPasswordError,
  confirmPassword
) => {
  const password = e.target.value
  setRepeatPassword(password)

  const regex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/

  if (regex.test(password)) {
    // Если пароли совпадают, сбрасываем ошибку
    if (password !== confirmPassword) {
      setRepeatPasswordError('Пароли не совпадают.')
    } else {
      setRepeatPasswordError('')
    }
  } else {
    setRepeatPasswordError('Добавьте заглавную букву или цифру.')
  }
}

export default repeatPasswordHandler
