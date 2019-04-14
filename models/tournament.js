const mongoose = require('mongoose');

// Tournament Schema
const TournamentSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    options: {
        type: Number,
        required: true
    },    
    participants: {
        type: Array,
        required: true
    },
    rounds: {
        type: Number,
        required: true
    }
});

const Tournament = module.exports = mongoose.model('Tournament', TournamentSchema);


module.exports.addTournament = function(newTournaments, callback) {
    
    newTournaments.save(callback);
}

module.exports.getTournamentByName = function(name, callback) {
    const query = {name: name}
    Tournament.findOne(query, callback);
}

module.exports.getAllTournaments = function(callback) {
    Tournament.findOne({}, callback);
}