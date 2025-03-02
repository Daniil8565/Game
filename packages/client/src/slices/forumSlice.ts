// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import {
//   addComment,
//   addReply,
//   createTopic,
//   fetchComments,
//   fetchReplies,
//   fetchTopics,
// } from './forumAPI'

// interface Topic {
//   id: number
//   title: string
//   userId: number
//   createdAt: string
// }

// interface Comment {
//   id: number
//   text: string
//   topicId: number
//   userId: number
//   createdAt: string
// }

// interface Reply {
//   id: number
//   text: string
//   commentId: number
//   userId: number
//   createdAt: string
// }

// interface ForumState {
//   topics: Topic[]
//   comments: { [topicId: number]: Comment[] }
//   replies: { [commentId: number]: Reply[] }
//   loading: boolean
//   error: string | null
// }

// const initialState: ForumState = {
//   topics: [],
//   comments: {},
//   replies: {},
//   loading: false,
//   error: null,
// }

// export const fetchTopicsThunk = createAsyncThunk(
//   'forum/fetchTopics',
//   async () => {
//     return await fetchTopics()
//   }
// )

// export const createTopicThunk = createAsyncThunk(
//   'forum/createTopic',
//   async (text: string) => {
//     return await createTopic(text)
//   }
// )

// export const fetchCommentsThunk = createAsyncThunk(
//   'forum/fetchComments',
//   async (topicId: string) => {
//     return { topicId: Number(topicId), comments: await fetchComments(topicId) }
//   }
// )

// export const addCommentThunk = createAsyncThunk(
//   'forum/addComment',
//   async ({ topicId, text }: { topicId: string; text: string }) => {
//     return {
//       topicId: Number(topicId),
//       comment: await addComment(topicId, text),
//     }
//   }
// )

// export const fetchRepliesThunk = createAsyncThunk(
//   'forum/fetchReplies',
//   async (commentId: string) => {
//     return {
//       commentId: Number(commentId),
//       replies: await fetchReplies(commentId),
//     }
//   }
// )

// export const addReplyThunk = createAsyncThunk(
//   'forum/addReply',
//   async ({ commentId, text }: { commentId: string; text: string }) => {
//     return {
//       commentId: Number(commentId),
//       reply: await addReply(commentId, text),
//     }
//   }
// )

// const forumSlice = createSlice({
//   name: 'forum',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTopicsThunk.pending, state => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(fetchTopicsThunk.fulfilled, (state, action) => {
//         state.loading = false
//         state.topics = action.payload
//       })
//       .addCase(fetchTopicsThunk.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.error.message || 'Failed to fetch topics'
//       })
//       .addCase(createTopicThunk.fulfilled, (state, action) => {
//         state.topics.push(action.payload)
//       })
//       .addCase(fetchCommentsThunk.pending, state => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
//         state.loading = false
//         state.comments[action.payload.topicId] = action.payload.comments
//       })
//       .addCase(fetchCommentsThunk.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.error.message || 'Failed to fetch comments'
//       })
//       .addCase(addCommentThunk.fulfilled, (state, action) => {
//         const { topicId, comment } = action.payload
//         if (!state.comments[topicId]) state.comments[topicId] = []
//         state.comments[topicId].push(comment)
//       })
//       .addCase(fetchRepliesThunk.pending, state => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(fetchRepliesThunk.fulfilled, (state, action) => {
//         state.loading = false
//         state.replies[action.payload.commentId] = action.payload.replies
//       })
//       .addCase(fetchRepliesThunk.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.error.message || 'Failed to fetch replies'
//       })
//       .addCase(addReplyThunk.fulfilled, (state, action) => {
//         const { commentId, reply } = action.payload
//         if (!state.replies[commentId]) state.replies[commentId] = []
//         state.replies[commentId].push(reply)
//       })
//   },
// })

// export default forumSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserService } from '../services/UserService' // Импорт для extra аргумента
import {
  addComment,
  addReply,
  createTopic,
  fetchComments,
  fetchReplies,
  fetchTopics,
} from './forumAPI'

// Определяем интерфейсы для типов данных
interface Topic {
  id: number
  title: string
  userId: number
  fileUrl: string | null
  createdAt: string
}

interface Comment {
  id: number
  text: string
  topicId: number
  userId: number
  fileUrl: string | null
  createdAt: string
}

interface Reply {
  id: number
  text: string
  commentId: number
  userId: number
  fileUrl: string | null
  createdAt: string
}

// Определяем состояние форума
export interface ForumState {
  topics: Topic[]
  comments: { [topicId: number]: Comment[] }
  replies: { [commentId: number]: Reply[] }
  loading: boolean
  error: string | null // Ошибка как string | null
}

// Начальное состояние
const initialState: ForumState = {
  topics: [],
  comments: {},
  replies: {},
  loading: false,
  error: null,
}

// Thunk для получения списка топиков с обработкой ошибок
export const fetchTopicsThunk = createAsyncThunk<
  Topic[],
  void,
  { extra: IUserService; rejectValue: string }
>('forum/fetchTopics', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await fetchTopics() // Получаем данные из forumAPI
    return response // Возвращаем массив топиков
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to fetch topics') // Возвращаем ошибку как строку
  }
})

// Thunk для создания нового топика с поддержкой файла
export const createTopicThunk = createAsyncThunk<
  Topic,
  { text: string; file?: File },
  { extra: IUserService; rejectValue: string }
>('forum/createTopic', async ({ text, file }, { extra, rejectWithValue }) => {
  try {
    const response = await createTopic(text, file) // Передаём текст и файл
    return response // Возвращаем созданный топик
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to create topic') // Обработка ошибок
  }
})

// Thunk для получения комментариев к топику
export const fetchCommentsThunk = createAsyncThunk<
  { topicId: number; comments: Comment[] },
  string,
  { extra: IUserService; rejectValue: string }
>('forum/fetchComments', async (topicId, { extra, rejectWithValue }) => {
  try {
    const comments = await fetchComments(topicId)
    return { topicId: Number(topicId), comments } // Возвращаем объект с topicId и комментариями
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to fetch comments') // Обработка ошибок
  }
})

// Thunk для добавления комментария с поддержкой файла
export const addCommentThunk = createAsyncThunk<
  { topicId: number; comment: Comment },
  { topicId: string; text: string; file?: File },
  { extra: IUserService; rejectValue: string }
>(
  'forum/addComment',
  async ({ topicId, text, file }, { extra, rejectWithValue }) => {
    try {
      const comment = await addComment(topicId, text, file) // Передаём текст и файл
      return { topicId: Number(topicId), comment } // Возвращаем объект с topicId и комментарием
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to add comment') // Обработка ошибок
    }
  }
)

// Thunk для получения ответов к комментарию
export const fetchRepliesThunk = createAsyncThunk<
  { commentId: number; replies: Reply[] },
  string,
  { extra: IUserService; rejectValue: string }
>('forum/fetchReplies', async (commentId, { extra, rejectWithValue }) => {
  try {
    const replies = await fetchReplies(commentId)
    return { commentId: Number(commentId), replies } // Возвращаем объект с commentId и ответами
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to fetch replies') // Обработка ошибок
  }
})

// Thunk для добавления ответа с поддержкой файла
export const addReplyThunk = createAsyncThunk<
  { commentId: number; reply: Reply },
  { commentId: string; text: string; file?: File },
  { extra: IUserService; rejectValue: string }
>(
  'forum/addReply',
  async ({ commentId, text, file }, { extra, rejectWithValue }) => {
    try {
      const reply = await addReply(commentId, text, file) // Передаём текст и файл
      return { commentId: Number(commentId), reply } // Возвращаем объект с commentId и ответом
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to add reply') // Обработка ошибок
    }
  }
)

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    // Можно добавить кастомные редьюсеры, если нужно
  },
  extraReducers: builder => {
    builder
      // Обработка загрузки топиков
      .addCase(fetchTopicsThunk.pending, state => {
        state.loading = true // Устанавливаем состояние загрузки
        state.error = null // Сбрасываем ошибки
      })
      .addCase(fetchTopicsThunk.fulfilled, (state, action) => {
        state.loading = false // Завершаем загрузку
        state.topics = action.payload // Обновляем список топиков
      })
      .addCase(fetchTopicsThunk.rejected, (state, action) => {
        state.loading = false // Завершаем загрузку
        state.error = action.payload || null // Устанавливаем ошибку как string или null
      })
      // Обработка создания топика
      .addCase(createTopicThunk.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(createTopicThunk.fulfilled, (state, action) => {
        state.loading = false
        state.topics.push(action.payload) // Добавляем новый топик
      })
      .addCase(createTopicThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || null // Устанавливаем ошибку как string или null
      })
      // Обработка загрузки комментариев
      .addCase(fetchCommentsThunk.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.comments[action.payload.topicId] = action.payload.comments // Обновляем комментарии
      })
      .addCase(fetchCommentsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || null // Устанавливаем ошибку как string или null
      })
      // Обработка добавления комментария
      .addCase(addCommentThunk.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(addCommentThunk.fulfilled, (state, action) => {
        state.loading = false
        const { topicId, comment } = action.payload
        if (!state.comments[topicId]) state.comments[topicId] = []
        state.comments[topicId].push(comment) // Добавляем новый комментарий
      })
      .addCase(addCommentThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || null // Устанавливаем ошибку как string или null
      })
      // Обработка загрузки ответов
      .addCase(fetchRepliesThunk.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRepliesThunk.fulfilled, (state, action) => {
        state.loading = false
        state.replies[action.payload.commentId] = action.payload.replies // Обновляем ответы
      })
      .addCase(fetchRepliesThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || null // Устанавливаем ошибку как string или null
      })
      // Обработка добавления ответа
      .addCase(addReplyThunk.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(addReplyThunk.fulfilled, (state, action) => {
        state.loading = false
        const { commentId, reply } = action.payload
        if (!state.replies[commentId]) state.replies[commentId] = []
        state.replies[commentId].push(reply) // Добавляем новый ответ
      })
      .addCase(addReplyThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || null // Устанавливаем ошибку как string или null
      })
  },
})

export const {} = forumSlice.actions // Пустой экспорт, если нет кастомных редьюсеров
export default forumSlice.reducer
