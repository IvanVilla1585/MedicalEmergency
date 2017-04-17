const { Router, Route } = require('../router');
const {ambulanceController} = require('./controller');

class AmbulanceRouter extends Router {

  constructor(app) {
    super(app);
  }

  get routes() {
    return {
      '/api/ambulances': [
        new Route("post", "createAmbulance"),        
      ]
    };
  }

  createAmbulance(req, res, next) {
    console.log(req)
    ambulanceController.save(req, res, next);
  }
}
exports.AmbulanceRouter = AmbulanceRouter;