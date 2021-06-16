const helpers = {};

helpers.isAuthenticated = (req,res, next) =>{

  if(req.isAuthenticated()){
    return next();

  }
  req.flash('erro_msg', 'Not Authorized');
  res.redirect('/signin');

};
module.exports = helpers;