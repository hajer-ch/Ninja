const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    playerName:String,
    position:Number,
    age:Number,
    
});
const player = mongoose.model('Player', playerSchema);
module.exports = player;