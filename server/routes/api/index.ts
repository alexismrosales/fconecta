import Router from '../router'
import AdminRoute from './admin'
import GroupsRoute from './groups'
class ApiRoute extends Router {
  public baseRoute = '/api';
  public routes() {
    this.router.use(AdminRoute.baseRoute, AdminRoute.router);
    this.router.use(GroupsRoute.baseRoute, GroupsRoute.router)
  }
}
export default new ApiRoute();
