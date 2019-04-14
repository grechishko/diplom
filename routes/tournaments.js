const express = require('express');
const router = express.Router();
const Tournament = require('../models/tournament');

router.post('/add', (req, res, next) => {
    let rounds = req.body.participants.length;
    if (rounds % 2 == 1) rounds++;
    rounds -= 1;

    let participants = req.body.participants;
    participants.sort((a, b) => b.elo - a.elo);


    for (let i = 0; i < rounds; i++) {
        
    }


    let newTournament = new Tournament ({
        name: req.body.name,
        type: req.body.type,        
        options: req.body.options,
        participants: req.body.participants
    });




    Tournament.addTournament(newTournament, (err) => {
      if(err) {
        res.json({success: false, msg: 'Произогла ошибка при создании турнира'});
      } else {
        res.json({success: true, msg: 'Турнир создан'});
      }
    });
});

router.get('/list', (req, res) => {
  Tournament.find({}, function(err, list){
    if (err) {
        console.log(err);
        return;
    }    
    res.json(list);
    // console.log(list);
  });
});


module.exports = router;
