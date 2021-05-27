'use strict';

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };
// mongoose.connect(process.env.MONGODB_URI, options);

// // Start the web server
// require('./src/server.js').start(process.env.PORT);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    require('./src/server.js').start(process.env.PORT);
  })
  .catch((error) => {
    console.error('Could not connect to DATABASE: ', error.message);
  });