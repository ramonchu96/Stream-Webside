<<<<<<< HEAD
const express = require('express');
//Librerias express
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

//Autenticacion
const passport = require('passport');
const { initialize } = require('passport');

const bodyParser = require('body-parser');


//Initialization
const app = express();
require('./public/database');
require('./config/passport');



//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir : path.join(app.get('views'),'layouts'),
  partialDir : path.join(app.get('views'),'partials'),
  extname : '.hbs'
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
  secret : 'myapproot',
  resave : true,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Middlewares - bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//MiddleWares - socket.io

/*io.on('connection', (socket) =>{
  socket.on('stream',(image)=>{
      //emitir el evento a todos los sockets conectados
      socket.broadcast.emit('stream', image);
  })
});*/


//Global Variables
/*app.use((req,res,next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
});*/

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/profile'));
app.use(require('./routes/users'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));




//Server is listening
app.listen(app.get('port'),()=>{
  console.log('Server on port', app.get('port'));
});
=======
const express = require('express');
//Librerias express
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

//Autenticacion
const passport = require('passport');
const { initialize } = require('passport');

const bodyParser = require('body-parser');


//Initialization
const app = express();
require('./public/database');
require('./config/passport');



//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir : path.join(app.get('views'),'layouts'),
  partialDir : path.join(app.get('views'),'partials'),
  extname : '.hbs'
}));

app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
  secret : 'myapproot',
  resave : true,
  saveUninitialized : true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Middlewares - bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//MiddleWares - socket.io

/*io.on('connection', (socket) =>{
  socket.on('stream',(image)=>{
      //emitir el evento a todos los sockets conectados
      socket.broadcast.emit('stream', image);
  })
});*/


//Global Variables
/*app.use((req,res,next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
});*/

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/profile'));
app.use(require('./routes/users'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));




//Server is listening
app.listen(app.get('port'),()=>{
  console.log('Server on port', app.get('port'));
});
>>>>>>> 0c60aa6e9923496e666647d167a0316a171e698a
