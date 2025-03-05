import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Topic } from '../models/topic'

export const getTopics = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Fetching topics with headers:', req.headers)
    const topics = await Topic.findAll()
    res.json(topics)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const createTopic = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.body
    const user = (req as any).user
    const sanitizedTitle = sanitizeHtml(title)
    const topic = await Topic.create({ title: sanitizedTitle, userId: user.id })
    res.status(201).json(topic)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const getTopicById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const topic = await Topic.findByPk(id)
    if (!topic) {
      res.status(404).json({ error: 'Topic not found' })
      return
    }
    res.json(topic)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
