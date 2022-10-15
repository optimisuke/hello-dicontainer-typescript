import 'reflect-metadata'
import { container } from './di'
import User from './user'

export const user = container.resolve(User)

user.userId = 1
user.userName = 'yamada'
user.saveUser()