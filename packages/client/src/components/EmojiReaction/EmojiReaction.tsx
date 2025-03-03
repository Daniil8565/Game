import React, { useState, MouseEvent } from 'react'

interface Props {
  addReaction: (emoji: string) => void
}

export const EmojiReaction: React.FC<Props> = ({ addReaction }) => {
  const emojis: string[] = ['👍', '❤️', '😂', '😲', '😢', '🔥']
  const [isOpened, setIsOpened] = useState(false)
  const openEmoji = (e: any) => {
    setIsOpened(!isOpened)
    e.stopPropagation()
  }
  const handleAddReaction = (
    e: MouseEvent<HTMLButtonElement>,
    emoji: string
  ) => {
    e.stopPropagation()
    addReaction(emoji)
    setIsOpened(false)
  }

  return (
    <>
      <button className="button" onClick={openEmoji}>
        ➕
      </button>
      {isOpened &&
        emojis.map(emoji => (
          <button
            key={emoji}
            onClick={e => {
              handleAddReaction(e, emoji)
            }}>
            {emoji}
          </button>
        ))}
    </>
  )
}
