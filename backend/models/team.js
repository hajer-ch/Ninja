const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
    teamName:String,
    foundation:String,
    country:String,
    staduim:String
});
const team = mongoose.model('Team', teamSchema);
module.exports = team;