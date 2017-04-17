const {EmergencyModel} = require('./model');

class EmergencyController {

  constructor(){

  }

  save(req, res, next){
    let emergency = new EmergencyModel(req.body);
    if (emergency)
    console.log(req.body);
    console.log(emergency);
    emergency.save()
      .then(savedEmergency=> res.json(savedEmergency))
      .catch(e => next(e));
  }
  update(req, res, next){
    let emergency = new EmergencyModel(req.body);
    if (emergency)
    console.log(req.body);
    console.log(emergency);
    emergency.update()
      .then(updateEmergency=> res.json(updateEmergency))
      .catch(e => next(e));
  }
  delete(req, res, next){
    let emergency = new EmergencyModel(req.body);
    if (emergency)
    console.log(req.body);
    console.log(emergency);
    emergency.delete()
      .then(deleteEmergency=> res.json(deleteEmergency))
      .catch(e => next(e));
  }
  search(req, res, next){
    let emergency = new EmergencyModel(req.body);
    if (emergency)
    console.log(req.body);
    console.log(emergency);
    emergency.search()
      .then(searchEmergency=> res.json(searchEmergency))
      .catch(e => next(e));
  }
}

exports.emergencyController = new EmergencyController();