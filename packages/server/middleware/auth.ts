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
      res.status(403).json({ error: 'Not authenticated' })
      return
    }
    const user = await userService.signinWithCookie(cookies)
    ;(req as any).user = user // Добавляем пользователя в запрос
    next()
  } catch (error) {
    res.status(403).json({ error: 'Not authenticated' })
  }
}
