const mongoose = require('mongoose');
    //Database connection
mongoose.connect('mongodb://localhost/singstreaming-db-app', {

    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));