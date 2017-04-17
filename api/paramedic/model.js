const mongoose = require('mongoose');

let ParamedicModel = new mongoose.Schema({
  name: { type: String, require: true},
  lastname: { type: String, require: true},
  phone: {type: Number, require: true},
  gender: {type: String, require: true},
  cellPhone: {type: Number, require: true},
  birthdate: {type: Date, require: true},
  specialization: {type: String, require: true}
});

exports.ParamedicModel =  mongoose.model('paramedic', ParamedicModel);