import Path from 'path'
import express from 'express'
import { CLIENT_BUILD_PATH, ISPRODUCTION } from '../utils/config'
import ApiRoute from './api'
import Router from './router'

class Routes extends Router {
  public baseRoute = '/'

  public routes() {
    this.router.use(ApiRoute.baseRoute, ApiRoute.router)
    if (ISPRODUCTION) {
      this.router.use(express.static(CLIENT_BUILD_PATH))
      this.router.use('*', (_, res) => {
        res.status(404).sendFile(Path.resolve(CLIENT_BUILD_PATH))
      })
    }
  }
}

export default new Routes().router
