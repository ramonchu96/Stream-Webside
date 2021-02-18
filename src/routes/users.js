const express = require('express');
const { route } = require('.');
const router = express.Router();
const passport = require('passport'); //Library from the matchpassword and validate the user

const User = require('../models/User');


//we render the view signin.hbs

router.get('/signin', (req, res) =>{
  res.render('signin')
});

//when we authenticate the user we redirect this view to the profile view
router.post('/signin', passport.authenticate('local', {
  successRedirect : '/profile',
  failureRedirect : '/signin',
  failureFlash : true,
  
}));



//we render the view signup.hbs
router.get('/signup', (req, res) =>{
  res.render('signup')
});


//we send the information from the user to a "request" (req)
router.post('/signup', async (req, res) =>{
    //we create the request
    const {name, email, password, confirm_password } = req.body;
    console.log(req.body);
    //arrays of errors
    const errors = [];
    //----Parameters---
    if(name.length <= 0){
      console.error("Inserte un nombre");
      errors.push({text : 'Please insert your name'});
    }
    
    if(password != confirm_password){
      errors.push({text :'Password do not match' });
    }
    if(password.length < 4){
      errors.push({text :'Password must be at least 4 characters' });
    }

    if(errors.length > 0){
      //Para que no vuelva a repetirse
      res.render('signup', {errors, name, email, password, confirm_password});
    
    //-------------
    }else {
    //We catch the email repeat
      const emailUser = await User.findOne({email: email});
      if(emailUser){
        req.flash('error_msg', 'The email is already in use');
        res.redirect('/signup');
      }
      //then
      //we create the object user
      const newUser = new User({name, email, password});
      //crypt the password
      newUser.password = await newUser.encryptPassword(password);
      //save the object
      await newUser.save();
      req.flash('success_msg', 'You are registered');

      //we redirect the view
      res.redirect('/signin');
    }
});






module.exports = router;
