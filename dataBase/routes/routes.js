var problems = require('./users')

exports.assignRoutes = function (app) {
    app.get('/getPost', problems.getProblems);
    app.post('/savePost', problems.addProblem);
   // app.put('/problems/:userId', problems.updateProblem);
    app.delete('/problem/:userId', problems.deleteProblem);

    // usuario

    app.post('/saveUser', problems.addUser);
    app.post('/verifyUser', problems.verificarUser);
}