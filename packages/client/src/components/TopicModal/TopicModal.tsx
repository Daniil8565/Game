import React from 'react'
import { MessageInput } from '../MessageInput'
import styles from './TopicModal.module.scss'

interface TopicModalProps {
  topic: { text: string; file?: File | null; fileURL?: string }
  onClose: () => void
  onAddComment: (comment: { text: string; file?: File | null }) => void
  comments: { text: string; file?: File | null; timestamp: string }[]
}

const TopicModal: React.FC<TopicModalProps> = ({
  topic,
  onClose,
  onAddComment,
  comments,
}) => {
  //   const [newComment, setNewComment] = useState('')

  //   const handleAddComment = () => {
  //     if (newComment.trim()) {
  //       onAddComment(newComment)
  //       setNewComment('')
  //     }
  //   }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.topicTitle}>{topic.text}</h2>
        <div className={styles.commentsContainer}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <p className={styles.commentText}>{comment.text}</p>
              {comment.file && (
                <div className={styles.fileAttachment}>
                  <a
                    href={URL.createObjectURL(comment.file)}
                    download={comment.file.name}>
                    {comment.file.name}
                  </a>
                </div>
              )}
              <span className={styles.commentDate}>{comment.timestamp}</span>
            </div>
          ))}
        </div>
        <MessageInput
          placeholder="Добавить комментарий"
          onSend={({ text, file }) => {
            if (text.trim() || file) {
              onAddComment({ text, file })
            }
          }}
          isTopicModalOpen={true}
        />
      </div>
    </div>
  )
}

export { TopicModal }
