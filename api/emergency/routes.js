const { Router, Route } = require('../router');
const {emergencyController} = require('./controller');

class EmergencyRouter extends Router {

  constructor(app) {
    super(app);
  }

  get routes() {
    return {
      '/api/emergency': [
        new Route("post", "createEmergency"),        
      ]
    };
  }

  createEmergency(req, res, next) {
    console.log(req)
    emergencyController.save(req, res, next);
  }
}
exports.EmergencyRouter = EmergencyRouter;