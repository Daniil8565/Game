import React, { useEffect, useRef, useState } from 'react'
import { CiChat2 } from 'react-icons/ci'
import { GrSend } from 'react-icons/gr'
import { FileUpload } from '../FileUpload'
import styles from './MessageInput.module.scss'

interface IMessageInput {
  placeholder?: string
  className?: string
  onSend: (message: { text: string; file?: File | null }) => void
  onCreateTopic?: (message: { text: string; file?: File | null }) => void
  isTopicModalOpen?: boolean
}

const MessageInput: React.FC<IMessageInput> = ({
  placeholder,
  className,
  onSend,
  onCreateTopic,
  isTopicModalOpen,
}) => {
  console.log(`isTopicModalOpen: ${isTopicModalOpen}`)
  const prevIsTopicModalOpen = useRef(isTopicModalOpen)

  useEffect(() => {
    if (prevIsTopicModalOpen.current !== isTopicModalOpen) {
      prevIsTopicModalOpen.current = isTopicModalOpen
      // Логируем только при изменении значения
      console.log('isTopicModalOpen изменилось:', isTopicModalOpen)
    }
  }, [isTopicModalOpen])

  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const allowedTypes = ['.docx', '.png', '.jpeg', '.pdf', '.zip', '.jpg']

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  const handleSend = () => {
    if (text.trim() || file) {
      onSend({ text, file })
      setText('')
      setFile(null)
    }
  }

  const handleCreateTopic = () => {
    if (text.trim() || file) {
      onCreateTopic?.({ text, file })
      setText('')
      setFile(null)
    }
  }

  const onSendFile = (file: File | null) => {
    setFile(file)
    console.log('Выбранный файл:', file)
  }
  const isButtonDisabled = !text.trim() && !file
  return (
    <div className={`${styles.MessageInputContainer} ${className}`}>
      <FileUpload
        onFileSelect={onSendFile}
        accept={allowedTypes}
        selectedFile={file}
      />
      <textarea
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.textarea}
        value={text}></textarea>
      <button
        onClick={handleSend}
        className={`${styles.sendButton} ${
          isButtonDisabled ? styles.disabled : ''
        }`}
        disabled={isButtonDisabled}>
        <GrSend />
      </button>
      {isTopicModalOpen !== true && (
        <button
          onClick={handleCreateTopic}
          className={`${styles.sendButton} ${
            isButtonDisabled ? styles.disabled : ''
          }`}
          disabled={isButtonDisabled}>
          <CiChat2 />
        </button>
      )}
    </div>
  )
}

export { MessageInput }
