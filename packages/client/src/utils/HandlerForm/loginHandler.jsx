const loginHandler = (e, setLogin, setLoginError) => {
  setLogin(e.target.value)
  const regex = /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/
  if (regex.test(e.target.value)) {
    setLoginError('')
  } else {
    setLoginError('Некоррктный логин')
  }
}

export default loginHandler
