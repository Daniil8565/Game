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
  comments?: { text: string; timestamp: string }[]
}

const ForumPage: React.FC = () => {
  // состояние для управления сообщениями
  const [messages, setMessages] = useState<Message[]>([])
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

  const handleAddComment = (topicIndex: number, comment: string) => {
    const updatedMessages = [...messages]
    const timestamp = dateNow()
    updatedMessages[topicIndex].comments =
      updatedMessages[topicIndex].comments || []
    updatedMessages[topicIndex].comments?.push({ text: comment, timestamp })
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
                          {msg.file.name}
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
