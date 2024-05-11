import Router from '../router'

class ApiRoute extends Router {
  public baseRoute = '/api'
  public routes() {
    this.router.get('/')
  }
}
export default new ApiRoute
