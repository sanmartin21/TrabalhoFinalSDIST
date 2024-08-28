const mongoose = require('mongoose');
const url = process.env.DATABASE_URL || 'mongodb://localhost:27017';

mongoose.connect(url)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Não foi possível se conectar ao MongoDB'));