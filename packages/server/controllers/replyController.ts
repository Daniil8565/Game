import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Reply } from '../models'

export const getReplies = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params
    const replies = await Reply.findAll({
      where: { commentId: parseInt(commentId) },
    })
    res.json(replies)
  } catch (error) {
    console.error('getReplies: Error fetching replies:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const createReply = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params
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
    const replyData = {
      text: sanitizedText,
      commentId: parseInt(commentId),
      userId: user.id,
    }

    const reply = await Reply.create(replyData)

    res.status(201).json(reply)
  } catch (error) {
    console.error('createReply: Error creating reply:', error)
    res.status(500).json({ error: 'Server error' })
  }
}
