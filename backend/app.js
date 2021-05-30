const express = require('express');// import express module
const app = express();// create Express application
const mongoose = require('mongoose');// Import Mongoose Module
const bcrypt = require('bcrypt');
// 
// Connect App to MongoDB on PORT 27017 and create DB named ninja
mongoose.connect('mongodb://localhost:27017/ninja', {
  useNewUrlParser: true, useUnifiedTopology: true
});
const Match = require('./models/match'); // import file Match that is created inside the model match.js
const Team = require('./models/team');
const Player = require('./models/player');
const team = require('./models/team');
const User = require('./models/user')



//Security configuration should be put inside the app.js is for security
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});



// import body parser module
const bodyParser = require("body-parser");
const match = require('./models/match');
app.use(bodyParser.json());// prepare response to JSON object
app.use(bodyParser.urlencoded({ extended: true }));//Parse getted body( any content that comes from the FE is called body) from FE to JSON Object









// declaring computer date 


// matches

app.get('/matches', (req, res) => {
  console.log('here in get all matches');
  Match.find((err, docs) => {
    if (err) {
      console.log('pb with db');
    } else {
      res.status(200).json({
        message: 'here all objects',
        matches: docs
      });
    }
  });
})

app.get("/getMatch/:id", (req, res) => {

  console.log('here in get object by id', req.params.id);

  Match.findOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here result getbyId', result);
      res.status(200).json({
        findedMatch: result
      })
    });
})

app.post('/addMatch', (req, res) => {
  console.log('Here in get all matches', req.body);
  // comm with db
  const match = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
    category:req.body.category,
    scheduledAt: req.body.scheduledAt,
    status:req.body.status

  });
  match.save((err, result) => {
    console.log("Error", err);
    console.log("Result", result);

    if (err) {
      res.status(200).json({
        message: "0"
      });
    }
    if (result) {
      res.status(200).json({
        message: "1"
      });
    }

  });


});
app.delete('/deleteById/:id', (req, res) => {
  console.log('her in delete by ID', req.params.id);
  Match.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here result after delete', result);
      res.status(200).json({
        message: 'Match delated with success'
      })
    }
  )
});
app.post('/searchMatch', (req, res) => {
  console.log('Here team one value', req.body.team);
  Match.find({ teamOne: req.body.team }).then(
    (result) => {
      res.status(200).json({
        searchedMatches: result
      })
    });
});
app.put('/updateMatch/:id', (req, res) => {
  console.log('here into update match', req.params.id);
  console.log('here the object', req.body);
})
app.get('/laterMatches', (req, res) => {
  Match.findOne({ status: 'onGoing' }).then(
    (data) => {
      console.log('here result by status onGoing', data);
      res.status(200).json({
        laterMatch: data
      });
    })
   ;
  })

app.get("/getMatchByDate", (req, res) => {  
  Match.findOne().sort({ scheduledAt: -1 }).exec(function (err, doc) {
      if (err) {
        return err
      }
      else {
        console.log("here the finded next match", doc);
        res.status(200).json({
          findedMatch: doc
        })
        }
      });
    })



// teams
app.post('/addTeam', (req, res) => {
  console.log('here in add Team', req.body);
  const team = new Team({
    teamName: req.body.teamName,
    foundation: req.body.foundation,
    country: req.body.country,
    staduim: req.body.staduim
  });
  team.save();
});
app.get('/teams', (req, res) => {
  console.log('here all teams');
  team.find((err, docs) => {
    if (err) {
      console.log('pb with db');
    } else {
      res.status(200).json({
        message: 'here all teams to homes',
        teams: docs
      });
    }
  })
});
app.get("/getTeam/:id", (req, res) => {

  console.log('here in get object by id', req.params.id);

  Team.findOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here team getbyId', result);
      res.status(200).json({
        findedTeam: result
      })
    });
})
app.delete('/deleteTeamById/:id', (req, res) => {
  console.log('here in delete', req.params.id);
  Team.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here data after delete', result);
      res.status(200).json({
        message: 'Team deleted with success'
      })
    }
  )
}
)
app.put("/updateTeam/:id", (req, res) => {
  console.log("Here in update team By ID", req.params.id);
  console.log("Here object", req.body);
  // new instance
  const team = new Team({
    _id:req.body._id,
    teamName: req.body.teamName,
    foundation: req.body.foundation,
    country: req.body.country,
    staduim: req.body.staduim,
  });
  // save instance
  Team.updateOne({_id:req.params.id}, team).then(
    (result)=> {
      res.status(200).json({
        message: 'Updated with success'
      })
    } )
});
// players
app.post('/addPlayer', (req, res) => {
  console.log('here in add Player', req.body);
  const player = new Player({
    playerName: req.body.playerName,
    position: req.body.position,
    age: req.body.age
  });
  player.save();
});
app.get('/players', (req, res) => {
  console.log('here in get all players');
  Player.find((err, docs) => {
    if (err) {
      console.log('pb with db');
    } else {
      res.status(200).json({
        message: 'here all objects',
        players: docs
      });
    }
  });
})
app.get("/getPlayer/:id", (req, res) => {

  console.log('here in get object by id', req.params.id);

  Player.findOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here result getbyId', result);
      res.status(200).json({
        findedPlayer: result
      })
    });
})
app.delete("/delatePlayerById/:id", (req, res) => {
  console.log('here in delate player', req.params.id);
  Player.deleteOne({ _id: req.params.id }).then(
    (result) => {
      console.log('here data after delete', result);
      res.status(200).json({
        message: 'Player deleted with success'
      })
    }
  )
}

)



//signUp
app.post("/signup", (req, res) => {
  console.log('here received user', req.body);
  bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
    console.log("Here into signup", req.body);
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: cryptedPwd,
      address: req.body.address,
      tel: req.body.tel
    });
    user.save((err, result) => {
      console.log("Error", err);
      console.log("Result", result);

      if (err) {
        res.status(200).json({
          message: "0"
        });
      }
      if (result) {
        res.status(200).json({
          message: "1"
        });
      }

    });
  });
});

app.post("/login", (req, res) => {
  console.log("here into login", req.body);
  User.findOne({ email: req.body.email })
    .then((findedUser) => {
      if (!findedUser) {
        res.status(200).json({
          message: "0",
        });
      }
      return bcrypt.compare(req.body.password, findedUser.password);
    }).then((correctUserPwd) => {
      console.log("correctUserPwd", correctUserPwd);
      if (!correctUserPwd) {
        res.status(200).json({
          message: "1",
        });
      }
      User.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          fullName: finalUser.fullName,
          
          // role: finalUser.role,
        };
        res.status(200).json({
          user: user,
          message: "2",
        });
      });
    });
});

module.exports = app;// app is exportable  and should be always at the end of the file 
