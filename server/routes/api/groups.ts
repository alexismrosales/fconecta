import GroupsController from '../../app/controllers/groups'
import Router from '../router'

class GroupsRoute extends Router {
  public baseRoute = '/groups'
  public routes() {
    this.router.get('/getAreas', GroupsController.getAreas)
  }
}

export default new GroupsRoute()
