import Express, { Application } from "express";
import { PRODUCTION, PORT } from "./utils/config";
export default class Server {
  private application: Application;
  private port: number | string

  constructor() {
    this.port = PORT;
    this.application = Express()
  }

  public run() {
    try {
      this.application.listen(this.port, () => {
        console.log("Server runnig in: ", this.port)
      })
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
}

new Server().run()
