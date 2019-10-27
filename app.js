const express = require('express');
const path = require('path');
const app = express();
const admin = require('firebase-admin');
const port = process.env.PORT || 3000;

var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

// Initialize firebase
const serviceAccount = require("./service-account.json");
console.log(serviceAccount);
const problems = require('./problems.js');
let FieldValue = require('firebase-admin').firestore.FieldValue;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var shuffle = function (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

app.get('/leaderboard', function(req, res) {
    let limit = parseInt(req.query.limit);
    let leaderboardRef = db.collection("games")
                            .where("finished", "==", true)
                            .select("username", "score")
                            .orderBy("score", "desc")
                            .limit(limit);
    let getDoc = leaderboardRef.get()
        .then(querySnapshot => {
            let leaders = querySnapshot.docs.map(doc => doc.data());;
            res.json({
                leaders: leaders
            });
        })
        .catch(err => {
            console.log("Error getting leaderboard: " + err);
            res.json({error: "Error getting leaderboard"});
        });
});

app.post('/game/finish', function (req, res) {
    console.log(req.body);
    let skipped = req.body.skipped;
    let answer = req.body.answer;
    let game_id = req.body.game_id;
    let newGameRef = db.collection('games').doc(game_id);
    let getDoc = newGameRef.get()
        .then(doc => {
            if (!doc.exists) {
                res.json({error: "Error starting game"});
            } else {
                newGameRef.update({
                    finished: true
                })
                .then(function() {
                    let getDoc = newGameRef.get()
                        .then(doc => {
                            if (!doc.exists) {
                                res.json({error: "Error saving game"});
                            } else {
                                let data = doc.data();
                                res.json({
                                    game_id: newGameRef.id,
                                    game_data: doc.data()
                                });
                            }
                        })
                        .catch(err => {
                            console.log("Error saving game: " + err);
                            res.json({error: "Error saving game"});
                        });
                })
                .catch(err => {
                    console.log("Error saving game: " + err);
                    res.json({error: "Error saving game"});
                });
            }
        })
        .catch(err => {
            console.log("Error saving game: " + err);
            res.json({error: "Error saving game"});
        });
});

app.post('/game/next', function (req, res) {
    console.log(req.body);
    let skipped = req.body.skipped;
    let answer = req.body.answer;
    let game_id = req.body.game_id;
    let newGameRef = db.collection('games').doc(game_id);
    let getDoc = newGameRef.get()
        .then(doc => {
            if (!doc.exists) {
                res.json({error: "Error starting game"});
            } else {
                let cur_data = doc.data();
                let problem = problems[cur_data.problem_indices[cur_data.problem_index]];
                let correct = true;
                let score_increment = 0;
                let num_correct_increment = 0;
                if (correct && !skipped) {
                    score_increment = problem.points;
                    num_correct_increment = 1;
                }
                newGameRef.update({
                    score: cur_data.score + score_increment,
                    problem_index: cur_data.problem_index + 1,
                    num_correct: cur_data.num_correct + num_correct_increment
                })
                .then(function() {
                    let getDoc = newGameRef.get()
                        .then(doc => {
                            if (!doc.exists) {
                                res.json({error: "Error saving game"});
                            } else {
                                let data = doc.data();
                                res.json({
                                    game_id: newGameRef.id,
                                    game_data: doc.data(),
                                    current_problem: problems[data.problem_indices[data.problem_index]]
                                });
                            }
                        })
                        .catch(err => {
                            console.log("Error saving game: " + err);
                            res.json({error: "Error saving game"});
                        });
                })
                .catch(err => {
                    console.log("Error saving game: " + err);
                    res.json({error: "Error saving game"});
                });
            }
        })
        .catch(err => {
            console.log("Error saving game: " + err);
            res.json({error: "Error saving game"});
        });
});

app.post('/game', function (req, res) {
    console.log(req.body);
    let username = req.body.username;
    if (!username.match(/^[a-zA-Z0-9_-]{3,15}$/)) {
        res.json({error: "Username invalid"});
        return;
    }
    let indices = shuffle([...Array(problems.length).keys()]);
    let newGameRef = db.collection('games').doc();
    let setDoc = newGameRef.set({
        problem_indices: indices,
        username: username,
        problem_index: 0,
        score: 0,
        start_time: FieldValue.serverTimestamp(),
        num_correct: 0,
        finished: false
    })
    .then(function() {
        let getDoc = newGameRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log("Game does not exist");
                    res.json({error: "Error starting game"});
                } else {
                    let data = doc.data();
                    res.json({
                        game_id: newGameRef.id,
                        game_data: data,
                        current_problem: problems[data.problem_indices[data.problem_index]]
                    });
                }
            })
            .catch(err => {
                console.log("Error starting game: " + err);
                res.json({error: "Error starting game"});
            });
    })
    .catch(err =>  {
        console.log("Error starting game: " + err);
        res.json({error: "Error starting game"});
    });
});

app.use("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

