export interface UserCheck {
  username: string,
  password: string,
}

export interface NewUser extends UserCheck {
  vocation: string,
  level: number,
}

export interface User extends NewUser {
  id: number,
}