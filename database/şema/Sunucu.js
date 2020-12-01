const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let kullaniciSchema = new Schema({
 sunucu : String,
 prefix : {type : String, default : "s!"},
 Erol : {type : String, default : null},
 Krol : {type : String, default : null},
 mesaj : {
  gif : {type : String,default : null},
   renk : {type : String,default : "BLUE"},
   msj : {type : String,default : null},
  embed : {type : Boolean,default : false}
 },
 Karol : {type : String, default : null},
 Ekrol : {type : String, default : null},
 Yrol : {type : String, default : null},
 Kkanal : {type : String, default : null},
 Idüzen : {type : String, default :null},
 tag : {type : String, default : null},
 aktiflik : {type :  Boolean, default : false},
 embed : {type :  Boolean, default : false},
 Izorun : {type : Boolean, default : false},
 bansistem : {
  yetkili : {type : String,default : null},
  log : {type : String,default :null},
  limit : {type : Number,default :null} 
},
  sayac : {
    hg : {type : String,default : null},
    bb: {type : String,default : null},
    embed :  {type : Boolean,default : false},
    kanal:  {type : String,default : null},
    hedef : {type : Number,default : null},
  },
  otoroll : {
    bot : {type : String,default : null},
    user : {type : String,default :null}
  },
  otoisim : {type : String,default:null},
 resimli : {type : String,default:null},
  anti : {
 raid : {type:Boolean,default:false},
 white : {type:Array,default:[]},
 log : {type : String,default : null}
  }
});

let user = mongoose.model("dataforguild", kullaniciSchema, "SunucuDatas");

module.exports = user;
