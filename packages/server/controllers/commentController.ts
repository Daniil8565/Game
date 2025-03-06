import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Comment } from '../models'

export const getComments = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.params
    const comments = await Comment.findAll({
      where: { topicId: parseInt(topicId) },
    })
    res.json(comments)
  } catch (error) {
    console.error('getComments: Error fetching comments:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const createComment = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.params
    const { text } = req.query

    if (!text || typeof text !== 'string') {
      res.status(400).json({ error: 'Text is required' })
      return
    }

    const user = (req as any).user

    if (!user || !user.id) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const sanitizedText = sanitizeHtml(text as string)
    const commentData = {
      text: sanitizedText,
      topicId: parseInt(topicId),
      userId: user.id,
    }
    const comment = await Comment.create(commentData)
    res.status(201).json(comment)
  } catch (error) {
    console.error('createComment: Error creating comment:', error)
    res.status(500).json({ error: 'Server error' })
  }
}
