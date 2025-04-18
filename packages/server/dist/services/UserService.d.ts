export interface User {
  id: number
  first_name: string
  second_name: string
  display_name: string | null
  login: string
  avatar: string | null
  email: string
  phone: string
  count: number
  level: number
}
export interface IUserService {
  signinWithCookie(cookieString: string): Promise<User>
}
export declare class UserService implements IUserService {
  private axiosInstance
  constructor()
  signinWithCookie(cookieString: string): Promise<User>
}
//# sourceMappingURL=UserService.d.ts.map
