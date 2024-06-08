import Database from "../database/database";
class GroupsService {
  public async getAreas() {
    const database = new Database()
    const query = 'SELECT CName FROM Areas'
    const resultSet = await database.execQuery(query)
    return resultSet
  }
}

export default new GroupsService()
