import Router from '../router'
import AdminRoute from './admin'
class ApiRoute extends Router {
  public baseRoute = '/api';
  public routes() {
    this.router.use(AdminRoute.baseRoute, AdminRoute.router);
  }
}
export default new ApiRoute();
