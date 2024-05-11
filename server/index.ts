import Express, { Application } from "express";
import Router from "./routes";
import { PORT } from "./utils/config";
import Cors from './utils/cors'
export default class Server {
  private application: Application
  private port: number | string

  constructor() {
    this.port = PORT
    this.application = Express()
  }

  private performPlugins() {
    this.application.use(Express.urlencoded({ extended: true }))
    this.application.use(Express.json())
    this.application.use(Cors())
    this.application.use(Router)
  }

  public run() {
    try {
      // Executing CORS config and Express config
      this.performPlugins()

      // Listening ...
      this.application.listen(this.port, () => {
        console.log("Server running on: ", this.port)
      })
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
}

new Server().run()
