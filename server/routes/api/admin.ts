import AdminController from '../../app/controllers/admin'
import Router from '../router'
class AdminRoute extends Router {
  public baseRoute = '/admin';

  public routes() {
    this.router.post('/', AdminController.authenthicate);
  }
}

export default new AdminRoute();
