const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let sohbetLogSchema = new Schema({
  event : {type : String, default : "Kayıt"},
 Guild : String,
 MM : String, 
 User : String,
 Owner : String,
 Gender : String,
 Name : String, 
  
});

let user = mongoose.model('kayıt', sohbetLogSchema, 'Sunucu-Verileri')

module.exports = user;


