const { Schema, model } = require("mongoose");

//Structure creation UserProfileSystem from the database

const UserProfileSchema = new Schema({
    pname: {type : String},
    biography: {type : String},
    pop: {type : String},
    rock: {type : String},
    hiphop: {type : String},
    rap : {type: String},
    trap: {type : String},
    clasica: {type : String},
    flamenco: {type : String},
    filename: {type:String},
    path: {type: String},
    originalname: {type : String},
    mimetype: {type: String},
    size: {type: Number},
    date: { type: Date, default: Date.now },
  });

 
  UserProfileSchema.index({pname: 'text'});

module.exports = model('UserProfile', UserProfileSchema);




 