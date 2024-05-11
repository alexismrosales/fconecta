import { connect, ConnectionPool, config } from 'mssql'
import { credentials } from './credentials'

export default class Database {
  private credentials: config
  private poolConnection: Promise<ConnectionPool>

  constructor() {
    this.credentials = credentials
    this.poolConnection = this.establishConn()
  }

  private async establishConn() {
    try {
      const poolConnection = await connect(this.credentials)
      console.log("Connection stablished")
      return poolConnection
    } catch (error) {
      throw new Error(String(error))
    }
  }

  public async execQuery(query: string) {
    const conn = await this.poolConnection
    const resultSet = await conn.request().query(query)
    conn.close()
    console.log("Query executed succesfully")
    return resultSet.recordset
  }

}

