const emailHandler = (e, setEmail, setEmailError) => {
  setEmail(e.target.value)
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (regex.test(e.target.value)) {
    setEmailError('')
  } else {
    setEmailError('Некорректный email')
  }
}

export default emailHandler
