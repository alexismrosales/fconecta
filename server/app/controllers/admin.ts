import { Request, Response } from "express";
import { User } from "../../utils/user";
import Controller from "./controller";
import adminService from "../../service/admin"

class AdminController extends Controller {
  public authenthicate = async (req: Request, res: Response) => {
    const user: User = req.body as User;
    console.log(`User: ${user.username}, Password: ${user.password}`)
    try {
      if (await adminService.verifyCredentials(user)) {
        this.send(res, {
          code: 200,
          message: `Login ok`
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
}

export default new AdminController()
