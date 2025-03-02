import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Reply } from '../models/reply'

export const getReplies = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params
    const replies = await Reply.findAll({ where: { commentId } })
    res.json(replies)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const createReply = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params
    const { text } = req.body
    const user = (req as any).user
    const sanitizedText = sanitizeHtml(text)
    const reply = await Reply.create({
      text: sanitizedText,
      commentId,
      userId: user.id,
    })
    res.status(201).json(reply)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
