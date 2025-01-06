const nameHandler = (e, setName, setNameError) => {
  setName(e.target.value)
  const regex = /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/
  if (regex.test(e.target.value)) {
    setNameError('')
  } else {
    setNameError('Некорректное имя')
  }
}

export default nameHandler
