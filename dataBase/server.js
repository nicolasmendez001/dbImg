var express= require('express');
var app = express();
var utilsDB = require('./db/utils');

var bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

utilsDB.connectDB(function(err, db) {
    if(err) {
        console.log('Error connecting to DB');
    } else {
        var routes = require('./routes/routes');
        routes.assignRoutes(app);

        app.listen(3000);
        console.log('Server is listening');
    }
});