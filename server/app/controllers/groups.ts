import { Request, Response } from "express"
import Controller from "./controller";
import groupsService from "../../service/groups"

class GroupsController extends Controller {
  public getAreas = async (req: Request, res: Response) => {
    const areasSet = await groupsService.getAreas()
    const areas = areasSet.map(object => object.CName)
    try {
      this.send(res, {
        code: 200,
        message: `Query ok`,
        payload: { areas }
      })
    } catch (err) {
      if (err instanceof Error) {
        this.handleError(req, res, err);
      } else {
        console.error('Unkown error:', err);
      }
    }
  }

}
export default new GroupsController()
