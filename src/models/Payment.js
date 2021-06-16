const { Schema, model } = require("mongoose");

//Struct creation PaymentSystem from the database

const PaymentSchema = new Schema({
    money: { type: Number},
    moneUpd : {type : Boolean},
    date: { type: Date, default: Date.now },
  });

 


module.exports = model('Payment', PaymentSchema);





