const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isAuthenticated} = require('../helpers/auth');
//Library from the matchpassword and validate the user
//We require the differents models
const Payment = require('../models/Payment');
const User = require('../models/User');
//we render the view signin.hbs

router.get('/signin', (req, res) =>{
  res.render('signin')
});

//when we authenticate the user we redirect this view to the profile view
router.post('/signin', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/signin');
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log(user);
      return res.redirect('/');;
    });

  })(req, res, next);
});

//we render the view signup.hbs
router.get('/signup', (req, res) =>{
  res.render('signup')
});


//we send the information from the user to a "request" (req)
router.post('/signup', async (req, res, next) =>{
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
      res.render('signup', {errors, name, email, password, confirm_password, user});
    
    //-------------
    }else {
    //We catch the email repeat
      const emailUser = await User.findOne({email: email});
      if(emailUser){
        req.flash('error_msg', 'The email is already in use');
        res.redirect('/signup');
      }
      //then
      //we create the object newUser
      const newUser = new User({name, email, password});
      //crypt the password
      newUser.password = await newUser.encryptPassword(password);
        //We joint the ID user with the object newUser
      
      //save the object
      await newUser.save();
      req.flash('success_msg', 'You are registered');

      //we redirect the view
      res.redirect('/profile');
    }
});

  

 //we render the view to logout.hbs
router.get('/logout', (req, res) =>{
  req.logOut();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/signin");
});



//** MENU ROUTE COINS***/

  
//we post the route 300
router.post('/300',isAuthenticated, async (req, res)=>{
  
  var i = 300
  //we create differents kind of payment
  
  var newPayment1 = new Payment({
    money : i,
  });
    const money1 = req.money
    console.log('Moneda: '+money1);
    console.log('pago guardado: '+newPayment1);
    await newPayment1.save();
    


  req.flash('success_msg', 'You already pay');
  //we redirect the view
  res.redirect('/');

});

//we post the route 500
router.post('/500',isAuthenticated, async (req, res)=>{

  var i = 500;
//we create differents kind of payment

var newPayment2 = new Payment({
  money : i,
});


  console.log(newPayment2);
  await newPayment2.save();



req.flash('success_msg', 'You already pay');
//we redirect the view
res.redirect('/');

});

//we post the route 1000
router.post('/1000',isAuthenticated, async (req, res)=>{

var i = 1000;
//we create differents kind of payment

var newPayment3 = new Payment({
money : i,
});


console.log(newPayment3);
await newPayment3.save();



req.flash('success_msg', 'You already pay');
//we redirect the view
res.redirect('/');

});

//we post the route 1000
router.post('/1500',isAuthenticated, async (req, res)=>{

  var i = 1500;
//we create differents kind of payment

var newPayment4 = new Payment({
  money : i,
});


  console.log(newPayment4);
  await newPayment4.save();



req.flash('success_msg', 'You already pay');
//we redirect the view
res.redirect('/');

});




module.exports = router;
