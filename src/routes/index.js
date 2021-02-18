//we insert the differents libraries
const express = require('express');
const { route } = require('.');
const router = express.Router();
//------------------------------
//We require the differents models
const User = require('../models/User');
const Payment = require('../models/Payment');

//We take route
router.get('/',  async (req, res) =>{
  //--------"Only dev test"--------------
    //we find the last user create
  const userprofile = await User.findOne().sort({$natural:-1}).limit(1);
    //we take the user by id
  const user1 = await User.findOne({_id: "5fef7af2ba9c0914ecf94645"}).sort({$natural:-1}).limit(1);
  const user2 = await User.findOne({ _id: "5feceb070e7d78695c7bee69" }).sort({$natural:-1}).limit(1);
  const user3 = await User.findOne({ _id: "5fef7e6715437b2568448dfe" }).sort({$natural:-1}).limit(1);
    //We render the variables in the index-view
  res.render('index', {userprofile, user1,user2,user3 });
  
});

  //we post the route
router.post('/', (req, res)=>{
  //We request the differents pay options
  const {option1,option2,option3,option4} = req.body;
  //we create the object
  const newPayment = new Payment({option1, option2, option3,option4});
  console.log(newPayment);
  //we render the view
  res.send('ok');
  //development phase

})



module.exports = router;

