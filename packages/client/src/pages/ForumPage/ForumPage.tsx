import { GameMenu } from '@/components/GameMenu'
import { MessageInput } from '@/components/MessageInput'
import { TopicModal } from '@/components/TopicModal'
import React, { useState } from 'react'
import { AiOutlineFile } from 'react-icons/ai'
import '../../styles/reset.scss'
import styles from './ForumPage.module.scss'

interface Message {
  text: string
  file?: File | null
  sender: 'own' | 'other'
  fileURL?: string
  isTopic?: boolean
  comments?: { text: string; file?: File | null; timestamp: string }[]
}

const ForumPage: React.FC = () => {
  const initialMessages: Message[] = [
    {
      text: 'Привет! Это обычное сообщение',
      sender: 'own',
    },
    {
      text: 'Добро пожаловать в топик! Обсуждаем интересные темы.',
      sender: 'own',
      fileURL: '',
      isTopic: true,
      comments: [
        {
          text: 'Спасибо за информацию!',
          file: new File(['image content'], 'image.png', { type: 'image/png' }), // Пример изображения
          timestamp: '28/01/2025, 15:00:00',
        },
        {
          text: 'Это очень полезно.',
          file: null,
          timestamp: '28/01/2025, 15:05:00',
        },
      ],
    },
    {
      text: 'Здесь можно поделиться файлами.',
      sender: 'other',
    },
  ]
  // состояние для управления сообщениями
  const [messages, setMessages] = useState<Message[]>([...initialMessages])
  // TODO состояние для комментов

  // состояние для управления модалкой топика
  const [selectedTopic, setSelectedTopic] = useState<Message | null>(null)
  // функция для отправки сообщения
  const handleSendMessage = (message: { text: string; file?: File | null }) => {
    let fileURL = ''

    if (message.file && message.file.type.startsWith('image/')) {
      fileURL = URL.createObjectURL(message.file)
    }

    setMessages([...messages, { ...message, sender: 'own', fileURL }])
  }
  // функция создания топика
  const handleCreateTopic = (message: { text: string; file?: File | null }) => {
    let fileURL = ''

    if (message.file && message.file.type.startsWith('image/')) {
      fileURL = URL.createObjectURL(message.file)
    }
    setMessages([
      ...messages,
      { ...message, sender: 'own', fileURL, isTopic: true },
    ])
  }
  // функция добавления комментария
  const handleAddComment = (
    topicIndex: number,
    comment: { text: string; file?: File | null }
  ) => {
    const updatedMessages = [...messages]
    const timestamp = dateNow()
    updatedMessages[topicIndex].comments =
      updatedMessages[topicIndex].comments || []
    updatedMessages[topicIndex].comments.push({ ...comment, timestamp })
    setMessages(updatedMessages)
  }
  // определяем текущее время сообщения
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

  console.log('Selected Topic:', selectedTopic)
  return (
    <GameMenu>
      <div className={styles.forum}>
        <div className={styles.forum__container}>
          <div className={styles.forum__messagesList}>
            {messages.map((msg, index) => (
              <div
                key={index}
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
                {msg.file && (
                  <div className={styles.fileAttachment}>
                    {msg.fileURL ? (
                      <img
                        src={msg.fileURL}
                        alt="attachment"
                        className={styles.imagePreview}
                      />
                    ) : (
                      <>
                        <AiOutlineFile className={styles.fileIcon} />
                        <span className={styles.forum__messageText}>
                          <a
                            href={URL.createObjectURL(msg.file)}
                            download={msg.file.name}>
                            {msg.file.name}
                          </a>
                        </span>
                      </>
                    )}
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
              messages.findIndex(msg => msg === selectedTopic),
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
