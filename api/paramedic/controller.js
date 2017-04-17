const {ParamedicModel} = require('./model');

class ParamedicController {

  constructor(){

  }

  save(req, res, next){
    let paramedic = new ParamedicModel(req.body);
    if (paramedic)
    console.log(req.body);
    console.log(paramedic);
    paramedic.save()
      .then(savedParamedic=> res.json(savedParamedic))
      .catch(e => next(e));
  }
  update(req, res, next){
    let paramedic = new ParamedicModel(req.body);
    if (paramedic)
    console.log(req.body);
    console.log(paramedic);
    paramedic.update()
      .then(updateParamedic=> res.json(updateParamedic))
      .catch(e => next(e));
  }
  delete(req, res, next){
    let paramedic = new ParamedicModel(req.body);
    if (paramedic)
    console.log(req.body);
    console.log(paramedic);
    paramedic.delete()
      .then(deleteParamedic=> res.json(deleteParamedic))
      .catch(e => next(e));
  }
  search(req, res, next){
    let paramedic = new ParamedicModel(req.body);
    if (paramedic)
    console.log(req.body);
    console.log(paramedic);
    paramedic.search()
      .then(searchParamedic=> res.json(searchParamedic))
      .catch(e => next(e));
  }
}

exports.paramedicController = new ParamedicController();