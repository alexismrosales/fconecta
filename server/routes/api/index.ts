import { getUsers } from '../../app/controllers/controller'
import Router from '../router'

class ApiRoute extends Router {
  public baseRoute = '/api'
  public routes() {
    this.router.get('/', getUsers)
  }
}
export default new ApiRoute
