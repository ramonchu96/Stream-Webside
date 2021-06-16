//we insert the dev tools
const express = require('express');
const { route } = require('.');
const router = express.Router();
//------------------------------
//We require differents models
const Payment = require('../models/Payment');
const Users = require('../models/UserProfile');
const UserData = require('../models/UserProfile');

//We take route
router.get('/',  async (req, res) =>{ 
  //--------"User Coins"--------------
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 
  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
  console.log('Usuario index es:' + req.user);
  console.log(req.body);
  //------------ListUsers--------------
  const userData = await Users.find().sort({$natural:-1});
  const userDataindex = await Users.find().sort({$natural:-1});
    //We render the variables in the index-view
  res.render('index', {newPayment, userprofile, userData, userDataindex }); 
});

//search  
router.get('/search', function(req, res, next) {
 
  UserData.find({ $text: { $search: req.param('pname')  } } , function(err, docs){   
     res.render('index', {sUsers: docs} );
  });

}); 

module.exports = router;