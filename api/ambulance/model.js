const mongoose = require('mongoose');

let AmbulanceModel = new mongoose.Schema({
  car: { type: Number, require: true},
  car_plate: { type: String, require: true},
  type_ambulance: {type: String, require: true},
  available: {type: Boolean, require: true}
});

exports.AmbulanceModel =  mongoose.model('ambulances', AmbulanceModel);

