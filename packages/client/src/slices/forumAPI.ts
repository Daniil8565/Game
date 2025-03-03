const API_URL = 'http://localhost:3001'

export const fetchTopics = async () => {
  const res = await fetch(`${API_URL}/topics`, {})
  return res.json()
}

export const createTopic = async (text: String) => {
  const res = await fetch(`${API_URL}/topics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  return res.json()
}

export const fetchComments = async (topicId: string) => {
  const res = await fetch(`${API_URL}/topics/${topicId}/comments`)
  return res.json()
}

export const addComment = async (topicId: string, text: string) => {
  const res = await fetch(`${API_URL}/topics/${topicId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  return res.json()
}

export const fetchReplies = async (commentId: string) => {
  const res = await fetch(`${API_URL}/comments/${commentId}/replies`)
  return res.json()
}

export const addReply = async (commentId: string, text: string) => {
  const res = await fetch(`${API_URL}/comments/${commentId}/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
  return res.json()
}
