// const API_URL = 'http://localhost:3001'

// export const fetchTopics = async () => {
//   const res = await fetch(`${API_URL}/topics`, {})
//   return res.json()
// }

// export const createTopic = async (text: String) => {
//   const res = await fetch(`${API_URL}/topics`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ text }),
//   })
//   return res.json()
// }

// export const fetchComments = async (topicId: string) => {
//   const res = await fetch(`${API_URL}/topics/${topicId}/comments`)
//   return res.json()
// }

// export const addComment = async (topicId: string, text: string) => {
//   const res = await fetch(`${API_URL}/topics/${topicId}/comments`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ text }),
//   })
//   return res.json()
// }

// export const fetchReplies = async (commentId: string) => {
//   const res = await fetch(`${API_URL}/comments/${commentId}/replies`)
//   return res.json()
// }

// export const addReply = async (commentId: string, text: string) => {
//   const res = await fetch(`${API_URL}/comments/${commentId}/replies`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ text }),
//   })
//   return res.json()
// }

import axios from 'axios'

const API_URL = 'http://localhost:3001/api'

export const fetchTopics = async () => {
  const response = await axios.get(`${API_URL}/topics`, {
    withCredentials: true,
  })
  return response.data
}

export const createTopic = async (text: string, file?: File) => {
  const formData = new FormData()
  formData.append('title', text)
  if (file) formData.append('file', file)
  const response = await axios.post(`${API_URL}/topics`, formData, {
    withCredentials: true,
  })
  return response.data
}

export const fetchComments = async (topicId: string) => {
  const response = await axios.get(`${API_URL}/topics/${topicId}/comments`, {
    withCredentials: true,
  })
  return response.data
}

export const addComment = async (
  topicId: string,
  text: string,
  file?: File
) => {
  const formData = new FormData()
  formData.append('text', text)
  if (file) formData.append('file', file)
  const response = await axios.post(
    `${API_URL}/topics/${topicId}/comments`,
    formData,
    {
      withCredentials: true,
    }
  )
  return response.data
}

export const fetchReplies = async (commentId: string) => {
  const response = await axios.get(`${API_URL}/comments/${commentId}/replies`, {
    withCredentials: true,
  })
  return response.data
}

export const addReply = async (
  commentId: string,
  text: string,
  file?: File
) => {
  const formData = new FormData()
  formData.append('text', text)
  if (file) formData.append('file', file)
  const response = await axios.post(
    `${API_URL}/comments/${commentId}/replies`,
    formData,
    {
      withCredentials: true,
    }
  )
  return response.data
}
