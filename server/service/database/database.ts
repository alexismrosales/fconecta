import { connect, ConnectionPool, config, NVarChar } from 'mssql'
import { credentials } from './credentials'

class Database {
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

  // Executing a simple query in database
  public async execQuery(query: string) {
    const conn = await this.poolConnection
    const resultSet = await conn.request().query(query)

    conn.close()
    console.log("Query executed succesfully")
    return resultSet.recordset
  }

  // Executing a parametrized query
  public async execParametrizedQuery(query: string, parameters: any[]) {
    const conn = await this.poolConnection
    const request = conn.request()

    // Adding new parameters
    for (const param of parameters) {
      request.input(param.name, NVarChar, param.value);
    }

    const resultSet = await request.query(query)
    conn.close()
    console.log("Parametrized query executed succesfully")
    return resultSet.recordset
  }
}
export default Database
