export interface User {
  email: string
  password: string
}

export interface ResponseLogin {
  users: User[]
}
