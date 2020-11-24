const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let sohbetLogSchema = new Schema({
 like : {type : Number , default : 0},
 findMe : {type : String, default : "yasin"},
});

let user = mongoose.model('bot-verisi', sohbetLogSchema, 'bot-datas')

module.exports = user;


