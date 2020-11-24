const mongoose = require('mongoose')
const open = require('../open.json')

module.exports.run = client => {


 mongoose.connect(open.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   useFindAndModify : false,
   useCreateIndex : true
  }).then(() => {
    //If it connects log the following
  console.log("MongoDB: Başarıyla Bağlanıldı");
  }).catch((err) => {
    //If it doesn't connect log the following
    console.error(err);
  });
}
