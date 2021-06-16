//we require the library
const express = require('express');
const { route } = require('.');
const router = express.Router();
//var multer = require('multer');
const {isAuthenticated} = require('../helpers/auth');

//----------------------------------------
//We require our model
const Payment = require('../models/Payment');
const UserProfile = require('../models/UserProfile');

router.get('/profile', isAuthenticated,  async (req, res) =>{
 
  const newPayment = await Payment.findOne().sort({$natural:-1}).limit(1); 

  //--------"Profile dataUserLogin"--------------
  const userprofile = req.user;
  const profileDetails = await UserProfile.findOne().sort({$natural:-1}).limit(1);
    //We render the variables in the index-view
  res.render('profile', {newPayment, userprofile ,profileDetails});
  
});

router.post("/updateprofile",isAuthenticated, async (req, res) => {
      console.log(req.file);

      var {pname, biography, pop, rock,hiphop,rap,trap,clasica,flamenco} = req.body;

      var profileDetails = new UserProfile({
        pname: pname,
        biography :biography,
        pop : pop,
        rock : rock,
        hiphop : hiphop,
        rap : rap,
        trap : trap,
        clasica : clasica,
        flamenco : flamenco, 
      });
        profileDetails.filename = req.file.filename;
        profileDetails.path = '/img/uploads/' + req.file.filename;
        profileDetails.originalname = req.file.originalname;
        profileDetails.mimetype = req.file.mimetype;
        profileDetails.size = req.file.size;

      console.log(profileDetails);
      await profileDetails.save();

  res.redirect('/profile');
});   




module.exports = router;
