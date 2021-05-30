// Import Mongoose Module
const mongoose = require('mongoose');
// var now = require('time')(Date);

// Create Match Schema (structure)
const matchSchema = mongoose.Schema({
    teamOne: String,
    teamTwo: String,
    scoreOne: String,
    scoreTwo: String,
    category:String,
    scheduledAt: { type: Date, default: Date.now },
    status: String
});
// Create Model named Match that respect Match Schema
const match = mongoose.model('Match', matchSchema);
// Model is exportable
module.exports = match;