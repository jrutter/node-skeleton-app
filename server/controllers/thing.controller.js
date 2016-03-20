/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

// var _ = require('lodash');
var Thing = require('../models/thing.model');


// Get list of things
exports.index = function(req, res) {
      Thing.find(function(err, results) {
            if (err)
                res.send(err);
            res.json(results);
        });
};