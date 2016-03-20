
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var thingSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Thing', thingSchema);