<<<<<<< HEAD
const mongoose = require('mongoose');
    //Database connection
mongoose.connect('mongodb://localhost/singstreaming-db-app', {

    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false
})

    .then(db => console.log('DB is connected'))
=======
const mongoose = require('mongoose');
    //Database connection
mongoose.connect('mongodb://localhost/singstreaming-db-app', {

    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false
})

    .then(db => console.log('DB is connected'))
>>>>>>> 0c60aa6e9923496e666647d167a0316a171e698a
    .catch(err => console.error(err));