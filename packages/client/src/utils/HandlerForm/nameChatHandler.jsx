const nameChatHandler = (e, setNameChat, setnameChatError) => {
  setNameChat(e.target.value)
  if (e.target.value) {
    setnameChatError('')
  } else {
    setnameChatError('Введите имя')
  }
}

export default nameChatHandler
