import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Topic } from '../models'

export const getTopics = async (res: Response): Promise<void> => {
  try {
    const topics = await Topic.findAll()
    res.json(topics)
  } catch (error) {
    console.error('getTopics: Error fetching topics:', error)
    res.status(500).json({ error: 'Server error getTopics' })
  }
}

export const createTopic = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.query

    if (!title || typeof title !== 'string') {
      res.status(400).json({ error: 'Title is required' })
      return
    }

    const user = (req as any).user

    if (!user || !user.id) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const sanitizedTitle = sanitizeHtml(title as string)
    const topicData = { title: sanitizedTitle, userId: user.id }
    const topic = await Topic.create(topicData)

    res.status(201).json(topic)
  } catch (error) {
    console.error('createTopic: Error creating topic:', error)
    res.status(500).json({ error: 'Server error createTopic' })
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
    console.error('getTopicById: Error fetching topic by id:', error)
    res.status(500).json({ error: 'Server error getTopicById' })
  }
}
