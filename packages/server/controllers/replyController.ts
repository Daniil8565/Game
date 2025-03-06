import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Reply } from '../models'

export const getReplies = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params
    console.log('getReplies: Starting request with commentId:', commentId)

    const replies = await Reply.findAll({
      where: { commentId: parseInt(commentId) },
    })
    console.log('getReplies: Fetched replies from database:', replies)

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
    console.log('createReply: Starting request with commentId and text:', {
      commentId,
      text,
    })

    if (!text || typeof text !== 'string') {
      console.log(
        'createReply: Validation failed - Text is required or not a string'
      )
      res.status(400).json({ error: 'Text is required' })
      return
    }

    const user = (req as any).user
    console.log(
      'createReply: Extracted user:',
      JSON.stringify(user),
      'User ID check:',
      !user || !user.id
    )

    if (!user || !user.id) {
      console.log(
        'createReply: Validation failed - Unauthorized, no user or user.id'
      )
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const sanitizedText = sanitizeHtml(text as string)
    console.log('createReply: Sanitized text:', sanitizedText)

    const replyData = {
      text: sanitizedText,
      commentId: parseInt(commentId),
      userId: user.id,
    }
    console.log('createReply: Prepared reply data:', JSON.stringify(replyData))

    const reply = await Reply.create(replyData)
    console.log(
      'createReply: Reply created successfully:',
      JSON.stringify(reply.toJSON())
    )
    res.status(201).json(reply)
  } catch (error) {
    console.error('createReply: Error creating reply:', error)
    res.status(500).json({ error: 'Server error' })
  }
}
