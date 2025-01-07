const passwordHandler = (e, setPassword, setPasswordError) => {
  const password = e.target.value
  setPassword(password)
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/

  if (regex.test(password)) {
    setPasswordError('')
  } else {
    setPasswordError('Добавьте заглавную букву или цифру.')
  }
}

export default passwordHandler
