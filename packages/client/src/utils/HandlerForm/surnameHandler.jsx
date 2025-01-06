const surnameHandler = (e, setSurname, setSurnameError) => {
  setSurname(e.target.value)
  const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/
  if (regex.test(e.target.value)) {
    setSurnameError('')
  } else {
    setSurnameError('Некорректная фамилия')
  }
}

export default surnameHandler
