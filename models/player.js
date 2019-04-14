const mongoose = require('mongoose');

// Player Schema
const PlayerSchema = mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    sex: {
        type: String
    },
    elo: {
        type: Number,
        required: true
    }
});

const Player = module.exports = mongoose.model('Player', PlayerSchema);


module.exports.addPlayer = function(newPlayer, callback) {
    
    newPlayer.save(callback);
}