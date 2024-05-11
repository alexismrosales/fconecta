import { Request, Response } from "express"
import Http, { HttpResponse } from "../helpers/Http"
import HttpError from "../helpers/HttpError"

export default class Controller {
  protected send<T>(res: Response, data: HttpResponse<T>): Response {
    return Http.send(res, data)
  }

  protected setError(code: number, msg: string) {
    throw new HttpError(code, msg)
  }

  protected handleError(req: Request, res: Response, error: Error): Response {
    return HttpError.handle(req, res, error)
  }
}
