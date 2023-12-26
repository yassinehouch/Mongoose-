// database.js

require('dotenv').config();
const mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // Your DB server
const database = 'dalila1'; // Your DB name

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const uri = `mongodb://${server}/${database}`;

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const connection = mongoose.connection;

    connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });

    connection.once('open', () => {
      console.log('Database connection successful');
    });
  }
}

module.exports = new Database(); // Export an instance of the Database class