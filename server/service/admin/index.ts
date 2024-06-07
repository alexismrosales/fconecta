import { User } from "../../utils/user"
import { BinaryLike, createHash } from "crypto"
import Jwt from "jsonwebtoken"
import database from "../database/database"

class AdminService {
  public async verifyCredentials(user: User) {
    // Converting password into hash
    var password: BinaryLike = ''
    var logued: boolean = false
    const query = 'SELECT * FROM Users WHERE Username = @username AND Password = @password'
    if (user.password) {
      password = createHash('sha224').update(user.password).digest('hex')
    }
    const parameters = [
      { name: 'username', value: user.username },
      { name: 'password', value: password }
    ]
    // Consulting credentials 
    try {
      const resultSet = await database.execParametrizedQuery(query, parameters)
      if (resultSet.length > 0) {
        console.log('Token will be generated...')
        logued = true
      } else {
        console.log('User does not exists...')
        logued = false
      }
    } catch (err) {
      throw new Error(String(err))
    }

    return logued

  }
}
export default new AdminService()
