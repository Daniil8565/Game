import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Comment } from '../models/comment'

export const getComments = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.params
    const comments = await Comment.findAll({ where: { topicId } })
    res.json(comments)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const createComment = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.params
    const { text } = req.body
    const user = (req as any).user
    const sanitizedText = sanitizeHtml(text)
    const comment = await Comment.create({
      text: sanitizedText,
      topicId,
      userId: user.id,
    })
    res.status(201).json(comment)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
