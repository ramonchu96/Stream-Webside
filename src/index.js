const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000)
//Conexion con el servidor
const server = app.listen(app.get('port'), ()=>{
console.log('Server port on port',app.get('port'));
});
//Conexion con los sockets
const SocketIO = require('socket.io');
const io = SocketIO(server);
//Configuracion sockets.js
require('./sockets')(io);


//Librerias express
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
//Libreria de creacion de caracteres aleatorios
const { v4: uuidv4 } = require('uuid');


//Libreria de Autenticacion
const passport = require('passport');
//Libreria query
const bodyParser = require('body-parser');

//const morgan = require('morgan');
const multer = require('multer');

//Initialization
require('./public/database');
require('./config/passport');



//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir : path.join(app.get('views'),'layouts'),
  partialDir : path.join(app.get('views'),'partials'),
  handlebars: handlebars,
  extname : '.hbs'
}));
app.set('view engine', '.hbs');


//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//------------------MIDDLEWARES-----------
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
//app.use(express.static("public/images"));
//Middlewares - bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//---Images Middleware-----------------
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req,file,cb,filename) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  }
});
app.use(multer({storage: storage}).single('image'));



//Global Variables
app.use((req,res,next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



//Routes
app.use(require('./routes/index'));
app.use(require('./routes/category'));
app.use(require('./routes/profile'));
app.use(require('./routes/users'));
app.use(require('./routes/direct'));





