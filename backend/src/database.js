const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://practica:0EYv8jW4BfCDzr6C@samuel.haplx.mongodb.net/ProyectoFinal?retryWrites=true&w=majority', {
   useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));