// import { GameMenu } from '@/components/GameMenu'
// import { MessageInput } from '@/components/MessageInput'
// import { TopicModal } from '@/components/TopicModal'
// import React, { useState, useEffect } from 'react'
// import { AiOutlineFile } from 'react-icons/ai'
// import '../../styles/reset.scss'
// import styles from './ForumPage.module.scss'
// import { fetchTopics, createTopic, addComment } from '@/slices/forumAPI'

// interface Message {
//   text: string
//   file?: File | null
//   sender: 'own' | 'other'
//   fileURL?: string
//   isTopic?: boolean
//   comments?: { text: string; file?: File | null; timestamp: string }[]
// }

// const ForumPage: React.FC = () => {
//   const initialMessages: Message[] = [
//     {
//       text: 'Привет! Это обычное сообщение',
//       sender: 'own',
//     },
//     {
//       text: 'Добро пожаловать в топик! Обсуждаем интересные темы.',
//       sender: 'own',
//       fileURL: '',
//       isTopic: true,
//       comments: [
//         {
//           text: 'Спасибо за информацию!',
//           file: new File(['image content'], 'image.png', { type: 'image/png' }), // Пример изображения
//           timestamp: '28/01/2025, 15:00:00',
//         },
//         {
//           text: 'Это очень полезно.',
//           file: null,
//           timestamp: '28/01/2025, 15:05:00',
//         },
//       ],
//     },
//     {
//       text: 'Здесь можно поделиться файлами.',
//       sender: 'other',
//     },
//   ]

//   useEffect(() => {
//     fetchTopics().then(topics => {
//       setMessages(
//         topics.map((topic: any) => ({
//           text: topic.text,
//           sender: 'own',
//           isTopic: true,
//           comments: topic.comments || [],
//         }))
//       )
//     })
//   }, [])

//   // состояние для управления сообщениями
//   const [messages, setMessages] = useState<Message[]>([...initialMessages])
//   // TODO состояние для комментов

//   // состояние для управления модалкой топика
//   const [selectedTopic, setSelectedTopic] = useState<Message | null>(null)
//   // функция для отправки сообщения
//   const handleSendMessage = (message: { text: string; file?: File | null }) => {
//     let fileURL = ''

//     if (message.file && message.file.type.startsWith('image/')) {
//       fileURL = URL.createObjectURL(message.file)
//     }

//     setMessages([...messages, { ...message, sender: 'own', fileURL }])
//   }
//   // функция создания топика
//   const handleCreateTopic = async (message: {
//     text: string
//     file?: File | null
//   }) => {
//     let fileURL = ''

//     if (message.file && message.file.type.startsWith('image/')) {
//       fileURL = URL.createObjectURL(message.file)
//     }
//     const newTopic = await createTopic(message.text)
//     setMessages([
//       ...messages,
//       { text: newTopic.text, sender: 'own', fileURL, isTopic: true },
//     ])
//   }
//   // функция добавления комментария
//   const handleAddComment = async (
//     topicIndex: number,
//     comment: { text: string; file?: File | null }
//   ) => {
//     const updatedMessages = [...messages]
//     const topic = messages[topicIndex]
//     const newComment = await addComment(topic.text, comment.text)
//     const timestamp = dateNow()
//     updatedMessages[topicIndex].comments =
//       updatedMessages[topicIndex].comments || []
//     updatedMessages[topicIndex].comments.push({
//       text: newComment.text,
//       timestamp,
//     })
//     setMessages(updatedMessages)
//   }
//   // определяем текущее время сообщения
//   const dateNow = () => {
//     const date = new Date()

//     const day = date.getDate()
//     const month = date.getMonth() + 1
//     const year = date.getFullYear()

//     const hours = date.getHours()
//     const minutes = date.getMinutes()
//     const seconds = date.getSeconds()

//     return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`
//   }

//   console.log('Selected Topic:', selectedTopic)
//   return (
//     <GameMenu>
//       <div className={styles.forum}>
//         <div className={styles.forum__container}>
//           <div className={styles.forum__messagesList}>
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`${styles.forum__message} ${
//                   msg.sender === 'own'
//                     ? styles['message--own']
//                     : styles['message--other']
//                 } ${msg.isTopic ? styles['message--topic'] : ''}`}
//                 onClick={() => msg.isTopic && setSelectedTopic(msg)}>
//                 {msg.text && (
//                   <>
//                     {msg.isTopic ? (
//                       <h3 className={styles.forum__topic}>Топик</h3>
//                     ) : (
//                       ''
//                     )}
//                     <p className={styles.forum__messageText}>{msg.text}</p>
//                   </>
//                 )}
//                 {msg.file && (
//                   <div className={styles.fileAttachment}>
//                     {msg.fileURL ? (
//                       <img
//                         src={msg.fileURL}
//                         alt="attachment"
//                         className={styles.imagePreview}
//                       />
//                     ) : (
//                       <>
//                         <AiOutlineFile className={styles.fileIcon} />
//                         <span className={styles.forum__messageText}>
//                           <a
//                             href={URL.createObjectURL(msg.file)}
//                             download={msg.file.name}>
//                             {msg.file.name}
//                           </a>
//                         </span>
//                       </>
//                     )}
//                   </div>
//                 )}
//                 <span className={styles.forum__messageDate}>{dateNow()}</span>
//               </div>
//             ))}
//           </div>
//           <MessageInput
//             placeholder="Введите сообщение"
//             onSend={handleSendMessage}
//             onCreateTopic={handleCreateTopic}
//             isTopicModalOpen={!!selectedTopic}
//           />
//         </div>
//       </div>
//       {selectedTopic && (
//         <TopicModal
//           topic={selectedTopic}
//           onClose={() => setSelectedTopic(null)}
//           onAddComment={comment =>
//             handleAddComment(
//               messages.findIndex(msg => msg === selectedTopic),
//               comment
//             )
//           }
//           comments={selectedTopic.comments || []}
//         />
//       )}
//     </GameMenu>
//   )
// }

// export { ForumPage }

import { GameMenu } from '@/components/GameMenu'
import { MessageInput } from '@/components/MessageInput'
import { TopicModal } from '@/components/TopicModal'
import {
  addCommentThunk,
  createTopicThunk,
  fetchTopicsThunk,
} from '@/slices/forumSlice'
import { AppDispatch, RootState } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import '../../styles/reset.scss'
import styles from './ForumPage.module.scss'

// Обновляем интерфейс Message, исключая null из file
interface Message {
  text: string
  file?: File | undefined // Только File или undefined, без null
  sender: 'own' | 'other'
  fileURL?: string
  isTopic?: boolean
  comments?: {
    text: string
    file?: File | undefined
    fileURL?: string
    timestamp: string
  }[]
}

const ForumPage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const { topics, comments, loading, error } = useSelector(
    (state: RootState) => state.forum
  )
  const dispatch = useDispatch<AppDispatch>()
  const [selectedTopic, setSelectedTopic] = useState<Message | null>(null)

  if (!user) {
    return <Navigate to="/signin" replace />
  }

  useEffect(() => {
    dispatch(fetchTopicsThunk())
      .then(() => console.log('Topics fetched'))
      .catch(err => console.error('Error fetching topics:', err.message || err))
  }, [dispatch])

  const handleSendMessage = (message: {
    text: string
    file?: File | undefined | null
  }) => {
    let fileURL = ''

    if (message.file && message.file.type.startsWith('image/')) {
      fileURL = URL.createObjectURL(message.file)
    }

    // Пока оставляем пустым
  }

  const handleCreateTopic = async (message: {
    text: string
    file?: File | undefined | null
  }) => {
    let fileURL = ''

    if (message.file && message.file.type.startsWith('image/')) {
      fileURL = URL.createObjectURL(message.file)
    }

    // Преобразуем null в undefined для соответствия типу
    const fileToSend = message.file === null ? undefined : message.file
    await dispatch(createTopicThunk({ text: message.text, file: fileToSend }))
      .then(() => console.log('Topic created'))
      .catch(err => console.error('Error creating topic:', err.message || err))
  }

  const handleAddComment = async (
    topicIndex: number,
    comment: { text: string; file?: File | undefined | null }
  ) => {
    const topic = topics[topicIndex]
    // Преобразуем null в undefined для соответствия типу
    const fileToSend = comment.file === null ? undefined : comment.file
    await dispatch(
      addCommentThunk({
        topicId: String(topic.id),
        text: comment.text,
        file: fileToSend,
      })
    )
      .then(() => {
        console.log('Comment added')
        dispatch(fetchTopicsThunk()) // Обновляем список
      })
      .catch(err => console.error('Error adding comment:', err.message || err))
  }

  const dateNow = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error || 'Unknown error'}</div>

  const messages: Message[] = topics.map(topic => ({
    text: topic.title,
    sender: topic.userId === user.id ? 'own' : 'other',
    fileURL: topic.fileUrl
      ? `http://localhost:3001${topic.fileUrl}`
      : undefined,
    isTopic: true,
    comments:
      comments[topic.id]?.map(comment => ({
        text: comment.text,
        file: undefined, // Устанавливаем undefined вместо null
        fileURL: comment.fileUrl
          ? `http://localhost:3001${comment.fileUrl}`
          : undefined,
        timestamp: dateNow(),
      })) || [],
  }))

  console.log('Selected Topic:', selectedTopic)
  return (
    <GameMenu>
      <div className={styles.forum}>
        <div className={styles.forum__container}>
          <div className={styles.forum__messagesList}>
            {messages.map((msg, index) => (
              <div
                key={msg.text + index}
                className={`${styles.forum__message} ${
                  msg.sender === 'own'
                    ? styles['message--own']
                    : styles['message--other']
                } ${msg.isTopic ? styles['message--topic'] : ''}`}
                onClick={() => msg.isTopic && setSelectedTopic(msg)}>
                {msg.text && (
                  <>
                    {msg.isTopic ? (
                      <h3 className={styles.forum__topic}>Топик</h3>
                    ) : (
                      ''
                    )}
                    <p className={styles.forum__messageText}>{msg.text}</p>
                  </>
                )}
                {msg.fileURL && (
                  <div className={styles.fileAttachment}>
                    <img
                      src={msg.fileURL}
                      alt="attachment"
                      className={styles.imagePreview}
                    />
                  </div>
                )}
                {msg.file && (
                  <div className={styles.fileAttachment}>
                    <AiOutlineFile className={styles.fileIcon} />
                    <span className={styles.forum__messageText}>
                      <a
                        href={URL.createObjectURL(msg.file)}
                        download={msg.file.name}>
                        {msg.file.name}
                      </a>
                    </span>
                  </div>
                )}
                <span className={styles.forum__messageDate}>{dateNow()}</span>
              </div>
            ))}
          </div>
          <MessageInput
            placeholder="Введите сообщение"
            onSend={handleSendMessage}
            onCreateTopic={handleCreateTopic}
            isTopicModalOpen={!!selectedTopic}
          />
        </div>
      </div>
      {selectedTopic && (
        <TopicModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          onAddComment={comment =>
            handleAddComment(
              messages.findIndex(msg => msg.text === selectedTopic.text),
              comment
            )
          }
          comments={selectedTopic.comments || []}
        />
      )}
    </GameMenu>
  )
}

export { ForumPage }
