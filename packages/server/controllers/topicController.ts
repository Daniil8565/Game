import { Request, Response } from 'express'
import sanitizeHtml from 'sanitize-html'
import { Topic } from '../models'

export const getTopics = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('getTopics: Starting request with headers:', req.headers)
    const topics = await Topic.findAll()
    console.log('getTopics: Fetched topics from database:', topics)
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
    console.log('createTopic: Starting request with query:', req.query)
    const { title } = req.query
    console.log(
      'createTopic: Extracted title:',
      title,
      'Type check:',
      !title || typeof title !== 'string'
    )

    if (!title || typeof title !== 'string') {
      console.log(
        'createTopic: Validation failed - Title is required or not a string'
      )
      res.status(400).json({ error: 'Title is required' })
      return
    }

    const user = (req as any).user
    console.log(
      'createTopic: Extracted user:',
      JSON.stringify(user),
      'User ID check:',
      !user || !user.id
    )

    if (!user || !user.id) {
      console.log(
        'createTopic: Validation failed - Unauthorized, no user or user.id'
      )
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const sanitizedTitle = sanitizeHtml(title as string)
    console.log('createTopic: Sanitized title:', sanitizedTitle)

    const topicData = { title: sanitizedTitle, userId: user.id }
    console.log('createTopic: Prepared topic data:', JSON.stringify(topicData))

    const topic = await Topic.create(topicData)
    console.log(
      'createTopic: Topic created successfully:',
      JSON.stringify(topic.toJSON())
    )
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
    console.log('getTopicById: Starting request for id:', id)

    const topic = await Topic.findByPk(id)
    console.log('getTopicById: Fetched topic from database:', topic)

    if (!topic) {
      console.log('getTopicById: Topic with id', id, 'not found')
      res.status(404).json({ error: 'Topic not found' })
      return
    }

    console.log(
      'getTopicById: Successfully fetched topic:',
      JSON.stringify(topic.toJSON())
    )
    res.json(topic)
  } catch (error) {
    console.error('getTopicById: Error fetching topic by id:', error)
    res.status(500).json({ error: 'Server error getTopicById' })
  }
}
