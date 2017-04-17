const { Router, Route } = require('../router');
const {paramedicController} = require('./controller');

class ParamedicRouter extends Router {

  constructor(app) {
    super(app);
  }

  get routes() {
    return {
      '/api/paramedic': [
        new Route("post", "createParamedic"),
        new Route("put", "updateParamedic"),
        new Route("delete", "deleteParamedic"),
        new Route("get", "searchParamedic")
      ]
    };
  }

  createParamedic(req, res, next) {
    console.log(req)
    paramedicController.save(req, res, next);
  }
  updateParamedic(req, res, next) {
    console.log(req)
    paramedicController.update(req, res, next);
  }
  deleteParamedic(req, res, next) {
    console.log(req)
    paramedicController.delete(req, res, next);
  }
  searchParamedic(req, res, next) {
    console.log(req)
    paramedicController.search(req, res, next);
  }
}
exports.ParamedicRouter = ParamedicRouter;
