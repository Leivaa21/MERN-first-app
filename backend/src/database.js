const mongoose = require('mongoose');

const URI = process.env.MONGOURI 
            ? process.env.MONGOURI
            : 'mongodb://localhost/databasetest';

console.log('Conectando a '+ URI);
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('DB is connected');
});