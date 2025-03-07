import { NextFunction, Request, Response } from 'express'
import { UserService } from '../services/UserService'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userService = new UserService()
  try {
    const cookies = req.headers.cookie
    if (!cookies) {
      res.status(403).json({ error: 'No cookies provided' })
      return
    }
    // Парсим куки в Map, как в ssr.tsx
    const cookiesMap = new Map<string, string>(
      cookies.split(';').map(cookie => {
        const [key, value] = cookie.trim().split('=')
        return [key, value || '']
      })
    )
    const uuid = cookiesMap.get('uuid')
    const authCookie = cookiesMap.get('authCookie')

    if (!uuid || !authCookie) {
      res.status(403).json({ error: 'Invalid cookie format' })
      return
    }
    const user = await userService.signinWithCookie(cookies)
    ;(req as any).user = { id: user.id }
    next()
  } catch (error) {
    console.error('Authentication error:', error)
    res.status(403).json({ error: 'Not authenticated' })
  }
}
