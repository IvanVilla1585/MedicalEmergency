const mongoose = require('mongoose');
const {AmbulanceModel} = require('../ambulance/model');
const {ParamedicModel} = require('../paramedic/model');


let PatienteModel = new mongoose.Schema({
  name: { type: String, require: true},
  lastname: { type: String, require: true},
  phone: {type: String, require: true},
  gender: {type: String, require: true},
  age: {type: String, require: true}
});

let HospitalModel = new mongoose.Schema({
  name: { type: String, require: true},  
  phone: {type: String, require: true},
  Adrees: {type: String, require: true}
});

let EmergencyModel = new mongoose.Schema({
  date: { type: Date, require: true},
  typeEmergency: { type: String, require: true},
  locationEmergency: {type: String, require: true},
  ambulance: AmbulanceModel,
  paramedic: ParamedicModel,
  patient: [PatienteModel],
  hospital: HospitalModel
});

exports.EmergencyModel =  mongoose.model('emergency', EmergencyModel);