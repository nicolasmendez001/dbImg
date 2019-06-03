/**
 * Created by siro on 18/07/17.
 */

var usersDB = require('../db/users');

exports.getProblems = function(req, res) {
    usersDB.getUsers(function(err, users) {
        res.send(users);
    });
}

exports.addProblem = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;
    var img = req.body.img;
    var date = req.body.date;
    var long = req.body.long;
    var lat = req.body.lat;


    usersDB.createProblem(name, desc, img, date, long, lat, function(err, result) {
        res.status(201).send();
    });
}

exports.updateProblem = function(req, res) {
    var userId = req.params.userId;
    var desc = req.body.desc;

    usersDB.updateUserDescription(userId, desc, function(err, result) {
        res.send();
    });
}

exports.deleteProblem = function(req, res) {
    var userId = req.params.userId;

    usersDB.deleteProblem(userId, function(err, result) {
        res.status(204).send();
    });
}