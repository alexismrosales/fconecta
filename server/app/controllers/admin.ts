import { NextFunction, Request, Response } from "express";
import { User } from "../../utils/user";
import { secretKey } from "../../utils/jwt";
import Jwt from "jsonwebtoken"
import Controller from "./controller";
import adminService from "../../service/admin"

class AdminController extends Controller {
  public authenthicate = async (req: Request, res: Response) => {
    const user: User = req.body as User;
    const username = user.username
    console.log(`User: ${user.username}, Password: ${user.password}`)
    try {
      if (await adminService.verifyCredentials(user)) {
        const token = Jwt.sign({ username }, secretKey, { expiresIn: "1h" })
        this.send(res, {
          code: 200,
          message: `Login ok`,
          payload: { token }
        })
      }
      else {
        this.send(res, {
          code: 400,
          message: 'Login not ok'
        })
      }
    }
    catch (err) {
      if (err instanceof Error) {
        this.handleError(req, res, err);
      } else {
        console.error('Unkown error:', err);
      }
    }
  }

  public verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const header: string | undefined = req.header("Authorization")
    const token = header?.split(" ")[1]
    if (!token || token == undefined) {
      this.send(res, {
        code: 401,
        message: "Token not provied"
      })
      return
    }
    try {
      // Verifiying token and passing to next element in middleware
      Jwt.verify(token, secretKey)
      this.send(res, {
        code: 200,
        message: "You have access"
      })
      next()
    } catch {
      this.send(res, {
        code: 417,
        message: "Error verifying token",
        error: true
      })
    }
  }
}

export default new AdminController()
