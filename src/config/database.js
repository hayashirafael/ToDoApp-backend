const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, {useNewUrlParser: true}) //se conectar a URL e aceitar novas versoes

module.exports = mongoose //na hora de exportar, ira devolver a constante mongoose



