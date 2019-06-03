var problems = require('./users')

exports.assignRoutes = function (app) {
    app.get('/problems', problems.getProblems);
    app.post('/problems', problems.addProblem);
    app.put('/problems/:userId', problems.updateProblem);
    app.delete('/users/:userId', problems.deleteProblem);
}