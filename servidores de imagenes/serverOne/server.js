var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var formidable = require('express-form-data');

var fs = require('fs');

const port = 3000;



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(formidable.parse({ keepExtensions: true}));





app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});





app.post('/sendImg', function (req, res) {

    var img = req.body.img;

    var name = req.body.nombre;

    var base64Image = img.split(';base64,').pop();



    fs.writeFile('img/'+name, base64Image, {encoding: 'base64'}, function(err) {

        console.log('File created');

});



    res.send({"res":"ok"});

});



app.get('/getImg/:nameImg', function (req, res) {

    var path = req.params.nameImg;

    fs.readFile('img/' + path, function (err, content) {

        if (err) {

            console.log("No existe");

            res.end("No existe");

        } else {

            console.log("existe");

            res.end(content);

        }

    });

});



app.listen(port, function () {

    console.log("Hemos iniciado nuestro servidor en el puerto " + port);

});