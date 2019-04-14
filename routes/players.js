const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.post('/add', (req, res, next) => {
    let newPlayer = new Player ({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      elo: req.body.elo
    });
  
    Player.addPlayer(newPlayer, (err, player) => {
      if(err) {
        res.json({success: false, msg: 'Failed to add player'});
      } else {
        res.json({success: true, msg: 'Player added'});
      }
    });
});

router.get('/list', (req, res) => {
  Player.find({}, function(err, list){
    if (err) {
        console.log(err);
        return;
    }
    res.json(list);
  });
});

router.delete('/:id', function(req, res){
  let query = {_id:req.params.id} 

  Player.remove(query, function(err){
    if(err){
      console.log(err);
    }
    res.json('Игрок удален');
  });
});


router.post('/edit/:id', function(req, res){
  let updatedPlayer = {};
  updatedPlayer.firstName = req.body.firstName;
  updatedPlayer.lastName = req.body.lastName;
  updatedPlayer.elo = req.body.elo;

  let query = {_id:req.body._id}

  Player.update(query, updatedPlayer, function(err){
    if(err){
      console.log(err);
      res.json({success: false, msg: 'Failed to update player'});
      return;
    } else {
      res.json({success: true, msg: 'Player updated'});
    }
  });
});









module.exports = router;