import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Comment } from '../models'

export const getComments = async (req: Request, res: Response) => {
  try {
    const { topicId } = req.params
    console.log('getComments: Starting request with topicId:', topicId)

    const comments = await Comment.findAll({
      where: { topicId: parseInt(topicId) },
    })
    console.log('getComments: Fetched comments from database:', comments)

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
    console.log('createComment: Starting request with topicId and text:', {
      topicId,
      text,
    })

    if (!text || typeof text !== 'string') {
      console.log(
        'createComment: Validation failed - Text is required or not a string'
      )
      res.status(400).json({ error: 'Text is required' })
      return
    }

    const user = (req as any).user
    console.log(
      'createComment: Extracted user:',
      JSON.stringify(user),
      'User ID check:',
      !user || !user.id
    )

    if (!user || !user.id) {
      console.log(
        'createComment: Validation failed - Unauthorized, no user or user.id'
      )
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const sanitizedText = sanitizeHtml(text as string)
    console.log('createComment: Sanitized text:', sanitizedText)

    const commentData = {
      text: sanitizedText,
      topicId: parseInt(topicId),
      userId: user.id,
    }
    console.log(
      'createComment: Prepared comment data:',
      JSON.stringify(commentData)
    )

    const comment = await Comment.create(commentData)
    console.log(
      'createComment: Comment created successfully:',
      JSON.stringify(comment.toJSON())
    )
    res.status(201).json(comment)
  } catch (error) {
    console.error('createComment: Error creating comment:', error)
    res.status(500).json({ error: 'Server error' })
  }
}
