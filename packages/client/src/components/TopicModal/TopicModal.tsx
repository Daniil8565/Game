import React, { useState } from 'react'
import { MessageInput } from '../MessageInput'
import styles from './TopicModal.module.scss'
import { CiChat2 } from 'react-icons/ci'

interface TopicModalProps {
  topic: { text: string; file?: File | null; fileURL?: string }
  onClose: () => void
  onAddComment: (comment: string) => void
  comments: { text: string; timestamp: string }[]
}

const TopicModal: React.FC<TopicModalProps> = ({
  topic,
  onClose,
  onAddComment,
  comments,
}) => {
  const [newComment, setNewComment] = useState('')

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment)
      setNewComment('')
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.topicTitle}>{topic.text}</h2>
        <div className={styles.commentsList}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <p className={styles.commentText}>{comment.text}</p>
              <span className={styles.commentDate}>{comment.timestamp}</span>
            </div>
          ))}
        </div>
        <MessageInput
          placeholder="Добавить комментарий"
          onSend={({ text }) => handleAddComment()}
          isTopicModalOpen={true}
        />
      </div>
    </div>
  )
}

export { TopicModal }
