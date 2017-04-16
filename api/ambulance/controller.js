const {AmbulanceModel} = require('./model');

class AmbulanceController {

  constructor(){

  }

  save(req, res, next){
    let ambulance = new AmbulanceModel(req.body);
    if (ambulance)
    console.log(req.body);
    console.log(ambulance);
    ambulance.save()
      .then(savedAmbulance=> res.json(savedAmbulance))
      .catch(e => next(e));
  }
}

exports.ambulanceController = new AmbulanceController();