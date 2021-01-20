//we require the library
const express = require('express');
const { route } = require('.');
const router = express.Router();
//----------------------------------------
//We require our model
const User = require('../models/User');

//We create the route to render the view
router.get('/profile', async (req, res) =>{
  const userdata = await User.findOne().sort({$natural:-1}).limit(1);
 //We render the view
  res.render('profile', {userdata});
});




module.exports = router;
