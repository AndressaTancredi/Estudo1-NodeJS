const mongoose = require('mongoose');
//criei uma conexão com o mongo e usa o mongocliente para conectar.
mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports = mongoose;