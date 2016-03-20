/**
 * Main application routes
 */

'use strict';

// var errors = require('./components/errors');

module.exports = function(app) {

    app.use('/api/thing', require('./routes/thing.route'));


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router); 

  // // Insert routes below
  // app.use('/api/thing', require('./api/thing'));

  // // All undefined asset or api routes should return a 404
  // // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  // //  .get(errors[404]);

  // // All other routes should redirect to the index.html
  // app.route('/*')
  //   .get(function(req, res) {
  //     res.sendfile(app.get('appPath') + '/index.html');
  //   });
};
