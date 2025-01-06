const phoneHandler = (e, setPhone, setPhoneError) => {
  setPhone(e.target.value)
  const regex = /^\+?\d{10,15}$/
  if (regex.test(e.target.value)) {
    setPhoneError('')
  } else {
    setPhoneError('Некорректный номер телефона')
  }
}

export default phoneHandler
