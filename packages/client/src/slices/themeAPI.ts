const API_URL = 'http://localhost:3001'

export const getThems = async (theme_name?: string) => {
  const res = await fetch(`${API_URL}/themes${theme_name}`, {})
  return res.json()
}

export const getUserThems = async () => {
  const res = await fetch(`${API_URL}/user-theme`, {})
  return res.json()
}

export const addUserTheme = async (theme_name: String) => {
  const res = await fetch(`${API_URL}/user-theme`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ theme_name }),
  })
  return res.json()
}

export const changeUserTheme = async (theme_name: String) => {
  const res = await fetch(`${API_URL}/user-theme`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ theme_name }),
  })
  return res.json()
}
