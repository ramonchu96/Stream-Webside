//we require the library
const express = require('express');
const { route } = require('.');
const router = express.Router();
//var multer = require('multer');

//----------------------------------------
//We require our model
const Payment = require('../models/Payment');
const UserData = require('../models/UserProfile');

router.get('/pop',  async (req, res) =>{
  
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  
  const userDataPop = await UserData.find({pop:"Pop"}); 
  console.log('Lista de artsitas dedicados al pop: '+userDataPop);
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
    //We render in the pop-view
  res.render('pop', {newPayment, userprofile, userDataPop});
  
});

router.get('/rock',  async (req, res) =>{
  
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  const userDataRock = await UserData.find({rock:"Rock"}); 
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
    //We render in the rock-view
  res.render('rock', {newPayment, userprofile, userDataRock});
  
});

router.get('/hiphop',  async (req, res) =>{
  
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  const userDataHiphop = await UserData.find({hiphop:"hiphop"});  
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
    //We render in the hiphop-view
  res.render('hiphop', {newPayment, userprofile, userDataHiphop});
  
});

router.get('/clasica',  async (req, res) =>{
  
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  const userDataClasic = await UserData.find({clasica:"Instrumental"}); 
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
    //We render in the clasic-view
  res.render('clasica', {newPayment, userprofile, userDataClasic});
  
});

router.get('/flamenco',  async (req, res) =>{
  
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  const userDataFlamenco = await UserData.find({flamenco:"Flamenco"});
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
    //We render in the flamenco-view
  res.render('flamenco', {newPayment, userprofile, userDataFlamenco});
  
});

module.exports = router;