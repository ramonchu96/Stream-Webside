//we require the library
const express = require('express');
const { route } = require('.');
const router = express.Router();
//var multer = require('multer');

//----------------------------------------
//We require our model
const Payment = require('../models/Payment');
const UserData = require('../models/UserProfile');

router.get('/direct',  async (req, res) =>{
  
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  const userData = await UserData.findOne().sort({$natural:-1}).limit(1); 
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
    //We render the variables in the index-view
  res.render('direct', {newPayment, userprofile, userData});
  
});

module.exports = router;