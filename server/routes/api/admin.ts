import AdminController from '../../app/controllers/admin'
import Router from '../router'
class AdminRoute extends Router {
  public baseRoute = '/admin'

  public routes() {
    this.router.post('/login', AdminController.authenthicate)
    this.router.get('/protected', AdminController.verifyToken)
  }
}

export default new AdminRoute();
